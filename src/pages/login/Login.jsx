import {
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Bg from "../../assets/bg_login.svg";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ModalLogin } from "../../components/modal/Index";
import { ButtonYellow } from "../../components/button/Index";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = () => {
    // Ganti email dan password berikut dengan data yang Anda inginkan
    const validEmail = "admin@gmail.com";
    const validPassword = "admin123";

    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Email atau password salah!");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={6}>
        <CardMedia
          sx={{ height: "100vh", width: "111%", backgroundColor: "#FFC400",marginLeft: "-75px" }}
          image={Bg}
          alt={"bg"}
        />
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ textAlign: "center", height: "100%" }}>
          <Typography
            sx={{
              marginTop: "100px",
              fontSize: "24px",
              fontFamily: "Poppins",
              fontWeight: 500,
            }}
          >
            Admin
          </Typography>
          <Typography
            sx={{ fontSize: "40px", fontWeight: 600, fontFamily: "Poppins" }}
          >
            Login
          </Typography>
          <CardContent
            sx={{
              mt: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* username */}
            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: 1,
                width: "50%",
                alignSelf: "center"
              }}
              placeholder="Masukkan Judul Agenda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></OutlinedInput>
            {/* password */}
            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: 1,
                width: "50%",
                alignSelf: "center"
              }}
              placeholder="Masukkan Judul Agenda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></OutlinedInput>
            <Stack>
              <Typography
                onClick={handleOpen}
                sx={{
                  width: "75%",
                  mt: 1,
                  textAlign: "end",
                  cursor: "pointer",
                }}
                color={"#646464"}
              >
                Lupa Password?
              </Typography>
              {/* modal */}
              <ModalLogin
                open={open}
                onClick={handleClose}
                onClickBack={handleClose}
              />
            </Stack>
            <ButtonYellow
              onClick={handleLogin}
              sx={{
                color: "white",
                width: "50%",
                mt: 3,
                py: 1,
                borderRadius: "12px",
                alignSelf: "center"
              }}
            >
              Login
            </ButtonYellow>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
