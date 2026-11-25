import React, { Suspense } from 'react';
import { getAllDraftFiles } from '@/lib/markdown';
import { MateriListClient } from '@/components/MateriListClient';

export default function MateriPage() {
  const allFiles = getAllDraftFiles();

  return (
    <Suspense fallback={<div className="p-8 text-sm font-bold text-[#6E6259]">Memuat daftar materi...</div>}>
      <MateriListClient allFiles={allFiles} />
    </Suspense>
  );
}
