import { ReactComponent as Dashboard } from "../assets/navbar/dashboard.svg";
import { ReactComponent as Blog } from "../assets/navbar/blog.svg";
import { ReactComponent as Slider } from "../assets/navbar/slider.svg";
import { ReactComponent as Anggota } from "../assets/navbar/anggota.svg";
// import { ReactComponent as Kegiatan } from "../assets/navbar/kegiatan.svg";
import { ReactComponent as Agenda } from "../assets/navbar/agenda.svg";
import { ReactComponent as Admin } from "../assets/navbar/admin.svg";
import { ReactComponent as Kegiatan } from "../assets/navbar/kegiatan.svg";
import { ReactComponent as Karya } from "../assets/navbar/karya.svg";
import { ReactComponent as Gallery } from "../assets/navbar/gallery.svg";
import { ReactComponent as Presidium } from "../assets/navbar/presidium.svg";
import { ReactComponent as Bpo } from "../assets/navbar/bpo.svg";
import { ReactComponent as Divisi } from "../assets/navbar/divisi.svg";

export const menu = [
  {
    title: "Dashboard",
    router: "/",
    icon: <Dashboard width={"20px"} />,
  },
  {
    title: "Slider",
    router: "/slider",
    icon: <Slider width={"22px"} />,
  },
  {
    title: "Anggota",
    router: "/anggota",
    icon: <Anggota width={"22px"} />,
  },
  {
    title: "Presidium",
    router: "/presidium",
    icon: <Presidium width={"22px"} />,
  },
  {
    title: "Bpo",
    router: "/bpo",
    icon: <Bpo width={"22px"} />,
  },
  {
    title: "Division",
    router: "/division",
    icon: <Divisi width={"24px"} />,
  },
  {
    title: "Blog",
    router: "/blog",
    icon: <Blog style={{ paddingLeft: "1px" }} width={"18px"} />,
    // icon: <img src={Blog} alt="" />,
  },
  {
    title: "Gallery",
    router: "/gallery",
    icon: <Gallery style={{ paddingLeft: "1px" }} width={"20px"} />,
    // icon: <img src={Blog} alt="" />,
  },
  {
    title: "Kegiatan",
    router: "/kegiatan",
    icon: <Kegiatan style={{ paddingLeft: "2px" }} width={"20px"} />,
  },
  {
    title: "Karya",
    router: "/karya",
    icon: <Karya style={{ paddingLeft: "1px" }} width={"18px"} />,
  },
  {
    title: "Agenda",
    router: "/agenda",
    icon: (
      <Agenda style={{ marginTop: "5px" }} width={"26px"} height={"18px"} />
    ),
  },
  {
    title: "Admin",
    router: "/admin",
    icon: <Admin style={{ marginTop: "5px", paddingLeft: "1px" }} />,
  },
];
