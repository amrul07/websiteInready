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
  Pagination,
  OutlinedInput,
  CardMedia,
} from "@mui/material";
import Header from "../../components/header/Header";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import CreateIcon from "@mui/icons-material/Create";
import { RiDeleteBin5Fill } from "react-icons/ri";
import React, { useEffect, useRef, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import {
  ButtonGreen,
  ButtonPink,
  ButtonYellow,
} from "../../components/button/Index";
import { ModalSlider, ModalDelete } from "../../components/modal/Index";
import { dataAgenda } from "../../utils/InitialData";
import { themePagination } from "../../components/paginations/Index";
import Footer from "../../components/footer/Footer";
import IconKegiatan from "../../assets/detailKegiatan.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { fetchData, postData, putData, deleteData } from "../../service/api";

const useStyles = makeStyles({
  blueRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(255, 196, 0, 0.10)",
    },
  },
});

const Agenda = () => {
  const [data, setData] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newCreatedAt, setNewCreatedAt] = useState("");
  const [newUpdateAt, setNewUpdateAt] = useState("");
  const [editingSlug, setEditingSlug] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const csvFileRef = useRef(null);
  const [category, setCategory] = useState("filterByAlbum");
  const currentDate = new Date().toLocaleDateString();
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  // detail
  const handleDetailClick = (slug) => {
    fetchData(`/agenda/${slug}`).then((res) => {
      setSelectedDetail(res.data);
    });
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
  const exportData = dataAgenda.map((item) => ({
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

  const handleDelete = (slug) => {
    // if (deleteMode === true) {
      deleteData(`/agenda/${slug}`)
        .then((res) => {
          const updatedData = data.filter((item) => item.slug !== slug);
          setData(updatedData);
          setModalDelete(false);
        })
        .catch((error) => {
          console.error("Gagal menghapus data:", error);
        });
    // } else {
    //   setModalDelete(false);
    // }
    // setModalDelete(!modalDelete);

    // console.log(handleDelete);
  };
  // edit
  const handleEdit = (slug) => {
    setEditingSlug(slug);
    const selectedItem = data.find((item) => item.slug === slug);
    setNewTitle(selectedItem.title);
    setNewLocation(selectedItem.location);
    setNewTime(selectedItem.time);
    setNewCreatedAt(selectedItem.created_at);
    setNewUpdateAt(selectedItem.updated_at);
    setOpenDrawer(true);
    setEditMode(true);
  };
  const handleAddChange = (e, field) => {
    if (field === "judul") {
      setNewTitle(e.target.value);
    } else if (field === "lokasi") {
      setNewLocation(e.target.value);
    } else if (field === "waktu") {
      setNewTime(e.target.value);
    } else if (field === "tanggalPost") {
      setNewCreatedAt(e.target.value);
    } else if (field === "tanggalUpdate") {
      setNewUpdateAt(e.target.value);
    }
  };
  // // tombol save atau simpan data
  const handleSave = () => {
    if (editMode) {
      putData(`/agenda/${editingSlug}`, {
        title: newTitle,
        location: newLocation,
        time: newTime,
        created_at: newCreatedAt,
        updated_at: newUpdateAt,
      })
        .then((res) => {
          const updatedData = data.map((item) =>
            item.slug === editingSlug ? res : item
          );
          setData(updatedData);
          setEditMode(false);
        })
        .catch((error) => {
          console.error("Gagal mengedit data:", error);
        });
    } else {
      const newData = {
        title: newTitle,
        location: newLocation,
        time: newTime,
        created_at: newCreatedAt,
        updated_at: newUpdateAt,
      };

      postData(`/agenda`, newData)
        .then((res) => {
          setData([...data, res]);
          setOpenDrawer(false);
          setIsModalOpen(true);
        })
        .catch((error) => {
          console.error("Gagal menambahkan data:", error);
        });
    }

    setEditingSlug(null);
    setNewTitle("");
    setNewLocation("");
    setNewTime("");
    setNewCreatedAt("");
    setNewUpdateAt("");
    setOpenDrawer(false);
    setIsModalOpen(true);
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

  // const handleChangeItemsPerPage = (event) => {
  //   setItemsPerPage(event.target.value);
  //   setPage(1);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalDelete = () => {
    setModalDelete(false);
  };

  const modeDelete = () => {
    setDeleteMode(true);
    setModalDelete(false);
  };

  // print
  const handlePrint = () => {
    const printContent = document.getElementById("print-content");
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContent.outerHTML;
    window.print();

    document.body.innerHTML = originalContents;
  };

  useEffect(() => {
    fetchData(`/agenda?page=${page}&per_page=${itemsPerPage}`).then((res) => {
      setData(res.data);
      setTotalPages(res.meta.total_page);
      setTotalItems(res.meta.total_item);
      setItemsPerPage(res.meta.perpage);
      console.log(res.data);
    });
  }, [page, itemsPerPage, totalItems, totalPages]);
  return (
    <Box sx={{ fontFamily: "Poppins", mt: "-23px" }}>
      <Header
        title={"Agenda"}
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
                  Agenda
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
                  Detail Agenda
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
                      Judul agenda
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      : {selectedDetail.title}
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
                      Lokasi
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      : {selectedDetail.location}
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
                      Waktu
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      : {selectedDetail.time}
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
                      : {selectedDetail.created_at}
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
                      : {selectedDetail.updated_at}
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
                    // onChange={handleChangeItemsPerPage}
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    {/* <MenuItem value={data.length}>All</MenuItem> */}
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
                      <TableCell sx={{ fontFamily: "Poppins", width: "250px" }}>
                        Agenda
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins", width: "250px" }}>
                        Lokasi
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins", width: "250px" }}>
                        Waktu
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
                    {data &&
                      data.map((row) => (
                        <TableRow key={row.slug} className={classes.blueRow}>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row?.title}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.location}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.time}
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
                                onClick={() => handleDetailClick(row.slug)}
                              >
                                <VisibilityIcon />
                              </ButtonGreen>
                              <ButtonYellow
                                sx={{ color: "white" }}
                                variant="Contained"
                                onClick={() => handleEdit(row.slug)}
                              >
                                <CreateIcon />
                              </ButtonYellow>
                              <ButtonPink
                                sx={{ fontSize: "20px", color: "#FF2E00" }}
                                variant="Contained"
                                size="small"
                                onClick={() => handleDelete(row.slug)}
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
                  Menampilkan 1 - {itemsPerPage} dari {totalItems} Data
                </Typography>
                {/* pagination */}
                <ThemeProvider theme={themePagination}>
                  <Pagination
                    sx={{ color: "#FFC400" }}
                    count={Math.ceil(totalItems / itemsPerPage)}
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
            Karya
          </Typography>

          <Stack sx={{ mt: 4 }}>
            {/* judul */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
              * Judul Agenda
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: 1,
              }}
              placeholder="Masukkan Judul Agenda"
              value={newTitle}
              onChange={(e) => handleAddChange(e, "judul")}
            ></OutlinedInput>
            {/* kreator */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Lokasi
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: 1,
              }}
              placeholder="Masukkan Kreator"
              value={newLocation}
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
              value={newTime}
              onChange={(e) => handleAddChange(e, "waktu")}
            ></OutlinedInput>
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
      <ModalDelete
        open={modalDelete}
        onClick={closeModalDelete}
        onClickDelete={modeDelete}
      />
      <Footer />
    </Box>
  );
};

export default Agenda;
