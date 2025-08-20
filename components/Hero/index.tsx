"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Enhanced Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>
        
        {/* Enhanced Floating Grid Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float-1 opacity-60 hidden md:block"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-2 opacity-40 hidden md:block"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-3 opacity-50 hidden md:block"></div>
        <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-float-4 opacity-30 hidden md:block"></div>
        
        {/* Enhanced Grid Lines Animation */}
        <div className="absolute inset-0 grid-lines"></div>
        
        {/* Additional Modern Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse-slow hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow-delayed hidden lg:block"></div>
      </div>

      <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 w-full">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
            
            {/* Left Content - Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/30 mb-4 sm:mb-6 animate-fade-in-up">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
                  AI-Powered Digital Solutions
                </span>
              </div>

              {/* Enhanced Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight animate-fade-in-up-delayed">
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

              {/* Enhanced Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up-delayed-2">
                Maximize your online potential with our expert SEO, lead-nurturing automation, AI-driven insights, and stunning website designs. Plus, stay in control on the go with our mobile app.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6 animate-fade-in-up-delayed-3">
                <Link
                  href="/#contact"
                  className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative z-10">Get a Free Quote Today!</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  href="/#features"
                  className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 text-sm sm:text-base"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>

              {/* Enhanced Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-4 sm:pt-6 md:pt-8 animate-fade-in-up-delayed-4">
                <div className="text-center px-1 sm:px-2">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center px-1 sm:px-2">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 dark:text-purple-400">1000+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center px-1 sm:px-2">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-600 dark:text-cyan-400">99%</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Section */}
            <div className="w-full lg:w-1/2 relative order-first lg:order-last animate-fade-in-right">
              <div className="relative mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none">
                {/* Enhanced Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
                
                {/* Enhanced Main Image Container */}
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

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float-1 hidden md:block"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20 animate-float-2 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
