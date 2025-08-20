"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>

        {/* Floating dots */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float-1 opacity-60 hidden md:block"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-2 opacity-40 hidden md:block"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-3 opacity-50 hidden md:block"></div>
        <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-float-4 opacity-30 hidden md:block"></div>

        {/* Blurry gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse-slow hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow-delayed hidden lg:block"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/30 animate-fade-in-up">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              AI-Powered Digital Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight animate-fade-in-up-delayed">
            <span className="text-black dark:text-white">
              You're one step away from a
            </span>
            <br />
            <span className="gradient-animate">
              stunning, mobile-friendly
            </span>
            <br />
            <span className="text-black dark:text-white">
              website.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up-delayed-2">
            Maximize your online potential with our expert SEO, lead-nurturing automation,
            AI-driven insights, and stunning website designs. Plus, stay in control on the
            go with our mobile app.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-fade-in-up-delayed-3">
            <Link
              href="/#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/#features"
              className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
            >
              Learn More →
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 pt-6 animate-fade-in-up-delayed-4">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-purple-600 dark:text-purple-400">
                1000+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                99%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
