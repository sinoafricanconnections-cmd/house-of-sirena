import LegalLayout from "../components/LegalLayout";

export default function CookiesPage() {
  return (
    <LegalLayout
      label="Legal"
      title="Cookie Policy"
      intro="This Cookie Policy explains how House of Sirena uses cookies and similar technologies to improve your browsing experience."
    >

      <section>
        <h2 className="font-heading text-3xl mb-4">
          01 — What Are Cookies?
        </h2>

        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help websites remember information about your visit
          and improve functionality.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          02 — How We Use Cookies
        </h2>

        <p>
          House of Sirena may use cookies to help improve website performance,
          understand customer behaviour and create a smoother shopping
          experience.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          03 — Website Functionality
        </h2>

        <p>
          Some cookies are necessary for essential website functions, including
          navigation, security and maintaining a reliable browsing experience.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          04 — Third-Party Services
        </h2>

        <p>
          We may use trusted third-party services that place cookies on our
          website for purposes such as payment processing, analytics or
          improving customer experience.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          05 — Managing Cookies
        </h2>

        <p>
          You can manage or disable cookies through your browser settings.
          Please note that disabling cookies may affect certain website
          functionality.
        </p>
      </section>


      <section>
        <h2 className="font-heading text-3xl mb-4">
          06 — Contact
        </h2>

        <p>
          If you have any questions about our Cookie Policy, please contact
          House of Sirena through our website.
        </p>
      </section>

    </LegalLayout>
  );
}