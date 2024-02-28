// // // import {
// // //     Box,
// // //     Card,
// // //     FormControl,
// // //     MenuItem,
// // //     Pagination,
// // //     Paper,
// // //     Select,
// // //     Stack,
// // //     Table,
// // //     TableBody,
// // //     TableCell,
// // //     TableContainer,
// // //     TableHead,
// // //     TableRow,
// // //     TextField,
// // //     Typography,
// // //     Grid,
// // //     Input,
// // //     CardMedia,
// // //     Button,
// // //   } from "@mui/material";
// // //   import Header from "../components/header/Header";
// // //   import Foto from "../assets/navbar/Logo.png";
// // //   import { makeStyles } from "@mui/styles";
// // //   import { createTheme, ThemeProvider } from "@mui/material/styles";
// // //   import CreateIcon from "@mui/icons-material/Create";
// // //   import { RiDeleteBin5Fill } from "react-icons/ri";
// // //   import React, { useRef, useState } from "react";
// // //   import Drawer from "@mui/material/Drawer";
// // //   import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// // //   import ImageIcon from "@mui/icons-material/Image";
// // //   import Papa from "papaparse";
// // //   import * as XLSX from "xlsx";
// // //   import IconKegiatan from "../assets/detailKegiatan.svg";
// // //   import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // //   import { ButtonPink, ButtonYellow } from "../components/button/Index";
// // //   import ModalSlider from "../components/modal/Index";

// // import { Autocomplete, OutlinedInput, TextField } from "@mui/material";
// // import { Tes, Tes2 } from "../components/drawer/Index";

// // //   const useStyles = makeStyles({
// // //     blueRow: {
// // //       "&:nth-of-type(odd)": {
// // //         backgroundColor: "rgba(255, 196, 0, 0.10)",
// // //       },
// // //     },
// // //   });

// // //   // style pagination
// // //   const theme = createTheme({
// // //     components: {
// // //       MuiPaginationItem: {
// // //         styleOverrides: {
// // //           root: {
// // //             color: "#9CA3AF", // Warna teks pada tombol
// // //             // backgroundColor: "blue", // Warna latar belakang tombol
// // //             fontFamily: "Poppins",
// // //             fontSize: "16px",
// // //             fontWeight: 500,
// // //             "&:hover": {
// // //               backgroundColor: "#FFC400",
// // //               color: "white", // Warna latar belakang tombol terpilih saat dihover
// // //             },
// // //             "&.Mui-selected": {
// // //               color: "white", // Warna teks pada tombol terpilih
// // //               backgroundColor: "#FFC400", // Warna latar belakang tombol terpilih
// // //               fontFamily: "Poppins",
// // //               fontSize: "16px",
// // //               fontWeight: 600,
// // //               "&:hover": {
// // //                 backgroundColor: "#FFC400",
// // //                 opacity: 0.8, // Warna latar belakang tombol terpilih saat dihover
// // //               },
// // //             },
// // //           },
// // //         },
// // //       },
// // //       MuiInputLabel: {
// // //         styleOverrides: {
// // //           root: {
// // //             fontFamily: "Poppins", // Ganti dengan font family yang diinginkan
// // //             // Lainnya gaya font family yang diinginkan
// // //           },
// // //         },
// // //       },
// // //     },
// // //   });

// // //   const initialData = [
// // //     {
// // //       id: 1,
// // //       image: Foto,
// // //       album: "Beranda",
// // //       description:
// // //         "Inready Workgroup merupakan salah satu organisasi yang ada di Universitas Islam Negeri Alauddin Makassar yang didirikan pada tahun 2007, bertujuan untuk mengembangkan wawasan dan kemampuan baik itu dalam bidang IT maupun keorganisasian anggotanya....",
// // //     },
// // //     { id: 2, image: Foto, album: "Album 2", description: "Deskripsi 2" },
// // //     { id: 3, image: Foto, album: "Album 3", description: "Deskripsi 2" },
// // //     { id: 4, image: Foto, album: "Album 4", description: "Deskripsi 2" },
// // //     { id: 5, image: Foto, album: "Album 5", description: "Deskripsi 2" },
// // //     { id: 6, image: Foto, album: "Album 6", description: "Deskripsi 2" },
// // //     { id: 7, image: Foto, album: "Album 7", description: "Deskripsi 2" },
// // //     { id: 8, image: Foto, album: "Album 8", description: "Deskripsi 2" },
// // //     { id: 9, image: Foto, album: "Album 9", description: "Deskripsi 2" },
// // //     {
// // //       id: 10,
// // //       image: Foto,
// // //       album: "Album 10",
// // //       description: "Deskripsi 2",
// // //     },
// // //     {
// // //       id: 11,
// // //       image: Foto,
// // //       album: "Album 11",
// // //       description: "Deskripsi 2",
// // //     },
// // //     {
// // //       id: 12,
// // //       image: Foto,
// // //       album: "Album 12",
// // //       description: "Deskripsi 2",
// // //     },
// // //     {
// // //       id: 13,
// // //       image: Foto,
// // //       album: "Album 13",
// // //       description: "Deskripsi 2",
// // //     },
// // //     {
// // //       id: 14,
// // //       image: Foto,
// // //       album: "Album 14",
// // //       description: "Deskripsi 2",
// // //     },
// // //     {
// // //       id: 15,
// // //       image: Foto,
// // //       album: "Album 15",
// // //       description: "Deskripsi 2",
// // //     },

