import Link from "next/link";

export function PortfolioCTA() {
  return (
    <section className="mt-20 rounded-3xl bg-primary px-8 py-14 text-center">
      <h2 className="text-3xl font-semibold text-card mb-3">
        Like what you see?
      </h2>
      <p className="text-card/80 max-w-xl mx-auto mb-8 text-lg">
        Get in touch and let&apos;s talk about bringing your idea to life. Stuart works
        across Ireland and is happy to discuss any project, big or small.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-accent px-8 py-3 font-semibold text-card transition-opacity hover:opacity-90"
        >
          Get in Touch
        </Link>
        <Link
          href="/portfolio"
          className="inline-block rounded-full border border-card/40 px-8 py-3 font-semibold text-card transition-colors hover:bg-card/10"
        >
          Back to Portfolio
        </Link>
      </div>
    </section>
  );
}
