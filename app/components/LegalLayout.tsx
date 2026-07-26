type LegalLayoutProps = {
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export default function LegalLayout({
  label,
  title,
  intro,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#4F7278]">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-36 pb-24 text-center">

        <p className="uppercase tracking-[0.5em] text-xs text-[#6F9EA3] mb-8">
          {label}
        </p>

        <h1 className="font-heading text-6xl md:text-8xl leading-tight text-[#4F7278]">
          {title}
        </h1>

        {intro && (
          <p className="max-w-2xl mx-auto mt-10 leading-8 text-[#4F7278]/80">
            {intro}
          </p>
        )}

      </section>


      {/* Content */}
      <section className="max-w-3xl mx-auto px-8 pb-32">

        <div className="space-y-16 text-[#4F7278]">

          {children}

        </div>

      </section>

    </main>
  );
}