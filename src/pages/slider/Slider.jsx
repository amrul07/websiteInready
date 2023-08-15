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
  TextField,
  Typography,
  Grid,
  Input,
  Pagination,
  OutlinedInput,
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
import "./Slider.css";
import { ButtonPink, ButtonYellow } from "../../components/button/Index";
import { ModalSlider } from "../../components/modal/Index";
import { initialData } from "../../utils/InitialData";
import { themePagination } from "../../components/paginations/Index";
import Footer from "../../components/footer/Footer";
import IconKegiatan from "../../assets/detailKegiatan.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles({
  blueRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(255, 196, 0, 0.10)",
    },
  },
});

const Slider = () => {
  const [data, setData] = useState(initialData);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [menu, setMenu] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [newImage, setNewImage] = useState("");
  const [newAlbum, setNewAlbum] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const csvFileRef = useRef(null);
  const [category, setCategory] = useState("filterByAlbum");
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
  const exportData = initialData.map((item) => ({
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

  const handleEdit = (id) => {
    setEditingId(id);
    const selectedItem = data.find((item) => item.id === id);
    setNewImage(selectedItem.image);
    setNewAlbum(selectedItem.album);
    setNewDescription(selectedItem.description);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleSaveEdit = () => {
    const updatedData = data.map((item) =>
      item.id === editingId
        ? {
            id: editingId,
            image: newImage,
            album: newAlbum,
            description: newDescription,
          }
        : item
    );
    setData(updatedData);
    setEditingId(null);
    setNewImage("");
    setNewAlbum("");
    setNewDescription("");
  };

  const handleInputChange = (e, field) => {
    if (field === "album") {
      setNewAlbum(e.target.value);
    } else if (field === "description") {
      setNewDescription(e.target.value);
    }
  };

  const handleAddData = () => {
    const newData = {
      id: data.length + 1,
      image: newImage,
      album: newAlbum,
      description: newDescription,
    };
    setData([...data, newData]);

    setNewImage("");
    setNewAlbum("");
    setNewDescription("");
    setOpenDrawer(false);
    setIsModalOpen(true);
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.value);
  };

  const handleAlbumChange = (e) => {
    setNewAlbum(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
  };

  const handleChooseFileClick = () => {
    document.querySelector('input[type="file"]').click();
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

  const handleChangeMenu = (event) => {
    setMenu(event.target.value);
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
      {/* import csv */}
      {/* <input  
        type="file"
        // accept=".csv"
        // onChange={handleFileCsvChange}
        style={{ display: "none" }}
        // ref={csvFileRef}
      /> */}
      {/* end import csv */}
      <Header
        title={"Slider"}
        onClickTambahData={toggleDrawer(true)}
        onClickCsv={() => csvFileRef.current.click()}
        onClickCetak={handlePrint}
        onClickExcel={exportToExcel}
      />
      <Box my={3}>
        {selectedDetail ? (
          // halaman detail
          <Card>
            <Stack sx={{ py: 2, pl: 4, display: "flex", gap: 2,flexDirection: "row" }}>
              <CardMedia
                sx={{ width: "24px", height: "24px",cursor: "pointer" }}
                image={IconKegiatan}
                onClick={handleCloseDetail}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: "#D1D3E2",
                  fontWeight: 500,
                  cursor: "pointer"
                }}
                onClick={handleCloseDetail}
              >
                Kegiatan
              </Typography>
              <Typography sx={{ mt: "4px", ml: "-4px" }}>
                <ArrowForwardIosIcon
                  sx={{ color: "#576974", fontSize: "18px" }}
                />
              </Typography>
              <Typography sx={{ fontFamily: "Poppins", color: "#576974" ,ml: "-5px",mt: "2px",fontWeight: 500}}>
                Detail Kegiatan
              </Typography>
            </Stack>
          </Card>
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
                    sx={{ height: 30, width: 200, fontFamily: "Poppins" }}
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <MenuItem
                      sx={{ fontFamily: "Poppins" }}
                      value={"filterByAlbum"}
                    >
                      Filter By Album
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
                      <TableCell sx={{ fontFamily: "Poppins", width: "170px" }}>
                        Gambar
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins", width: "240px" }}>
                        Album
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins", width: "450px" }}>
                        Deskripsi
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Poppins",
                          width: "100px",
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
                        <TableRow
                          sx={{ cursor: "pointer" }}
                          key={row.id}
                          className={classes.blueRow}
                          onClick={() => handleDetailClick(row)}
                        >
                          <TableCell>
                            <img
                              style={{ objectFit: "cover" }}
                              src={row.image}
                              alt={`Gambar ${row.album}`}
                              width="99"
                              height="111"
                            />
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {editingId === row.id ? (
                              <TextField
                                value={newAlbum}
                                onChange={(e) => handleInputChange(e, "album")}
                              />
                            ) : (
                              // <OutlinedInput placeholder="Please enter text" />
                              row.album
                            )}
                          </TableCell>
                          {/* edit yg asli */}
                          {/* <TableCell sx={{ fontFamily: "Poppins" }}>
                        {row.album}
                      </TableCell> */}
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {editingId === row.id ? (
                              <TextField
                                value={newDescription}
                                onChange={(e) =>
                                  handleInputChange(e, "description")
                                }
                              />
                            ) : (
                              row.description
                            )}
                          </TableCell>
                          {/* deskripsi asli */}
                          {/* <TableCell sx={{ fontFamily: "Poppins" }}>
                        {row.description}
                      </TableCell> */}
                          <TableCell>
                            <Stack
                              direction={"row"}
                              spacing={1}
                              sx={{
                                // display: "flex",
                                alignItems: "center",
                                alignSelf: "center",
                              }}
                            >
                              {editingId === row.id ? (
                                <ButtonYellow
                                  sx={{ color: "white" }}
                                  variant="contained"
                                  onClick={handleSaveEdit}
                                >
                                  Save
                                </ButtonYellow>
                              ) : (
                                <ButtonYellow
                                  sx={{ color: "white" }}
                                  variant="Contained"
                                  onClick={() => handleEdit(row.id)}
                                >
                                  <CreateIcon />
                                </ButtonYellow>
                              )}
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
      {/* filter by album end */}

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
            Slider
          </Typography>

          <Stack sx={{ mt: 4 }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "14px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Foto
            </Typography>
          </Stack>
          <Grid container gap={3} mt={1}>
            <Grid xs={4}>
              <Stack sx={{ border: "1px dashed #576974", borderRadius: "8px" }}>
                <AddPhotoAlternateIcon
                  sx={{
                    color: "#576974",
                    fontSize: "60px",
                    margin: "0 auto",
                    mt: 3,
                  }}
                />
                <Typography
                  sx={{
                    mt: 1,
                    width: "80%",
                    alignSelf: "center",
                    fontFamily: "Poppins",
                    color: "#576974",
                    textAlign: "center",
                  }}
                >
                  Tarik dan lepas foto di sini
                </Typography>
                <Input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <ButtonYellow
                  sx={{
                    my: 2,
                    alignSelf: "center",
                    color: "white",
                    width: "80%",
                    borderRadius: "8px",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={handleChooseFileClick}
                  value={newImage}
                  onChange={handleImageChange}
                >
                  Pilih File
                </ButtonYellow>
              </Stack>
            </Grid>
            <Grid xs={5}>
              <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
                Upload Files
              </Typography>
              {selectedFile && (
                <Stack
                  sx={{ display: "flex", flexDirection: "row" }}
                  // gap={"2px"}
                >
                  <ImageIcon
                    sx={{ color: "#576974", pt: 1, fontSize: "30px" }}
                  />
                  <Typography
                    sx={{ mt: 1, fontFamily: "Poppins", fontSize: "14px" }}
                  >
                    {selectedFile.name}
                  </Typography>
                </Stack>
              )}
            </Grid>
            <Grid xs={1} pt={5}>
              {selectedFile && (
                <Typography
                  sx={{
                    fontSize: "20px",
                    cursor: "pointer",
                    textAlign: "end",
                  }}
                  color="#576974"
                  onClick={handleDeleteFile}
                >
                  <RiDeleteBin5Fill />
                </Typography>
              )}
            </Grid>
          </Grid>
          <Stack mt={2}>
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
              Album
            </Typography>

            <OutlinedInput
              sx={{ fontFamily: "Poppins" }}
              placeholder="Masukkan nama Album"
              value={newAlbum}
              onChange={handleAlbumChange}
            ></OutlinedInput>
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 1 }}>
              Deskripsi
            </Typography>

            <OutlinedInput
              sx={{ fontFamily: "Poppins" }}
              placeholder="Masukkan Deskripsi"
              multiline
              rows={4}
              value={newDescription}
              onChange={handleDescriptionChange}
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

      {/* Detail Kegiatan */}
      {category === "detailKegiatan" && (
        <Box mt={3}>
          <Card sx={{ py: 2, pl: 4, display: "flex", gap: 2 }}>
            <CardMedia
              sx={{ width: "24px", height: "24px" }}
              image={IconKegiatan}
            />
            <Typography
              sx={{ fontFamily: "Poppins", color: "#D1D3E2", fontWeight: 500 }}
            >
              Kegiatan
            </Typography>
            {/* <Typography sx={{ mt: "4px", ml: "-4px" }}>
              <ArrowForwardIosIcon
                sx={{ color: "#576974", fontSize: "18px" }}
              />{" "}
            </Typography> */}
            <FormControl
              variant="standard"
              style={{ border: "none" }}
              sx={{ fontFamily: "Poppins", mt: "-2px", ml: "-5px" }}
            >
              <Stack>
                <Select
                  sx={{
                    height: 30,
                    width: 200,
                    fontFamily: "Poppins",
                    color: "#576974",
                  }}
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <MenuItem
                    sx={{ fontFamily: "Poppins" }}
                    value={"filterByAlbum"}
                  >
                    Filter By Album
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
          </Card>
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default Slider;
