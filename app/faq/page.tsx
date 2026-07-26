export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--pearl)]">

      <section className="max-w-4xl mx-auto px-8 py-32">

        <p className="uppercase tracking-[0.4em] text-xs mb-6">
          Legal
        </p>

        <h1 className="font-heading text-6xl mb-10">
          Terms & Conditions
        </h1>

        <div className="space-y-8 leading-8">

          <section>
            <h2 className="text-2xl mb-3">
              1. About House of Sirena
            </h2>

            <p>
              House of Sirena is a South African luxury beauty house
              inspired by the ocean, elegance and modern beauty rituals.
            </p>
          </section>


          <section>
            <h2 className="text-2xl mb-3">
              2. Website Use
            </h2>

            <p>
              By accessing our website, you agree to these Terms &
              Conditions and our policies.
            </p>
          </section>


          <section>
            <h2 className="text-2xl mb-3">
              3. Orders & Payments
            </h2>

            <p>
              Orders are only confirmed once payment has been successfully
              processed.
            </p>
          </section>


        </div>

      </section>

    </main>
  );
}