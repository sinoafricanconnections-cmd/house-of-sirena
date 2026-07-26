import LegalLayout from "../components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout
      label="Legal"
      title="Privacy Policy"
      intro="Your privacy matters to House of Sirena. This policy explains how we collect, use and protect your personal information."
    >

      <section>
        <h2 className="font-heading text-3xl mb-4">
          01 — Information We Collect
        </h2>

        <p>
          When you shop with House of Sirena, we may collect information
          required to process orders, provide customer support and improve
          your experience.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          02 — How We Use Your Information
        </h2>

        <p>
          Your information may be used to process purchases, arrange delivery,
          communicate updates and provide customer service.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          03 — Payment Information
        </h2>

        <p>
          Payments are processed securely through trusted third-party payment
          providers. House of Sirena does not store your card details.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          04 — POPIA Compliance
        </h2>

        <p>
          House of Sirena respects your personal information and processes
          data in accordance with applicable South African privacy laws,
          including the Protection of Personal Information Act (POPIA).
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          05 — Contact
        </h2>

        <p>
          If you have questions about your personal information, please
          contact House of Sirena through our website.
        </p>
      </section>

    </LegalLayout>
  );
}