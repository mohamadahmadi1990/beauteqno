import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="glass-card mx-auto max-w-xl rounded-[2rem] border border-white/10 p-10 text-center">
        <p className="section-kicker">404</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-white">
          This page drifted out of the Beauteqno experience.
        </h1>
        <p className="mt-4 text-sm leading-7 text-white/66">
          Head back to the landing page to explore the AI beauty-tech platform and
          join the event demo list.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
