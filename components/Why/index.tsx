"use client";
import Link from "next/link";

const bullets = [
  { title: "AI-Powered Marketing", desc: "Data-driven insights and automation to scale your growth." },
  { title: "Built-in Lead Generation", desc: "Forms, chat, and funnels that capture and nurture leads." },
  { title: "SEO & Speed Optimized", desc: "Fast, mobile-first sites that rank and convert." },
  { title: "Conversion-Focused Design", desc: "Intentional layouts, CTAs, and UX that drive action." },
];

const Why = () => {
  return (
    <section id="why" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1016 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            Why Choose a Smart Website?
          </h2>
          <p className="text-waterloo dark:text-manatee">
            Put your website to work—from attracting visitors to closing and retaining customers.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          {bullets.map((b, i) => (
            <div key={i} className="rounded-lg border border-stroke bg-white p-5 shadow-solid-11 dark:border-strokedark dark:bg-blacksection">
              <h3 className="mb-1 text-metatitle2 font-semibold text-black dark:text-white">{b.title}</h3>
              <p className="text-waterloo dark:text-manatee">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/#pricing"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7.5 py-2.5 text-white shadow-solid-5 duration-300 ease-in-out hover:from-blue-700 hover:to-purple-700"
          >
            Check Plan Offers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Why;


