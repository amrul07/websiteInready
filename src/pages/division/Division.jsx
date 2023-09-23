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
import Papa from "papaparse";
import * as XLSX from "xlsx";
import {
  ButtonGreen,
  ButtonPink,
  ButtonYellow,
} from "../../components/button/Index";
import { ModalSlider } from "../../components/modal/Index";
import { themePagination } from "../../components/paginations/Index";
import Footer from "../../components/footer/Footer";
import IconKegiatan from "../../assets/detailKegiatan.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { fetchData, postData, putData, deleteData } from "../../service/api";
import { useEffect } from "react";

const useStyles = makeStyles({
  blueRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(255, 196, 0, 0.10)",
    },
  },
});

const Division = () => {
  const [data, setData] = useState([]);
  const [dataPresidium, setDataPresidium] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPresidium, setNewPresidium] = useState("");
  const [newPresidiumId, setNewPresidiumId] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const csvFileRef = useRef(null);
  const [category, setCategory] = useState("filterByAlbum");
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // detail
  const handleDetailClick = (id) => {
    fetchData(`/division/${id}`).then((res) => {
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
  // const exportData = data.map((item) => ({
  //   image: item.image,
  //   album: item.album,
  //   description: item.description,
  // }));

  // const exportToExcel = () => {
  //   const ws = XLSX.utils.json_to_sheet(exportData);
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  //   XLSX.writeFile(wb, "dataExcel.xlsx");
  // };
  // export excel end

  const handleDelete = (id) => {
    deleteData(`/division/${id}`)
      .then((res) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Gagal menghapus data:", error);
      });
  };
  // edit
  const handleEdit = (id) => {
    setEditingId(id);
    const selectedItem = data.find((item) => item.id === id);
    setNewName(selectedItem.name);
    setNewPresidiumId(selectedItem.presidium_id);
    setNewPresidium(selectedItem.presidium);
    setOpenDrawer(true);
    setEditMode(true);
  };

  // // tombol save atau simpan data
  const handleSave = () => {
    if (editMode) {
      putData(`/division/${editingId}`, {
        name: newName,
        presidium_id: newPresidiumId,
      })
        .then((res) => {
          const updatedData = data.map((item) =>
            item.id === editingId ? res : item
          );
          setData(updatedData);
          setEditMode(false);
        })
        .catch((error) => {
          console.error("Gagal mengedit data:", error);
        });
      // console.log(id);
    } else {
      const formData = new FormData();
      formData.append("name", newName);
      formData.append("presidium_id", newPresidiumId);
      postData(`/division`, formData)
        .then((res) => {
          setData([...data, res]);
          setOpenDrawer(false);
          setIsModalOpen(true);
        })
        .catch((error) => {
          console.error("Gagal menambahkan data:", error);
        });
    }

    setEditingId(null);
    setNewName("");
    setNewPresidiumId("");
    setNewPresidium("");
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

  // print
  const handlePrint = () => {
    const printContent = document.getElementById("print-content");
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContent.outerHTML;
    window.print();

    document.body.innerHTML = originalContents;
  };

  useEffect(() => {
    fetchData(`/division?page=${page}&per_page=${itemsPerPage}`).then((res) => {
      setData(res.data);
      setTotalPages(res.meta.total_page);
      setTotalItems(res.meta.total_item);
      setItemsPerPage(res.meta.perpage);
      console.log(res.data);
    });
    fetchData(`/presidium`).then((res) => {
      setDataPresidium(res.data);
      console.log(res.data);
    });
  }, [page, itemsPerPage, totalItems, totalPages]);

  return (
    <Box sx={{ fontFamily: "Poppins", mt: "-23px" }}>
      <Header
        title={"Admin"}
        onClickTambahData={toggleDrawer(true)}
        onClickCsv={() => csvFileRef.current.click()}
        onClickCetak={handlePrint}
        // onClickExcel={exportToExcel}
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
                  Division
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
                  Detail Division
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
                      Name
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      : {selectedDetail.name}
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
                      Presidium
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                    >
                      : {selectedDetail.presidium}
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
                      <TableCell sx={{ fontFamily: "Poppins", width: "350px" }}>
                        Name
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins", width: "350px" }}>
                        Presidium
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
                    {data &&
                      data.map((row) => (
                        <TableRow key={row.id} className={classes.blueRow}>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.name}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.presidium}
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
                                onClick={() => handleDetailClick(row.id)}
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
            Admin
          </Typography>

          <Stack sx={{ mt: 4 }}>
            {/* name */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
              * Name
            </Typography>
            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: 1,
              }}
              placeholder="Masukkan Nama"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            ></OutlinedInput>
            {/* name */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
              * Presidium
            </Typography>
            <Select
              sx={{ fontFamily: "Poppins" }}
              size="small"
              value={newPresidiumId}
              onChange={(e) => setNewPresidiumId(e.target.value)}
            >
              {dataPresidium.map((e) => (
                <MenuItem key={e.id} value={e.id} placeholder="pilih ki">
                  {e.name}
                </MenuItem>
              ))}
            </Select>
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
      <Footer />
    </Box>
  );
};

export default Division;
