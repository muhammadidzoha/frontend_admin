import Widget from "components/widget/Widget";
import PieChartCard from "views/admin/berita/components/PieChartCard";
import { columnsDataNews } from "./variables/columnsData";
import { MdBarChart } from "react-icons/md";
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from "react-icons/hi";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import NewsTable from "./components/NewsTable";

const data = [
  {
    id: 1,
    title: "Berita 1",
    content: "Ada sesuatu di berita 1",
    imageUrl: "berita1.png",
    views: 0,
    status: false,
    createdAt: "2023-12-12T20:14:41.490Z",
    updatedAt: "2023-12-12T21:03:46.095Z",
    likesCount: 0,
    unlikesCount: 0,
    likes: [],
  },
  {
    id: 2,
    title: "Berita 2 Updated",
    content: "updated",
    imageUrl: "updated.png",
    views: 0,
    status: false,
    createdAt: "2023-12-12T21:03:59.390Z",
    updatedAt: "2023-12-12T21:34:26.476Z",
    likesCount: 0,
    unlikesCount: 0,
    likes: [],
  },
];

const Berita = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
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
          <NewsTable columnsData={columnsDataNews} tableData={data} />
        </div>

        {/* Traffic chart & Pie Chart */}

        {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2"> */}
        <PieChartCard />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Berita;
