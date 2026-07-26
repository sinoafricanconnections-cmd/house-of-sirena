import LegalLayout from "../components/LegalLayout";

export default function FAQPage() {
  return (
    <LegalLayout
      label="Customer Care"
      title="Frequently Asked Questions"
      intro="Everything you need to know about House of Sirena, our products and your order experience."
    >

      <section>
        <h2 className="font-heading text-3xl mb-4">
          01 — What is House of Sirena?
        </h2>

        <p>
          House of Sirena is a South African luxury beauty house inspired by
          the ocean, elegance and modern beauty rituals. We create refined
          beauty essentials designed to elevate everyday rituals.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          02 — Are House of Sirena lashes reusable?
        </h2>

        <p>
          With proper care, House of Sirena lashes may be reused approximately
          two to three times. To maintain their quality, gently remove the
          lashes after wear, clean any remaining adhesive carefully and store
          them safely in their original packaging.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          03 — How do I apply my lashes?
        </h2>

        <p>
          Each set is designed for an easy application experience. Carefully
          apply the lashes following the included instructions and ensure the
          fit feels comfortable before wearing.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          04 — How long do lashes last?
        </h2>

        <p>
          Wear time depends on application technique, adhesive used, skin
          type and care. Following the recommended application steps will help
          maximise wear.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          05 — Do you ship within South Africa?
        </h2>

        <p>
          Yes. House of Sirena currently ships within South Africa through
          trusted courier partners.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          06 — What payment methods do you accept?
        </h2>

        <p>
          We accept secure online payments through trusted payment providers.
          Available payment options will be displayed during checkout.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          07 — Can I return my lashes?
        </h2>

        <p>
          Due to hygiene considerations, opened or used beauty products cannot
          be returned unless they are faulty, damaged or incorrectly supplied.
          Please refer to our Returns & Refunds policy for more information.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          08 — How can I contact House of Sirena?
        </h2>

        <p>
          If you have any questions, our customer support team will be happy
          to assist you through our contact page.
        </p>
      </section>

    </LegalLayout>
  );
}