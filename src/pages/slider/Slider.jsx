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
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import Header from "../../components/header/Header";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import CreateIcon from "@mui/icons-material/Create";
import { RiDeleteBin5Fill } from "react-icons/ri";
import React, { useRef, useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import ImageIcon from "@mui/icons-material/Image";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import "./Slider.css";
import {
  ButtonGreen,
  ButtonPink,
  ButtonYellow,
} from "../../components/button/Index";
import { ModalSlider } from "../../components/modal/Index";
import { initialData } from "../../utils/InitialData";
import { themePagination } from "../../components/paginations/Index";
import Footer from "../../components/footer/Footer";
import IconKegiatan from "../../assets/detailKegiatan.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "../../assets/image.svg";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { fetchData, postData, putData, deleteData } from "../../service/api";

const useStyles = makeStyles({
  blueRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(255, 196, 0, 0.10)",
    },
  },
});

const Slider = () => {
  const [data, setData] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [menu, setMenu] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [newImage, setNewImage] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const csvFileRef = useRef(null);
  const [category, setCategory] = useState("filterByAlbum");
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // detail
  const handleDetailClick = (id) => {
    fetchData(`/slider/${id}`).then((res) => {
      setSelectedDetail(res.data);
      console.log(selectedDetail);
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

  // edit
  const handleEdit = (id) => {
    setEditingId(id);
    const selectedItem = data.find((item) => item.id === id);
    setNewImage(selectedItem.image);
    setNewTitle(selectedItem.title);
    setNewDescription(selectedItem.description);
    setIsActive(selectedItem.is_active);
    setOpenDrawer(true);
    setEditMode(true);
  };
  // delete
  const handleDelete = (id) => {
    deleteData(`/slider/${id}`)
      .then((res) => {
        console.log("Data berhasil dihapus");
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Gagal menghapus data:", error);
      });
  };

  // edit dan tambah data
  const handleSave = () => {
    if (editMode) {
      putData(`/slider/${editingId}`, {
        image: selectedFile,
        title: newTitle,
        description: newDescription,
        is_active: isActive,
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
      formData.append("image", selectedFile);
      formData.append("title", newTitle);
      formData.append("description", newDescription);
      formData.append("is_active", isActive);

      postData(`/slider`, formData)
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
    setNewImage("");
    setNewTitle("");
    setNewDescription("");
    setIsActive();
    setOpenDrawer(false);
    setIsModalOpen(true);
    console.log(selectedFile);
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

  const handleAlbumChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
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
  // menampilkan item perpage
  const handleChangeItemsPerPage = (event) => {
    setItemsPerPage(event.target.value);
    setPage(1);
  };

  const handleChangeMenu = (event) => {
    setMenu(event.target.value);
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

  // glide js

  useEffect(() => {
    fetchData(`/slider?page=${page}&per_page=${itemsPerPage}`).then((res) => {
      setData(res.data);
      setTotalPages(res.meta.total_page);
      setTotalItems(res.meta.total_item);
      setItemsPerPage(res.meta.perpage);
      console.log(res.data);
    });

    // if (selectedDetail) {
    //   const totalImages = selectedDetail.image.length;
    //   const perView = totalImages <= 5 ? totalImages : 5;
    //   const glide = new Glide(`#glide-${selectedDetail.id}`, {
    //     type: "carousel",
    //     startAt: 0,
    //     perView: perView,
    //     rewind: true,
    //     animationTimingFunc: "linear",
    //     animationDuration: 800,
    //     breakpoints: {
    //       800: {
    //         perView: 2,
    //       },
    //       480: {
    //         perView: 1,
    //       },
    //     },
    //   });

    //   glide.mount();

    //   return () => {
    //     glide.destroy();
    //   };
    // }
  }, [selectedDetail, page, itemsPerPage, totalItems, totalPages]);

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
              {/* <div id={`glide-${selectedDetail.id}`} className="glide">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    {selectedDetail.image.map((image, index) => (
                      <li className="glide__slide" key={index}>
                        <img
                          src={image}
                          alt={`Album ${selectedDetail.id} - ${index}`}
                          style={{
                            width: "200px",
                            height: "180px",
                            objectFit: "cover",
                            borderRadius: "12px",
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="glide__arrows" data-glide-el="controls">
                  <button
                    style={{ border: "none", boxShadow: "none" }}
                    class="glide__arrow glide__arrow--left"
                    data-glide-dir="<"
                  >
                    <ArrowBackIosIcon />
                  </button>
                  <button
                    style={{ border: "none", boxShadow: "none" }}
                    class="glide__arrow glide__arrow--right"
                    data-glide-dir=">"
                  >
                    <ArrowForwardIosIcon />
                  </button>
                </div>
              </div> */}
              <img
                src={selectedDetail.image}
                alt={selectedDetail.title}
                style={{
                  width: "200px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <Card
                sx={{ mt: 1, paddingX: 4, paddingY: 5, textAlign: "left" }}
                className="album-description"
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "Poppins",
                  }}
                >
                  <Typography
                    sx={{
                      paddingRight: "240px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    Title
                  </Typography>
                  <Typography
                    sx={{
                      paddingRight: "5px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    :
                  </Typography>
                  <Typography sx={{ fontFamily: "Poppins", fontSize: "16px" }}>
                    {selectedDetail.title}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "Poppins",
                  }}
                >
                  <Typography
                    sx={{
                      paddingRight: "240px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    Aktif
                  </Typography>
                  <Typography
                    sx={{
                      paddingRight: "5px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    :
                  </Typography>
                  <Typography sx={{ fontFamily: "Poppins", fontSize: "16px" }}>
                    {selectedDetail.is_active}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "Poppins",
                    my: 1,
                  }}
                >
                  <Typography
                    sx={{
                      paddingRight: "220px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    Deskripsi
                  </Typography>
                  <Typography
                    sx={{
                      paddingRight: "5px",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    :
                  </Typography>
                </Stack>
                <Typography sx={{ fontFamily: "Poppins", fontSize: "16px" }}>
                  {selectedDetail.description}
                </Typography>
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
                    {data &&
                      data.map((row) => (
                        <TableRow key={row.id} className={classes.blueRow}>
                          <TableCell>
                            <img
                              style={{ objectFit: "cover" }}
                              src={row.image}
                              alt={`Gambar ${row.title}`}
                              width="99"
                              height="111"
                            />
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.title}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Poppins" }}>
                            {row.description}
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
                <img
                  src={Image}
                  style={{ width: "50px", margin: "0 auto", marginTop: "22px" }}
                  alt=""
                />
                <Typography
                  sx={{
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
                  // onChange={handleFileChange}
                  onChange={handleImageChange}
                  // value={newImage}
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
                  // onChange={handleImageChange}
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
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
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
              Title
            </Typography>

            <OutlinedInput
              sx={{ fontFamily: "Poppins" }}
              placeholder="Masukkan nama Album"
              value={newTitle}
              onChange={handleAlbumChange}
            ></OutlinedInput>
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
                * Aktif
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{ gap: 16, fontFamily: "Poppins", fontWeight: 600 }}
                value={isActive}
                onChange={(e) => setIsActive(e.target.value)}
              >
                <FormControlLabel
                  sx={{ fontFamily: "Poppins" }}
                  control={<Radio />}
                  label="true"
                  value={1}
                />
                <FormControlLabel
                  sx={{ fontFamily: "Poppins" }}
                  control={<Radio />}
                  label="false"
                  value={0}
                />
              </RadioGroup>
            </FormControl>
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