// // //   ];

// // //   const Coba = () => {
// // //     const [data, setData] = useState(initialData);
// // //     const [itemsPerPage, setItemsPerPage] = useState(5);
// // //     const [page, setPage] = useState(1);
// // //     const [menu, setMenu] = useState(1);
// // //     const [openDrawer, setOpenDrawer] = useState(false);
// // //     const [selectedFile, setSelectedFile] = useState(null);
// // //     const [newImage, setNewImage] = useState("");
// // //     const [newAlbum, setNewAlbum] = useState("");
// // //     const [newDescription, setNewDescription] = useState("");
// // //     const [editingId, setEditingId] = useState(null);
// // //     const [isModalOpen, setIsModalOpen] = useState(false);
// // //     const csvFileRef = useRef(null);
// // //     const fileInputRef = useRef(null);
// // //     const [category, setCategory] = useState("filterByAlbum");

// // //     console.log(selectedFile);

// // //     // category
// // //     const handleCategoryChange = (event) => {
// // //       setCategory(event.target.value);
// // //     };

// // //     // import csv
// // //     const handleFileCsvChange = (event) => {
// // //       const file = event.target.files[0];
// // //       if (file) {
// // //         parseCsvFile(file);
// // //       }
// // //     };

// // //     const parseCsvFile = (file) => {
// // //       Papa.parse(file, {
// // //         complete: (result) => {
// // //           const filteredData = result.data.filter(
// // //             (row) => row.album && row.description && row.image
// // //           );
// // //           setData(filteredData);
// // //         },
// // //         header: true,
// // //         skipEmptyLines: true,
// // //       });
// // //     };
// // //     // import csv end

// // //     // export excel
// // //     const exportData = initialData.map((item) => ({
// // //       image: item.image,
// // //       album: item.album,
// // //       description: item.description,
// // //     }));

// // //     const exportToExcel = () => {
// // //       const ws = XLSX.utils.json_to_sheet(exportData);
// // //       const wb = XLSX.utils.book_new();
// // //       XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
// // //       XLSX.writeFile(wb, "data.xlsx");
// // //     };
// // //     // export excel end

// // //     const handleEdit = (id) => {
// // //       setEditingId(id);
// // //       const selectedItem = data.find((item) => item.id === id);
// // //       setNewImage(selectedItem.image);
// // //       setNewAlbum(selectedItem.album);
// // //       setNewDescription(selectedItem.description);
// // //     };

// // //     const handleDelete = (id) => {
// // //       const updatedData = data.filter((item) => item.id !== id);
// // //       setData(updatedData);
// // //     };

// // //     const handleSaveEdit = () => {
// // //       const updatedData = data.map((item) =>
// // //         item.id === editingId
// // //           ? {
// // //               id: editingId,
// // //               image: newImage,
// // //               album: newAlbum,
// // //               description: newDescription,
// // //             }
// // //           : item
// // //       );
// // //       setData(updatedData);
// // //       setEditingId(null);
// // //       setNewImage("");
// // //       setNewAlbum("");
// // //       setNewDescription("");
// // //     };

// // //     const handleInputChange = (e, field) => {
// // //       if (field === "album") {
// // //         setNewAlbum(e.target.value);
// // //       } else if (field === "description") {
// // //         setNewDescription(e.target.value);
// // //       }
// // //     };

// // //     const handleAddData = () => {
// // //       const newData = {
// // //         id: data.length + 1,
// // //         image: newImage,
// // //         album: newAlbum,
// // //         description: newDescription,
// // //       };
// // //       setData([...data, newData]);

// // //       setNewImage("");
// // //       setNewAlbum("");
// // //       setNewDescription("");
// // //       setOpenDrawer(false);
// // //       setIsModalOpen(true);
// // //     };

// // //     const handleImageChange = (e) => {
// // //       setNewImage(e.target.value);
// // //     };

// // //     const handleButtonClick = () => {
// // //       fileInputRef.current.click();
// // //     };

