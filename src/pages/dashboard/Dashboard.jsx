import {
  Box,
  Card,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logout from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";
import Konsentrasi from "../../components/dashboard/konsentrasi/Konsentrasi";
import Kalender from "../../components/dashboard/kalender/Kalender";
import Kegiatan from "../../components/dashboard/kegiatan terlaksana/Kegiatan";
import Agenda from "../../components/dashboard/agenda/Agenda";
import Footer from "../../components/footer/Footer";

const Dashboard = () => {
  const label = ["Bootcamp", "Open house", "Pembelajaran"];
  const date = [
    [new Date("2023/04/03").getTime(), new Date("2023/04/10").getTime()],
    [new Date("2023/04/12").getTime(), new Date("2023/04/17").getTime()],
    [new Date("2023/04/20").getTime(), new Date("2023/04/26").getTime()],
  ];
  const navigate = useNavigate();
  return (
    <Box sx={{ marginTop: "-23px" }}>
      <Grid container sx={{ backgroundColor: "white", py: 1 }}>
        <Grid xs={6} sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ marginLeft: "30px" ,fontFamily: "Poppins",fontWeight: 500,fontSize: "18px",color: "black"}}
          >
            Dashboard
          </Typography>
        </Grid>
        <Grid xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControl
            sx={{ m: 1, width: "35ch",fontFamily: "Poppins" }}
            variant="outlined"
            size="small"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password" sx={{fontFamily: "Poppins"}}>
              Search
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              
            />
          </FormControl>
        </Grid>
        <Grid
          xs={1}
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={() => navigate("/slider")}
        >
          <CardMedia
            sx={{
              width: 25,
              height: 30,
              alignSelf: "center",
            }}
            image={Logout}
            title="green iguana"
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3, display: "flex", }}>
        <Grid gap={2} sx={{ width: 350 }}>
          <Card sx={{ borderRadius: "20px",height: 200 }}>
            <Konsentrasi
              series={[45, 90, 35]}
              labels={[`45 Desain`, `90 Website`, `35 Mobile`,`170 Orang`]}
            />
          </Card>
          <Card sx={{ mt: 2, borderRadius: "20px" }}>
            <Kegiatan
              series={[
                {
                  name: "Kegiatan",
                  data: [
                    {
                      x: 1996,
                      y: 8,
                    },
                    {
                      x: 1997,
                      y: 9,
                    },
                    {
                      x: 1998,
                      y: 8,
                    },
                    {
                      x: 1999,
                      y: 9,
                    },
                    {
                      x: 2000,
                      y: 8,
                    },
                  ],
                },
              ]}
            />
          </Card>
        </Grid>
        <Grid sx={{ marginLeft: 3, height: "100%", width: 700 }}>
          <Card sx={{ borderRadius: "20px" }}>
            <Kalender />
          </Card>
          <Card sx={{ borderRadius: "20px", mt: 2 }}>
            <Agenda
              series={[
                {
                  data: [
                    {
                      x: `${label[0]} `,
                      y: date[0],
                      fillColor: "#FFC400",
                    },
                    {
                      x: `${label[1]} `,
                      y: date[1],
                      fillColor: "#FFC400",
                    },
                    {
                      x: `${label[2]} `,
                      y: date[2],
                      fillColor: "#FFC400",
                    },
                  ],
                  
                },
              ]}
            />
          </Card>
        </Grid>
      </Box>

      <Stack sx={{ mt: 2, mb: "-23px" }}>
        <Footer />
      </Stack>
    </Box>
  );
};

export default Dashboard;
