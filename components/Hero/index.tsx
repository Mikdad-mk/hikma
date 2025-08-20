"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>
        
        {/* Floating Grid Elements - Hidden on mobile for better performance */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float-1 opacity-60 hidden md:block"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-2 opacity-40 hidden md:block"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-3 opacity-50 hidden md:block"></div>
        <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-float-4 opacity-30 hidden md:block"></div>
        
        {/* Grid Lines Animation */}
        <div className="absolute inset-0 grid-lines"></div>
      </div>

      <section className="relative min-h-screen overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
            
            {/* Left Content - Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/30 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  AI-Powered Digital Solutions
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
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
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Maximize your online potential with our expert SEO, lead-nurturing automation, AI-driven insights, and stunning website designs. Plus, stay in control on the go with our mobile app.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
                <Link
                  href="/#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
                >
                  <span className="relative z-10">Get a Free Quote Today!</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  href="/#features"
                  className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 pt-6 md:pt-8">
                <div className="text-center px-2">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center px-2">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 dark:text-purple-400">1000+</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center px-2">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-600 dark:text-cyan-400">99%</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Section */}
            <div className="w-full lg:w-1/2 relative order-first lg:order-last">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Main Image Container */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/shape/shape-01.png"
                    alt="shape"
                    width={46}
                    height={246}
                    className="absolute -left-11.5 top-0 animate-bounce-slow hidden md:block"
                  />
                  <Image
                    src="/images/shape/shape-02.svg"
                    alt="shape"
                    width={36.9}
                    height={36.7}
                    className="absolute bottom-0 right-0 z-10 animate-spin-slow hidden md:block"
                  />
                  <Image
                    src="/images/shape/shape-03.svg"
                    alt="shape"
                    width={21.64}
                    height={21.66}
                    className="absolute -right-6.5 bottom-0 z-1 animate-pulse hidden md:block"
                  />
                  
                  <div className="relative aspect-700/444 w-full">
                    <Image
                      className="shadow-solid-l dark:hidden rounded-2xl"
                      src="/images/hero/hero-light.svg"
                      alt="Hero"
                      fill
                    />
                    <Image
                      className="hidden shadow-solid-l dark:block rounded-2xl"
                      src="/images/hero/hero-dark.svg"
                      alt="Hero"
                      fill
                    />
                  </div>
                </div>

                {/* Floating Elements - Hidden on mobile for better performance */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float-1 hidden md:block"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20 animate-float-2 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
