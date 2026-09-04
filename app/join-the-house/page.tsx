"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function JoinTheHousePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  }

  return (
    <main className="bg-[var(--surface-primary)] text-[var(--text-primary)]">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="py-32 md:py-36 px-8 text-center">

        <p className="uppercase tracking-[0.5em] text-xs text-[var(--text-secondary)] mb-10">
          House of Sirena
        </p>

        <h1 className="font-heading text-6xl md:text-8xl font-light leading-tight">
          The Pearl Collection
          <br />
          <span className="italic">The first chapter is coming.</span>
        </h1>

        <p className="mt-10 uppercase tracking-[0.4em] text-xs text-[var(--champagne-gold)]">
          Launching Soon
        </p>

        <p className="max-w-xl mx-auto mt-7 text-lg leading-8 text-[var(--text-secondary)]">
          A new expression of beauty is being created
          with intention, patience and care.
        </p>

      </section>


      {/* ======================================================
          PRIVATE INVITATION
      ====================================================== */}

      <section className="pt-8 pb-24 md:pt-10 md:pb-28 px-8 text-center">

        <div className="max-w-2xl mx-auto">

          <p className="uppercase tracking-[0.5em] text-xs text-[var(--text-secondary)] mb-10">
            The House
          </p>

          <h2 className="font-heading text-5xl md:text-7xl font-light leading-tight">
            Be the first
            <br />
            to discover it.
          </h2>

          <p className="max-w-xl mx-auto mt-10 text-lg leading-9 text-[var(--text-secondary)]">
            Join the House for the first reveal
            of The Pearl Collection.
          </p>


          {!submitted ? (

            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto mt-10"
            >

              <div className="flex items-center border-b border-[var(--text-primary)]/30 pb-4">

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="flex-1 bg-transparent outline-none border-none text-sm placeholder:text-[var(--text-secondary)]"
                />

                <button
                  type="submit"
                  aria-label="Join the House"
                  className="font-heading text-2xl px-2 hover:translate-x-1 transition-transform"
                >
                  →
                </button>

              </div>

            </form>

          ) : (

            <div className="mt-14">

              <div className="w-12 h-px bg-[var(--champagne-gold)] mx-auto mb-8" />

              <p className="font-heading text-3xl md:text-4xl font-light">
                Welcome to the House.
              </p>

              <p className="mt-4 text-sm text-[var(--text-secondary)]">
                We will be in touch when The Pearl Collection launches.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* ======================================================
          CLOSING
      ====================================================== */}

      <section className="pt-12 pb-28 md:pt-16 md:pb-32 px-8 text-center bg-[var(--surface-primary)]">

        <h2 className="font-heading text-5xl md:text-7xl font-light leading-tight">
          There are many Sirenas.
          <br />
          There is only one House.
        </h2>

        <p className="font-heading italic text-2xl md:text-3xl text-[var(--text-secondary)] mt-7">
          Welcome to the House.
        </p>

        <Link
          href="/"
          className="inline-block mt-9 uppercase tracking-[0.35em] text-xs border-b border-[var(--champagne-gold)] pb-3"
        >
          Return to the House
        </Link>

      </section>

    </main>
  );
}
