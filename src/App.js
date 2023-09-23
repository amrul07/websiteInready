// import Sidenav from "./Sidenav";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
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
import Anggota from "./pages/anggota/Anggota";
import Blog from "./pages/blog/Blog";
import Kegiatan from "./pages/kegiatan/Kegiatan";
import Karya from "./pages/karya/Karya";
import Agenda from "./pages/agenda/Agenda";
import Admin from "./pages/admin/Admin";
import Gallery from "./pages/gallery/Gallery";
import Presidium from "./pages/presidium/Presidium";
import Bpo from "./pages/bpo/Bpo";
import Division from "./pages/division/Division";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Index /> : <Navigate to="/login" replace={true} />
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/anggota" element={<Anggota />} />
            <Route path="/bpo" element={<Bpo />} />
            <Route path="/presidium" element={<Presidium />} />
            <Route path="/division" element={<Division />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/karya" element={<Karya />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
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
