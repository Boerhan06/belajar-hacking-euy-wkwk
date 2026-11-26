import fs from 'node:fs';
import path from 'node:path';

export interface HeadingItem {
  level: number;
  text: string;
  id: string;
}

export interface MarkdownTopic {
  slug: string;
  fileName: string;
  title: string;
  content: string;
  headings: HeadingItem[];
  linkCount: number;
}

const DRAFT_DIR = path.resolve(process.cwd(), '..', 'Infosec_Reference', 'Draft');
const IOT_DIR = path.resolve(process.cwd(), 'src', 'content', 'iot');

function sanitizeSlug(slug: string): string {
  return slug.replace(/[^a-zA-Z0-9_&\-\s]/g, '');
}

export function getMarkdownTopic(slug: string): MarkdownTopic | null {
  const cleanSlug = sanitizeSlug(slug);
  const candidates: string[] = [
    path.join(IOT_DIR, `${cleanSlug}.md`),
    path.join(IOT_DIR, cleanSlug),
    path.join(DRAFT_DIR, `${cleanSlug}.md`),
    path.join(DRAFT_DIR, cleanSlug),
  ];

  let targetPath: string | null = null;
  for (const candidate of candidates) {
    const resolved = path.resolve(candidate);
    if (
      (resolved.startsWith(IOT_DIR) || resolved.startsWith(DRAFT_DIR)) &&
      fs.existsSync(resolved) &&
      fs.statSync(resolved).isFile()
    ) {
      targetPath = resolved;
      break;
    }
  }

  if (!targetPath) return null;

  const raw = fs.readFileSync(targetPath, 'utf8');
  const lines = raw.split(/\r?\n/);

  let title = cleanSlug.replace(/_/g, ' ');
  const headings: HeadingItem[] = [];
  let linkCount = 0;

  for (const line of lines) {
    const hMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (hMatch) {
      const level = hMatch[1].length;
      const rawText = hMatch[2]
        .replace(/<a[^>]*><\/a>/g, '')
        .replace(/<[^>]+>/g, '')
        .trim();
      if (level === 1 && title === cleanSlug.replace(/_/g, ' ')) {
        title = rawText;
      }
      if (rawText && !rawText.toLowerCase().includes('table of contents')) {
        const id = rawText
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-');
        headings.push({ level, text: rawText, id });
      }
    }
    const links = line.match(/https?:\/\/[^\s)]+/g);
    if (links) linkCount += links.length;
  }

  // Strip redundant generated Table of Contents block and raw HTML anchor tags
  const cleanedContent = raw
    .replace(/##\s*Table of Contents[\s\S]*?<!--\s*nav:toc:end\s*-->/gi, '')
    .replace(/<!--\s*nav:toc:start\s*-->[\s\S]*?<!--\s*nav:toc:end\s*-->/gi, '')
    .replace(/<a\s+id="[^"]*"(\s+name="[^"]*")?\s*><\/a>/gi, '')
    .replace(/<!--\s*nav:[^>]*-->/g, '')
    .trim();

  return {
    slug: cleanSlug,
    fileName: path.basename(targetPath),
    title,
    content: cleanedContent,
    headings: headings.slice(0, 30),
    linkCount,
  };
}

export function getAllDraftFiles(): { slug: string; title: string; fileName: string }[] {
  const results: { slug: string; title: string; fileName: string }[] = [];

  // 1. InfoSec Drafts
  if (fs.existsSync(DRAFT_DIR)) {
    const entries = fs.readdirSync(DRAFT_DIR, { withFileTypes: true });
    for (const entry of entries) {
      if (
        entry.isFile() &&
        entry.name.endsWith('.md') &&
        !['README.md', '_sidebar.md', 'Subject_Index.md', 'help.md', 'index.md'].includes(entry.name)
      ) {
        const slug = entry.name.replace(/\.md$/, '');
        results.push({
          slug,
          fileName: entry.name,
          title: slug.replace(/_/g, ' '),
        });
      }
    }
  }

  // 2. IoT Module Files
  if (fs.existsSync(IOT_DIR)) {
    const iotEntries = fs.readdirSync(IOT_DIR, { withFileTypes: true });
    for (const entry of iotEntries) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        const slug = entry.name.replace(/\.md$/, '');
        results.push({
          slug,
          fileName: entry.name,
          title: slug.replace(/_/g, ' '),
        });
      }
    }
  }

  return results.sort((a, b) => a.title.localeCompare(b.title));
}