// // //     const handleFileChange = (e) => {
// // //       const selectedFile = e.target.files[0];
// // //       if (selectedFile) {
// // //         // Lakukan sesuatu dengan file yang dipilih
// // //         console.log('File yang dipilih:', selectedFile.name);
// // //       }
// // //     };

// // //     const handleAlbumChange = (e) => {
// // //       setNewAlbum(e.target.value);
// // //     };

// // //     const handleDescriptionChange = (e) => {
// // //       setNewDescription(e.target.value);
// // //     };

// // //     // const handleFileChange = (event) => {
// // //     //   setSelectedFile(event.target.files[0]);
// // //     // };

// // //     const handleDeleteFile = () => {
// // //       setSelectedFile(null);
// // //     };

// // //     const handleChooseFileClick = () => {
// // //       document.querySelector('input[type="file"]').click();
// // //     };

// // //     const toggleDrawer = (open) => () => {
// // //       setOpenDrawer(open);
// // //     };

// // //     const classes = useStyles();

// // //     const handleChangePage = (event, newPage) => {
// // //       setPage(newPage);
// // //     };

// // //     const handleChangeItemsPerPage = (event) => {
// // //       setItemsPerPage(event.target.value);
// // //       setPage(1);
// // //     };

// // //     const handleChangeMenu = (event) => {
// // //       setMenu(event.target.value);
// // //     };

// // //     const closeModal = () => {
// // //       setIsModalOpen(false);
// // //     };

// // //     // print
// // //     const handlePrint = () => {
// // //       const printContent = document.getElementById("print-content");
// // //       const originalContents = document.body.innerHTML;

// // //       document.body.innerHTML = printContent.outerHTML;
// // //       window.print();

// // //       document.body.innerHTML = originalContents;
// // //     };

// // //     return (
// // //       <Box sx={{ fontFamily: "Poppins", mt: "-23px" }}>
// // //         {/* import csv */}
// // //         <input
// // //           type="file"
// // //           accept=".csv"
// // //           onChange={handleFileCsvChange}
// // //           style={{ display: "none" }}
// // //           ref={csvFileRef}
// // //         />
// // //         {/* end import csv */}
// // //         <Header

