import Link from "next/link";

export default function EducationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-3xl w-full text-center">

        <p className="font-body uppercase tracking-[0.3em] text-sm mb-4">
          Chapter III
        </p>

        <h1 className="font-heading text-6xl md:text-7xl mb-6">
          The Art of Lash Design
        </h1>

        <p className="font-body text-lg text-[var(--text-secondary)] mb-12">
          Different lash styles create different visual effects.
        </p>

        <div className="space-y-10">

          <div>
            <h2 className="font-heading text-3xl mb-2">
              Natural
            </h2>

            <p className="font-body text-[var(--text-secondary)]">
              Soft enhancement for everyday elegance.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-3xl mb-2">
              Cat Eye
            </h2>

            <p className="font-body text-[var(--text-secondary)]">
              Creates elongation and lift.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-3xl mb-2">
              Open Eye
            </h2>

            <p className="font-body text-[var(--text-secondary)]">
              Creates brightness and openness.
            </p>
          </div>

        </div>

        <Link
          href="/sirena-eye-atelier/profile"
          className="inline-flex items-center justify-center px-10 py-4 bg-[var(--deep-lagoon)] text-white mt-12"
        >
          Continue →
        </Link>

      </div>

    </main>
  );
}