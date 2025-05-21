import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-white py-23 -mt-13 flex justify-center">
      <div className="w-full max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="md:-mb-32">
          &copy; {new Date().getFullYear()} Pointly. All rights reserved.
        </p>
        <div className="flex space-x-6 md:-mb-32">
          <Link href="/" className="hover:text-violet-800 transition"> Privacy Policy</Link>
          <Link  href="/" className="hover:text-violet-800 transition">Terms of Service</Link>
          <Link href="/" className="hover:text-violet-800 transition">Contact</Link>
        </div>
      </div>
    </section>
  );
}
