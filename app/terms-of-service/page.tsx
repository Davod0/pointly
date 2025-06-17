import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className=" relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
      <Header />
      <div className="mx-auto max-w-5xl flex-1 flex justify-center ">
        <div className="mx-auto p-6 md:p-8 mt-8 mb-16 bg-white bg-opacity-90 rounded-2xl shadow-sm border border-violet-200">
          <h1 className="text-4xl font-serif font-semibold text-gray-900 leading-tight mb-6">
            Terms of Service
          </h1>
            <p className="text-lg text-gray-700 mb-5">
                By using Pointly you agree to these Terms of Service. Please read them carefully.
            </p>
            <p className="text-lg text-gray-700 mb-3">
                Users must not use Pointly for illegal activities or to harass others.
                You are responsible for maintaining the confidentiality of your login credentials.
                We reserve the right to suspend or terminate accounts that violate these Terms.
                All content and materials in Pointly are owned by the Pointly team and protected by copyright law.
                We may update these terms from time to time. Continued use of Pointly after changes means acceptance of the new terms.
            </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
