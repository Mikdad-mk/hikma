import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "About",
    newTab: false,
    path: "/#about",
  },
  {
    id: 3,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "SEO Services",
        newTab: false,
        path: "/#features",
      },
      {
        id: 32,
        title: "Web Design",
        newTab: false,
        path: "/#features",
      },
      {
        id: 33,
        title: "AI Automation",
        newTab: false,
        path: "/#features",
      },
      {
        id: 34,
        title: "Contact",
        newTab: false,
        path: "/#contact",
      },
      {
        id: 35,
        title: "Pricing",
        newTab: false,
        path: "/#pricing",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
    ],
  },

  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/#contact",
  },
];

export default menuData;
