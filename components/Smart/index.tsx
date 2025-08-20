"use client";
import Image from "next/image";

const items = [
  { title: "Attract", desc: "Bring in the right visitors with SEO, content, and social visibility.", icon: "/images/icon/icon-01.svg" },
  { title: "UpSell", desc: "Increase order value using smart offers and tailored recommendations.", icon: "/images/icon/icon-02.svg" },
  { title: "Repeat", desc: "Automated follow-ups and remarketing to drive repeat business.", icon: "/images/icon/icon-03.svg" },
  { title: "Sell", desc: "Conversion-optimized pages turn visitors into paying customers.", icon: "/images/icon/icon-04.svg" },
  { title: "Ascend", desc: "Nurture and grow high-value clients with automation and AI.", icon: "/images/icon/icon-05.svg" },
];

const Smart = () => {
  return (
    <section id="smart" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="mx-auto mb-12.5 max-w-3xl text-center">
          <h2 className="mb-3 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            Smart Websites for Businesses
          </h2>
          <p className="text-waterloo dark:text-manatee">
            Built to attract, convert, and retain customers—powered by automation and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-zumthor dark:bg-black">
                <Image src={item.icon} alt={item.title} width={24} height={24} className="dark:img-white" />
              </div>
              <h3 className="mb-2 text-itemtitle2 font-semibold text-black dark:text-white">{item.title}</h3>
              <p className="text-waterloo dark:text-manatee">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Smart;


