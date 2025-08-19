"use client";
import Link from "next/link";

const SEOSection = () => {
  return (
    <section id="seo" className="py-20 lg:py-25 xl:py-30 bg-zumthor/50 dark:bg-blacksection/40">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            Rank Higher, Get Found, Grow Faster
          </h2>
          <p className="text-regular text-waterloo dark:text-manatee">
            SEO ensures your ideal customers find you when it matters. We optimize your site structure, on-page content, technical performance, and local presence to improve search rankings, drive qualified traffic, and increase conversions—without relying solely on ads.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7.5 py-2.5 text-white shadow-solid-5 duration-300 ease-in-out hover:from-blue-700 hover:to-purple-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOSection;


