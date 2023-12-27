import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Surat from "views/admin/surat";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import Berita from "views/admin/berita";
import Destinasi from "views/admin/destinasi";
import DataTables from "views/admin/tables";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdNewspaper,
  MdOutlinePlace,
  MdOutlineAlternateEmail,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Data Pengajuan",
    layout: "/admin",
    path: "data-pengajuan",
    icon: <MdOutlineAlternateEmail className="h-6 w-6" />,
    component: <Surat />,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Berita",
    layout: "/admin",
    path: "berita",
    icon: <MdNewspaper className="h-6 w-6" />,
    component: <Berita />,
  },
  {
    name: "Destinasi",
    layout: "/admin",
    path: "destinasi",
    icon: <MdOutlinePlace className="h-6 w-6" />,
    component: <Destinasi />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
