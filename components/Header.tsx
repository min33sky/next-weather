import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-brand-600 py-4 px-2 text-slate-100">
      <div className="mx-auto w-full max-w-2xl font-bold">오늘의 날씨</div>
    </header>
  );
}
