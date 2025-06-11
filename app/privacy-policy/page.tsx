import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className=" relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
      <Header />
      <div className="mx-auto max-w-5xl flex-1 flex justify-center ">
        <div className="mx-auto p-6 md:p-8 mt-8 mb-16 bg-white bg-opacity-90 rounded-2xl shadow-sm border border-violet-200">
          <h1 className="text-4xl font-serif font-semibold text-gray-900 leading-tight mb-6">
            Privacy Policy
          </h1>
            <p className="text-lg text-gray-700 mb-3">
                This Privacy Policy explains how we collect, use, and protect your personal information when you use Pointly.
            </p>
            <p className="text-lg text-gray-700 mb-3">
                We collect user authentication data such as email and session information
                to create and manage planning and retrospective sessions,
                associate sessions with their creators and improve the overall user experience of our platform.
            </p>
            <p className="text-lg text-gray-700 mb-3">
                All data is stored securely on servers, managed by high security standards. We do not share your data with third parties.
            </p>
            <p className="text-lg text-gray-700 mb-3">
                You have the right to access, update or delete your data. Contact us by clicking on the Contact option for requests.
            </p>
            <p className="text-lg text-gray-700 mb-3">
                We may update this Privacy Policy as the service evolves. Any changes will be updated here.
            </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
