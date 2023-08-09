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
import { ButtonPink, ButtonYellow } from "../../components/button/Index";
import { ModalSlider } from "../../components/modal/Index";
import { dataAgenda } from "../../utils/InitialData";
import { themePagination } from "../../components/paginations/Index";
import Footer from "../../components/footer/Footer";

const useStyles = makeStyles({
  blueRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(255, 196, 0, 0.10)",
    },
  },
});

const Agenda = () => {
  const [data, setData] = useState(dataAgenda);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [newJudulAgenda, setNewJudulAgenda] = useState("");
  const [newLokasi, setNewLokasi] = useState("");
  const [newWaktu, setNewWaktu] = useState("");
  const [newTanggalPost, setNewTanggalPost] = useState("");
  const [newTanggalUpdate, setNewTanggalUpdate] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const csvFileRef = useRef(null);
  const [category, setCategory] = useState("filterByAlbum");
  const currentDate = new Date().toLocaleDateString();

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
    if (field === "judul") {
      setNewJudulAgenda(e.target.value);
    } else if (field === "lokasi") {
      setNewLokasi(e.target.value);
    } else if (field === "waktu") {
      setNewWaktu(e.target.value);
    } else if (field === "tanggalPost") {
      setNewTanggalPost(e.target.value);
    } else if (field === "tanggalUpdate") {
      setNewTanggalUpdate(e.target.value);
    }
  };

  const handleAddData = () => {
    const newData = {
      id: data.length + 1,
      judulAgenda: newJudulAgenda,
      lokasi: newLokasi,
      waktu: newWaktu,
      tanggalPost: currentDate,
      tanggalUpdate: currentDate,
    };
    setData([...data, newData]);

    setNewJudulAgenda("");
    setNewLokasi("");
    setNewWaktu("");
    setNewTanggalPost("");
    setNewTanggalUpdate("");
    setOpenDrawer(false);
    setIsModalOpen(true);
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
        title={"Agenda"}
        onClickTambahData={toggleDrawer(true)}
        onClickCsv={() => csvFileRef.current.click()}
        onClickCetak={handlePrint}
        onClickExcel={exportToExcel}
      />
      <Box my={3}>
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
                  {data
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((row) => (
                      <TableRow key={row.id} className={classes.blueRow}>
                        <TableCell sx={{ fontFamily: "Poppins" }}>
                          {row.judulAgenda}
                        </TableCell>
                        <TableCell sx={{ fontFamily: "Poppins" }}>
                          {row.lokasi}
                        </TableCell>
                        <TableCell sx={{ fontFamily: "Poppins" }}>
                          {row.waktu}
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
              value={newJudulAgenda}
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

export default Agenda;
