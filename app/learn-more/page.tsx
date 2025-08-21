  import Header from "../components/Header";
  import Footer from "../components/Footer";

  export default function LearnMorePage() {
    return (
      <div className=" relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
        <Header />
        <div className="mx-auto max-w-5xl flex-1 flex justify-center ">
          <div className="mx-auto p-6 md:p-8 mt-8 mb-16 bg-white bg-opacity-90 rounded-2xl shadow-sm border border-violet-200">
            <h1 className="text-4xl font-serif font-semibold text-gray-900 leading-tight mb-6">
              Learn More
            </h1>
              <p className="text-lg text-gray-700 mb-5">
                  This page provides additional information about Pointly, including its key features.
              </p>
              <p className="text-lg text-gray-700 mb-3">
                Pointly offers a range of features designed to enhance your team’s collaboration and productivity during planning sessions.
                Some of the key features include Planning Poker sessions, retrospective sessions, and real-time collaboration tool.
                This project is built with Next.js and Tailwind CSS, ensuring a responsive and user-friendly interface.
                Pointly will be continuously updated with new features and improvements.
                Currently, the project is not usable on mobile devices, but the desktop experience is fully optimized.
                Mobile support will be added in the future and this task is currently in progress.
                If you have any questions or need further information, please feel free to reach out via the Contact page. We’ll be happy to hear from you.
              </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