// // //           title={"Slider"}
// // //           onClickTambahData={toggleDrawer(true)}
// // //           onClickCsv={() => csvFileRef.current.click()}
// // //           onClickCetak={handlePrint}
// // //           onClickExcel={exportToExcel}
// // //         />
// // //           <Box mt={2}>
// // //             <Card>
// // //               <Stack
// // //                 display={"flex"}
// // //                 direction={"row"}
// // //                 sx={{
// // //                   py: 3,
// // //                   justifyContent: "space-between",
// // //                   borderBottom: "1px solid rgba(232, 232, 232, 0.87)",
// // //                   width: "95%",
// // //                   alignItems: "center",
// // //                   margin: "auto",
// // //                 }}
// // //               >
// // //                 <FormControl sx={{ fontFamily: "Poppins" }}>
// // //                   <Stack display={"flex"} direction={"row"}>
// // //                     <Typography sx={{ fontFamily: "Poppins" }}>
// // //                       Tampilkan
// // //                     </Typography>
// // //                     <Select
// // //                       sx={{ height: 25, width: 62, mx: 1, fontFamily: "Poppins" }}
// // //                       value={itemsPerPage}
// // //                       onChange={handleChangeItemsPerPage}
// // //                     >
// // //                       <MenuItem value={5}>5</MenuItem>
// // //                       <MenuItem value={10}>10</MenuItem>
// // //                       <MenuItem value={15}>15</MenuItem>
// // //                       <MenuItem value={data.length}>All</MenuItem>
// // //                     </Select>
// // //                     <Typography sx={{ fontFamily: "Poppins" }}>Data</Typography>
// // //                   </Stack>
// // //                 </FormControl>
// // //                 {/* menu */}
// // //                 <FormControl sx={{ fontFamily: "Poppins" }}>
// // //                   <Stack>
// // //                     <Select
// // //                       sx={{ height: 30, width: 200, fontFamily: "Poppins" }}
// // //                       value={category}
// // //                       onChange={handleCategoryChange}
// // //                     >
// // //                       <MenuItem
// // //                         sx={{ fontFamily: "Poppins" }}
// // //                         value={"filterByAlbum"}
// // //                       >
// // //                         Filter By Album
// // //                       </MenuItem>
// // //                       <MenuItem
// // //                         sx={{ fontFamily: "Poppins" }}
// // //                         value={"detailKegiatan"}
// // //                       >
// // //                         Detail Kegiatan
// // //                       </MenuItem>
// // //                     </Select>
// // //                   </Stack>
// // //                 </FormControl>
// // //               </Stack>
// // //               <div id="print-content">
// // //                 <TableContainer
// // //                   sx={{ px: 5, fontFamily: "Poppins" }}
// // //                   component={Paper}
// // //                 >
// // //                   <Table>
// // //                     <TableHead sx={{ fontFamily: "Poppins" }}>
// // //                       <TableRow>
// // //                         <TableCell sx={{ fontFamily: "Poppins", width: "170px" }}>
// // //                           Gambar
// // //                         </TableCell>
// // //                         <TableCell sx={{ fontFamily: "Poppins", width: "240px" }}>
// // //                           Album
// // //                         </TableCell>
// // //                         <TableCell sx={{ fontFamily: "Poppins", width: "450px" }}>
// // //                           Deskripsi
// // //                         </TableCell>
// // //                         <TableCell
// // //                           sx={{
// // //                             fontFamily: "Poppins",
// // //                             width: "100px",
// // //                             textAlign: "center",
// // //                           }}
// // //                         >
// // //                           Aksi
// // //                         </TableCell>
// // //                       </TableRow>
// // //                     </TableHead>
// // //                     <TableBody sx={{ fontFamily: "Poppins" }}>
// // //                       {data
// // //                         .slice((page - 1) * itemsPerPage, page * itemsPerPage)
// // //                         .map((row) => (
// // //                           <TableRow key={row.id} className={classes.blueRow}>
// // //                             <TableCell>
// // //                               <img
// // //                                 style={{ objectFit: "cover" }}
// // //                                 src={row.image}
// // //                                 alt={`Gambar ${row.album}`}
// // //                                 width="99"
// // //                                 height="111"
// // //                               />
// // //                             </TableCell>
// // //                             <TableCell sx={{ fontFamily: "Poppins" }}>
// // //                               {editingId === row.id ? (
// // //                                 <TextField
// // //                                   value={newAlbum}
// // //                                   onChange={(e) => handleInputChange(e, "album")}
// // //                                 />
// // //                               ) : (
// // //                                 row.album
// // //                               )}
// // //                             </TableCell>
// // //                             {/* edit yg asli */}
// // //                             {/* <TableCell sx={{ fontFamily: "Poppins" }}>
// // //                           {row.album}
// // //                         </TableCell> */}
// // //                             <TableCell sx={{ fontFamily: "Poppins" }}>
// // //                               {editingId === row.id ? (
// // //                                 <TextField
// // //                                   value={newDescription}
// // //                                   onChange={(e) =>
// // //                                     handleInputChange(e, "description")
// // //                                   }
// // //                                 />
// // //                               ) : (
// // //                                 row.description
// // //                               )}
// // //                             </TableCell>
// // //                             {/* deskripsi asli */}
// // //                             {/* <TableCell sx={{ fontFamily: "Poppins" }}>
// // //                           {row.description}
// // //                         </TableCell> */}
// // //                             <TableCell>
// // //                               <Stack
// // //                                 direction={"row"}
// // //                                 spacing={1}
// // //                                 sx={{
// // //                                   // display: "flex",
// // //                                   alignItems: "center",
// // //                                   alignSelf: "center",
// // //                                 }}
// // //                               >
// // //                                 {editingId === row.id ? (
// // //                                   <ButtonYellow
// // //                                     sx={{ color: "white" }}
// // //                                     variant="contained"
// // //                                     onClick={handleSaveEdit}
// // //                                   >
// // //                                     Save
// // //                                   </ButtonYellow>
// // //                                 ) : (
// // //                                   <ButtonYellow
// // //                                     sx={{ color: "white" }}
// // //                                     variant="Contained"
// // //                                     onClick={() => handleEdit(row.id)}
// // //                                   >
// // //                                     <CreateIcon />
// // //                                   </ButtonYellow>
// // //                                 )}
// // //                                 {/* edit asli */}
// // //                                 {/* <Button1
// // //                               variant="Contained"
// // //                               // sx={{width: "20px"}}
// // //                             >
// // //                               <CreateIcon />
// // //                             </Button1> */}
// // //                                 <ButtonPink
// // //                                   sx={{ fontSize: "20px", color: "#FF2E00" }}
// // //                                   variant="Contained"
// // //                                   size="small"
// // //                                   onClick={() => handleDelete(row.id)}
// // //                                 >
// // //                                   <RiDeleteBin5Fill
// // //                                     sx={{ color: "#FF2E00", fontSize: "20px" }}
// // //                                   />
// // //                                 </ButtonPink>
// // //                                 {/* delete asli */}
// // //                                 {/* <Button2
// // //                               sx={{ fontSize: "20px" }}
// // //                               variant="Contained"
// // //                               size="small"
// // //                             >
// // //                               <RiDeleteBin5Fill
// // //                                 sx={{ color: "#FF2E00", fontSize: "20px" }}
// // //                               />
// // //                             </Button2> */}
// // //                               </Stack>
// // //                             </TableCell>
// // //                           </TableRow>
// // //                         ))}
// // //                     </TableBody>
// // //                   </Table>
// // //                 </TableContainer>
// // //               </div>
// // //               <Card sx={{ px: 4, py: 4 }}>
// // //                 <Stack
// // //                   display={"flex"}
// // //                   direction={"row"}
// // //                   sx={{ justifyContent: "space-between" }}
// // //                 >
// // //                   <Typography sx={{ fontFamily: "Poppins" }}>
// // //                     Menampilkan 1 - {itemsPerPage} dari {data.length} Data
// // //                   </Typography>
// // //                   <ThemeProvider theme={theme}>
// // //                     <Pagination
// // //                       sx={{ color: "#FFC400" }}
// // //                       count={Math.ceil(data.length / itemsPerPage)}
// // //                       page={page}
// // //                       onChange={handleChangePage}
// // //                       // style={{ marginTop: "10px" }}
// // //                     />
// // //                   </ThemeProvider>
// // //                 </Stack>
// // //               </Card>
// // //             </Card>
// // //           </Box>
// // //         {/* filter by album end */}

