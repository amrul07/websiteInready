import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavbarComponent from "../components/navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
// import { menuDokter } from "../../values/Constant";
import {menu} from "../values/Constant"

const drawerWidth = 240;

function Index() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavbarComponent menu={menu} type="dokter" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Index;
