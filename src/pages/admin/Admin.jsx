import {
  Box,
  Card,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Input,
  Pagination,
  OutlinedInput,
  TextField,
  Autocomplete,
  CardMedia,
} from "@mui/material";
import Header from "../../components/header/Header";

import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import CreateIcon from "@mui/icons-material/Create";
import { RiDeleteBin5Fill } from "react-icons/ri";
import React, { useRef, useState } from "react";
import Drawer from "@mui/material/Drawer";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ImageIcon from "@mui/icons-material/Image";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { ButtonGreen, ButtonPink, ButtonYellow } from "../../components/button/Index";
import { ModalSlider } from "../../components/modal/Index";
import { dataAdmin } from "../../utils/InitialData";
import { themePagination } from "../../components/paginations/Index";
import Footer from "../../components/footer/Footer";
import IconKegiatan from "../../assets/detailKegiatan.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";

const useStyles = makeStyles({
  blueRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(255, 196, 0, 0.10)",
    },
  },
});
const Admin = () => {
  const [data, setData] = useState(dataAdmin);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newLevel, setNewLevel] = useState([0]);
  const [newTanggalPost, setNewTanggalPost] = useState("");
  const [newTanggalUpdate, setNewTanggalUpdate] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const csvFileRef = useRef(null);
  const [category, setCategory] = useState("filterByAlbum");
  const currentDate = new Date().toLocaleDateString();
  const [selectedDetail, setSelectedDetail] = useState(null);

  // detail
  const handleDetailClick = (detail) => {
    setSelectedDetail(detail);
  };

  const handleCloseDetail = () => {
    setSelectedDetail(null);
  };

  // category
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // import csv
  const handleFileCsvChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      parseCsvFile(file);
    }
  };

  const parseCsvFile = (file) => {
    Papa.parse(file, {
      complete: (result) => {
        const filteredData = result.data.filter(
          (row) => row.album && row.description && row.image
        );
        setData(filteredData);
      },
      header: true,
      skipEmptyLines: true,
    });
  };
  // import csv end

  // export excel
  const exportData = dataAdmin.map((item) => ({
    image: item.image,
    album: item.album,
    description: item.description,
  }));

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "dataExcel.xlsx");
  };
  // export excel end

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  const handleEdit = (id) => {
    setEditingId(id);
    const selectedItem = data.find((item) => item.id === id);
    // setNewImage(selectedItem.image);
    // setNewAlbum(selectedItem.album);
    // setNewDescription(selectedItem.description);
  };
  const handleAddChange = (e, field) => {
    if (field === "username") {
      setNewUser(e.target.value);
    } else if (field === "level") {
      setNewLevel(e.target.value);
    } else if (field === "tanggalPost") {
      setNewTanggalPost(e.target.value);
    } else if (field === "tanggalUpdate") {
      setNewTanggalUpdate(e.target.value);
    }
  };

  const handleAddData = () => {
    const newData = {
      id: data.length + 1,
      username: newUser,
      level: newLevel,
      tanggalPost: currentDate,
      tanggalUpdate: currentDate,
    };
    setData([...data, newData]);

    setNewUser("");
    setNewLevel("");
    setNewTanggalPost("");
    setNewTanggalUpdate("");
    setOpenDrawer(false);
    setIsModalOpen(true);
  };

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeItemsPerPage = (event) => {
    setItemsPerPage(event.target.value);
    setPage(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // print
  const handlePrint = () => {
    const printContent = document.getElementById("print-content");
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContent.outerHTML;
    window.print();

    document.body.innerHTML = originalContents;
  };
  return (
    <Box sx={{ fontFamily: "Poppins", mt: "-23px" }}>
      <Header
        title={"Admin"}
        onClickTambahData={toggleDrawer(true)}
        onClickCsv={() => csvFileRef.current.click()}
        onClickCetak={handlePrint}
        onClickExcel={exportToExcel}
      />
      <Box my={3}>
      {selectedDetail ? (
          // halaman detail
          <Box>
            <Card>
              <Stack
                sx={{
                  py: 2,
                  pl: 4,
                  display: "flex",
                  gap: 2,
                  flexDirection: "row",
                }}
              >
                <CardMedia
                  sx={{ width: "24px", height: "24px", cursor: "pointer" }}
                  image={IconKegiatan}
                  onClick={handleCloseDetail}
                />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    color: "#D1D3E2",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                  onClick={handleCloseDetail}
                >
                  Admin
                </Typography>
                <Typography sx={{ mt: "4px", ml: "-4px" }}>
                  <ArrowForwardIosIcon
                    sx={{ color: "#576974", fontSize: "18px" }}
                  />
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    color: "#576974",
                    ml: "-5px",
                    mt: "2px",
                    fontWeight: 500,
                  }}
                >
                  Detail Admin
                </Typography>
              </Stack>
            </Card>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Card
                sx={{ paddingX: 4, paddingY: 3, textAlign: "left" }}
                className="album-description"
              >
                <Grid
                  container
                  sx={{ display: "flex", flexDirection: "row", my: 1 }}
                >
                  <Grid item xs={4}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      Username
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      : {selectedDetail.username}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{ display: "flex", flexDirection: "row", my: 1 }}
                >
                  <Grid item xs={4}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      Password
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      : {selectedDetail.password}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{ display: "flex", flexDirection: "row", my: 1 }}
                >
                  <Grid item xs={4}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      Level
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      : {selectedDetail.level}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{ display: "flex", flexDirection: "row", my: 1 }}
                >
                  <Grid item xs={4}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      TanggalPost
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      : {selectedDetail.tanggalPost}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{ display: "flex", flexDirection: "row", my: 1 }}
                >
                  <Grid item xs={4}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      TanggalUpdate
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      : {selectedDetail.tanggalUpdate}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Box>
        ) : (
        <Card>
          <Stack
            display={"flex"}
            direction={"row"}
            sx={{
              py: 3,
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(232, 232, 232, 0.87)",
              width: "95%",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <FormControl sx={{ fontFamily: "Poppins" }}>
              <Stack display={"flex"} direction={"row"}>
                <Typography sx={{ fontFamily: "Poppins" }}>
                  Tampilkan
                </Typography>
                <Select
                  sx={{ height: 25, width: 62, mx: 1, fontFamily: "Poppins" }}
                  value={itemsPerPage}
                  onChange={handleChangeItemsPerPage}
                >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={data.length}>All</MenuItem>
                </Select>
                <Typography sx={{ fontFamily: "Poppins" }}>Data</Typography>
              </Stack>
            </FormControl>
            {/* menu */}
            <FormControl sx={{ fontFamily: "Poppins" }}>
              <Stack>
                <Select
                  sx={{ height: 30, width: 230, fontFamily: "Poppins" }}
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <MenuItem
                    sx={{ fontFamily: "Poppins" }}
                    value={"filterByAlbum"}
                  >
                    Filter By Judul Karya
                  </MenuItem>
                  <MenuItem
                    sx={{ fontFamily: "Poppins" }}
                    value={"detailKegiatan"}
                  >
                    Detail Kegiatan
                  </MenuItem>
                </Select>
              </Stack>
            </FormControl>
          </Stack>
          <div id="print-content">
            <TableContainer
              sx={{ px: 5, fontFamily: "Poppins" }}
              component={Paper}
            >
              <Table>
                <TableHead sx={{ fontFamily: "Poppins" }}>
                  <TableRow>
                    <TableCell sx={{ fontFamily: "Poppins", width: "350px" }}>
                      Username
                    </TableCell>
                    <TableCell sx={{ fontFamily: "Poppins", width: "350px" }}>
                      Level
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins",
                        width: "40px",
                        textAlign: "center",
                      }}
                    >
                      Aksi
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ fontFamily: "Poppins" }}>
                  {data
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((row) => (
                      <TableRow key={row.id} className={classes.blueRow}>
                        <TableCell sx={{ fontFamily: "Poppins" }}>
                          {row.username}
                        </TableCell>
                        <TableCell sx={{ fontFamily: "Poppins" }}>
                          {row.level}
                        </TableCell>
                        <TableCell>
                          <Stack
                            direction={"row"}
                            spacing={1}
                            sx={{
                              // display: "flex",
                              alignItems: "center",
                              alignSelf: "center",
                              justifyContent: "end",
                            }}
                          >
                            <ButtonGreen
                                variant="Contained"
                                sx={{ color: "white" }}
                                style={{ width: "-10px" }}
                                onClick={() => handleDetailClick(row)}
                              >
                                <VisibilityIcon />
                              </ButtonGreen>
                            <ButtonYellow
                              sx={{ color: "white" }}
                              variant="Contained"
                              onClick={() => handleEdit(row.id)}
                            >
                              <CreateIcon />
                            </ButtonYellow>
                            <ButtonPink
                              sx={{ fontSize: "20px", color: "#FF2E00" }}
                              variant="Contained"
                              size="small"
                              onClick={() => handleDelete(row.id)}
                            >
                              <RiDeleteBin5Fill
                                sx={{ color: "#FF2E00", fontSize: "20px" }}
                              />
                            </ButtonPink>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Card sx={{ px: 4, py: 4 }}>
            <Stack
              display={"flex"}
              direction={"row"}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography sx={{ fontFamily: "Poppins" }}>
                Menampilkan 1 - {itemsPerPage} dari {data.length} Data
              </Typography>
              {/* pagination */}
              <ThemeProvider theme={themePagination}>
                <Pagination
                  sx={{ color: "#FFC400" }}
                  count={Math.ceil(data.length / itemsPerPage)}
                  page={page}
                  onChange={handleChangePage}
                />
              </ThemeProvider>
            </Stack>
          </Card>
        </Card>
         )}
      </Box>
      {/* Drawer */}
      <Drawer anchor="right" open={openDrawer} sx={{ width: 700 }}>
        <Box
          sx={{ width: 550, px: 4, fontFamily: "Poppins", pb: 3 }}
          role="presentation"
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              pt: 4,
              fontWeight: 500,
              fontSize: "20px",
            }}
          >
            Admin
          </Typography>

          <Stack sx={{ mt: 4 }}>
            {/* username */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
              * Username
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: 1,
              }}
              placeholder="Masukkan Judul Agenda"
              value={newUser}
              onChange={(e) => handleAddChange(e, "username")}
            ></OutlinedInput>
            {/* level */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Level
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={['user','admin']}
              size="small"
              sx={{ mt: "5px" }}
              value={newLevel} 
              onChange={(event, value) => {
                setNewLevel(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ fontFamily: "Poppins" }}
                  placeholder={"Pilih Level"}
                  
                  
                />
              )}
            />
          </Stack>
          <Stack
            mt={3}
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <ButtonYellow
              // onClick={toggleDrawer(false)}
              onClick={handleAddData}
              sx={{
                width: "130px",
                py: 1,
                color: "white",
                borderRadius: "8px",
              }}
              startIcon={<CreateIcon />}
            >
              Simpan
            </ButtonYellow>
            <ButtonPink
              onClick={toggleDrawer(false)}
              sx={{
                width: "130px",
                py: 1,
                color: "#FF2E00",
                borderRadius: "8px",
              }}
              startIcon={<RiDeleteBin5Fill />}
            >
              Batal
            </ButtonPink>
          </Stack>
        </Box>
      </Drawer>

      {/* Modal */}
      <ModalSlider open={isModalOpen} onClick={closeModal} />
      <Footer />
    </Box>
  );
};

export default Admin;
