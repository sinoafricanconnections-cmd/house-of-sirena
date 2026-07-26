import LegalLayout from "../components/LegalLayout";

export default function ShippingPage() {
  return (
    <LegalLayout
      label="Customer Care"
      title="Shipping Policy"
      intro="Every House of Sirena order is carefully prepared and delivered with the intention of creating a seamless beauty experience."
    >

      <section>
        <h2 className="font-heading text-3xl mb-4">
          01 — Order Processing
        </h2>

        <p>
          Orders are carefully prepared after payment has been successfully
          received. Processing times may vary depending on order volume,
          product availability and promotional periods.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          02 — Delivery Within South Africa
        </h2>

        <p>
          House of Sirena currently delivers within South Africa. Orders are
          shipped using trusted courier partners to ensure a reliable delivery
          experience.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          03 — Delivery Times
        </h2>

        <p>
          Estimated delivery times are provided as a guide only. Delivery
          times may vary depending on your location, courier availability and
          circumstances outside of our control.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          04 — Shipping Confirmation
        </h2>

        <p>
          Once your order has been dispatched, you will receive confirmation
          and any available tracking information.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          05 — Incorrect Delivery Information
        </h2>

        <p>
          Customers are responsible for providing accurate delivery details.
          House of Sirena cannot be held responsible for delays or additional
          costs caused by incorrect information provided at checkout.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          06 — Contact
        </h2>

        <p>
          If you have any questions regarding your delivery, please contact
          House of Sirena through our customer support channels.
        </p>
      </section>

    </LegalLayout>
  );
}