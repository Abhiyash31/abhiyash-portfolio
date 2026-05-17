import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
        404
      </p>
      <h1 className="mt-6 font-display text-5xl tracking-tight text-text sm:text-7xl">
        Nothing here.
      </h1>
      <p className="mt-5 max-w-sm text-muted">
        This page doesn’t exist — but the work does.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg"
      >
        Back home
      </Link>
    </section>
  );
}
