import { Card, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Card sx={{ display: "flex", px: "20px", py: "15px", }}>
      <Typography sx={{fontFamily: "Poppins",fontSize: "16px",fontWeight: 400}}>Crafted by</Typography>
      <Typography sx={{ color: "#FFC400", ml: "5px",fontFamily: "Poppins",fontSize: "16px" }}>
        Inready Workgroup
      </Typography>
    </Card>
  );
};

export default Footer;
