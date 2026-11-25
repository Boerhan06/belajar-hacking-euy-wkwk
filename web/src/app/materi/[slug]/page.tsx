import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getAllDraftFiles, getMarkdownTopic } from '@/lib/markdown';
import { MateriReaderClient } from '@/components/MateriReaderClient';

export function generateStaticParams() {
  return getAllDraftFiles().map((file) => ({
    slug: file.slug,
  }));
}

async function MateriDetailContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const topic = getMarkdownTopic(decodedSlug);

  if (!topic) {
    notFound();
  }

  return <MateriReaderClient topic={topic} />;
}

export default function MateriDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div className="p-8 text-sm font-bold text-[#6E6259]">Memuat modul pembelajaran...</div>}>
      <MateriDetailContent params={params} />
    </Suspense>
  );
}
