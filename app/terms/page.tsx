import LegalLayout from "../components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout
      label="Legal"
      title="Terms & Conditions"
    >

      <section>
        <h2 className="font-heading text-3xl mb-4">
          01 — About House of Sirena
        </h2>

        <p>
          Welcome to House of Sirena. We are a South African luxury beauty
          house inspired by the ocean, elegance and modern beauty rituals.
          These Terms & Conditions outline the rules and guidelines that
          apply when accessing our website and purchasing our products.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          02 — Website Use
        </h2>

        <p>
          By accessing this website, you agree to use it responsibly and in
          accordance with these Terms & Conditions. You may not misuse the
          website, interfere with its operation, or use our content without
          permission.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          03 — Products
        </h2>

        <p>
          We take care to present our products, imagery and descriptions as
          accurately as possible. However, slight variations may occur due
          to photography, screen settings or manufacturing differences.
        </p>

        <p className="mt-4">
          Product availability is subject to stock levels. House of Sirena
          reserves the right to update, modify or discontinue products at
          any time.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          04 — Pricing
        </h2>

        <p>
          All prices displayed on our website are listed in South African
          Rand (ZAR). Prices may change without notice. While we aim to
          ensure accuracy, House of Sirena reserves the right to correct
          pricing errors before an order is processed.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          05 — Orders & Payments
        </h2>

        <p>
          Orders are only confirmed once payment has been successfully
          processed. House of Sirena reserves the right to decline or cancel
          orders where necessary, including suspected fraud, payment issues,
          pricing errors or product availability concerns.
        </p>

        <p className="mt-4">
          Payments are processed securely through trusted third-party payment
          providers. House of Sirena does not store customer card details.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          06 — Shipping
        </h2>

        <p>
          Shipping timeframes provided on our website are estimates only.
          We work with trusted delivery partners, however delays outside of
          our control may occasionally occur.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          07 — Returns & Refunds
        </h2>

        <p>
          Due to hygiene considerations, opened or used beauty products
          cannot be returned unless they are faulty, damaged or incorrectly
          supplied.
        </p>

        <p className="mt-4">
          Please refer to our Returns & Refund Policy for detailed
          information.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          08 — Intellectual Property
        </h2>

        <p>
          All House of Sirena branding, logos, photography, designs, written
          content and creative materials remain the property of House of
          Sirena and may not be copied or used without written permission.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          09 — Privacy
        </h2>

        <p>
          Customer information is handled responsibly and in accordance with
          applicable South African privacy legislation, including the
          Protection of Personal Information Act (POPIA).
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          10 — Governing Law
        </h2>

        <p>
          These Terms & Conditions are governed by the laws of the Republic
          of South Africa.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          Contact
        </h2>

        <p>
          If you have any questions regarding these Terms & Conditions,
          please contact House of Sirena through the contact information
          provided on our website.
        </p>
      </section>

    </LegalLayout>
  );
}