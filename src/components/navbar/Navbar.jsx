import Drawer from "@mui/material/Drawer";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  CardMedia,
  Grid,
  IconButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/navbar/Logo.png";
import "../../index.css";

const drawerWidth = 240;

const NavbarComponent = ({ menu, type }) => {
  //   const fs = FirebaseServices();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const split = pathname.split("/");
  const urlpath = `/${split[1]}${split[2] === undefined ? "" : `/${split[2]}`}`;

  const [value, setValue] = useState({
    nama: "",
    image: "",
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    // const user = await fs.getCurrentUser();
    // const data = await fs.getDataQuery(type, "email", user.email);
    // setValue({
    //   ...value,
    //   nama: type === "dokter" ? data[0].nama_dokter : data[0].nama_lengkap,
    //   tipe:
    //     type === "dokter" ? `Spesialis : ${data[0].spesialis}` :  data[0].type,
    //   image: data[0].image,
    // });
  };

  const drawer = (
    <div>
      {/* darusullam media center */}
      <Stack sx={{ textAlign: "center" }}>
        <CardMedia
          sx={{
            width: 200,
            height: 60,
            mt: "15px",
            borderRadius: "8px",
            alignSelf: "center",
          }}
          image={Logo}
          title="green iguana"
        />

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "20px",
            mt: 2,
            fontWeight: 400,
          }}
        >
          Inready Workgroup
        </Typography>
      </Stack>
      <Stack>
        <Stack sx={{ width: "100%", mt: 3 }}>
          {menu.map((val, index) => (
            <Stack
              sx={{ cursor: "pointer" }}
              key={val.title}
              disablePadding
              onClick={async () => {
                if (val.router !== "") {
                  navigate(val.router);
                } else {
                  try {
                    // await fs.onSignOut();
                    navigate("/");
                  } catch (error) {
                    alert(error);
                  }
                }
              }}
            >
              {/* <ListItemButton */}
              {/* style={{ fontFamily: "lato" }} */}
              {/* > */}
              <Grid
                gap={1}
                container
                direction="row"
                sx={{
                  // display: "flex",
                  //   flexDirection: "row",
                  // border: val.router === urlpath && "1px solid",

                  paddingY: "10px",
                  //   width: 240,
                  background:
                    val.router === urlpath ? "rgba(255, 196, 0, 0.24)" : "#fff",
                  // justifyContent: "space-evenly",
                }}
              >
                <Grid item xs={2} sx={{ marginLeft: "10px" }}>
                  <Typography
                    sx={{
                      // marginX: "auto",
                      // pt: "-10px",
                      // fontSize: "18px",
                      width: "32px",
                      height: "30px",
                      textAlign: "center",
                      background: val.router === urlpath ? "#FFC300" : "#fff",
                      borderRadius: "12px",
                      color: val.router === urlpath ? "black" : "#576974",
                    }}
                  >
                    {React.cloneElement(val.icon, {
                      fill: urlpath === val.router ? "black" : "#576974",
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      color: val.router === urlpath ? "black" : "#576974",
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      fontSize: "16px",
                      pt: "4px"
                    }}
                  >
                    {val.title}
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        height: "100%",
        border: "none",
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        PaperProps={{
          sx: {
            border: "none",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default NavbarComponent;
