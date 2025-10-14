import Link from "next/link";

export default function RootNotFound() {
  const locale = "en";
  const title = "Page not found";
  const subtitle = "The page you’re looking for doesn’t exist.";
  const cta = "Back to Home";

  return (
    <section className="relative isolate min-h-[70vh] bg-brand-gradient">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="w-full rounded-3xl border border-[var(--k-border)]/60 bg-white/5 p-10 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="mx-auto mb-5 inline-flex h-12 min-w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 text-sm text-white/80">
            404
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
          <p className="mx-auto mt-3 max-w-xl text-base sm:text-lg text-white/70">{subtitle}</p>
          <div className="mt-8 flex items-center justify-center">
            <Link
              href={`/${locale}`}
              aria-label={cta}
              className="inline-flex items-center justify-center text-center rounded-2xl border border-[var(--k-border)]/60 bg-white text-black px-6 py-3 text-sm md:text-base font-medium shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


