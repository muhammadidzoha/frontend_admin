import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";

import Berita from "views/admin/berita";
import TambahBerita from "views/admin/berita/create";
import EditBerita from "views/admin/berita/edit";

import Destinasi from "views/admin/destinasi";
import TambahDestinasi from "views/admin/destinasi/create";
import EditDestinasi from "views/admin/destinasi/edit";

import SuratPengajuan from "views/admin/surat-pengajuan";
import BuatSuratPengajuan from "views/admin/surat-pengajuan/create";
import EditSuratPengajuan from "views/admin/surat-pengajuan/edit";

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
    name: "Surat Pengajuan",
    layout: "/admin",
    path: "surat-pengajuan",
    icon: <MdOutlineAlternateEmail className="h-6 w-6" />,
    component: <SuratPengajuan />,
  },
  {
    name: "Buat Surat Pengajuan",
    layout: "/admin",
    path: "buat-surat-pengajuan",
    icon: <MdOutlineAlternateEmail className="h-6 w-6" />,
    component: <BuatSuratPengajuan />,
    hiddenInSidebar: true,
  },
  {
    name: "Edit Surat Pengajuan",
    layout: "/admin",
    path: "edit-surat-pengajuan/:letterRequestsId",
    icon: <MdOutlineAlternateEmail className="h-6 w-6" />,
    component: <EditSuratPengajuan />,
    hiddenInSidebar: true,
  },
  {
    name: "Berita",
    layout: "/admin",
    path: "berita",
    icon: <MdNewspaper className="h-6 w-6" />,
    component: <Berita />,
  },

  {
    name: "Tambah Berita",
    layout: "/admin",
    path: "tambah-berita",
    component: <TambahBerita />,
    hiddenInSidebar: true,
  },

  {
    name: "Edit Berita",
    layout: "/admin",
    path: "edit-berita/:newsId", // Use a dynamic parameter for the news ID
    component: <EditBerita />,
    hiddenInSidebar: true,
  },

  {
    name: "Destinasi",
    layout: "/admin",
    path: "destinasi",
    icon: <MdOutlinePlace className="h-6 w-6" />,
    component: <Destinasi />,
  },
  {
    name: "Tambah Destinasi",
    layout: "/admin",
    path: "tambah-destinasi",
    icon: <MdOutlinePlace className="h-6 w-6" />,
    component: <TambahDestinasi />,
    hiddenInSidebar: true,
  },

  {
    name: "Edit Destinasi",
    layout: "/admin",
    path: "edit-destinasi/:destinationsId", // Use a dynamic parameter for the news ID
    component: <EditDestinasi />,
    hiddenInSidebar: true,
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
