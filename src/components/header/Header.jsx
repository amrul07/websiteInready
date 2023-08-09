import {
  Box,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logout from "../../assets/logout.png";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Import from "../../assets/import.svg";
import Printer from "../../assets/printer.svg";
import {
  ButtonBlue,
  ButtonGreen,
  ButtonRed,
  ButtonYellow,
} from "../button/Index";

const Header = (props) => {
  return (
    <Box>
      <Grid container sx={{ backgroundColor: "white", py: 1 }}>
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
            {props.title}
          </Typography>
        </Grid>
        <Grid xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControl
            onChange={props.onChange}
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
        <Grid
          xs={1}
          sx={{ display: "flex", justifyContent: "center" }}
          onClick={props.onClick}
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
      <Grid
        container
        gap={7}
        sx={{ backgroundColor: "white", mt: "1px", py: 2 }}
      >
        <Grid xs={4} sx={{ display: "flex", alignItems: "center" }}>
          <ButtonYellow
            onClick={props.onClickTambahData}
            variant="Contained"
            startIcon={<AddBoxIcon />}
            sx={{
              marginLeft: "30px",
              fontFamily: "Poppins",
              borderRadius: "8px",
              color: "white",
            }}
          >
            <Typography fontFamily={"Poppins"}>Tambah Data</Typography>
          </ButtonYellow>
        </Grid>
        <Grid xs={7}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <ButtonBlue
              onClick={props.onClickCsv}
              sx={{ borderRadius: "8px", color: "white" }}
              variant="contained"
              // color="primary"
            >
              <CardMedia
                sx={{
                  width: 25,
                  height: 25,
                }}
                image={Import}
                title="green iguana"
              />
              <Typography
                ml={1}
                sx={{ fontFamily: "poppins", textTransform: "none" }}
              >
                Import CSV
              </Typography>
            </ButtonBlue>
            <ButtonGreen
              onClick={props.onClickExcel}
              sx={{ borderRadius: "8px" }}
              variant="contained"
            >
              <CardMedia
                sx={{
                  width: 25,
                  height: 25,
                  //   alignSelf: "center",
                }}
                image={Import}
                title="green iguana"
              />
              <Typography
                ml={1}
                sx={{ fontFamily: "poppins", textTransform: "none" }}
              >
                Export Excel
              </Typography>
            </ButtonGreen>
            <ButtonRed
              onClick={props.onClickCetak}
              sx={{ borderRadius: "8px" }}
              variant="contained"
            >
              <CardMedia
                sx={{
                  width: 25,
                  height: 25,
                }}
                image={Printer}
                title="green iguana"
              />
              <Typography
                ml={1}
                sx={{ fontFamily: "poppins", textTransform: "none" }}
              >
                Cetak Laporan
              </Typography>
            </ButtonRed>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
