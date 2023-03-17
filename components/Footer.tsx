export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full py-4 px-2 text-slate-500 ">
      <div className="mx-auto flex max-w-2xl items-center justify-center">
        <a
          aria-label="Go to Github repository"
          title="Go to Github repository"
          href="https://github.com/min33sky/next-weather"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition hover:-translate-y-[2px] hover:text-slate-700"
        >
          Github
        </a>
      </div>
    </footer>
  );
}
