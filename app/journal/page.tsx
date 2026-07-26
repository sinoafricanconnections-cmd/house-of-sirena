import Image from "next/image";

export default function JournalPage() {
  return (
    <main className="bg-[var(--surface-primary)] text-[var(--text-primary)]">

      {/* ======================================================
          JOURNAL HERO
      ====================================================== */}

      <section className="py-48 px-8 text-center">
        <p className="uppercase tracking-[0.5em] text-xs text-[var(--text-secondary)] mb-10">
          The Journal
        </p>

        <h1 className="font-heading text-6xl md:text-8xl font-light leading-tight">
          Notes from
          <br />
          the House
        </h1>

        <p className="max-w-2xl mx-auto mt-12 text-lg leading-9 text-[var(--text-secondary)]">
          Perspectives on beauty, elegance and the art of self-expression.
        </p>
      </section>

      {/* ======================================================
          FEATURED EDITORIAL
      ====================================================== */}
<section className="px-8 pb-32">
  <div className="max-w-7xl mx-auto">

    <div className="relative h-[800px] rounded-[20px] overflow-hidden">

           <Image
  src="/images/journalhero.png"
  alt="Morning by the sea"
  fill
  priority
  className="object-cover object-center"
/>

          </div>

        <div className="max-w-3xl mt-12">

            <p className="uppercase tracking-[0.5em] text-xs text-[var(--text-secondary)] mb-8">
              Featured Perspective
            </p>

            <h2 className="font-heading text-5xl md:text-7xl font-light leading-tight">
              The Beginning
              <br />
              of Sirena
            </h2>

            <p className="mt-8 text-lg leading-9 text-[var(--text-secondary)]">
              Discover the inspiration, philosophy and vision behind
              House of Sirena.
            </p>

            <button className="mt-10 uppercase tracking-[0.35em] text-xs border-b border-[var(--champagne-gold)] pb-3">
              Read Perspective
            </button>

          </div>
        </div>

      </section>

      {/* ======================================================
          JOURNAL CARDS
      ====================================================== */}

      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10">

            <article
              className="
                h-[420px]
                rounded-[20px]
                bg-[var(--ivory-sand)]
                p-12
                flex
                flex-col
                justify-end
                transition-opacity
                duration-700
                hover:opacity-90
              "
            >
              <p className="uppercase tracking-[0.4em] text-xs text-[var(--text-secondary)]">
                Beauty
              </p>

              <h3 className="font-heading text-5xl font-light leading-tight mt-8">
                The Language
                <br />
                of Light
              </h3>
            </article>

            <article
              className="
                h-[420px]
                rounded-[20px]
                bg-[var(--pearlescent-lagoon)]
                text-white
                p-12
                flex
                flex-col
                justify-end
                transition-opacity
                duration-700
                hover:opacity-90
              "
            >
              <p className="uppercase tracking-[0.4em] text-xs text-white/80">
                Perspective
              </p>

              <h3 className="font-heading text-5xl font-light leading-tight mt-8">
                The Ritual
                <br />
                of Self-Expression
              </h3>
            </article>

          </div>

        </div>
      </section>

      {/* ======================================================
          CLOSING STATEMENT
      ====================================================== */}

      <section className="py-48 px-8 text-center">

        <h2 className="font-heading text-5xl md:text-7xl font-light leading-tight">
          Enter the world
          <br />
          of House of Sirena
        </h2>

        <p className="max-w-xl mx-auto mt-10 leading-9 text-[var(--text-secondary)]">
          A continued exploration of beauty,
          elegance and inspiration.
        </p>

      </section>

    </main>
  );
}
