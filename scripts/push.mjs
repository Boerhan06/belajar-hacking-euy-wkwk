import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const rootDir = resolve(import.meta.dirname, '..');

function run(cmd, { allowFail = false } = {}) {
  try {
    return execSync(cmd, { cwd: rootDir, stdio: 'inherit' });
  } catch (err) {
    if (!allowFail) process.exit(err.status ?? 1);
    return null;
  }
}

function output(cmd) {
  try {
    return execSync(cmd, { cwd: rootDir, encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
}

if (!existsSync(resolve(rootDir, '.git'))) {
  console.log('📦 Menginisialisasi repository Git di root project...');
  run('git init -b main');
}

const commitMsg =
  process.argv.slice(2).join(' ').trim() ||
  `Update kursus & materi (${new Date().toLocaleDateString('id-ID')})`;

console.log('🔍 Menyiapkan perubahan...');
run('git add .');

const status = output('git status --porcelain');
if (status) {
  console.log(`📝 Commit perubahan: "${commitMsg}"`);
  run(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);
} else {
  console.log('✅ Tidak ada perubahan baru untuk di-commit.');
}

const remoteUrl = output('git remote get-url origin');
if (!remoteUrl) {
  console.log('\n⚠️  Remote GitHub "origin" belum diatur!');
  console.log('   Jalankan perintah berikut sekali saja untuk menghubungkan ke repo GitHub kamu:\n');
  console.log('   git remote add origin https://github.com/USERNAME/NAMA-REPO.git');
  console.log('   npm run push\n');
  process.exit(0);
}

const branch = output('git branch --show-current') || 'main';
console.log(`🚀 Mengirim (push) ke GitHub (${remoteUrl} -> branch ${branch})...`);
run(`git push -u origin ${branch}`);
console.log('🎉 Berhasil push ke GitHub!');
