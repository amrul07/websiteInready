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
  import { dataKarya } from "../../utils/InitialData";
  import { themePagination } from "../../components/paginations/Index";
  import Footer from "../../components/footer/Footer";
  
  const useStyles = makeStyles({
    blueRow: {
      "&:nth-of-type(odd)": {
        backgroundColor: "rgba(255, 196, 0, 0.10)",
      },
    },
  });

const Karya = () => {
    const [data, setData] = useState(dataKarya);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [newImage, setNewImage] = useState("");
    const [newJudulKarya, setNewJudulKarya] = useState("");
    const [newKreator, setNewKreator] = useState("");
    const [newLink, setNewLink] = useState("");
    const [newKonsentrasi, setNewKonsentrasi] = useState("");
    const [newTanggalPost, setNewTanggalPost] = useState("");
    const [newTanggalUpdate, setNewTanggalUpdate] = useState("");
    const [newDeskripsi, setNewDeskripsi] = useState("");
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
    const exportData = dataKarya.map((item) => ({
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
      // setNewAlbum(selectedItem.album);
      // setNewDescription(selectedItem.description);
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
              tanggalUpdate: currentDate,
              // description: newDescription,
            }
          : item
      );
      setData(updatedData);
      setEditingId(null);
      setNewImage("");
      setNewTanggalUpdate("");
      // setNewDescription("");
    };
  
    const handleAddChange = (e, field) => {
      if (field === "judul") {
        setNewJudulKarya(e.target.value);
      } else if (field === "kreator") {
        setNewKreator(e.target.value);
      } else if (field === "konsentrasi") {
        setNewKonsentrasi(e.target.value);
      }  else if (field === "tanggalPost") {
        setNewTanggalPost(e.target.value);
      } else if (field === "tanggalUpdate") {
        setNewTanggalUpdate(e.target.value);
      } else if (field === "deskripsi") {
        setNewDeskripsi(e.target.value);
      } else if (field === "file") {
        setSelectedFile(e.target.files[0]);
      } else if (field === "image") {
        setNewImage(e.target.value);
      } else if (field === "link") {
        setNewLink(e.target.value)
      }
    };
  
    const handleAddData = () => {
      const newData = {
        id: data.length + 1,
        judulKarya: newJudulKarya,
        kreator: newKreator,
        konsentrasi: newKonsentrasi,
        link: newLink,
        tanggalPost: currentDate,
        tanggalUpdate: currentDate,
        image: newImage,
        deskripsi: newDeskripsi,
      };
      setData([...data, newData]);
  
      setNewJudulKarya("");
      setNewKreator("");
      setNewLink("");
      setNewTanggalPost("");
      setNewTanggalUpdate("");
      setNewKonsentrasi("");
      setNewDeskripsi("");
      setNewImage("");
      setOpenDrawer(false);
      setIsModalOpen(true);
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
          title={"Karya"}
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
                        Judul Karya
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins", width: "250px" }}>
                        Kreator
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins", width: "250px" }}>
                        Link Karya
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
                            {row.judulKarya}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.kreator}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.link}
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
                * Judul karya
              </Typography>
  
              <OutlinedInput
                sx={{
                  fontFamily: "Poppins",
                  height: "44px",
                  borderRadius: "7px",
                  mt: 1,
                }}
                placeholder="Masukkan Judul Karya"
                value={newJudulKarya}
                onChange={(e) => handleAddChange(e, "judul")}
              ></OutlinedInput>
              {/* kreator */}
              <Typography sx={{ fontFamily: "Poppins", fontWeight: 500,mt: 2 }}>
                * Kreator
              </Typography>
  
              <OutlinedInput
                sx={{
                  fontFamily: "Poppins",
                  height: "44px",
                  borderRadius: "7px",
                  mt: 1,
                }}
                placeholder="Masukkan Kreator"
                value={newKreator}
                onChange={(e) => handleAddChange(e, "kreator")}
              ></OutlinedInput>
              {/* Konsentrasi */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Konsentrasi
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={["Website", "Desain", "Mobile"]}
              size="small"
              sx={{ mt: "5px" }}
              value={newKonsentrasi} 
              onChange={(event, value) => {
                setNewKonsentrasi(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ fontFamily: "Poppins" }}
                  placeholder={"Pilih Konsentrasi"}
                />
              )}
            />
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
                    onChange={(e) => handleAddChange(e, "file")}
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
                    onChange={(e) => handleAddChange(e, "image")}
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
              {/* link*/}
              <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
                * Link
              </Typography>
  
              <OutlinedInput
                sx={{
                  fontFamily: "Poppins",
                  height: "44px",
                  borderRadius: "7px",
                  mt: 1,
                }}
                placeholder="Masukkan Link Karya"
                value={newLink}
                onChange={(e) => handleAddChange(e, "link")}
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
}
 
export default Karya;