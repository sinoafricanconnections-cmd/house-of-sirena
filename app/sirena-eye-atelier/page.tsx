import Link from "next/link";

export default function SirenaEyeAtelierPage() {
  return (
    <main
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* HERO */}

      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="max-w-4xl text-center">

          <p className="font-body uppercase tracking-[0.35em] text-sm mb-6 text-[var(--text-secondary)]">
            House of Sirena
          </p>

          <h1 className="font-heading text-6xl md:text-8xl font-light mb-8">
            The Sirena Eye Atelier
          </h1>

          <p className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-[var(--text-secondary)] mb-12">
            Discover the architecture of your eyes and the art of
            lash design through a private consultation inspired by
            beauty, education, and quiet luxury.
          </p>

          <Link
            href="/sirena-eye-atelier/upload"
            className="inline-flex items-center justify-center px-8 py-4 border border-[var(--champagne)] hover:bg-[var(--champagne)] hover:text-white transition-all duration-500"
          >
            Begin Consultation
          </Link>

        </div>

      </section>

      {/* DISCOVERY */}

      <section
        className="py-32 px-6"
        style={{
          backgroundColor: "var(--surface-secondary)",
        }}
      >
        <div className="max-w-6xl mx-auto">

          <p className="font-body uppercase tracking-[0.3em] text-sm mb-4 text-center text-[var(--text-secondary)]">
            What You Will Discover
          </p>

          <h2 className="font-heading text-5xl text-center mb-20">
            A Different Approach To Beauty
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="text-center">
              <div className="font-heading text-5xl mb-6 text-[var(--champagne)]">
                01
              </div>

              <h3 className="font-heading text-3xl mb-4">
                Eye Discovery
              </h3>

              <p className="font-body leading-relaxed text-[var(--text-secondary)]">
                Learn about your natural eye shape, proportions,
                and features through a personalised assessment.
              </p>
            </div>

            <div className="text-center">
              <div className="font-heading text-5xl mb-6 text-[var(--champagne)]">
                02
              </div>

              <h3 className="font-heading text-3xl mb-4">
                Lash Education
              </h3>

              <p className="font-body leading-relaxed text-[var(--text-secondary)]">
                Understand how lash length, volume, and mapping
                influence the appearance of the eyes.
              </p>
            </div>

            <div className="text-center">
              <div className="font-heading text-5xl mb-6 text-[var(--champagne)]">
                03
              </div>

              <h3 className="font-heading text-3xl mb-4">
                Sirena Profile
              </h3>

              <p className="font-body leading-relaxed text-[var(--text-secondary)]">
                Receive tailored recommendations designed around
                your features and aesthetic preferences.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}