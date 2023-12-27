import { Tab } from "@headlessui/react";

// Import Routes

import AkteKelahiran from "views/admin/surat/akteKelahiran";
import AkteKematian from "views/admin/surat/akteKematian";
import AktePerceraian from "views/admin/surat/aktePerceraian";
import AktePernikahan from "views/admin/surat/aktePernikahan";
import KartuKeluarga from "views/admin/surat/kartuKeluarga";
import KartuTandaPenduduk from "views/admin/surat/kartuTandaPenduduk";
import PindahDomisili from "views/admin/surat/pindahDomisili";

const routes = [
  {
    name: "Akte Kelahiran",
    layout: "/data-pengajuan",
    path: "akte-kelahiran",
    component: <AkteKelahiran />,
  },
  {
    name: "Akte Kematian",
    layout: "/data-pengajuan",
    path: "akte-kematian",
    component: <AkteKematian />,
  },
  {
    name: "Akte Perceraian",
    layout: "/data-pengajuan",
    path: "akte-perceraian",
    component: <AktePerceraian />,
  },
  {
    name: "Akte Pernikahan",
    layout: "/data-pengajuan",
    path: "akte-pernikahan",
    component: <AktePernikahan />,
  },
  {
    name: "Kartu Keluarga",
    layout: "/data-pengajuan",
    path: "kartu-keluarga",
    component: <KartuKeluarga />,
  },
  {
    name: "Kartu Tanda Penduduk",
    layout: "/data-pengajuan",
    path: "kartu-tanda-penduduk",
    component: <KartuTandaPenduduk />,
  },
  {
    name: "Pindah Domisili",
    layout: "/data-pengajuan",
    path: "pindah-domisili",
    component: <PindahDomisili />,
  },
];

const Surat = () => {
  return (
    <div>
      <Tab.Group as="div" className="mt-3">
        <Tab.List className="flex justify-between">
          {routes.map((route, index) => (
            <Tab key={index}>
              {({ selected }) => (
                <button
                  className={`rounded-xl px-5 py-3 text-base font-medium transition duration-200 ${
                    selected
                      ? "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                      : "bg-white bg-clip-border text-navy-700 shadow-3xl shadow-shadow-500 hover:bg-gray-200 active:bg-gray-300  dark:bg-navy-700 dark:text-white dark:shadow-none dark:hover:bg-white/20 dark:active:bg-white/30"
                  }`}
                >
                  {route.name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {routes.map((route, index) => (
            <Tab.Panel key={index}>{route.component}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Surat;
