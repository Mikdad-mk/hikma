"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:gap-12">
              
              {/* Company Info Column */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top lg:col-span-1"
              >
                <Link href="/" className="inline-block mb-6">
                  <Image
                    width={120}
                    height={40}
                    src="/images/logo/logo-light.svg"
                    alt="Digital Hikma Logo"
                    className="dark:hidden h-8 w-auto"
                  />
                  <Image
                    width={120}
                    height={40}
                    src="/images/logo/logo-dark.svg"
                    alt="Digital Hikma Logo"
                    className="hidden dark:block h-8 w-auto"
                  />
                </Link>

                <p className="mb-6 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  Smart, mobile-friendly websites with SEO, automation, and AI to grow your business.
                </p>

                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Contact
                  </p>
                  <a 
                    href="mailto:digitalhikma.com" 
                    className="block text-sm sm:text-base font-medium text-black dark:text-white hover:text-primary transition-colors duration-300"
                  >
                    digitalhikma.com
                  </a>
                </div>
              </motion.div>

              {/* Quick Links Column */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-6 text-lg sm:text-xl font-semibold text-black dark:text-white">
                  Quick Links
                </h4>

                <ul className="space-y-3">
                  <li>
                    <Link href="/#" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#about" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#pricing" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Plans & Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Book Appointment
                    </Link>
                  </li>
                  <li>
                    <Link href="/#features" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Our Services
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Support Column */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-6 text-lg sm:text-xl font-semibold text-black dark:text-white">
                  Support
                </h4>

                <ul className="space-y-3">
                  <li>
                    <Link href="/#about" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      About Company
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Our Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Help Center
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Newsletter Column */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-6 text-lg sm:text-xl font-semibold text-black dark:text-white">
                  Newsletter
                </h4>
                <p className="mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Subscribe to receive updates and insights
                </p>

                <form action="#" className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-white px-4 py-3 text-sm sm:text-base shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-strokedark dark:bg-black dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-primary p-2 text-white hover:bg-primary/90 transition-colors duration-300"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>
                  </div>
                </form>

                {/* Social Links */}
                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Follow Us
                  </p>
                  <div className="flex space-x-3">
                    <a 
                      href="#" 
                      aria-label="Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke bg-white text-gray-600 hover:border-primary hover:text-primary transition-all duration-300 dark:border-strokedark dark:bg-black dark:text-gray-300"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      aria-label="Twitter"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke bg-white text-gray-600 hover:border-primary hover:text-primary transition-all duration-300 dark:border-strokedark dark:bg-black dark:text-gray-300"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke bg-white text-gray-600 hover:border-primary hover:text-primary transition-all duration-300 dark:border-strokedark dark:bg-black dark:text-gray-300"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="border-t border-stroke py-6 dark:border-strokedark">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-8">
              
              {/* Copyright */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top text-center lg:text-left"
              >
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  &copy; {new Date().getFullYear()} DIGITAL HIKMA. All rights reserved.
                </p>
              </motion.div>

              {/* Bottom Links */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <ul className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm">
                  <li>
                    <Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