// // //         {/* Drawer */}
// // //         <Drawer
// // //           anchor="right"
// // //           open={openDrawer}
// // //           // onClose={toggleDrawer(false)}
// // //           // style={{ width: 500 }}
// // //           sx={{ width: 700 }}
// // //         >
// // //           <Box
// // //             sx={{ width: 550, px: 4, fontFamily: "Poppins", pb: 3 }}
// // //             role="presentation"
// // //             // onClick={toggleDrawer(false)}
// // //           >
// // //             <Typography
// // //               sx={{
// // //                 fontFamily: "Poppins",
// // //                 pt: 4,
// // //                 fontWeight: 500,
// // //                 fontSize: "20px",
// // //               }}
// // //             >
// // //               Slider
// // //             </Typography>

// // //             <Stack sx={{ mt: 4 }}>
// // //               <Typography
// // //                 sx={{
// // //                   fontFamily: "Poppins",
// // //                   fontWeight: 500,
// // //                   fontSize: "14px",
// // //                   display: "flex",
// // //                   flexDirection: "column",
// // //                 }}
// // //               >
// // //                 Foto
// // //               </Typography>
// // //             </Stack>
// // //             <Grid container gap={3} mt={1}>
// // //               <Grid xs={4}>
// // //                 <Stack sx={{ border: "1px dashed #576974", borderRadius: "8px" }}>
// // //                   <AddPhotoAlternateIcon
// // //                     sx={{
// // //                       color: "#576974",
// // //                       fontSize: "60px",
// // //                       margin: "0 auto",
// // //                       mt: 3,
// // //                     }}
// // //                   />
// // //                   <Typography
// // //                     sx={{
// // //                       mt: 1,
// // //                       width: "80%",
// // //                       alignSelf: "center",
// // //                       fontFamily: "Poppins",
// // //                       color: "#576974",
// // //                       textAlign: "center",
// // //                     }}
// // //                   >
// // //                     Tarik dan lepas foto di sini
// // //                   </Typography>
// // //                   <Input
// // //                      type="file"
// // //                      ref={fileInputRef}
// // //                      style={{ display: 'none' }}
// // //                      onChange={handleFileChange}
// // //                    />
// // //                   <ButtonYellow
// // //                     sx={{ my: 2, alignSelf: "center", color: "white" }}
// // //                     variant="contained"
// // //                     color="primary"
// // //                     // onClick={alert("kontol")}
// // //                     // onClick={handleButtonClick}
// // //                     // value={newImage}
// // //                     // onChange={handleImageChange}
// // //                   >
// // //                     Pilih File
// // //                   </ButtonYellow>
// // //                   <Button onClick={handleButtonClick}>tes</Button>
// // //                 </Stack>
// // //               </Grid>
// // //               <Grid xs={5}>
// // //                 <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
// // //                   Upload Files
// // //                 </Typography>
// // //                 {selectedFile && (
// // //                   <Stack
// // //                     sx={{ display: "flex", flexDirection: "row" }}
// // //                     // gap={"2px"}
// // //                   >
// // //                     <ImageIcon
// // //                       sx={{ color: "#576974", pt: 1, fontSize: "30px" }}
// // //                     />
// // //                     <Typography
// // //                       sx={{ mt: 1, fontFamily: "Poppins", fontSize: "14px" }}
// // //                     >
// // //                       {selectedFile.name}
// // //                     </Typography>
// // //                   </Stack>
// // //                 )}
// // //               </Grid>
// // //               <Grid xs={1} pt={5}>
// // //                 {selectedFile && (
// // //                   <Typography
// // //                     sx={{
// // //                       fontSize: "20px",
// // //                       cursor: "pointer",
// // //                       textAlign: "end",
// // //                     }}
// // //                     color="#576974"
// // //                     onClick={handleDeleteFile}
// // //                   >
// // //                     <RiDeleteBin5Fill />
// // //                   </Typography>
// // //                 )}
// // //               </Grid>
// // //             </Grid>
// // //             <Stack mt={2}>
// // //               <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
// // //                 Album
// // //               </Typography>
// // //               <ThemeProvider theme={theme}>
// // //                 <TextField
// // //                   label="Masukkan Nama Album"
// // //                   value={newAlbum}
// // //                   onChange={handleAlbumChange}
// // //                 />
// // //               </ThemeProvider>
// // //               <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 1 }}>
// // //                 Deskripsi
// // //               </Typography>
// // //               <ThemeProvider theme={theme}>
// // //                 <TextField
// // //                   label="Masukkan Deskripsi"
// // //                   multiline
// // //                   rows={4}
// // //                   value={newDescription}
// // //                   onChange={handleDescriptionChange}
// // //                 />
// // //               </ThemeProvider>
// // //             </Stack>
// // //             <Stack
// // //               mt={3}
// // //               gap={2}
// // //               sx={{
// // //                 display: "flex",
// // //                 flexDirection: "row",
// // //                 justifyContent: "flex-end",
// // //               }}
// // //             >
// // //               <ButtonYellow
// // //                 // onClick={toggleDrawer(false)}
// // //                 onClick={handleAddData}
// // //                 sx={{ width: "130px", py: 1, color: "white" }}
// // //                 startIcon={<CreateIcon />}
// // //               >
// // //                 Simpan
// // //               </ButtonYellow>
// // //               <ButtonPink
// // //                 onClick={toggleDrawer(false)}
// // //                 sx={{ width: "130px", py: 1, color: "#FF2E00" }}
// // //                 startIcon={<RiDeleteBin5Fill />}
// // //               >
// // //                 Batal
// // //               </ButtonPink>
// // //             </Stack>
// // //           </Box>
// // //         </Drawer>

