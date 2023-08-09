// import Sidenav from "./Sidenav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Setting from "./pages/Setting";
// import Tes from "./pages/Tes";
import Index from "./pages/Index";
import Dashboard from "./pages/dashboard/Dashboard";
import Slider from "./pages/slider/Slider";
import Login from "./pages/login/Login";
import Testing from "./pages/Testing";
import Coba from "./pages/Coba";
import Anggota from "./pages/anggota/Anggota"
import Blog from "./pages/blog/Blog";
import Kegiatan from "./pages/kegiatan/Kegiatan";
import Karya from "./pages/karya/Karya";
import Agenda from "./pages/agenda/Agenda";
import Admin from "./pages/admin/Admin";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/anggota" element={<Anggota /> } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/karya" element={<Karya />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/coba" element={<Coba />} />


          {/* <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/tes" element={<Tes />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
