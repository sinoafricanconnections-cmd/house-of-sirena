import LegalLayout from "../components/LegalLayout";

export default function ContactPage() {
  return (
    <LegalLayout
      label="Customer Care"
      title="Contact"
      intro="We are here to assist you. Whether you have a question about your order, products or the House of Sirena experience, our team is here to help."
    >

      <section>
        <h2 className="font-heading text-3xl mb-4">
          01 — Customer Support
        </h2>

        <p>
          For questions regarding your order, products, shipping or returns,
          please reach out to House of Sirena. We aim to provide a thoughtful
          and timely response to every enquiry.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          02 — Orders & Enquiries
        </h2>

        <p>
          If you need assistance with an existing order, please include your
          order details when contacting us so we can assist you efficiently.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          03 — Connect With The House
        </h2>

        <p>
          Follow House of Sirena for beauty rituals, product updates and
          inspiration from the House.
        </p>

        <div className="mt-6 flex flex-col gap-3">

          <a
            href="https://instagram.com/house.of.sirena"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@house.of.sirena"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            TikTok
          </a>

          <a
            href="https://za.pinterest.com/sinoafricanconnections/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            Pinterest
          </a>

        </div>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          04 — Response Time
        </h2>

        <p>
          We aim to respond to customer enquiries as soon as possible during
          business hours. Response times may vary during weekends, holidays
          and peak periods.
        </p>
      </section>

    </LegalLayout>
  );
}