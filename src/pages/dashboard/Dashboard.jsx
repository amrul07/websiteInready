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
import { useEffect } from "react";
import { fetchData } from "../../service/api";
import { useState } from "react";

const Dashboard = () => {
  const [dataKonsentrasi, setDataKonsentrasi] = useState([]);
  const [website, setWebsite] = useState();
  const [desain, setDesain] = useState();
  const [mobile, setMobile] = useState();
  const [dataAgenda, setDataAgenda] = useState([]);

  const seriesAgenda = dataAgenda.map((item, index) => ({
    data: [
      {
        x: item.title,
        y: [new Date(item.time).getTime(), new Date("2024-02-01").getTime()],
        fillColor: "#FFC400",
      },
    ],
  }));

  const label = ["Bootcamp", "Open house", "Pembelajaran"];
  const date = [
    [new Date("2023/04/03").getTime(), new Date("2023/04/10").getTime()],
    [new Date("2023/04/12").getTime(), new Date("2023/04/17").getTime()],
    [new Date("2023/04/20").getTime(), new Date("2023/04/26").getTime()],
  ];
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(`/dashboard/member_chart`).then((res) => {
      setDataKonsentrasi(res.data);
      setWebsite(res.data.website_count);
      setDesain(res.data.desain_count);
      setMobile(res.data.mobile_count);
      console.log("data konsentrasi", res.data);
    });
    fetchData(`/dashboard/upcoming_agenda`).then((res) => {
      setDataAgenda(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Box sx={{ marginTop: "-23px" }}>
      <Grid container sx={{ backgroundColor: "white", py: 1 }}>
        {/* title */}
        <Grid xs={6} sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              marginLeft: "30px",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "18px",
              color: "black",
            }}
          >
            Dashboard
          </Typography>
        </Grid>
        {/* search */}
        <Grid xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControl
            // onChange={props.onChange}
            sx={{ m: 1, width: "35ch", fontFamily: "Poppins" }}
            variant="outlined"
            size="small"
            fullWidth
          >
            <OutlinedInput
              sx={{ fontFamily: "Poppins" }}
              placeholder="Search"
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
        {/* logout */}
        <Grid
          xs={1}
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={() => navigate("/login")}
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

      <Box sx={{ mt: 3, display: "flex" }}>
        <Grid gap={2} sx={{ width: 350 }}>
          <Card sx={{ borderRadius: "20px", height: 200 }}>
            <Konsentrasi
              // series={[desain, website, mobile]}
              series={[19, 14, 17]}
              labels={[
                `${dataKonsentrasi.desain_count} Desain`,
                `${dataKonsentrasi.website_count} Website`,
                `${dataKonsentrasi.mobile_count} Mobile`,
                `${dataKonsentrasi.member_count} Orang`,
              ]}
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
            <Agenda series={seriesAgenda} />
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
