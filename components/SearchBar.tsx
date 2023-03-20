'use client';

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Props {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  resetKeyword?: () => void; // TODO: 구현
}

export default function SearchBar({ keyword, setKeyword }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('준비중...');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-32 flex w-full max-w-sm items-center justify-between gap-3 rounded-full border bg-slate-100 p-2 shadow-md focus-within:ring-2 focus-within:ring-indigo-200 hover:ring-2 hover:ring-indigo-200 "
    >
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      <input
        type="text"
        aria-label="Search City"
        title="도시를 입력하세요... (예. Seoul)"
        className="flex-1 bg-transparent pr-4 text-lg outline-none placeholder:text-slate-300"
        placeholder="도시를 입력하세요... (예. Seoul)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      {/* TODO: X 아이콘 및 기능 구현 */}
    </form>
  );
}
