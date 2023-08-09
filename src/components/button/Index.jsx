import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";


const ButtonYellow = styled(Button)(({ theme }) => ({
    backgroundColor: "#FFC400",
    fontFamily: "Poppins",
    textTransform: "none",
    color: "#FFC400",
    "&:hover": {
      backgroundColor: "#FFC400",
    },
  }));
const ButtonBlue = styled(Button)(({ theme }) => ({
    backgroundColor: "#099CBC",
    fontFamily: "Poppins",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#099CBC",
    },
  }));
const ButtonGreen = styled(Button)(({ theme }) => ({
    backgroundColor: "#0C9A54",
    fontFamily: "Poppins",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#0C9A54",
    },
  }));
const ButtonRed = styled(Button)(({ theme }) => ({
    backgroundColor: "#D94B2B",
    fontFamily: "Poppins",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#D94B2B",
    },
  }));
const ButtonPink = styled(Button)(({ theme }) => ({
    backgroundColor: "#FFD5CC",
    fontFamily: "Poppins",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#FFD5CC",
    },
  }));

  export {ButtonYellow, ButtonBlue, ButtonGreen, ButtonRed, ButtonPink}