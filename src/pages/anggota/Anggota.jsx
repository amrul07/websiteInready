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
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
  CardMedia,
} from "@mui/material";
import Header from "../../components/header/Header";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import CreateIcon from "@mui/icons-material/Create";
import { RiDeleteBin5Fill } from "react-icons/ri";
import React, { useEffect, useRef, useState } from "react";
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
import { dataAnggota, dataAngkatan } from "../../utils/InitialData";
import { themePagination } from "../../components/paginations/Index";
import Footer from "../../components/footer/Footer";
import IconKegiatan from "../../assets/detailKegiatan.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "../../assets/image.svg";
import { fetchData, postData, putData, deleteData } from "../../service/api";
const useStyles = makeStyles({
  blueRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(255, 196, 0, 0.10)",
    },
  },
});
const Anggota = () => {
  const [data, setData] = useState([]);
  const [dataMajor, setDataMajor] = useState([]);
  const [dataConcentration, setDataConcentration] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [menu, setMenu] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [newImage, setNewImage] = useState("");
  const [newNri, setNewNri] = useState("");
  const [newName, setNewName] = useState("");
  const [newAlamat, setNewAlamat] = useState("");
  const [newTempatLahir, setNewTempatLahir] = useState("");
  const [newTanggalLahir, setNewTanggalLahir] = useState("");
  const [newJenisKelamin, setNewJenisKelamin] = useState("");
  const [newAngkatan, setNewAngkatan] = useState("");
  const [newJurusan, setNewJurusan] = useState("");
  const [newKonsentrasi, setNewKonsentrasi] = useState("");
  const [newJabatan, setNewJabatan] = useState("");
  const [newNoWa, setNewNoWa] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newIg, setNewIg] = useState("");
  const [newFb, setNewFb] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const csvFileRef = useRef(null);
  const [category, setCategory] = useState("filterByAlbum");
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // detail
  const handleDetailClick = (id) => {
    fetchData(`/member/${id}`).then((res) => {
      setSelectedDetail(res.data);
    });
  };
  // close detail
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
  const exportData = dataAnggota.map((item) => ({
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

  //   edit
  const handleEdit = (id) => {
    setEditingId(id);
    const selectedItem = data.find((item) => item.id === id);
    setNewImage(selectedItem.photo);
    setNewName(selectedItem.name);
    setNewNri(selectedItem.nri);
    setNewAlamat(selectedItem.address);
    setNewTempatLahir(selectedItem.pob);
    setNewTanggalLahir(selectedItem.dob);
    setNewJenisKelamin(selectedItem.gender);
    setNewAngkatan(selectedItem.generation);
    setNewJurusan(selectedItem.major);
    setNewKonsentrasi(selectedItem.concentration);
    setNewJabatan(selectedItem.position);
    setNewNoWa(selectedItem.phone);
    setNewEmail(selectedItem.email);
    setNewIg(selectedItem.instagram);
    setNewFb(selectedItem.facebook);
    setOpenDrawer(true);
    setEditMode(true);
  };
  // delete
  const handleDelete = (id) => {
    deleteData(`/member/${id}`)
      .then((res) => {
        console.log("Data berhasil dihapus");
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Gagal menghapus data:", error);
      });
  };
  // tombol save atau simpan data
  const handleSave = (id) => {
    if (editMode) {
      putData(`/member/${editingId}`, {
        id: editingId,
        photo: [newImage],
        name: newName,
        nri: newNri,
        address: newAlamat,
        pob: newTempatLahir,
        dob: newTanggalLahir,
        gender: newJenisKelamin,
        generation: newAngkatan,
        major: newJurusan,
        concentration: newKonsentrasi,
        position: newJabatan,
        phone: newNoWa,
        email: newEmail,
        instagram: newIg,
        facebook: newFb,
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
    } else {
      const formData = new FormData();
      formData.append("nri", newNri);
      formData.append("name", newName);
      formData.append("photo", selectedFile);
      formData.append("address", newAlamat);
      formData.append("pob", newTempatLahir);
      formData.append("dob", newTanggalLahir);
      formData.append("gender", newJenisKelamin);
      formData.append("generation", newAngkatan);
      formData.append("major_id", newJurusan);
      formData.append("concentration_id", newKonsentrasi);
      formData.append("position", newJabatan);
      formData.append("phone", newNoWa);
      formData.append("email", newEmail);
      formData.append("instagram", newIg);
      formData.append("facebook", newFb);
      postData(`/member`, formData)
        .then((res) => {
          setData([...data, res]);
          setOpenDrawer(false);
          setIsModalOpen(true);
        })
        .catch((error) => {
          console.error("Gagal menambahkan data:", error);
        });
        console.log(newJenisKelamin)
    }

    setEditingId(null);
    setNewName("");
    setNewNri("");
    setNewImage("");
    setNewAlamat("");
    setNewTempatLahir("");
    setNewTanggalLahir("");
    setNewJenisKelamin("");
    setNewAngkatan("");
    setNewJurusan("");
    setNewKonsentrasi("");
    setNewJabatan("");
    setNewNoWa("");
    setNewEmail("");
    setNewIg("");
    setNewFb("");
    setOpenDrawer(false);
    setIsModalOpen(true);
    
  };

  const handleAddChange = (e, field) => {
    if (field === "nri") {
      setNewNri(e.target.value);
    } else if (field === "nama") {
      setNewName(e.target.value);
    } else if (field === "file") {
      setSelectedFile(e.target.files[0]);
    } else if (field === "image") {
      setNewImage(e.target.value);
    } else if (field === "alamat") {
      setNewAlamat(e.target.value);
    } else if (field === "tempatLahir") {
      setNewTempatLahir(e.target.value);
    } else if (field === "tanggalLahir") {
      setNewTanggalLahir(e.target.value);
    } else if (field === "jenisKelamin") {
      setNewJenisKelamin(e.target.value);
    } else if (field === "angkatan") {
      setNewAngkatan(e.target.value[0]);
    } else if (field === "jurusan") {
      setNewJurusan(e.target.value);
    } else if (field === "konsentrasi") {
      setNewKonsentrasi(e.target.value);
    } else if (field === "jabatan") {
      setNewJabatan(e.target.value);
    } else if (field === "noWa") {
      setNewNoWa(e.target.value);
    } else if (field === "email") {
      setNewEmail(e.target.value);
    } else if (field === "ig") {
      setNewIg(e.target.value);
    } else if (field === "fb") {
      setNewFb(e.target.value);
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
  // delete file
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
  // modal
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
    fetchData(`/member?page=${page}&per_page=${itemsPerPage}`).then((res) => {
      setData(res.data);
      setTotalPages(res.meta.total_page);
      setTotalItems(res.meta.total_item);
      setItemsPerPage(res.meta.perpage);
      console.log(res.data);
    });
    fetchData(`/major?page=${page}&per_page=${itemsPerPage}`).then((res) => {
      setDataMajor(res.data);
      // setTotalPages(res.meta.total_page);
      // setTotalItems(res.meta.total_item);
      // setItemsPerPage(res.meta.perpage);
      console.log(res.data);
    });
    fetchData(`/concentration?page=${page}&per_page=${itemsPerPage}`).then(
      (res) => {
        setDataConcentration(res.data);
        // setTotalPages(res.meta.total_page);
        // setTotalItems(res.meta.total_item);
        // setItemsPerPage(res.meta.perpage);
        console.log(res.data);
      }
    );
  }, [page, itemsPerPage, totalItems, totalPages]);

  return (
    <Box sx={{ fontFamily: "Poppins", mt: "-23px" }}>
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
                  Anggota
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
                  Detail Anggota
                </Typography>
              </Stack>
            </Card>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img
                    src={selectedDetail.photo}
                    alt="jgugu"
                    style={{
                      width: "80%",
                      height: "70%",
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
                      <Grid item xs={4}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          Nama
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
                          NRI
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.nri}
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
                          Alamat
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.address}
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
                          Tempat,Tanggal lahir
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.pob},{selectedDetail.dob}
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
                          Jenis kelamin
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.gender}
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
                          Angkatan
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.generation}
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
                          Jurusan
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.major}
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
                          Konsentrasi
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.concentration}
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
                          Jabatan
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.position}
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
                          NO WhatsApp
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.phone}
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
                          Email
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.email}
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
                          Instagram
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.instagram}
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
                          Facebook
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography
                          sx={{ fontFamily: "Poppins", fontSize: "16px" }}
                        >
                          : {selectedDetail.facebook}
                        </Typography>
                      </Grid>
                    </Grid>
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
                    {/* <MenuItem value={data.length}>All</MenuItem> */}
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
                      <TableCell sx={{ fontFamily: "Poppins" }}>Nri</TableCell>
                      <TableCell sx={{ fontFamily: "Poppins" }}>Nama</TableCell>
                      <TableCell sx={{ fontFamily: "Poppins" }}>
                        Alamat
                      </TableCell>
                      <TableCell sx={{ fontFamily: "Poppins" }}>
                        NO.WA
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Poppins",
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
                            {row.nri}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.name}
                          </TableCell>

                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.address}
                          </TableCell>

                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.phone}
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
            Anggota
          </Typography>

          <Stack sx={{ mt: 3 }}>
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
              * NRi
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
              }}
              placeholder="Masukkan NRI"
              value={newNri}
              onChange={(e) => handleAddChange(e, "nri")}
            ></OutlinedInput>
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Nama Lengkap
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
              }}
              placeholder="Masukkan Nama Lengkap"
              value={newName}
              onChange={(e) => handleAddChange(e, "nama")}
            ></OutlinedInput>
            <Typography
              sx={{
                mt: 2,
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
                  sx={{ display: "flex", flexDirection: "row", my: 1 }}
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
              * Alamat
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
              }}
              placeholder="Masukkan Alamat"
              value={newAlamat}
              onChange={(e) => handleAddChange(e, "alamat")}
            ></OutlinedInput>
            <Stack
              gap={3}
              sx={{ display: "flex", flexDirection: "row", mt: 1 }}
            >
              <Stack>
                <Typography
                  sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 1 }}
                >
                  Tempat Lahir
                </Typography>

                <OutlinedInput
                  sx={{
                    fontFamily: "Poppins",
                    height: "44px",
                    borderRadius: "7px",
                  }}
                  placeholder="Masukkan Tempat Lahir"
                  value={newTempatLahir}
                  onChange={(e) => handleAddChange(e, "tempatLahir")}
                />
              </Stack>
              <Stack>
                <Typography
                  sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 1 }}
                >
                  Tanggal Lahir
                </Typography>

                <OutlinedInput
                  type="date"
                  sx={{
                    fontFamily: "Poppins",
                    height: "44px",
                    borderRadius: "7px",
                    width: "250px",
                  }}
                  placeholder="Masukkan Tanggal Lahir"
                  value={newTanggalLahir}
                  onChange={(e) => handleAddChange(e, "tanggalLahir")}
                />
              </Stack>
            </Stack>
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  mt: 2,
                  color: "black",
                }}
              >
                * Jenis kelamin
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{ gap: 16, fontFamily: "Poppins", fontWeight: 600 }}
                value={newJenisKelamin}
                onChange={(e) => setNewJenisKelamin(e.target.value)}
                // {console.log(newJenisKelamin)}
              >
                <FormControlLabel
                  sx={{ fontFamily: "Poppins" }}
                  control={<Radio />}
                  label="male"
                  value={"male"}
                />
                <FormControlLabel
                  sx={{ fontFamily: "Poppins" }}
                  control={<Radio />}
                  label="female"
                  value={"female"}
                />
              </RadioGroup>
            </FormControl>
            {/* angkatan */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 1 }}>
              * Angkatan
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={dataAngkatan}
              size="small"
              sx={{ mt: "5px" }}
              value={newAngkatan}
              onChange={(event, value) => {
                setNewAngkatan(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ fontFamily: "Poppins" }}
                  placeholder={"Pilih Angkatan"}
                />
              )}
            />
            {/* jurusan */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Jurusan
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newJurusan}
              label="Age"
              onChange={(e) => setNewJurusan(e.target.value)}
            >
              {dataMajor.map((e) => (
                <MenuItem key={e.id} value={e.id}>
                  {e.name}
                </MenuItem>
              ))}
            </Select>
            {/* Konsentrasi */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Konsentrasi
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newKonsentrasi}
              label="Age"
              onChange={(e) => setNewKonsentrasi(e.target.value)}
            >
              {dataConcentration.map((e) => (
                <MenuItem key={e.id} value={e.id}>
                  {e.name}
                </MenuItem>
              ))}
            </Select>
            {/* jabatan */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Jabatan
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={["Website", "Desain", "Mobile"]}
              size="small"
              sx={{ mt: "5px" }}
              value={newJabatan}
              onChange={(event, value) => {
                setNewJabatan(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ fontFamily: "Poppins" }}
                  placeholder={"Pilih Jabatan"}
                />
              )}
            />
            {/* no wa */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Nomor WhatsApp
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: "5px",
              }}
              placeholder="Masukkan Nomor WhatsApp"
              value={newNoWa}
              onChange={(e) => handleAddChange(e, "noWa")}
            ></OutlinedInput>
            {/* emial */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Email
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: "5px",
              }}
              placeholder="Masukkan Email"
              value={newEmail}
              onChange={(e) => handleAddChange(e, "email")}
            ></OutlinedInput>
            {/* Instagram */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Instagram
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: "5px",
              }}
              placeholder="Masukkan Instagram"
              value={newIg}
              onChange={(e) => handleAddChange(e, "ig")}
            ></OutlinedInput>
            {/* fb */}
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 2 }}>
              * Facebook
            </Typography>

            <OutlinedInput
              sx={{
                fontFamily: "Poppins",
                height: "44px",
                borderRadius: "7px",
                mt: "5px",
              }}
              placeholder="Masukkan Facebook"
              value={newFb}
              onChange={(e) => handleAddChange(e, "fb")}
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

export default Anggota;
