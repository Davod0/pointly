"use client";
import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  interface ContactFormData {
    name: string;
    email: string;
    reason: string;
    message: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData: ContactFormData = { name, email, reason, message };

    try {
      const response: Response = await fetch('/api/contact-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.');
        setName('');
        setEmail('');
        setReason('');
        setMessage('');
      } else {
        setSubmitMessage('Something went wrong. Please try again later.');
      }
    } catch {
      setSubmitMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
        <div
          className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
          style={{ minHeight: 'auto', paddingBottom: '80px' }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2 text-center">
            Contact Pointly Team
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 text-center">
            Have questions or feedback? Fill out the form below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-700 text-sm sm:text-base text-gray-700"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-700 text-sm sm:text-base text-gray-700"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Reason
              </label>
              <input
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-700 text-sm sm:text-base text-gray-700"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-700 text-sm sm:text-base text-gray-700"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-violet-800 text-white py-2 rounded-md font-medium text-sm sm:text-base hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-violet-700 transition cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
            {submitMessage && (
              <p className={`mt-3 text-xs sm:text-sm font-semibold text-center ${submitMessage.includes('Thank you') ? 'text-violet-800' : 'text-red-600'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
