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
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  // Removed Blog from top nav for single-page focus
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
        title: "SEO",
        newTab: false,
        path: "/#seo",
      },
      {
        id: 32,
        title: "Smart Websites",
        newTab: false,
        path: "/#smart",
      },
      {
        id: 33,
        title: "Why Choose",
        newTab: false,
        path: "/#why",
      },
      {
        id: 34,
        title: "Contact",
        newTab: false,
        path: "/#contact",
      },
      {
        id: 35,
        title: "Plans",
        newTab: false,
        path: "/#pricing",
      },
      {
        id: 35.1,
        title: "project",
        newTab: false,
        path: "/blog",
      },
    ],
  },

  {
    id: 4,
    title: "projects",
    newTab: false,
    path: "/blog",
  },
];

export default menuData;
