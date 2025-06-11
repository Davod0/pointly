import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
      <Header />
      <div className="flex-1 flex justify-center">
        <div className="mx-auto p-6 md:p-8 mt-8 bg-white bg-opacity-90 rounded-2xl shadow-sm">
          <h1 className="text-4xl font-serif font-semibold text-gray-900 leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            This Privacy Policy explains how we collect, use, and protect your personal information when you use Pointly.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>User authentication data such as email, user name, etc</li>
            <li>Session data such</li>
          </ul>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>To create and manage planning and retrospective sessions.</li>
            <li>To associate sessions with their creators</li>
            <li>To improve the user experience of our platform.</li>
          </ul>
          <p className="text-lg text-gray-700 mb-6">
            All data is stored securely in servers, managed by high security standards. We do not share your data with third parties.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            You have the right to access, update, or delete your data. Contact us by clicking on the Contact option for requests.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We may update this Privacy Policy as the service evolves. Any changes will be updated here
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
