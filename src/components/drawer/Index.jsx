// import { Box, Drawer, Grid, Stack, Typography,  Input, } from "@mui/material";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import { ButtonYellow } from "../button/Index";

// const DrawerSlider = () => {
//     return ( 
//         <Drawer
//         anchor="right"
//         open={openDrawer}
//         sx={{ width: 700 }}
//       >
//         <Box
//           sx={{ width: 550, px: 4, fontFamily: "Poppins", pb: 3 }}
//           role="presentation"
//         >
//           <Typography
//             sx={{
//               fontFamily: "Poppins",
//               pt: 4,
//               fontWeight: 500,
//               fontSize: "20px",
//             }}
//           >
//             Slider
//           </Typography>

//           <Stack sx={{ mt: 4 }}>
//             <Typography
//               sx={{
//                 fontFamily: "Poppins",
//                 fontWeight: 500,
//                 fontSize: "14px",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               Foto
//             </Typography>
//           </Stack>
//           <Grid container gap={3} mt={1}>
//             <Grid xs={4}>
//               <Stack sx={{ border: "1px dashed #576974", borderRadius: "8px" }}>
//                 <AddPhotoAlternateIcon
//                   sx={{
//                     color: "#576974",
//                     fontSize: "60px",
//                     margin: "0 auto",
//                     mt: 3,
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     mt: 1,
//                     width: "80%",
//                     alignSelf: "center",
//                     fontFamily: "Poppins",
//                     color: "#576974",
//                     textAlign: "center",
//                   }}
//                 >
//                   Tarik dan lepas foto di sini
//                 </Typography>
//                 <Input
//                   type="file"
//                   accept="image/*"
//                   style={{ display: "none" }}
//                   onChange={handleFileChange}
//                 />
//                 <ButtonYellow
//                   sx={{ my: 2, alignSelf: "center", color: "white" }}
//                   variant="contained"
//                   color="primary"
//                   onClick={handleChooseFileClick}
//                   value={newImage}
//                   onChange={handleImageChange}
//                 >
//                   Pilih File
//                 </ButtonYellow>
//               </Stack>
//             </Grid>
//             <Grid xs={5}>
//               <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
//                 Upload Files
//               </Typography>
//               {selectedFile && (
//                 <Stack
//                   sx={{ display: "flex", flexDirection: "row" }}
//                   // gap={"2px"}
//                 >
//                   <ImageIcon
//                     sx={{ color: "#576974", pt: 1, fontSize: "30px" }}
//                   />
//                   <Typography
//                     sx={{ mt: 1, fontFamily: "Poppins", fontSize: "14px" }}
//                   >
//                     {selectedFile.name}
//                   </Typography>
//                 </Stack>
//               )}
//             </Grid>
//             <Grid xs={1} pt={5}>
//               {selectedFile && (
//                 <Typography
//                   sx={{
//                     fontSize: "20px",
//                     cursor: "pointer",
//                     textAlign: "end",
//                   }}
//                   color="#576974"
//                   onClick={handleDeleteFile}
//                 >
//                   <RiDeleteBin5Fill />
//                 </Typography>
//               )}
//             </Grid>
//           </Grid>
//           {/* <Stack mt={2}>
//             <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
//               Album
//             </Typography>
//             <ThemeProvider theme={theme}>
//               <TextField
//                 label="Masukkan Nama Album"
//                 value={newAlbum}
//                 onChange={handleAlbumChange}
//               />
//             </ThemeProvider>
//             <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 1 }}>
//               Deskripsi
//             </Typography>
//             <ThemeProvider theme={theme}>
//               <TextField
//                 label="Masukkan Deskripsi"
//                 multiline
//                 rows={4}
//                 value={newDescription}
//                 onChange={handleDescriptionChange}
//               />
//             </ThemeProvider>
//           </Stack> */}
//           <Stack
//             mt={3}
//             gap={2}
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "flex-end",
//             }}
//           >
//             <ButtonYellow
//               // onClick={toggleDrawer(false)}
//               onClick={handleAddData}
//               sx={{ width: "130px", py: 1, color: "white" }}
//               startIcon={<CreateIcon />}
//             >
//               Simpan
//             </ButtonYellow>
//             <ButtonPink
//               onClick={toggleDrawer(false)}
//               sx={{ width: "130px", py: 1, color: "#FF2E00" }}
//               startIcon={<RiDeleteBin5Fill />}
//             >
//               Batal
//             </ButtonPink>
//           </Stack>
//         </Box>
//       </Drawer>
//      );
// }
 


// const Tes2 = () => {
//     return ( 
//         <p>ini coba</p>
//      );
// }
 
// export {DrawerSlider, Tes2};