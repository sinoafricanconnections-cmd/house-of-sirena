
"use client";

import { FormEvent, useState } from "react";

export default function JoinTheHousePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/join-the-house", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#F8F7F4] text-[#244550]">
      {/* HERO */}
      <section className="relative isolate flex min-h-[620px] items-center justify-center overflow-hidden text-center md:min-h-[760px]">
        <img
          src="/images/sirena-underwater.png"
          alt="Sunlight filtering through tranquil teal ocean water"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#102E32]/45 via-[#173B3D]/40 to-[#102E32]/50" />

        <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 md:px-16">
          <div className="mx-auto max-w-4xl text-[#F8F7F4]">
            <p className="mb-8 text-[10px] uppercase tracking-[0.45em] sm:text-xs">
              House of Sirena
            </p>

            <h1 className="font-heading text-5xl font-light leading-[1.12] sm:text-6xl md:text-7xl lg:text-8xl">
              A new chapter
              <br />
              <span className="italic">of beauty is coming.</span>
            </h1>

            <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-[#E6D0A4] sm:text-xs">
              Launching Soon
            </p>

            <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-white/90 sm:text-lg">
              A new expression of beauty is being created with intention,
              patience and care.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#F8F7F4] to-transparent" />
      </section>

      {/* INVITATION AND SIGNUP */}
      <section className="relative overflow-hidden bg-[#F8F7F4] px-5 py-16 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="order-2 md:order-1">
            <p className="mb-7 text-[10px] uppercase tracking-[0.45em] text-[#6F8583] sm:text-xs">
              The House
            </p>

            <h2 className="font-heading text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              Be the first
              <br />
              <span className="italic">to discover it.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#667875] sm:text-lg">
              Join the House for the first reveal of what is to come.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-9 max-w-md">
                <label htmlFor="house-email" className="sr-only">
                  Email address
                </label>

                <div className="flex items-center border-b border-[#244550]/35 transition-colors focus-within:border-[#C8A96A]">
                  <input
                    id="house-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email address"
                    disabled={loading}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "signup-error" : undefined}
                    className="min-w-0 flex-1 bg-transparent px-1 py-4 text-base text-[#244550] outline-none placeholder:text-[#7C8985] disabled:opacity-50"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    aria-label={
                      loading ? "Joining the House" : "Join the House"
                    }
                    className="flex min-h-12 min-w-12 items-center justify-center font-heading text-3xl transition-transform hover:translate-x-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A96A] disabled:opacity-50"
                  >
                    {loading ? "…" : "→"}
                  </button>
                </div>

                {error && (
                  <p
                    id="signup-error"
                    role="alert"
                    className="mt-4 text-sm text-red-700"
                  >
                    {error}
                  </p>
                )}

                <p className="mt-4 text-xs leading-5 text-[#6D7B77]">
                  Join the House to receive updates about our first reveal.
                  You can unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="mt-10" role="status" aria-live="polite">
                <div className="mb-6 h-px w-12 bg-[#C8A96A]" />

                <p className="font-heading text-3xl font-light sm:text-4xl">
                  Welcome to the House.
                </p>

                <p className="mt-4 text-sm leading-6 text-[#667875]">
                  We will be in touch when the first chapter is revealed.
                </p>
              </div>
            )}
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F3EEE7]">
              <img
                src="/images/sirena-veil.png"
                alt="Soft ivory fabric and luminous water textures"
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative isolate flex min-h-[560px] items-center justify-center overflow-hidden text-center sm:min-h-[650px] md:min-h-[760px]">
        <img
          src="/images/sirena-horizon.png"
          alt="A quiet coastal horizon in warm natural light"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-[#173B3D]/25" />

        {/* Text positioned lower over the open water */}
        <div className="mx-auto w-full max-w-5xl translate-y-24 px-6 py-24 text-white sm:translate-y-28 sm:px-8 md:translate-y-32 md:py-32">
          <h2 className="font-heading text-3xl font-light leading-[1.2] tracking-[-0.025em] sm:text-4xl md:text-5xl lg:text-6xl">
            There are many Sirenas.
            <br />
            <span className="mt-2 inline-block italic">
              There is only one House.
            </span>
          </h2>

          <p className="mt-8 font-heading text-lg font-light italic text-white/95 sm:mt-10 sm:text-xl md:text-2xl">
            Welcome to the House.
          </p>

          <div className="mx-auto mt-8 h-px w-12 bg-[#E6D0A4]" />
        </div>
      </section>
    </main>
  );
}