// // //         {/* Modal */}
// // //         <ModalSlider open={isModalOpen} onClick={closeModal} />

// // //         {/* Detail Kegiatan */}
// // //         {/* {category === "detailKegiatan" && (
// // //           <Box mt={3}>
// // //             <Card sx={{ py: 2, pl: 4, display: "flex", gap: 2 }}>
// // //               <CardMedia
// // //                 sx={{ width: "24px", height: "24px" }}
// // //                 image={IconKegiatan}
// // //               />
// // //               <Typography
// // //                 sx={{ fontFamily: "Poppins", color: "#D1D3E2", fontWeight: 500 }}
// // //               >
// // //                 Kegiatan
// // //               </Typography>
// // //               <Typography sx={{ mt: "4px", ml: "-4px" }}>
// // //                 <ArrowForwardIosIcon
// // //                   sx={{ color: "#576974", fontSize: "18px" }}
// // //                 />{" "}
// // //               </Typography>
// // //               <FormControl
// // //                 variant="standard"
// // //                 style={{ border: "none" }}
// // //                 sx={{ fontFamily: "Poppins", mt: "-2px", ml: "-5px" }}
// // //               >
// // //                 <Stack>
// // //                   <Select
// // //                     sx={{
// // //                       height: 30,
// // //                       width: 200,
// // //                       fontFamily: "Poppins",
// // //                       color: "#576974",
// // //                     }}
// // //                     value={category}
// // //                     onChange={handleCategoryChange}
// // //                   >
// // //                     <MenuItem
// // //                       sx={{ fontFamily: "Poppins" }}
// // //                       value={"filterByAlbum"}
// // //                     >
// // //                       Filter By Album
// // //                     </MenuItem>
// // //                     <MenuItem
// // //                       sx={{ fontFamily: "Poppins" }}
// // //                       value={"detailKegiatan"}
// // //                     >
// // //                       Detail Kegiatan
// // //                     </MenuItem>
// // //                   </Select>
// // //                 </Stack>
// // //               </FormControl>
// // //             </Card>
// // //           </Box>
// // //         )} */}
// // //       </Box>
// // //     );
// // //   };

// // //   export default Coba;

