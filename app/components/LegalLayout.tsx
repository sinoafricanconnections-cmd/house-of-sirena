type LegalLayoutProps = {
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

import Link from "next/link";

export default function LegalLayout({
  label,
  title,
  intro,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#66737A]">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-36 pb-20 text-center">

        <p className="uppercase tracking-[0.5em] text-xs text-[#6F9EA3] mb-8">
          {label}
        </p>

        <h1 className="font-heading text-6xl md:text-8xl leading-tight text-[#4F7278]">
          {title}
        </h1>

        {intro && (
          <p className="max-w-2xl mx-auto mt-10 leading-8 text-[#66737A]">
            {intro}
          </p>
        )}

        <p className="mt-8 text-xs tracking-[0.3em] uppercase text-[#66737A]/70">
          Last updated July 2026
        </p>

      </section>


      {/* Legal Navigation */}
      <nav className="max-w-5xl mx-auto px-8 pb-20">

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 border-y border-[#D8D4CF] py-6 text-xs uppercase tracking-[0.25em]">

          <Link
            href="/terms"
            className="hover:text-[#4F7278] transition-colors"
          >
            Terms
          </Link>

          <Link
            href="/privacy"
            className="hover:text-[#4F7278] transition-colors"
          >
            Privacy
          </Link>

          <Link
            href="/cookies"
            className="hover:text-[#4F7278] transition-colors"
          >
            Cookies
          </Link>

          <Link
            href="/shipping"
            className="hover:text-[#4F7278] transition-colors"
          >
            Shipping
          </Link>

          <Link
            href="/returns"
            className="hover:text-[#4F7278] transition-colors"
          >
            Returns
          </Link>

        </div>

      </nav>


      {/* Content */}
      <section className="max-w-3xl mx-auto px-8 pb-32">

        <div className="space-y-16 text-[#66737A]">

          {children}

        </div>

      </section>

    </main>
  );
}