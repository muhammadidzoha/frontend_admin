import React from "react";
import Widget from "components/widget/Widget";
import PieChartCard from "views/admin/berita/components/PieChartCard";
import { MdBarChart } from "react-icons/md";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const index = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
        <Widget
          icon={<HiOutlineStatusOnline className="h-7 w-7" />}
          title={"Aktif"}
          subtitle={"7"}
        />
        <Widget
          icon={<HiOutlineStatusOffline className="h-6 w-6" />}
          title={"Tidak Aktif"}
          subtitle={"5"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Berita Populer"}
          subtitle={"5"}
        />
        <Widget
          icon={<AiFillLike className="h-6 w-6" />}
          title={"Berita Favorit"}
          subtitle={"10"}
        />
        <Widget
          icon={<AiFillDislike className="h-7 w-7" />}
          title={"Berita Tidak Disukai"}
          subtitle={"145"}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1">
        {/* Check Table */}
        <div>
          {/* <NewsTable columnsData={columnsDataNews} tableData={data} /> */}
        </div>

        {/* Traffic chart & Pie Chart */}

        {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2"> */}
        <PieChartCard />
        {/* </div> */}
      </div>
    </div>
  );
};

export default index;