// // const Coba = () => {
// //   const top100Films = [
// //     { label: 'The Shawshank Redemption', year: 1994 },
// //     { label: 'The Godfather', year: 1972 },
// //     { label: 'The Godfather: Part II', year: 1974 },
// //     { label: 'The Dark Knight', year: 2008 },
// //     { label: '12 Angry Men', year: 1957 },
// //     { label: "Schindler's List", year: 1993 },
// //     { label: 'Pulp Fiction', year: 1994 },
// //     {
// //       label: 'The Lord of the Rings: The Return of the King',
// //       year: 2003,
// //     },
// //     { label: 'The Good, the Bad and the Ugly', year: 1966 },
// //     { label: 'Fight Club', year: 1999 },
// //     {
// //       label: 'The Lord of the Rings: The Fellowship of the Ring',
// //       year: 2001,
// //     },
// //     {
// //       label: 'Star Wars: Episode V - The Empire Strikes Back',
// //       year: 1980,
// //     },
// //     { label: 'Forrest Gump', year: 1994 },
// //     { label: 'Inception', year: 2010 },
// //     {
// //       label: 'The Lord of the Rings: The Two Towers',
// //       year: 2002,
// //     },
// //     { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
// //     { label: 'Goodfellas', year: 1990 },
// //     { label: 'The Matrix', year: 1999 },
// //     { label: 'Seven Samurai', year: 1954 },
// //     {
// //       label: 'Star Wars: Episode IV - A New Hope',
// //       year: 1977,
// //     },
// //     { label: 'City of God', year: 2002 },
// //     { label: 'Se7en', year: 1995 },
// //     { label: 'The Silence of the Lambs', year: 1991 },
// //     { label: "It's a Wonderful Life", year: 1946 },
// //     { label: 'Life Is Beautiful', year: 1997 },
// //     { label: 'The Usual Suspects', year: 1995 },
// //     { label: 'Léon: The Professional', year: 1994 },
// //     { label: 'Spirited Away', year: 2001 },
// //     { label: 'Saving Private Ryan', year: 1998 },
// //     { label: 'Once Upon a Time in the West', year: 1968 },
// //     { label: 'American History X', year: 1998 },
// //     { label: 'Interstellar', year: 2014 },
// //     { label: 'Casablanca', year: 1942 },
// //     { label: 'City Lights', year: 1931 },
// //     { label: 'Psycho', year: 1960 },
// //     { label: 'The Green Mile', year: 1999 },
// //     { label: 'The Intouchables', year: 2011 },
// //     { label: 'Modern Times', year: 1936 },
// //     { label: 'Raiders of the Lost Ark', year: 1981 },
// //     { label: 'Rear Window', year: 1954 },
// //     { label: 'The Pianist', year: 2002 },
// //     { label: 'The Departed', year: 2006 },
// //     { label: 'Terminator 2: Judgment Day', year: 1991 },
// //     { label: 'Back to the Future', year: 1985 },
// //     { label: 'Whiplash', year: 2014 },
// //     { label: 'Gladiator', year: 2000 },
// //     { label: 'Memento', year: 2000 },
// //     { label: 'The Prestige', year: 2006 },
// //     { label: 'The Lion King', year: 1994 },
// //     { label: 'Apocalypse Now', year: 1979 },
// //     { label: 'Alien', year: 1979 },
// //     { label: 'Sunset Boulevard', year: 1950 },
// //     {
// //       label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
// //       year: 1964,
// //     },
// //     { label: 'The Great Dictator', year: 1940 },
// //     { label: 'Cinema Paradiso', year: 1988 },
// //     { label: 'The Lives of Others', year: 2006 },
// //     { label: 'Grave of the Fireflies', year: 1988 },
// //     { label: 'Paths of Glory', year: 1957 },
// //     { label: 'Django Unchained', year: 2012 },
// //     { label: 'The Shining', year: 1980 },
// //     { label: 'WALL·E', year: 2008 },
// //     { label: 'American Beauty', year: 1999 },
// //     { label: 'The Dark Knight Rises', year: 2012 },
// //     { label: 'Princess Mononoke', year: 1997 },
// //     { label: 'Aliens', year: 1986 },
// //     { label: 'Oldboy', year: 2003 },
// //     { label: 'Once Upon a Time in America', year: 1984 },
// //     { label: 'Witness for the Prosecution', year: 1957 },
// //     { label: 'Das Boot', year: 1981 },
// //     { label: 'Citizen Kane', year: 1941 },
// //     { label: 'North by Northwest', year: 1959 },
// //     { label: 'Vertigo', year: 1958 },
// //     {
// //       label: 'Star Wars: Episode VI - Return of the Jedi',
// //       year: 1983,
// //     },
// //     { label: 'Reservoir Dogs', year: 1992 },
// //     { label: 'Braveheart', year: 1995 },
// //     { label: 'M', year: 1931 },
// //     { label: 'Requiem for a Dream', year: 2000 },
// //     { label: 'Amélie', year: 2001 },
// //     { label: 'A Clockwork Orange', year: 1971 },
// //     { label: 'Like Stars on Earth', year: 2007 },
// //     { label: 'Taxi Driver', year: 1976 },
// //     { label: 'Lawrence of Arabia', year: 1962 },
// //     { label: 'Double Indemnity', year: 1944 },
// //     {
// //       label: 'Eternal Sunshine of the Spotless Mind',
// //       year: 2004,
// //     },
// //     { label: 'Amadeus', year: 1984 },
// //     { label: 'To Kill a Mockingbird', year: 1962 },
// //     { label: 'Toy Story 3', year: 2010 },
// //     { label: 'Logan', year: 2017 },
// //     { label: 'Full Metal Jacket', year: 1987 },
// //     { label: 'Dangal', year: 2016 },
// //     { label: 'The Sting', year: 1973 },
// //     { label: '2001: A Space Odyssey', year: 1968 },
// //     { label: "Singin' in the Rain", year: 1952 },
// //     { label: 'Toy Story', year: 1995 },
// //     { label: 'Bicycle Thieves', year: 1948 },
// //     { label: 'The Kid', year: 1921 },
// //     { label: 'Inglourious Basterds', year: 2009 },
// //     { label: 'Snatch', year: 2000 },
// //     { label: '3 Idiots', year: 2009 },
// //     { label: 'Monty Python and the Holy Grail', year: 1975 },
// //   ];
// //   return (
// //     <>
// //       {/* <Tes />
// //       <Tes2 /> */}
// //        <Autocomplete
// //       disablePortal
// //       id="combo-box-demo"
// //       options={top100Films}
// //       sx={{ width: 300 }}
// //       renderInput={(params) => <TextField {...params} placeholder="coba" />}
// //     />
// //     </>
// //   );
// // };

