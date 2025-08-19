"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-0 text-3xl font-bold text-black dark:text-white xl:text-hero">
                You\'re one step away from a stunning, mobile-friendly website.
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Maximize your online potential with our expert SEO, lead-nurturing automation, AI-driven insights, and stunning website designs. Plus, stay in control on the go with our mobile app.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/#contact"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7.5 py-2.5 text-white shadow-solid-5 duration-300 ease-in-out hover:from-blue-700 hover:to-purple-700"
                >
                  Get a Free Quote Today!
                </Link>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
