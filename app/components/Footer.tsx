import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-white py-10 flex justify-center sm:mt-auto">
      <div
        className="w-full max-w-xs sm:max-w-md md:max-w-7xl px-4
                   flex flex-col md:flex-row justify-between items-center
                   text-gray-600 text-xs sm:text-sm md:text-base lg:text-base
                   text-center md:text-left space-y-4 md:space-y-0 md:mt-14 md:-mb-5"
      >
        <p>
          &copy; {new Date().getFullYear()} Pointly. All rights reserved
        </p>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <Link
            href="/privacy-policy"
            className="hover:text-violet-800 transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-violet-800 transition"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="hover:text-violet-800 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
