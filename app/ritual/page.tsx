import Link from "next/link";
import Image from "next/image";

export default function RitualPage() {
  return (
    <main className="bg-[var(--surface-primary)] text-[var(--text-primary)]">

      {/* ====================================================== */}
{/* HERO */}
{/* ====================================================== */}

<section className="relative h-screen overflow-hidden">

  {/* Hero Image */}

  <Image
    src="/images/ritual-hero.png"
    alt="House of Sirena Ritual"
    fill
    priority
    className="object-cover object-right"
  />

  {/* Soft Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(248,247,244,0.90)] via-[rgba(248,247,244,0.55)] to-transparent" />

  {/* Hero Content */}

  <div className="relative z-10 flex h-full items-center">

    <div className="mx-auto w-full max-w-7xl px-8">

      <div className="max-w-xl">

        <p className="mb-8 uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)]">
          House of Sirena
        </p>

        <h1 className="font-heading text-6xl md:text-8xl leading-none">
          Ritual
        </h1>

        <p className="mt-10 text-lg leading-9 text-[var(--text-secondary)]">
          Every creation becomes part of a single ritual of beauty—
          an experience to be worn with intention, presence and confidence.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* ====================================================== */}
      {/* INTRODUCTION */}
      {/* ====================================================== */}

      <section
        className="px-8 py-40"
        style={{
          background:
            "linear-gradient(180deg,#F8F7F4 0%,#F5F1EB 100%)",
        }}
      >

        <div className="max-w-3xl mx-auto text-center">

          <p className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)] mb-8">
            Ritual
          </p>

          <h2 className="font-heading text-5xl md:text-6xl leading-tight mb-10">
            Beauty begins
            <br />
            long before
            <br />
            the mirror.
          </h2>

          <p className="text-lg leading-9 text-[var(--text-secondary)]">
            Ritual is an invitation to slow down.
            Every House of Sirena creation is designed to accompany
            a single moment of beauty, transforming preparation into
            an experience of elegance and intention.
          </p>

        </div>

      </section>
      {/* ====================================================== */}
      {/* PREPARATION */}
      {/* ====================================================== */}

      <section
        className="px-8 py-44"
        style={{
          background:
            "linear-gradient(180deg,#F5F1EB 0%,#F8F7F4 100%)",
        }}
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-20 items-center">

          {/* Image */}

          <div className="h-[620px] rounded-[36px] bg-[var(--surface-secondary)] flex items-center justify-center">

            <span className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)]">
              Preparation Image
            </span>

          </div>

          {/* Copy */}

          <div className="max-w-md">

            <p className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)] mb-6">
              Preparation
            </p>

            <h2 className="font-heading text-5xl md:text-6xl leading-tight mb-8">
              The beginning
              <br />
              of the ritual.
            </h2>

            <p className="leading-9 text-lg text-[var(--text-secondary)]">
              Begin with clean, dry eyelids and prepare your natural
              lashes. Find a quiet moment, good lighting and allow
              yourself the time to enjoy the experience.
            </p>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* APPLICATION */}
      {/* ====================================================== */}

      <section
        className="px-8 py-44"
        style={{
          background:
            "linear-gradient(180deg,#F8F7F4 0%,#F6F2EC 100%)",
        }}
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-20 items-center">

          {/* Copy */}

          <div className="max-w-md">

            <p className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)] mb-6">
              Application
            </p>

            <h2 className="font-heading text-5xl md:text-6xl leading-tight mb-10">
              Every detail
              <br />
              matters.
            </h2>

            <div className="space-y-8">

              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-secondary)] mb-2">
                  01
                </p>
                <p className="leading-8 text-[var(--text-secondary)]">
                  Measure the lash against your natural lash line.
                </p>
              </div>

              <div className="w-16 border-t border-[var(--border-light)]" />

              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-secondary)] mb-2">
                  02
                </p>
                <p className="leading-8 text-[var(--text-secondary)]">
                  Trim from the outer edge if required.
                </p>
              </div>

              <div className="w-16 border-t border-[var(--border-light)]" />

              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-secondary)] mb-2">
                  03
                </p>
                <p className="leading-8 text-[var(--text-secondary)]">
                  Apply a fine line of adhesive.
                </p>
              </div>

              <div className="w-16 border-t border-[var(--border-light)]" />

              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-secondary)] mb-2">
                  04
                </p>
                <p className="leading-8 text-[var(--text-secondary)]">
                  Allow the adhesive to become tacky.
                </p>
              </div>

              <div className="w-16 border-t border-[var(--border-light)]" />

              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-secondary)] mb-2">
                  05
                </p>
                <p className="leading-8 text-[var(--text-secondary)]">
                  Place the lash gently and adjust until comfortable.
                </p>
              </div>

            </div>

          </div>

          {/* Image */}

          <div className="h-[620px] rounded-[36px] bg-[var(--surface-secondary)] flex items-center justify-center">

            <span className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)]">
              Application Image
            </span>

          </div>

        </div>

      </section>


      {/* ====================================================== */}
      {/* THE MOMENT */}
      {/* ====================================================== */}

      <section
        className="px-8 py-56"
        style={{
          background:
            "linear-gradient(180deg,#F6F2EC 0%,#F8F7F4 100%)",
        }}
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)] mb-8">
            The Moment
          </p>

          <h2 className="font-heading text-6xl md:text-8xl leading-[0.95] mb-12">
            Beauty is
            <br />
            experienced,
            <br />
            not rushed.
          </h2>

          <p className="max-w-2xl mx-auto text-lg leading-9 text-[var(--text-secondary)]">
            Every House of Sirena creation accompanies a single
            ritual of beauty. Wear it with confidence, elegance
            and intention, allowing the moment to become entirely
            your own.
          </p>

        </div>

      </section>



      {/* ====================================================== */}
      {/* CARE */}
      {/* ====================================================== */}

      <section
        className="px-8 py-44"
        style={{
          background:
            "linear-gradient(180deg,#F8F7F4 0%,#F5F1EB 100%)",
        }}
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-20 items-center">

          {/* Image */}

          <div className="h-[620px] rounded-[36px] bg-[var(--surface-secondary)] flex items-center justify-center">

            <span className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)]">
              Care Image
            </span>

          </div>

          {/* Copy */}

          <div className="max-w-md">

            <p className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)] mb-6">
              Care
            </p>

            <h2 className="font-heading text-5xl md:text-6xl leading-tight mb-8">
              Every ritual
              <br />
              finds its close.
            </h2>

            <p className="leading-9 text-lg text-[var(--text-secondary)]">
              Gently remove the lashes from the outer corner inward,
              allowing the experience to conclude with the same care
              and intention with which it began.
            </p>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* QUESTIONS */}
      {/* ====================================================== */}

      <section
        className="px-8 py-40"
        style={{
          background:
            "linear-gradient(180deg,#F5F1EB 0%,#F8F7F4 100%)",
        }}
      >

        <div className="max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.45em] text-xs text-center text-[var(--text-secondary)] mb-8">
            Questions
          </p>

          <h2 className="font-heading text-5xl text-center mb-20">
            Everything you need to know.
          </h2>

          <div className="space-y-14">

            <div className="border-b border-[var(--border-light)] pb-10">

              <h3 className="font-heading text-2xl mb-4">
                Do I need adhesive?
              </h3>

              <p className="leading-8 text-[var(--text-secondary)]">
                Yes. House of Sirena creations are applied using your preferred lash adhesive.
              </p>

            </div>

            <div className="border-b border-[var(--border-light)] pb-10">

              <h3 className="font-heading text-2xl mb-4">
                Can the lashes be trimmed?
              </h3>

              <p className="leading-8 text-[var(--text-secondary)]">
                If required, trim from the outer edge to achieve your preferred fit.
              </p>

            </div>

            <div className="border-b border-[var(--border-light)] pb-10">

              <h3 className="font-heading text-2xl mb-4">
                How many times are they intended to be worn?
              </h3>

              <p className="leading-8 text-[var(--text-secondary)]">
                Every House of Sirena creation is crafted to become part of a single ritual of beauty.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ====================================================== */}
      {/* CONTINUE EXPLORING */}
      {/* ====================================================== */}

      <section className="bg-[var(--surface-primary)] px-8 py-44">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)] mb-6">
              Continue Exploring
            </p>

            <h2 className="font-heading text-5xl md:text-6xl">
              Continue your journey.
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            <Link href="/collections" className="group">

              <article>

                <div className="h-[520px] rounded-[36px] bg-[var(--surface-secondary)] flex items-center justify-center overflow-hidden">

                  <span className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)]">
                    Collection Image
                  </span>

                </div>

                <div className="pt-8">

                  <p className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)] mb-4">
                    Collection
                  </p>

                  <h3 className="font-heading text-5xl transition-opacity duration-500 group-hover:opacity-70">
                    The Pearl Collection
                  </h3>

                </div>

              </article>

            </Link>

            <Link href="/journal" className="group">

              <article>

                <div className="h-[520px] rounded-[36px] bg-[var(--surface-secondary)] flex items-center justify-center overflow-hidden">

                  <span className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)]">
                    Journal Image
                  </span>

                </div>

                <div className="pt-8">

                  <p className="uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)] mb-4">
                    Journal
                  </p>

                  <h3 className="font-heading text-5xl transition-opacity duration-500 group-hover:opacity-70">
                    Perspectives
                  </h3>

                </div>

              </article>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}