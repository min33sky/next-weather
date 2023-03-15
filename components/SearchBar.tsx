'use client';

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Props {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ keyword, setKeyword }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('준비중...');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center justify-between gap-3 rounded-full border bg-slate-100 p-2"
    >
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      <input
        type="text"
        className="flex-1 bg-transparent text-lg outline-none"
        placeholder="도시를 입력하세요... (예. Seoul)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </form>
  );
}
