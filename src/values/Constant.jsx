import { Home, Person, } from "@mui/icons-material";
import P from "../assets/navbar/dashboard.svg"
import Blog from "../assets/navbar/blog.svg"
import { FaHome, } from "react-icons/fa";
import { IoImageSharp, } from "react-icons/io5";



export const menu = [
  {
    title: "Dashboard",
    router: "/dashboard",
    icon: <FaHome sx={{ fontSize: "23px",  }} />,
  },
  {
    title: "Slider",
    router: "/slider",
    icon: <IoImageSharp sx={{ fontSize: "23px",  }} />,
  },
  {
    title: "Anggota",
    router: "/anggota",
    icon: <Person sx={{ fontSize: "23px",  }} />,
  },
  {
    title: "Blog",
    router: "/blog",
    icon: <img src={Blog} alt="" />,
  },
  {
    title: "Kegiatan",
    router: "/kegiatan",
    icon: <Home sx={{ fontSize: "23px",  }} />,
  },
  {
    title: "Karya",
    router: "/karya",
    icon: <Home sx={{ fontSize: "23px",  }} />,
  },
  {
    title: "Agenda",
    router: "/agenda",
    icon: <Home sx={{ fontSize: "23px",  }} />,
  },
  {
    title: "Admin",
    router: "/admin",
    icon: <Home sx={{ fontSize: "23px",  }} />,
  },
];
