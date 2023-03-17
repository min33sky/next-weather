import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-brand-600 py-4 px-2 text-slate-100 ">
      <div className="mx-auto flex max-w-2xl items-center justify-center">
        <a
          aria-label="Go to Github repository"
          title="Go to Github repository"
          href="https://github.com/min33sky/next-weather"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:-translate-y-1 hover:text-slate-200"
        >
          Github
        </a>
      </div>
    </footer>
  );
}
