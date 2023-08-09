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

const Login = () => {
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
      navigate("/dashboard");
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
          sx={{ height: "100vh", width: "100%", backgroundColor: "#FFC400" }}
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
          <CardContent sx={{ mt: 6 }}>
            {/* email */}
            <FormControl
              sx={{ m: 1, width: "63%", fontFamily: "Poppins" }}
              variant="outlined"
              size="medium"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{ fontFamily: "Poppins", color: "#646464" }}
              >
                E-mail
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
              />
            </FormControl>
            {/* password */}
            <FormControl
              sx={{ m: 1, width: "63%", fontFamily: "Inter" }}
              variant="outlined"
              size="medium"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{ fontFamily: "Inter", color: "#646464" }}
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
              />
            </FormControl>
            <Stack>
              <Typography
                onClick={handleOpen}
                sx={{
                  width: "80%",
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
            <ButtonYellow onClick={handleLogin} sx={{ color: "white",width: "63%",mt: 3,py: 1,borderRadius: "12px"  }}>
              Login
            </ButtonYellow>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
