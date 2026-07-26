import LegalLayout from "../components/LegalLayout";

export default function ReturnsPage() {
  return (
    <LegalLayout
      label="Customer Care"
      title="Returns & Refunds"
      intro="At House of Sirena, we want every order to feel exceptional. This policy outlines our approach to returns, exchanges and refunds."
    >

      <section>
        <h2 className="font-heading text-3xl mb-4">
          01 — Hygiene & Beauty Products
        </h2>

        <p>
          Due to the hygienic nature of beauty products, opened, used or worn
          items cannot be returned. This ensures the safety and quality of all
          products offered by House of Sirena.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          02 — Damaged or Incorrect Orders
        </h2>

        <p>
          If your order arrives damaged, defective or incorrect, please
          contact House of Sirena within the required timeframe with your
          order details and supporting information.
        </p>

      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          03 — Return Requirements
        </h2>

        <p>
          Approved returns must meet our return requirements. Products must
          remain unused, unopened and in their original packaging where
          applicable.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          04 — Refunds
        </h2>

        <p>
          Once an approved return has been assessed, refunds will be processed
          using the original payment method where applicable.
        </p>

        <p className="mt-4">
          Processing times may vary depending on your payment provider or
          financial institution.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          05 — Exchanges
        </h2>

        <p>
          Exchanges may be considered for faulty or incorrectly supplied
          products. Please contact House of Sirena before returning any item.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          06 — Contact
        </h2>

        <p>
          If you need assistance with a return or refund request, please
          contact House of Sirena through our customer support channels.
        </p>
      </section>

    </LegalLayout>
  );
}