// // export default Coba;

// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
// import Glide from '@glidejs/glide';
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';
// import Foto from "../assets/navbar/Logo.png"
// import { useEffect } from 'react';

// const albums = [
//   {
//     id: 1,
//     title: 'Album 1',
//     description: 'Description for Album 1',
//     images: [
//       Foto,
//       Foto,
//       Foto,
      
//     ],
//   },
//   {
//     id: 2,
//     title: 'Album 2',
//     description: 'Description for Album 2',
//     images: [
//       Foto,
//       Foto,
//       Foto,
      
//     ],
//   },
//   // Add more albums here
// ];
// const Coba = () => {
//   const [selectedAlbum, setSelectedAlbum] = useState(null);

//   const handleOpenDetail = (album) => {
//     setSelectedAlbum(album);
//   };

//   useEffect(() => {
//     if (selectedAlbum) {
//     const glide = new Glide(`#glide-${selectedAlbum.id}`,{
//       type: "carousel",
//       startAt: 0,
//       perView: 3, // Menggunakan 'auto' agar mengikuti jumlah gambar
//       // focusAt: "center", // Gambar berada di tengah
//       breakpoints: {
//         800: {
//           perView: 2,
//         },
//         480: {
//           perView: 1,
//         },
//       },
//     });

//     glide.mount();
  
//     return () => {
//       glide.destroy();
//     };
//   }
//   }, [selectedAlbum]);

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Title</TableCell>
//               <TableCell>Description</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {albums.map((album) => (
//               <TableRow key={album.id}>
//                 <TableCell>{album.title}</TableCell>
//                 <TableCell>{album.description}</TableCell>
//                 <TableCell>
//                   <Button onClick={() => handleOpenDetail(album)}>Detail</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {selectedAlbum && (
//         <div>
//           <h2>{selectedAlbum.title}</h2>
//           <p>{selectedAlbum.description}</p>
//           <div id={`glide-${selectedAlbum.id}`} className="glide">
//             <div className="glide__track" data-glide-el="track">
//               <ul className="glide__slides">
//                 {selectedAlbum.images.map((image, index) => (
//                   <li className="glide__slide" key={index}>
//                     <img src={image} alt={`Album ${selectedAlbum.id} - ${index}`} />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
 
// export default Coba;

import React, { useState } from 'react';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from '@mui/material';
const Coba = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customInput, setCustomInput] = useState('');

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    }
    console.log(selectedOptions)
  };

  const handleCustomInputChange = (event) => {
    setCustomInput(event.target.value);
    console.log(customInput)
  };

  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    // ...Tambahkan pilihan lainnya di sini
  ];

  return (
    <FormControl component="fieldset">
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={selectedOptions.includes(option)}
                onChange={handleCheckboxChange}
                value={option}
              />
            }
            label={option}
          />
        ))}
        <TextField
          label="Input Manual"
          variant="outlined"
          value={customInput}
          onChange={handleCustomInputChange}
        />
      </FormGroup>
    </FormControl>
  );
}
 
export default Coba;