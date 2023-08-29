import { Home, Person } from "@mui/icons-material";
import { ReactComponent as Dashboard } from "../assets/navbar/dashboard.svg";
import { FaHome } from "react-icons/fa";
import { IoImageSharp } from "react-icons/io5";
import { ReactComponent as Blog } from "../assets/navbar/blog.svg";
import { ReactComponent as Slider } from "../assets/navbar/slider.svg";
import { ReactComponent as Anggota } from "../assets/navbar/anggota.svg";
// import { ReactComponent as Kegiatan } from "../assets/navbar/kegiatan.svg";
import { ReactComponent as Agenda } from "../assets/navbar/agenda.svg";
import { ReactComponent as Admin } from "../assets/navbar/admin.svg";

export const menu = [
  {
    title: "Dashboard",
    router: "/dashboard",
    icon: <Dashboard width={"20px"} />,
  },
  {
    title: "Slider",
    router: "/slider",
    icon: <Slider width={"20px"} />,
  },
  {
    title: "Anggota",
    router: "/anggota",
    icon: <Anggota width={"20px"} />,
  },
  {
    title: "Blog",
    router: "/blog",
    icon: <Blog width={"18px"} />,
    // icon: <img src={Blog} alt="" />,
  },
  {
    title: "Kegiatan",
    router: "/kegiatan",
    icon: <Home sx={{ fontSize: "23px" }} />,
  },
  {
    title: "Karya",
    router: "/karya",
    icon: <Home sx={{ fontSize: "23px" }} />,
  },
  {
    title: "Agenda",
    router: "/agenda",
    icon: <Agenda style={{marginTop: "5px"}} width={"24px"} height={"18px"} />,
  },
  {
    title: "Admin",
    router: "/admin",
    icon: <Admin />,
  },
];
