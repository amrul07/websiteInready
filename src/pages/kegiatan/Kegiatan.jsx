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
  CardMedia,
} from "@mui/material";
import Header from "../../components/header/Header";
import Image from "../../assets/image.svg";
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
import {
  ButtonGreen,
  ButtonPink,
  ButtonYellow,
} from "../../components/button/Index";
import { ModalSlider } from "../../components/modal/Index";
import { dataKegiatan } from "../../utils/InitialData";
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

const Kegiatan = () => {
  const [data, setData] = useState(dataKegiatan);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [newImage, setNewImage] = useState("");
  const [newJudulKegiatan, setNewJudulKegiatan] = useState("");
  const [newLokasi, setNewLokasi] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newWaktu, setNewWaktu] = useState("");
  const [newTanggalPost, setNewTanggalPost] = useState("");
  const [newTanggalUpdate, setNewTanggalUpdate] = useState("");
  const [newDeskripsi, setNewDeskripsi] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const csvFileRef = useRef(null);
  const [category, setCategory] = useState("filterByAlbum");
  const currentDate = new Date().toLocaleDateString();
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [editMode, setEditMode] = useState(false);

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
  const exportData = dataKegiatan.map((item) => ({
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

  // edit
  const handleEdit = (id) => {
    setEditingId(id);
    const selectedItem = data.find((item) => item.id === id);
    setNewImage(selectedItem.image);
    setNewJudulKegiatan(selectedItem.judulKegiatan);
    setNewLokasi(selectedItem.lokasi);
    setNewLink(selectedItem.linkDaftar);
    setNewWaktu(selectedItem.waktu);
    setNewTanggalPost(selectedItem.tanggalPost);
    setNewTanggalUpdate(selectedItem.tanggalUpdate);
    setNewDeskripsi(selectedItem.deskripsi);
    setOpenDrawer(true);
    setEditMode(true);
  };
  // delete
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  // // tombol save atau simpan data
  const handleSave = () => {
    if (editMode) {
      const updatedData = data.map((item) =>
        item.id === editingId
          ? {
              id: editingId,
              image: [newImage],
              judulKegiatan: newJudulKegiatan,
              lokasi: newLokasi,
              linkDaftar: newLink,
              waktu: newWaktu,
              tanggalPost: newTanggalPost,
              tanggalUpdate: currentDate,
              deskripsi: newDeskripsi,
            }
          : item
      );
      setData(updatedData);
      setEditMode(false);
    } else {
      const newData = {
        id: data.length + 1,
        image: [newImage],
        judulKegiatan: newJudulKegiatan,
        lokasi: newLokasi,
        linkDaftar: newLink,
        waktu: newWaktu,
        tanggalPost: currentDate,
        tanggalUpdate: currentDate,
        deskripsi: newDeskripsi,
      };
      setData([...data, newData]);
    }

    setEditingId(null);
    setNewJudulKegiatan("");
    setNewLokasi("");
    setNewLink("");
    setNewTanggalPost("");
    setNewTanggalUpdate("");
    setNewWaktu("");
    setNewDeskripsi("");
    setNewImage("");
    setOpenDrawer(false);
    setIsModalOpen(true);
  };

  const handleAddChange = (e, field) => {
    if (field === "judul") {
      setNewJudulKegiatan(e.target.value);
    } else if (field === "lokasi") {
      setNewLokasi(e.target.value);
    } else if (field === "waktu") {
      setNewWaktu(e.target.value);
    } else if (field === "tanggalPost") {
      setNewTanggalPost(e.target.value);
    } else if (field === "tanggalUpdate") {
      setNewTanggalUpdate(e.target.value);
    } else if (field === "deskripsi") {
      setNewDeskripsi(e.target.value);
    } else if (field === "file") {
      setSelectedFile(e.target.files[0]);
    } else if (field === "image") {
      setNewImage(e.target.value);
    }
  };

  // image
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
    setSelectedFile(e.target.files[0]);
  };
  // delete
  const handleDeleteFile = () => {
    setSelectedFile(null);
  };
  // tombol input image
  const handleChooseFileClick = () => {
    document.querySelector('input[type="file"]').click();
  };

  // drawer
  const toggleDrawer =
    (open, isEditMode = false) =>
    () => {
      setOpenDrawer(open);
      setEditMode(isEditMode);
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
        title={"Kegiatan"}
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
                  Kegiatan
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
                  Detail Kegiatan
                </Typography>
              </Stack>
            </Card>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img
                    src={selectedDetail.image}
                    alt="jgugu"
                    style={{
                      width: "80%",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginTop: "20%",
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Card
                    sx={{ paddingX: 4, paddingY: 3, textAlign: "left" }}
                    className="album-description"
                  >
                    <Grid
                      container
                      sx={{ display: "flex", flexDirection: "row", my: 1 }}
                    >
                      <Grid item xs={3}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          Judul kegiatan
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.judulKegiatan}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{ display: "flex", flexDirection: "row", my: 1 }}
                    >
                      <Grid item xs={3}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          Lokasi
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.lokasi}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{ display: "flex", flexDirection: "row", my: 1 }}
                    >
                      <Grid item xs={3}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          Link daftar
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.linkDaftar}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{ display: "flex", flexDirection: "row", my: 1 }}
                    >
                      <Grid item xs={3}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          Waktu
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.waktu}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{ display: "flex", flexDirection: "row", my: 1 }}
                    >
                      <Grid item xs={3}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          Tanggal post
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
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
                      <Grid item xs={3}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          Tanggal Update
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.tanggalUpdate}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{ display: "flex", flexDirection: "row", my: 1 }}
                    >
                      <Grid item xs={3}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          Deskripsi
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          :
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      {selectedDetail.deskripsi}
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
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
                    sx={{ height: 30, width: 200, fontFamily: "Poppins" }}
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <MenuItem
                      sx={{ fontFamily: "Poppins" }}
                      value={"filterByAlbum"}
                    >
                      Filter By Kegiatan
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
                      <TableCell sx={{ fontFamily: "Poppins", width: "200px" }}>
                        Kegiatan
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins", width: "220px" }}>
                        Lokasi
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins", width: "220px" }}>
                        Waktu
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins" }}>
                        Link Daftar
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
                        <TableRow key={row.id} className={classes.blueRow}>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.judulKegiatan}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.lokasi}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.waktu}
                            {/* {bulans[parseInt(row.waktu)-1]} */}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.linkDaftar}
                          </TableCell>

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
            Kegiatan
          </Typography>

          <Stack sx={{ mt: 4 }}>
            {/* judul */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
              * Kegiatan
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: 1,
              }}
              placeholder="Masukkan Judul Kegiatan"
              value={newJudulKegiatan}
              onChange={(e) => handleAddChange(e, "judul")}
            ></OutlinedInput>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "14px",
                display: "flex",
                flexDirection: "column",
                mt: 2,
              }}
            >
              Foto
            </Typography>
          </Stack>
          <Grid container gap={3} mt={1}>
            <Grid xs={4}>
              <Stack sx={{ border: "1px dashed #576974", borderRadius: "8px" }}>
                <img
                  src={Image}
                  style={{ width: "50px", margin: "0 auto", marginTop: "22px" }}
                  alt=""
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
                  onChange={handleImageChange}
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
            {/* lokasi */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
              * Lokasi
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: 1,
              }}
              placeholder="Masukkan Kategori"
              value={newLokasi}
              onChange={(e) => handleAddChange(e, "lokasi")}
            ></OutlinedInput>
            {/* waktu */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Waktu
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: 1,
              }}
              type="date"
              placeholder="Masukkan Kategori"
              value={newWaktu}
              onChange={(e) => handleAddChange(e, "waktu")}
            ></OutlinedInput>
            {/* deskripsi */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Deskripsi
            </Typography>

            <OutlinedInput
              sx={{ fontFamily: "Poppins", borderRadius: "7px" }}
              placeholder="Masukkan Isi Berita"
              multiline
              rows={4}
              value={newDeskripsi}
              onChange={(e) => handleAddChange(e, "deskripsi")}
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
              onClick={handleSave}
              sx={{
                width: "130px",
                py: 1,
                color: "white",
                borderRadius: "8px",
              }}
              startIcon={<CreateIcon />}
            >
              {editMode ? "Save" : "Simpan"}
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

export default Kegiatan;
