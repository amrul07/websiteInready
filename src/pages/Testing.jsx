// // // // // // // // // // // // // import ReactApexChart from "react-apexcharts";
// // // // // // // // // // // // // import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// // // // // // // // // // // // // import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// // // // // // // // // // // // // import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
// // // // // // // // // // // // // import TextField from "@mui/material/TextField";
// // // // // // // // // // // // // import Autocomplete from "@mui/material/Autocomplete";

// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   Box,
// // // // // // // // // // // // //   FormControl,
// // // // // // // // // // // // //   IconButton,
// // // // // // // // // // // // //   InputAdornment,
// // // // // // // // // // // // //   InputLabel,
// // // // // // // // // // // // //   OutlinedInput,
// // // // // // // // // // // // //   Stack,
// // // // // // // // // // // // //   Typography,
// // // // // // // // // // // // // } from "@mui/material";
// // // // // // // // // // // // // import * as React from "react";
// // // // // // // // // // // // // import { DataGrid } from "@mui/x-data-grid";

// // // // // // // // // // // // // const columns = [
// // // // // // // // // // // // //   { field: "id", headerName: "ID", width: 70 },
// // // // // // // // // // // // //   { field: "firstName", headerName: "First name", width: 130 },
// // // // // // // // // // // // //   { field: "lastName", headerName: "Last name", width: 130 },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     field: "age",
// // // // // // // // // // // // //     headerName: "Age",
// // // // // // // // // // // // //     type: "number",
// // // // // // // // // // // // //     width: 90,
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     field: "fullName",
// // // // // // // // // // // // //     headerName: "Full name",
// // // // // // // // // // // // //     description: "This column has a value getter and is not sortable.",
// // // // // // // // // // // // //     sortable: false,
// // // // // // // // // // // // //     width: 160,
// // // // // // // // // // // // //     valueGetter: (params) =>
// // // // // // // // // // // // //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
// // // // // // // // // // // // //   },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // const rows = [
// // // // // // // // // // // // //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
// // // // // // // // // // // // //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
// // // // // // // // // // // // //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
// // // // // // // // // // // // //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
// // // // // // // // // // // // //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
// // // // // // // // // // // // //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
// // // // // // // // // // // // //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
// // // // // // // // // // // // //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
// // // // // // // // // // // // //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// // // // // // // // // // // // // ];
// // // // // // // // // // // // // const page = [1, 2, 3, 4, 5, 6, 7, 8];

// // // // // // // // // // // // // const Testing = () => {
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div style={{ height: 400, width: "100%" }}>
// // // // // // // // // // // // //       <Box>
// // // // // // // // // // // // //         <Stack>
// // // // // // // // // // // // //           <Typography>tampilkan</Typography>
// // // // // // // // // // // // //           <Autocomplete
// // // // // // // // // // // // //             disablePortal
// // // // // // // // // // // // //             id="combo-box-demo"
// // // // // // // // // // // // //             options={page}
// // // // // // // // // // // // //             sx={{ width: 80 ,overflow: "hidden"}}
// // // // // // // // // // // // //             renderInput={(params) => <TextField {...params} />}
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </Stack>
// // // // // // // // // // // // //         <DataGrid
// // // // // // // // // // // // //           rows={rows}
// // // // // // // // // // // // //           columns={columns}
// // // // // // // // // // // // //           initialState={{
// // // // // // // // // // // // //             pagination: {
// // // // // // // // // // // // //               paginationModel: { page: 0, pageSize: 5 },
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //           sx={{
// // // // // // // // // // // // //             display: "flex",
// // // // // // // // // // // // //             flexDirection: "column-reverse",
// // // // // // // // // // // // //             alignItems: "flex-start",
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //           pageSizeOptions={[1, 2, 3, 4, 5, 6,7,8]}
// // // // // // // // // // // // //           checkboxSelection
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       </Box>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Testing;

// // // // // // // // // // // // // import * as React from "react";
// // // // // // // // // // // // // import Box from "@mui/material/Box";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   DataGrid,
// // // // // // // // // // // // //   gridPageCountSelector,
// // // // // // // // // // // // //   GridPagination,
// // // // // // // // // // // // //   useGridApiContext,
// // // // // // // // // // // // //   useGridSelector,
// // // // // // // // // // // // // } from "@mui/x-data-grid";
// // // // // // // // // // // // // import { useDemoData } from "@mui/x-data-grid-generator";
// // // // // // // // // // // // // import MuiPagination from "@mui/material/Pagination";

// // // // // // // // // // // // // function Pagination({ page, onPageChange, className }) {
// // // // // // // // // // // // //   const apiRef = useGridApiContext();
// // // // // // // // // // // // //   const pageCount = useGridSelector(apiRef, gridPageCountSelector);

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <MuiPagination
// // // // // // // // // // // // //       color="primary"
// // // // // // // // // // // // //       className={className}
// // // // // // // // // // // // //       count={pageCount}
// // // // // // // // // // // // //       page={page + 1}
// // // // // // // // // // // // //       onChange={(event, newPage) => {
// // // // // // // // // // // // //         onPageChange(event, newPage - 1);
// // // // // // // // // // // // //       }}
// // // // // // // // // // // // //     />
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // // function CustomPagination(props) {
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <GridPagination
// // // // // // // // // // // // //       ActionsComponent={Pagination}
// // // // // // // // // // // // //       labelDisplayedRows={({ from, to, count }) =>
// // // // // // // // // // // // //         `Menampilkan ${from}-${to} dari ${count} data`
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //       labelRowsPerPage="Tampilkan"
// // // // // // // // // // // // //       {...props}
// // // // // // // // // // // // //     />
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }
// // // // // // // // // // // // // const Testing = () => {
// // // // // // // // // // // // //   const { data } = useDemoData({
// // // // // // // // // // // // //     dataSet: "Commodity",
// // // // // // // // // // // // //     rowLength: 100,
// // // // // // // // // // // // //     maxColumns: 6,
// // // // // // // // // // // // //   });
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <Box sx={{ height: 400, width: "100%" }}>
// // // // // // // // // // // // //       <DataGrid
// // // // // // // // // // // // //         pagination
// // // // // // // // // // // // //         slots={{
// // // // // // // // // // // // //           pagination: CustomPagination,
// // // // // // // // // // // // //         }}
// // // // // // // // // // // // //         {...data}
// // // // // // // // // // // // //         initialState={{
// // // // // // // // // // // // //           ...data.initialState,
// // // // // // // // // // // // //           pagination: { paginationModel: { pageSize: 25 } },
// // // // // // // // // // // // //         }}
// // // // // // // // // // // // //       />
// // // // // // // // // // // // //     </Box>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Testing;

// // // // // // // // // // // // //

// // // // // // // // // // // // // //
// // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   Table,
// // // // // // // // // // // // //   TableBody,
// // // // // // // // // // // // //   TableCell,
// // // // // // // // // // // // //   TableContainer,
// // // // // // // // // // // // //   TableHead,
// // // // // // // // // // // // //   TableRow,
// // // // // // // // // // // // //   Paper,
// // // // // // // // // // // // //   Button,
// // // // // // // // // // // // //   Pagination,
// // // // // // // // // // // // //   FormControl,
// // // // // // // // // // // // //   Select,
// // // // // // // // // // // // //   MenuItem,
// // // // // // // // // // // // //   Box,
// // // // // // // // // // // // //   Typography,
// // // // // // // // // // // // //   Stack,
// // // // // // // // // // // // //   Card,
// // // // // // // // // // // // //   Grid,
// // // // // // // // // // // // // } from "@mui/material";
// // // // // // // // // // // // // import Foto from "../assets/navbar/Logo.png";
// // // // // // // // // // // // // import "../index.css"

// // // // // // // // // // // // // const initialData = [
// // // // // // // // // // // // //   { id: 1, image: Foto, album: "Album 1", description: "Deskripsi 1" },
// // // // // // // // // // // // //   { id: 2, image: Foto, album: "Album 2", description: "Deskripsi 2" },
// // // // // // // // // // // // //   { id: 3, image: Foto, album: "Album 3", description: "Deskripsi 2" },
// // // // // // // // // // // // //   { id: 4, image: Foto, album: "Album 4", description: "Deskripsi 2" },
// // // // // // // // // // // // //   { id: 5, image: Foto, album: "Album 5", description: "Deskripsi 2" },
// // // // // // // // // // // // //   { id: 6, image: Foto, album: "Album 6", description: "Deskripsi 2" },
// // // // // // // // // // // // //   { id: 7, image: Foto, album: "Album 7", description: "Deskripsi 2" },
// // // // // // // // // // // // //   { id: 8, image: Foto, album: "Album 8", description: "Deskripsi 2" },
// // // // // // // // // // // // //   { id: 9, image: Foto, album: "Album 9", description: "Deskripsi 2" },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 10,
// // // // // // // // // // // // //     image: Foto,
// // // // // // // // // // // // //     album: "Album 10",
// // // // // // // // // // // // //     description: "Deskripsi 2",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 11,
// // // // // // // // // // // // //     image: Foto,
// // // // // // // // // // // // //     album: "Album 11",
// // // // // // // // // // // // //     description: "Deskripsi 2",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 12,
// // // // // // // // // // // // //     image: Foto,
// // // // // // // // // // // // //     album: "Album 12",
// // // // // // // // // // // // //     description: "Deskripsi 2",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 13,
// // // // // // // // // // // // //     image: Foto,
// // // // // // // // // // // // //     album: "Album 13",
// // // // // // // // // // // // //     description: "Deskripsi 2",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 14,
// // // // // // // // // // // // //     image: Foto,
// // // // // // // // // // // // //     album: "Album 14",
// // // // // // // // // // // // //     description: "Deskripsi 2",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 15,
// // // // // // // // // // // // //     image: Foto,
// // // // // // // // // // // // //     album: "Album 15",
// // // // // // // // // // // // //     description: "Deskripsi 2",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   // ... data lainnya
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // const Testing = () => {
// // // // // // // // // // // // //   const [data, setData] = useState(initialData);
// // // // // // // // // // // // //   const [itemsPerPage, setItemsPerPage] = useState(5);
// // // // // // // // // // // // //   const [page, setPage] = useState(1);

// // // // // // // // // // // // //   const handleChangePage = (event, newPage) => {
// // // // // // // // // // // // //     setPage(newPage);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleChangeItemsPerPage = (event) => {
// // // // // // // // // // // // //     setItemsPerPage(event.target.value);
// // // // // // // // // // // // //     setPage(1);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div>
// // // // // // // // // // // // //       <Card
// // // // // // // // // // // // //         mb={2}
// // // // // // // // // // // // //         display="flex"
// // // // // // // // // // // // //         justifyContent="flex-start"
// // // // // // // // // // // // //         alignItems="center"
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <FormControl>
// // // // // // // // // // // // //           <Stack display={"flex"} direction={"row"}>
// // // // // // // // // // // // //             <Typography>Tampilkan</Typography>
// // // // // // // // // // // // //             <Select
// // // // // // // // // // // // //               sx={{ height: 30, width: 60, mx: 1 }}
// // // // // // // // // // // // //               value={itemsPerPage}
// // // // // // // // // // // // //               onChange={handleChangeItemsPerPage}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <MenuItem value={5}>5</MenuItem>
// // // // // // // // // // // // //               <MenuItem value={10}>10</MenuItem>
// // // // // // // // // // // // //               <MenuItem value={15}>15</MenuItem>
// // // // // // // // // // // // //             </Select>
// // // // // // // // // // // // //             <Typography>Data</Typography>
// // // // // // // // // // // // //           </Stack>
// // // // // // // // // // // // //         </FormControl>
// // // // // // // // // // // // //       </Card>
// // // // // // // // // // // // //       <TableContainer component={Paper}>
// // // // // // // // // // // // //         <Table>
// // // // // // // // // // // // //           <TableHead>
// // // // // // // // // // // // //             <TableRow>
// // // // // // // // // // // // //               <TableCell>Gambar</TableCell>
// // // // // // // // // // // // //               <TableCell>Album</TableCell>
// // // // // // // // // // // // //               <TableCell>Deskripsi</TableCell>
// // // // // // // // // // // // //               <TableCell>Aksi</TableCell>
// // // // // // // // // // // // //             </TableRow>
// // // // // // // // // // // // //           </TableHead>
// // // // // // // // // // // // //           <TableBody>
// // // // // // // // // // // // //             {data
// // // // // // // // // // // // //               .slice((page - 1) * itemsPerPage, page * itemsPerPage)
// // // // // // // // // // // // //               .map((row) => (
// // // // // // // // // // // // //                 <TableRow key={row.id}>
// // // // // // // // // // // // //                   <TableCell>
// // // // // // // // // // // // //                     <img
// // // // // // // // // // // // //                       src={row.image}
// // // // // // // // // // // // //                       alt={`Gambar ${row.album}`}
// // // // // // // // // // // // //                       width="50"
// // // // // // // // // // // // //                       height="50"
// // // // // // // // // // // // //                     />
// // // // // // // // // // // // //                   </TableCell>
// // // // // // // // // // // // //                   <TableCell>{row.album}</TableCell>
// // // // // // // // // // // // //                   <TableCell>{row.description}</TableCell>
// // // // // // // // // // // // //                   <TableCell>
// // // // // // // // // // // // //                     <Button variant="outlined" color="primary">
// // // // // // // // // // // // //                       Edit
// // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // //                     <Button variant="outlined" color="secondary">
// // // // // // // // // // // // //                       Hapus
// // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // //                   </TableCell>
// // // // // // // // // // // // //                 </TableRow>
// // // // // // // // // // // // //               ))}
// // // // // // // // // // // // //           </TableBody>
// // // // // // // // // // // // //         </Table>
// // // // // // // // // // // // //       </TableContainer>
// // // // // // // // // // // // //       <Stack
// // // // // // // // // // // // //         display={"flex"}
// // // // // // // // // // // // //         direction={"row"}
// // // // // // // // // // // // //         sx={{ justifyContent: "space-between" }}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <Typography>
// // // // // // // // // // // // //           Menampilkan 1 - {itemsPerPage} dari {data.length} Data
// // // // // // // // // // // // //         </Typography>
// // // // // // // // // // // // //         <Pagination
// // // // // // // // // // // // //           count={Math.ceil(data.length / itemsPerPage)}
// // // // // // // // // // // // //           page={page}
// // // // // // // // // // // // //           onChange={handleChangePage}
// // // // // // // // // // // // //           color="primary"
// // // // // // // // // // // // //           style={{ marginTop: "10px" }}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       </Stack>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Testing;

// // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // import { makeStyles } from '@mui/styles';
// // // // // // // // // // // // // import Table from '@mui/material/Table';
// // // // // // // // // // // // // import TableBody from '@mui/material/TableBody';
// // // // // // // // // // // // // import TableCell from '@mui/material/TableCell';
// // // // // // // // // // // // // import TableContainer from '@mui/material/TableContainer';
// // // // // // // // // // // // // import TableHead from '@mui/material/TableHead';
// // // // // // // // // // // // // import TableRow from '@mui/material/TableRow';
// // // // // // // // // // // // // import Paper from '@mui/material/Paper';

// // // // // // // // // // // // // const useStyles = makeStyles({
// // // // // // // // // // // // //   blueRow: {
// // // // // // // // // // // // //     backgroundColor: 'blue',
// // // // // // // // // // // // //   },
// // // // // // // // // // // // // });

// // // // // // // // // // // // // const data = [
// // // // // // // // // // // // //   { id: 1, name: 'Item 1' },
// // // // // // // // // // // // //   { id: 2, name: 'Item 2' },
// // // // // // // // // // // // //   { id: 3, name: 'Item 3' },
// // // // // // // // // // // // //   { id: 4, name: 'Item 4' },
// // // // // // // // // // // // //   { id: 5, name: 'Item 5' },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // const BlueRow = ({ id, name }) => {
// // // // // // // // // // // // //   const classes = useStyles();

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <TableRow className={id % 2 === 1 ? classes.blueRow : ''}>
// // // // // // // // // // // // //       <TableCell>{id}</TableCell>
// // // // // // // // // // // // //       <TableCell>{name}</TableCell>
// // // // // // // // // // // // //     </TableRow>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };
// // // // // // // // // // // // // const Testing = () => {

// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //       <TableContainer component={Paper}>
// // // // // // // // // // // // //         <Table>
// // // // // // // // // // // // //           <TableHead>
// // // // // // // // // // // // //             <TableRow>
// // // // // // // // // // // // //               <TableCell>ID</TableCell>
// // // // // // // // // // // // //               <TableCell>Name</TableCell>
// // // // // // // // // // // // //             </TableRow>
// // // // // // // // // // // // //           </TableHead>
// // // // // // // // // // // // //           <TableBody>
// // // // // // // // // // // // //             {data.map((item) => (
// // // // // // // // // // // // //               <BlueRow key={item.id} id={item.id} name={item.name} />
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </TableBody>
// // // // // // // // // // // // //         </Table>
// // // // // // // // // // // // //       </TableContainer>
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   };

// // // // // // // // // // // // // export default Testing;
// // // // // // import React, { useState } from "react";
// // // // // //  import Drawer from "@mui/material/Drawer";
// // // // // //  import Button from "@mui/material/Button";
// // // // // //  import {
// // // // // //    Box,
// // // // // //    CssBaseline,
// // // // // //    Grid,
// // // // // //    Input,
// // // // // //    Stack,
// // // // // //    TextField,
// // // // // //    Typography,
// // // // // //  } from "@mui/material";
// // // // // //  import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// // // // // //  import { styled } from "@mui/material/styles";
// // // // // //  import { purple } from "@mui/material/colors";
// // // // // //  import DeleteIcon from "@mui/icons-material/Delete";
// // // // // //  import ImageIcon from "@mui/icons-material/Image";
// // // // // //  import { RiDeleteBin5Fill } from "react-icons/ri";
// // // // // //  import { createTheme, ThemeProvider } from "@mui/material/styles";
// // // // // //  import CreateIcon from "@mui/icons-material/Create";

// // // // // //  const Testing = () => {
// // // // // //    const [openDrawer, setOpenDrawer] = useState(false);
// // // // // //    const [selectedFile, setSelectedFile] = useState(null);
// // // // // // console.log(selectedFile)
// // // // // //    const handleFileChange = (event) => {
// // // // // //      setSelectedFile(event.target.files[0]);
// // // // // //    };

// // // // // //    const handleDeleteFile = () => {
// // // // // //      setSelectedFile(null);
// // // // // //    };

// // // // // //   const handleChooseFileClick = () => {
// // // // // //     document.querySelector('input[type="file"]').click();
// // // // // //   };

// // // // // //    const toggleDrawer = (open) => () => {
// // // // // //      setOpenDrawer(open);
// // // // // //    };

// // // // // //    const Button1 = styled(Button)(({ theme }) => ({
// // // // // //      color: theme.palette.getContrastText(purple[500]),
// // // // // //      backgroundColor: "#FFC400",
// // // // // //      fontFamily: "Poppins",
// // // // // //      width: "80%",
// // // // // //      borderRadius: "5px",
// // // // // //      // margin: "0 auto",
// // // // // //      textTransform: "none",
// // // // // //      "&:hover": {
// // // // // //        backgroundColor: "#FFC400",
// // // // // //      },
// // // // // //    }));
// // // // // //    const Button2 = styled(Button)(({ theme }) => ({
// // // // // //      // color: theme.palette.getContrastText(purple[500]),
// // // // // //      backgroundColor: "#FFD5CC",
// // // // // //      fontFamily: "Poppins",
// // // // // //      width: "80%",
// // // // // //      borderRadius: "5px",
// // // // // //      fontWeight: 500,
// // // // // //      color: "#FF2E00",
// // // // // //      textTransform: "none",
// // // // // //      "&:hover": {
// // // // // //        backgroundColor: "#FFD5CC",
// // // // // //      },
// // // // // //    }));

// // // // // //    // textField
// // // // // //    const theme = createTheme({
// // // // // //      components: {
// // // // // //        MuiInputLabel: {
// // // // // //          styleOverrides: {
// // // // // //            root: {
// // // // // //              fontFamily: "Arial, sans-serif", // Ganti dengan font family yang diinginkan
// // // // // //              // Lainnya gaya font family yang diinginkan
// // // // // //            },
// // // // // //          },
// // // // // //        },
// // // // // //      },
// // // // // //    });
// // // // // //    return (
// // // // // //      <div>
// // // // // //        <Button onClick={toggleDrawer(true)}>Buka Drawer</Button>
// // // // // //        <Drawer
// // // // // //          anchor="right"
// // // // // //          open={openDrawer}
// // // // // //          // onClose={toggleDrawer(false)}
// // // // // //          style={{ width: 500 }}
// // // // // //          sx={{ width: 700 }}
// // // // // //        >
// // // // // //          <Box
// // // // // //            sx={{ width: 500, px: 4, fontFamily: "Poppins" }}
// // // // // //            role="presentation"
// // // // // //            // onClick={toggleDrawer(false)}
// // // // // //          >
// // // // // //            <Typography
// // // // // //              sx={{
// // // // // //                fontFamily: "Poppins",
// // // // // //                pt: 4,
// // // // // //                fontWeight: 500,
// // // // // //                fontSize: "20px",
// // // // // //              }}
// // // // // //            >
// // // // // //              Slider
// // // // // //            </Typography>

// // // // // //            <Stack sx={{ mt: 4 }}>
// // // // // //              <Typography
// // // // // //                sx={{
// // // // // //                  fontFamily: "Poppins",
// // // // // //                  fontWeight: 500,
// // // // // //                  fontSize: "14px",
// // // // // //                  display: "flex",
// // // // // //                  flexDirection: "column",
// // // // // //                }}
// // // // // //              >
// // // // // //                Foto
// // // // // //              </Typography>
// // // // // //            </Stack>
// // // // // //            <Grid container gap={3} mt={1}>
// // // // // //              <Grid xs={4}>
// // // // // //                <Stack sx={{ border: "1px dashed #576974", borderRadius: "8px" }}>
// // // // // //                  <AddPhotoAlternateIcon
// // // // // //                    sx={{
// // // // // //                      color: "#576974",
// // // // // //                      fontSize: "60px",
// // // // // //                      margin: "0 auto",
// // // // // //                      mt: 3,
// // // // // //                    }}
// // // // // //                  />
// // // // // //                  <Typography
// // // // // //                    sx={{
// // // // // //                      mt: 1,
// // // // // //                      width: "80%",
// // // // // //                      alignSelf: "center",
// // // // // //                      fontFamily: "Poppins",
// // // // // //                      color: "#576974",
// // // // // //                      textAlign: "center",
// // // // // //                    }}
// // // // // //                  >
// // // // // //                    Tarik dan lepas foto di sini
// // // // // //                  </Typography>
// // // // // //                  <Input
// // // // // //                    type="file"
// // // // // //                    accept="image/*"
// // // // // //                    style={{ display: "none" }}
// // // // // //                    onChange={handleFileChange}
// // // // // //                  />
// // // // // //                  <Button1
// // // // // //                    sx={{ my: 2,alignSelf: "center" }}
// // // // // //                    variant="contained"
// // // // // //                    color="primary"
// // // // // //                    onClick={handleChooseFileClick}
// // // // // //                  >
// // // // // //                    Pilih File
// // // // // //                  </Button1>
// // // // // //                </Stack>
// // // // // //              </Grid>
// // // // // //              <Grid xs={5}>
// // // // // //                <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
// // // // // //                  Upload Files
// // // // // //                </Typography>
// // // // // //                {selectedFile && (
// // // // // //                  <Stack
// // // // // //                    sx={{ display: "flex", flexDirection: "row" }}
// // // // // //                    gap={"2px"}
// // // // // //                  >
// // // // // //                    <ImageIcon sx={{ color: "#576974", pt: 1 }} />
// // // // // //                    <Typography sx={{ mt: 1, fontFamily: "Poppins" }}>
// // // // // //                      {selectedFile.name}
// // // // // //                    </Typography>
// // // // // //                  </Stack>
// // // // // //                )}
// // // // // //              </Grid>
// // // // // //              <Grid xs={1} pt={5}>
// // // // // //                {selectedFile && (
// // // // // //                  <Typography
// // // // // //                    sx={{ fontSize: "20px", cursor: "pointer", textAlign: "end" }}
// // // // // //                    color="#576974"
// // // // // //                    onClick={handleDeleteFile}
// // // // // //                  >
// // // // // //                    <RiDeleteBin5Fill />
// // // // // //                  </Typography>
// // // // // //                )}
// // // // // //              </Grid>
// // // // // //            </Grid>
// // // // // //            <Stack mt={2}>
// // // // // //              <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
// // // // // //                Album
// // // // // //              </Typography>
// // // // // //              <ThemeProvider theme={theme}>
// // // // // //                <TextField label="Masukkan Nama Album" />
// // // // // //              </ThemeProvider>
// // // // // //              <Typography sx={{ fontFamily: "Poppins", fontWeight: 500, mt: 1 }}>
// // // // // //                Deskripsi
// // // // // //              </Typography>
// // // // // //              <ThemeProvider theme={theme}>
// // // // // //                <TextField label="Masukkan Deskripsi" multiline rows={4} />
// // // // // //              </ThemeProvider>
// // // // // //            </Stack>
// // // // // //            <Stack
// // // // // //              mt={3}
// // // // // //              gap={2}
// // // // // //              sx={{
// // // // // //                display: "flex",
// // // // // //                flexDirection: "row",
// // // // // //                justifyContent: "flex-end",

// // // // // //              }}
// // // // // //            >
// // // // // //              <Button1
// // // // // //                onClick={toggleDrawer(false)}
// // // // // //                sx={{ width: "130px", py: 1 }}
// // // // // //                startIcon={<CreateIcon />}
// // // // // //              >
// // // // // //                Simpan
// // // // // //              </Button1>
// // // // // //              <Button2
// // // // // //              onClick={toggleDrawer(false)}
// // // // // //                sx={{ width: "130px", py: 1 }}
// // // // // //                startIcon={<RiDeleteBin5Fill />}
// // // // // //              >
// // // // // //                Batal
// // // // // //              </Button2>
// // // // // //            </Stack>
// // // // // //          </Box>
// // // // // //        </Drawer>
// // // // // //      </div>
// // // // // //    );
// // // // // //  };

// // // // // //  export default Testing;

// // // // // //  // import React, { useState } from 'react';
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   Table,
// // // // // // // // // // // // //   TableBody,
// // // // // // // // // // // // //   TableCell,
// // // // // // // // // // // // //   TableContainer,
// // // // // // // // // // // // //   TableHead,
// // // // // // // // // // // // //   TableRow,
// // // // // // // // // // // // //   Paper,
// // // // // // // // // // // // //   TextField,
// // // // // // // // // // // // //   Button,
// // // // // // // // // // // // // } from '@mui/material';
// // // // // // // // // // // // // import { AddCircle } from '@mui/icons-material';

// // // // // // // // // // // // // const initialData = [
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 1,
// // // // // // // // // // // // //     image: '/images/image1.jpg',
// // // // // // // // // // // // //     album: 'Album 1',
// // // // // // // // // // // // //     description: 'Description for image 1',
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 2,
// // // // // // // // // // // // //     image: '/images/image2.jpg',
// // // // // // // // // // // // //     album: 'Album 2',
// // // // // // // // // // // // //     description: 'Description for image 2',
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   // ... more initial data
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // const Testing = () => {
// // // // // // // // // // // // //   const [data, setData] = useState(initialData);
// // // // // // // // // // // // //   const [newImage, setNewImage] = useState('');
// // // // // // // // // // // // //   const [newAlbum, setNewAlbum] = useState('');
// // // // // // // // // // // // //   const [newDescription, setNewDescription] = useState('');

// // // // // // // // // // // // //   const handleAddData = () => {
// // // // // // // // // // // // //     const newData = {
// // // // // // // // // // // // //       id: data.length + 1,
// // // // // // // // // // // // //       image: newImage,
// // // // // // // // // // // // //       album: newAlbum,
// // // // // // // // // // // // //       description: newDescription,
// // // // // // // // // // // // //     };
// // // // // // // // // // // // //     setData([...data, newData]);
// // // // // // // // // // // // //     setNewImage('');
// // // // // // // // // // // // //     setNewAlbum('');
// // // // // // // // // // // // //     setNewDescription('');
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleImageChange = (e) => {
// // // // // // // // // // // // //     setNewImage(e.target.value);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleAlbumChange = (e) => {
// // // // // // // // // // // // //     setNewAlbum(e.target.value);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleDescriptionChange = (e) => {
// // // // // // // // // // // // //     setNewDescription(e.target.value);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div>
// // // // // // // // // // // // //       <TableContainer component={Paper}>
// // // // // // // // // // // // //         <Table>
// // // // // // // // // // // // //           <TableHead>
// // // // // // // // // // // // //             <TableRow>
// // // // // // // // // // // // //               <TableCell>Image</TableCell>
// // // // // // // // // // // // //               <TableCell>Album</TableCell>
// // // // // // // // // // // // //               <TableCell>Description</TableCell>
// // // // // // // // // // // // //             </TableRow>
// // // // // // // // // // // // //           </TableHead>
// // // // // // // // // // // // //           <TableBody>
// // // // // // // // // // // // //             {data.map(item => (
// // // // // // // // // // // // //               <TableRow key={item.id}>
// // // // // // // // // // // // //                 <TableCell>
// // // // // // // // // // // // //                   <img src={item.image} alt={`Album ${item.album}`} />
// // // // // // // // // // // // //                 </TableCell>
// // // // // // // // // // // // //                 <TableCell>{item.album}</TableCell>
// // // // // // // // // // // // //                 <TableCell>{item.description}</TableCell>
// // // // // // // // // // // // //               </TableRow>
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </TableBody>
// // // // // // // // // // // // //         </Table>
// // // // // // // // // // // // //       </TableContainer>
// // // // // // // // // // // // //       <div>
// // // // // // // // // // // // //         <h2>Add New Image</h2>
// // // // // // // // // // // // //         <TextField
// // // // // // // // // // // // //           label="Image URL"
// // // // // // // // // // // // //           value={newImage}
// // // // // // // // // // // // //           onChange={handleImageChange}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //         <TextField
// // // // // // // // // // // // //           label="Album"
// // // // // // // // // // // // //           value={newAlbum}
// // // // // // // // // // // // //           onChange={handleAlbumChange}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //         <TextField
// // // // // // // // // // // // //           label="Description"
// // // // // // // // // // // // //           value={newDescription}
// // // // // // // // // // // // //           onChange={handleDescriptionChange}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //         <Button
// // // // // // // // // // // // //           variant="contained"
// // // // // // // // // // // // //           startIcon={<AddCircle />}
// // // // // // // // // // // // //           onClick={handleAddData}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           Add Image
// // // // // // // // // // // // //         </Button>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // // export default Testing;

// // // // // // // import React, { useState } from 'react';
// // // // // // // import {
// // // // // // //   Table,
// // // // // // //   TableBody,
// // // // // // //   TableCell,
// // // // // // //   TableContainer,
// // // // // // //   TableHead,
// // // // // // //   TableRow,
// // // // // // //   Paper,
// // // // // // //   TextField,
// // // // // // //   Button,
// // // // // // //   IconButton,
// // // // // // // } from '@mui/material';
// // // // // // // import { AddCircle, Edit, Delete } from '@mui/icons-material';
// // // // // // // import Foto from "../assets/navbar/Logo.png";

// // // // // // // const initialData = [
// // // // // // //   // ... initial data
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     image: Foto,
// // // // // // //     album: "Beranda",
// // // // // // //     description:
// // // // // // //       "Inready Workgroup merupakan salah satu organisasi yang ada di Universitas Islam Negeri Alauddin Makassar yang didirikan pada tahun 2007, bertujuan untuk mengembangkan wawasan dan kemampuan baik itu dalam bidang IT maupun keorganisasian anggotanya....",
// // // // // // //   },
// // // // // // //   { id: 2, image: Foto, album: "Album 2", description: "Deskripsi 2" },
// // // // // // //   { id: 3, image: Foto, album: "Album 3", description: "Deskripsi 2" },
// // // // // // //   { id: 4, image: Foto, album: "Album 4", description: "Deskripsi 2" },
// // // // // // // ];

// // // // // // // const Testing = () => {
// // // // // // //   const [data, setData] = useState(initialData);
// // // // // // //   const [editingId, setEditingId] = useState(null);
// // // // // // //   const [newImage, setNewImage] = useState('');
// // // // // // //   const [newAlbum, setNewAlbum] = useState('');
// // // // // // //   const [newDescription, setNewDescription] = useState('');

// // // // // // //   const handleEdit = (id) => {
// // // // // // //     setEditingId(id);
// // // // // // //     const selectedItem = data.find(item => item.id === id);
// // // // // // //     setNewImage(selectedItem.image);
// // // // // // //     setNewAlbum(selectedItem.album);
// // // // // // //     setNewDescription(selectedItem.description);
// // // // // // //   };

// // // // // // //   const handleDelete = (id) => {
// // // // // // //     const updatedData = data.filter(item => item.id !== id);
// // // // // // //     setData(updatedData);
// // // // // // //   };

// // // // // // //   const handleSaveEdit = () => {
// // // // // // //     const updatedData = data.map(item =>
// // // // // // //       item.id === editingId
// // // // // // //         ? { id: editingId, image: newImage, album: newAlbum, description: newDescription }
// // // // // // //         : item
// // // // // // //     );
// // // // // // //     setData(updatedData);
// // // // // // //     setEditingId(null);
// // // // // // //     setNewImage('');
// // // // // // //     setNewAlbum('');
// // // // // // //     setNewDescription('');
// // // // // // //   };

// // // // // // //   const handleInputChange = (e, field) => {
// // // // // // //     if (field === 'album') {
// // // // // // //       setNewAlbum(e.target.value);
// // // // // // //     } else if (field === 'description') {
// // // // // // //       setNewDescription(e.target.value);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleAddImage = () => {
// // // // // // //     const newData = {
// // // // // // //       id: data.length + 1,
// // // // // // //       image: newImage,
// // // // // // //       album: newAlbum,
// // // // // // //       description: newDescription,
// // // // // // //     };
// // // // // // //     setData([...data, newData]);
// // // // // // //     setNewImage('');
// // // // // // //     setNewAlbum('');
// // // // // // //     setNewDescription('');
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <TableContainer component={Paper}>
// // // // // // //         <Table>
// // // // // // //           <TableHead>
// // // // // // //             <TableRow>
// // // // // // //               <TableCell>Image</TableCell>
// // // // // // //               <TableCell>Album</TableCell>
// // // // // // //               <TableCell>Description</TableCell>
// // // // // // //               <TableCell>Edit</TableCell>
// // // // // // //               <TableCell>Delete</TableCell>
// // // // // // //             </TableRow>
// // // // // // //           </TableHead>
// // // // // // //           <TableBody>
// // // // // // //             {data.map(item => (
// // // // // // //               <TableRow key={item.id}>
// // // // // // //                 <TableCell>
// // // // // // //                   <img src={item.image} alt={`Album ${item.album}`} />
// // // // // // //                 </TableCell>
// // // // // // //                 <TableCell>
// // // // // // //                   {editingId === item.id ? (
// // // // // // //                     <TextField value={newAlbum} onChange={(e) => handleInputChange(e, 'album')} />
// // // // // // //                   ) : (
// // // // // // //                     item.album
// // // // // // //                   )}
// // // // // // //                 </TableCell>
// // // // // // //                 <TableCell>
// // // // // // //                   {editingId === item.id ? (
// // // // // // //                     <TextField value={newDescription} onChange={(e) => handleInputChange(e, 'description')} />
// // // // // // //                   ) : (
// // // // // // //                     item.description
// // // // // // //                   )}
// // // // // // //                 </TableCell>
// // // // // // //                 <TableCell>
// // // // // // //                   {editingId === item.id ? (
// // // // // // //                     <Button variant="contained" onClick={handleSaveEdit}>Save</Button>
// // // // // // //                   ) : (
// // // // // // //                     <IconButton onClick={() => handleEdit(item.id)}><Edit /></IconButton>
// // // // // // //                   )}
// // // // // // //                 </TableCell>
// // // // // // //                 <TableCell>
// // // // // // //                   <IconButton onClick={() => handleDelete(item.id)}><Delete /></IconButton>
// // // // // // //                 </TableCell>
// // // // // // //               </TableRow>
// // // // // // //             ))}
// // // // // // //           </TableBody>
// // // // // // //         </Table>
// // // // // // //       </TableContainer>
// // // // // // //       <div>
// // // // // // //         <h2>Add New Image</h2>
// // // // // // //         <TextField
// // // // // // //           label="Image URL"
// // // // // // //           value={newImage}
// // // // // // //           onChange={(e) => setNewImage(e.target.value)}
// // // // // // //         />
// // // // // // //         <Button
// // // // // // //           variant="contained"
// // // // // // //           startIcon={<AddCircle />}
// // // // // // //           onClick={handleAddImage}
// // // // // // //         >
// // // // // // //           Add Image
// // // // // // //         </Button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Testing;

// // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // import {
// // // // // // // // // // //   Table,
// // // // // // // // // // //   TableBody,
// // // // // // // // // // //   TableCell,
// // // // // // // // // // //   TableContainer,
// // // // // // // // // // //   TableHead,
// // // // // // // // // // //   TableRow,
// // // // // // // // // // //   Paper,
// // // // // // // // // // //   TextField,
// // // // // // // // // // //   Button,
// // // // // // // // // // //   Modal,
// // // // // // // // // // // } from '@mui/material';
// // // // // // // // // // // import { AddCircle } from '@mui/icons-material';

// // // // // // // // // // // const initialData = [
// // // // // // // // // // //   // ... initial data
// // // // // // // // // // // ];
// // // // // // // // // // // const Testing = () => {
// // // // // // // // // // //   const [data, setData] = useState(initialData);
// // // // // // // // // // //   const [newImage, setNewImage] = useState('');
// // // // // // // // // // //   const [newAlbum, setNewAlbum] = useState('');
// // // // // // // // // // //   const [newDescription, setNewDescription] = useState('');
// // // // // // // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // // // // // // // // // //   const handleAddData = () => {
// // // // // // // // // // //     const newData = {
// // // // // // // // // // //       id: data.length + 1,
// // // // // // // // // // //       image: newImage,
// // // // // // // // // // //       album: newAlbum,
// // // // // // // // // // //       description: newDescription,
// // // // // // // // // // //     };
// // // // // // // // // // //     setData([...data, newData]);
// // // // // // // // // // //     setNewImage('');
// // // // // // // // // // //     setNewAlbum('');
// // // // // // // // // // //     setNewDescription('');
// // // // // // // // // // //     setIsModalOpen(true);
// // // // // // // // // // //   };

// // // // // // // // // // //   const closeModal = () => {
// // // // // // // // // // //     setIsModalOpen(false);
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div>
// // // // // // // // // // //       <TableContainer component={Paper}>
// // // // // // // // // // //         <Table>
// // // // // // // // // // //           <TableHead>
// // // // // // // // // // //             <TableRow>
// // // // // // // // // // //               <TableCell>Image</TableCell>
// // // // // // // // // // //               <TableCell>Album</TableCell>
// // // // // // // // // // //               <TableCell>Description</TableCell>
// // // // // // // // // // //             </TableRow>
// // // // // // // // // // //           </TableHead>
// // // // // // // // // // //           <TableBody>
// // // // // // // // // // //             {data.map(item => (
// // // // // // // // // // //               <TableRow key={item.id}>
// // // // // // // // // // //                 <TableCell>
// // // // // // // // // // //                   <img src={item.image} alt={`Album ${item.album}`} />
// // // // // // // // // // //                 </TableCell>
// // // // // // // // // // //                 <TableCell>{item.album}</TableCell>
// // // // // // // // // // //                 <TableCell>{item.description}</TableCell>
// // // // // // // // // // //               </TableRow>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </TableBody>
// // // // // // // // // // //         </Table>
// // // // // // // // // // //       </TableContainer>
// // // // // // // // // // //       <div>
// // // // // // // // // // //         <h2>Add New Image</h2>
// // // // // // // // // // //         <TextField
// // // // // // // // // // //           label="Image URL"
// // // // // // // // // // //           value={newImage}
// // // // // // // // // // //           onChange={e => setNewImage(e.target.value)}
// // // // // // // // // // //         />
// // // // // // // // // // //         <TextField
// // // // // // // // // // //           label="Album"
// // // // // // // // // // //           value={newAlbum}
// // // // // // // // // // //           onChange={e => setNewAlbum(e.target.value)}
// // // // // // // // // // //         />
// // // // // // // // // // //         <TextField
// // // // // // // // // // //           label="Description"
// // // // // // // // // // //           value={newDescription}
// // // // // // // // // // //           onChange={e => setNewDescription(e.target.value)}
// // // // // // // // // // //         />
// // // // // // // // // // //         <Button
// // // // // // // // // // //           variant="contained"
// // // // // // // // // // //           startIcon={<AddCircle />}
// // // // // // // // // // //           onClick={handleAddData}
// // // // // // // // // // //         >
// // // // // // // // // // //           Add Image
// // // // // // // // // // //         </Button>
// // // // // // // // // // //       </div>
// // // // // // // // // // //       <Modal
// // // // // // // // // // //         open={isModalOpen}
// // // // // // // // // // //         onClose={closeModal}
// // // // // // // // // // //         aria-labelledby="modal-title"
// // // // // // // // // // //       >
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <h2 id="modal-title">Success!</h2>
// // // // // // // // // // //           <p>Data has been successfully added.</p>
// // // // // // // // // // //           <Button variant="contained" onClick={closeModal}>Close</Button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </Modal>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default Testing;
// // // // // // // // // // import React, { useState, useRef } from 'react';
// // // // // // // // // // import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';
// // // // // // // // // // import { Photo, Album, Description, FileUpload } from '@mui/icons-material';
// // // // // // // // // // import Papa from 'papaparse';
// // // // // // // // // // import Foto from "../assets/navbar/Logo.png"

// // // // // // // // // // const initialData = [
// // // // // // // // // //   {
// // // // // // // // // //     id: 1,
// // // // // // // // // //     image: Foto,
// // // // // // // // // //     album: 'Beranda',
// // // // // // // // // //     description: 'Inready Workgroup merupakan salah satu organisasi yang ada di Universitas Islam Negeri Alauddin Makassar yang didirikan pada tahun 2007, bertujuan untuk mengembangkan wawasan dan kemampuan baik itu dalam bidang IT maupun keorganisasian anggotanya....',
// // // // // // // // // //   },
// // // // // // // // // //   { id: 2, image: Foto, album: 'Album 2', description: 'Deskripsi 2' },
// // // // // // // // // //   { id: 3, image: Foto, album: 'Album 3', description: 'Deskripsi 2' },
// // // // // // // // // // ];

// // // // // // // // // // const Testing = () => {
// // // // // // // // // //   const [tableData, setTableData] = useState(initialData);
// // // // // // // // // //   const csvFileRef = useRef(null);

// // // // // // // // // //   const handleFileChange = (event) => {
// // // // // // // // // //     const file = event.target.files[0];
// // // // // // // // // //     if (file) {
// // // // // // // // // //       parseCsvFile(file);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const parseCsvFile = (file) => {
// // // // // // // // // //     Papa.parse(file, {
// // // // // // // // // //       complete: (result) => {
// // // // // // // // // //         const filteredData = result.data.filter((row) => row.album && row.description && row.image);
// // // // // // // // // //         setTableData(filteredData);
// // // // // // // // // //       },
// // // // // // // // // //       header: true,
// // // // // // // // // //       skipEmptyLines: true,
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <input
// // // // // // // // // //         type="file"
// // // // // // // // // //         accept=".csv"
// // // // // // // // // //         onChange={handleFileChange}
// // // // // // // // // //         style={{ display: 'none' }}
// // // // // // // // // //         ref={csvFileRef}
// // // // // // // // // //       />
// // // // // // // // // //       <Button variant="contained" startIcon={<FileUpload />} onClick={() => csvFileRef.current.click()}>
// // // // // // // // // //         Import CSV
// // // // // // // // // //       </Button>
// // // // // // // // // //       <TableContainer component={Paper}>
// // // // // // // // // //         <Table>
// // // // // // // // // //           <TableHead>
// // // // // // // // // //             <TableRow>
// // // // // // // // // //               <TableCell align="center"><Photo /></TableCell>
// // // // // // // // // //               <TableCell align="center"><Album /></TableCell>
// // // // // // // // // //               <TableCell align="center"><Description /></TableCell>
// // // // // // // // // //             </TableRow>
// // // // // // // // // //           </TableHead>
// // // // // // // // // //           <TableBody>
// // // // // // // // // //             {tableData.map((row) => (
// // // // // // // // // //               <TableRow key={row.id}>
// // // // // // // // // //                 <TableCell align="center"><img src={row.image} alt={`Gambar ${row.id}`} /></TableCell>
// // // // // // // // // //                 <TableCell align="center">{row.album}</TableCell>
// // // // // // // // // //                 <TableCell align="center">{row.description}</TableCell>
// // // // // // // // // //               </TableRow>
// // // // // // // // // //             ))}
// // // // // // // // // //           </TableBody>
// // // // // // // // // //         </Table>
// // // // // // // // // //       </TableContainer>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default Testing;
// // // // // // // // // import React from 'react';
// // // // // // // // // import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';
// // // // // // // // // import { Photo, Album, Description, FileDownload } from '@mui/icons-material';
// // // // // // // // // import * as XLSX from 'xlsx';
// // // // // // // // // import Foto from "../assets/navbar/Logo.png"

// // // // // // // // // const initialData = [
// // // // // // // // //   {
// // // // // // // // //     id: 1,
// // // // // // // // //     image: Foto,
// // // // // // // // //     album: "Beranda",
// // // // // // // // //     description:
// // // // // // // // //       "Inready Workgroup merupakan salah satu organisasi yang ada di Universitas Islam Negeri Alauddin Makassar yang didirikan pada tahun 2007, bertujuan untuk mengembangkan wawasan dan kemampuan baik itu dalam bidang IT maupun keorganisasian anggotanya....",
// // // // // // // // //   },
// // // // // // // // //   { id: 2, image: Foto, album: "Album 2", description: "Deskripsi 2" },
// // // // // // // // //   { id: 3, image: Foto, album: "Album 3", description: "Deskripsi 2" },
// // // // // // // // // ];
// // // // // // // // // const Testing = () => {
// // // // // // // // //   const columns = [
// // // // // // // // //     { label: 'image', key: 'image' },
// // // // // // // // //     { label: 'album', key: 'album' },
// // // // // // // // //     { label: 'description', key: 'description' },
// // // // // // // // //   ];

// // // // // // // // //   const exportData = initialData.map((item) => ({
// // // // // // // // //     image: item.image,
// // // // // // // // //     album: item.album,
// // // // // // // // //     description: item.description,
// // // // // // // // //   }));

// // // // // // // // //   const exportToExcel = () => {
// // // // // // // // //     const ws = XLSX.utils.json_to_sheet(exportData);
// // // // // // // // //     const wb = XLSX.utils.book_new();
// // // // // // // // //     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
// // // // // // // // //     XLSX.writeFile(wb, 'data.xlsx');
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <Button variant="contained" startIcon={<FileDownload />} onClick={exportToExcel}>
// // // // // // // // //         Export to Excel
// // // // // // // // //       </Button>
// // // // // // // // //       {/* <CSVLink data={exportData} headers={columns}>
// // // // // // // // //         Export to CSV
// // // // // // // // //       </CSVLink> */}
// // // // // // // // //       <TableContainer component={Paper}>
// // // // // // // // //         <Table>
// // // // // // // // //           <TableHead>
// // // // // // // // //             <TableRow>
// // // // // // // // //               <TableCell align="center"><Photo /></TableCell>
// // // // // // // // //               <TableCell align="center"><Album /></TableCell>
// // // // // // // // //               <TableCell align="center"><Description /></TableCell>
// // // // // // // // //             </TableRow>
// // // // // // // // //           </TableHead>
// // // // // // // // //           <TableBody>
// // // // // // // // //             {initialData.map((row) => (
// // // // // // // // //               <TableRow key={row.id}>
// // // // // // // // //                 <TableCell align="center">{row.image}</TableCell>
// // // // // // // // //                 <TableCell align="center">{row.album}</TableCell>
// // // // // // // // //                 <TableCell align="center">{row.description}</TableCell>
// // // // // // // // //               </TableRow>
// // // // // // // // //             ))}
// // // // // // // // //           </TableBody>
// // // // // // // // //         </Table>
// // // // // // // // //       </TableContainer>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default Testing;
// // // // // // // // import React from "react";
// // // // // // // // import {
// // // // // // // //   TableContainer,
// // // // // // // //   Table,
// // // // // // // //   TableHead,
// // // // // // // //   TableRow,
// // // // // // // //   TableCell,
// // // // // // // //   TableBody,
// // // // // // // //   Paper,
// // // // // // // //   Button,
// // // // // // // // } from "@mui/material";
// // // // // // // // import {
// // // // // // // //   Photo,
// // // // // // // //   Album,
// // // // // // // //   Description,
// // // // // // // //   FileDownload,
// // // // // // // //   Print,
// // // // // // // // } from "@mui/icons-material";
// // // // // // // // // import * as XLSX from "xlsx";
// // // // // // // // import Foto from "../assets/navbar/Logo.png";

// // // // // // // // const initialData = [
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     image: Foto,
// // // // // // // //     album: "Beranda",
// // // // // // // //     description:
// // // // // // // //       "Inready Workgroup merupakan salah satu organisasi yang ada di Universitas Islam Negeri Alauddin Makassar yang didirikan pada tahun 2007, bertujuan untuk mengembangkan wawasan dan kemampuan baik itu dalam bidang IT maupun keorganisasian anggotanya....",
// // // // // // // //   },
// // // // // // // //   { id: 2, image: Foto, album: "Album 2", description: "Deskripsi 2" },
// // // // // // // //   { id: 3, image: Foto, album: "Album 3", description: "Deskripsi 2" },
// // // // // // // // ];

// // // // // // // // const Testing = () => {
// // // // // // // //   const columns = [
// // // // // // // //     { label: "image", key: "image" },
// // // // // // // //     { label: "album", key: "album" },
// // // // // // // //     { label: "description", key: "description" },
// // // // // // // //   ];

// // // // // // // //   const exportData = initialData.map((item) => ({
// // // // // // // //     image: item.image,
// // // // // // // //     album: item.album,
// // // // // // // //     description: item.description,
// // // // // // // //   }));

// // // // // // // //   // const exportToExcel = () => {
// // // // // // // //   //   const ws = XLSX.utils.json_to_sheet(exportData);
// // // // // // // //   //   const wb = XLSX.utils.book_new();
// // // // // // // //   //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
// // // // // // // //   //   XLSX.writeFile(wb, 'data.xlsx');
// // // // // // // //   // };

// // // // // // // //   const handlePrint = (content) => {
// // // // // // // //     const printWindow = window.open("", "_blank");
// // // // // // // //     printWindow.document.open();
// // // // // // // //     printWindow.document.write(content);
// // // // // // // //     printWindow.document.close();
// // // // // // // //     printWindow.print();
// // // // // // // //   };

// // // // // // // //   const printContent = `
// // // // // // // //     <html>
// // // // // // // //     <head>
// // // // // // // //       <title>Data Table</title>
// // // // // // // //       <style>
// // // // // // // //         /* Gaya cetak Anda */
// // // // // // // //       </style>
// // // // // // // //     </head>
// // // // // // // //     <body>
// // // // // // // //       <h1>Data Table</h1>
// // // // // // // //       ${exportData
// // // // // // // //         .map(
// // // // // // // //           (row) => ` <TableContainer
// // // // // // // //           sx={{ px: 5, fontFamily: "Poppins" }}
// // // // // // // //           component={Paper}
// // // // // // // //         >
// // // // // // // //           <Table>
// // // // // // // //             <TableHead sx={{ fontFamily: "Poppins" }}>
// // // // // // // //               <TableRow>
// // // // // // // //                 <TableCell sx={{ fontFamily: "Poppins", width: "170px" }}>
// // // // // // // //                   Gambar
// // // // // // // //                 </TableCell>
// // // // // // // //                 <TableCell sx={{ fontFamily: "Poppins", width: "240px" }}>
// // // // // // // //                   Album
// // // // // // // //                 </TableCell>
// // // // // // // //                 <TableCell sx={{ fontFamily: "Poppins", width: "450px" }}>
// // // // // // // //                   Deskripsi
// // // // // // // //                 </TableCell>
// // // // // // // //                 <TableCell
// // // // // // // //                   sx={{
// // // // // // // //                     fontFamily: "Poppins",
// // // // // // // //                     width: "100px",
// // // // // // // //                     textAlign: "center",
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   Aksi
// // // // // // // //                 </TableCell>
// // // // // // // //               </TableRow>
// // // // // // // //             </TableHead>
// // // // // // // //             <TableBody sx={{ fontFamily: "Poppins" }}>
// // // // // // // //               {data
// // // // // // // //                 .slice((page - 1) * itemsPerPage, page * itemsPerPage)
// // // // // // // //                 .map((row) => (
// // // // // // // //                   <TableRow key={row.id} className={classes.blueRow}>
// // // // // // // //                     <TableCell>
// // // // // // // //                       <img
// // // // // // // //                         src=${row.image}
// // // // // // // //                         width="99"
// // // // // // // //                         height="111"
// // // // // // // //                       />
// // // // // // // //                     </TableCell>
// // // // // // // //                     <TableCell sx={{ fontFamily: "Poppins" }}>
// // // // // // // //                       {editingId === row.id ? (
// // // // // // // //                         <TextField
// // // // // // // //                           value={newAlbum}
// // // // // // // //                           onChange={(e) => handleInputChange(e, "album")}
// // // // // // // //                         />
// // // // // // // //                       ) : (
// // // // // // // //                         ${row.album}
// // // // // // // //                       )}
// // // // // // // //                     </TableCell>
// // // // // // // //                     {/* edit yg asli */}
// // // // // // // //                     {/* <TableCell sx={{ fontFamily: "Poppins" }}>
// // // // // // // //                     {row.album}
// // // // // // // //                   </TableCell> */}
// // // // // // // //                     <TableCell sx={{ fontFamily: "Poppins" }}>
// // // // // // // //                       {editingId === row.id ? (
// // // // // // // //                         <TextField
// // // // // // // //                           value={newDescription}
// // // // // // // //                           onChange={(e) =>
// // // // // // // //                             handleInputChange(e, "description")
// // // // // // // //                           }
// // // // // // // //                         />
// // // // // // // //                       ) : (
// // // // // // // //                         ${row.description}
// // // // // // // //                       )}
// // // // // // // //                     </TableCell>
// // // // // // // //                     {/* deskripsi asli */}
// // // // // // // //                     {/* <TableCell sx={{ fontFamily: "Poppins" }}>
// // // // // // // //                     {row.description}
// // // // // // // //                   </TableCell> */}
// // // // // // // //                     <TableCell>
// // // // // // // //                       <Stack
// // // // // // // //                         direction={"row"}
// // // // // // // //                         spacing={1}
// // // // // // // //                         sx={{
// // // // // // // //                           // display: "flex",
// // // // // // // //                           alignItems: "center",
// // // // // // // //                           alignSelf: "center",
// // // // // // // //                         }}
// // // // // // // //                       >
// // // // // // // //                         {editingId === row.id ? (
// // // // // // // //                           <Button1
// // // // // // // //                             variant="contained"
// // // // // // // //                             onClick={handleSaveEdit}
// // // // // // // //                           >
// // // // // // // //                             Save
// // // // // // // //                           </Button1>
// // // // // // // //                         ) : (
// // // // // // // //                           <Button1
// // // // // // // //                             variant="Contained"
// // // // // // // //                             onClick={() => handleEdit(row.id)}
// // // // // // // //                           >
// // // // // // // //                             <CreateIcon />
// // // // // // // //                           </Button1>
// // // // // // // //                         )}
// // // // // // // //                         {/* edit asli */}
// // // // // // // //                         {/* <Button1
// // // // // // // //                         variant="Contained"
// // // // // // // //                         // sx={{width: "20px"}}
// // // // // // // //                       >
// // // // // // // //                         <CreateIcon />
// // // // // // // //                       </Button1> */}
// // // // // // // //                         <Button2
// // // // // // // //                           sx={{ fontSize: "20px" }}
// // // // // // // //                           variant="Contained"
// // // // // // // //                           size="small"
// // // // // // // //                           onClick={() => handleDelete(row.id)}
// // // // // // // //                         >
// // // // // // // //                           <RiDeleteBin5Fill
// // // // // // // //                             sx={{ color: "#FF2E00", fontSize: "20px" }}
// // // // // // // //                           />
// // // // // // // //                         </Button2>
// // // // // // // //                         {/* delete asli */}
// // // // // // // //                         {/* <Button2
// // // // // // // //                         sx={{ fontSize: "20px" }}
// // // // // // // //                         variant="Contained"
// // // // // // // //                         size="small"
// // // // // // // //                       >
// // // // // // // //                         <RiDeleteBin5Fill
// // // // // // // //                           sx={{ color: "#FF2E00", fontSize: "20px" }}
// // // // // // // //                         />
// // // // // // // //                       </Button2> */}
// // // // // // // //                       </Stack>
// // // // // // // //                     </TableCell>
// // // // // // // //                   </TableRow>
// // // // // // // //                 ))}
// // // // // // // //             </TableBody>
// // // // // // // //           </Table>
// // // // // // // //         </TableContainer>`
// // // // // // // //         )
// // // // // // // //         .join("")}
// // // // // // // //     </body>
// // // // // // // //     </html>
// // // // // // // //   `;

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       {/* <Button variant="contained" startIcon={<FileDownload />} onClick={exportToExcel}>
// // // // // // // //         Export to Excel
// // // // // // // //       </Button> */}
// // // // // // // //       <Button
// // // // // // // //         variant="contained"
// // // // // // // //         startIcon={<Print />}
// // // // // // // //         onClick={() => handlePrint(printContent)}
// // // // // // // //       >
// // // // // // // //         Print
// // // // // // // //       </Button>
// // // // // // // //       <TableContainer component={Paper}>
// // // // // // // //         <Table>
// // // // // // // //           <TableHead>
// // // // // // // //             <TableRow>
// // // // // // // //               <TableCell align="center">
// // // // // // // //                 <Photo />
// // // // // // // //               </TableCell>
// // // // // // // //               <TableCell align="center">
// // // // // // // //                 <Album />
// // // // // // // //               </TableCell>
// // // // // // // //               <TableCell align="center">
// // // // // // // //                 <Description />
// // // // // // // //               </TableCell>
// // // // // // // //             </TableRow>
// // // // // // // //           </TableHead>
// // // // // // // //           <TableBody>
// // // // // // // //             {initialData.map((row) => (
// // // // // // // //               <TableRow key={row.id}>
// // // // // // // //                 <TableCell align="center">
// // // // // // // //                   {" "}
// // // // // // // //                   <img
// // // // // // // //                     src={row.image}
// // // // // // // //                     alt={`Gambar ${row.album}`}
// // // // // // // //                     width="99"
// // // // // // // //                     height="111"
// // // // // // // //                   />
// // // // // // // //                 </TableCell>
// // // // // // // //                 <TableCell align="center">{row.album}</TableCell>
// // // // // // // //                 <TableCell align="center">{row.description}</TableCell>
// // // // // // // //               </TableRow>
// // // // // // // //             ))}
// // // // // // // //           </TableBody>
// // // // // // // //         </Table>
// // // // // // // //       </TableContainer>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Testing;

// // // // // // // import React, { useState } from "react";
// // // // // // // import {
// // // // // // //   Grid,
// // // // // // //   Paper,
// // // // // // //   Typography,
// // // // // // //   Button,
// // // // // // //   FormControl,
// // // // // // //   InputLabel,
// // // // // // //   Select,
// // // // // // //   MenuItem,
// // // // // // //   IconButton,
// // // // // // //   OutlinedInput,
// // // // // // //   InputAdornment,
// // // // // // // } from "@mui/material";
// // // // // // // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // // // // // // import { Button2, Button3 } from "../components/button/Index";

// // // // // // // const albums = [
// // // // // // //   { id: 1, title: "Album 1" },
// // // // // // //   { id: 2, title: "Album 2" },
// // // // // // //   { id: 3, title: "Album 3" },
// // // // // // // ];

// // // // // // // const activities = [
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     albumId: 1,
// // // // // // //     title: "Activity 1 in Album 1",
// // // // // // //     description: "Description of Activity 1",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 2,
// // // // // // //     albumId: 1,
// // // // // // //     title: "Activity 2 in Album 1",
// // // // // // //     description: "Description of Activity 2",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 3,
// // // // // // //     albumId: 2,
// // // // // // //     title: "Activity 1 in Album 2",
// // // // // // //     description: "Description of Activity 1",
// // // // // // //   },
// // // // // // //   // ... other activities
// // // // // // // ];

// // // // // // // const Testing = () => {
// // // // // // //   const [category, setCategory] = useState("filterByAlbum");
// // // // // // //   const [selectedAlbum, setSelectedAlbum] = useState("");
// // // // // // //   const [selectedActivity, setSelectedActivity] = useState(null);

// // // // // // //   const handleCategoryChange = (event) => {
// // // // // // //     setCategory(event.target.value);
// // // // // // //   };

// // // // // // //   const handleAlbumChange = (event) => {
// // // // // // //     setSelectedAlbum(event.target.value);
// // // // // // //     setSelectedActivity(null);
// // // // // // //   };

// // // // // // //   const handleActivityClick = (activity) => {
// // // // // // //     setSelectedActivity(activity);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <Grid
// // // // // // //       container
// // // // // // //       spacing={2}
// // // // // // //       justifyContent="center"
// // // // // // //       alignItems="center"
// // // // // // //       style={{ minHeight: "100vh" }}
// // // // // // //     >
// // // // // // //       <Grid item xs={12}>
// // // // // // //         <FormControl variant="outlined" fullWidth>
// // // // // // //           <InputLabel>Category</InputLabel>
// // // // // // //           <Select
// // // // // // //             value={category}
// // // // // // //             onChange={handleCategoryChange}
// // // // // // //             label="Category"
// // // // // // //           >
// // // // // // //             <MenuItem value="filterByAlbum">Filter by Album</MenuItem>
// // // // // // //             <MenuItem value="detailActivity">Detail Kegiatan</MenuItem>
// // // // // // //           </Select>
// // // // // // //         </FormControl>
// // // // // // //       </Grid>
// // // // // // //       {category === "filterByAlbum" && (
// // // // // // //         <Grid item xs={12} sm={6}>
// // // // // // //           <Paper elevation={3} style={{ padding: "20px" }}>
// // // // // // //             <Typography variant="h6">Filter by Album</Typography>
// // // // // // //             <FormControl
// // // // // // //               variant="outlined"
// // // // // // //               fullWidth
// // // // // // //               style={{ marginTop: "10px" }}
// // // // // // //             >
// // // // // // //               <InputLabel>Album</InputLabel>
// // // // // // //               <Select
// // // // // // //                 value={selectedAlbum}
// // // // // // //                 onChange={handleAlbumChange}
// // // // // // //                 label="Album"
// // // // // // //               >
// // // // // // //                 <MenuItem value="">Select an Album</MenuItem>
// // // // // // //                 {albums.map((album) => (
// // // // // // //                   <MenuItem key={album.id} value={album.id}>
// // // // // // //                     {album.title}
// // // // // // //                   </MenuItem>
// // // // // // //                 ))}
// // // // // // //               </Select>
// // // // // // //             </FormControl>
// // // // // // //           </Paper>
// // // // // // //           <FormControl sx={{ ml: 5 }} variant="standard">
// // // // // // //             <InputLabel>Category</InputLabel>
// // // // // // //             <Select
// // // // // // //               IconComponent={() => (
// // // // // // //                 <IconButton>
// // // // // // //                   <ArrowForwardIosIcon />
// // // // // // //                 </IconButton>
// // // // // // //               )}
// // // // // // //               style={{
// // // // // // //                 border: "none",
// // // // // // //                 borderBottom: "1px solid #ccc",
// // // // // // //                 borderRadius: "0",
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               <MenuItem value="option1">Option 1</MenuItem>
// // // // // // //               <MenuItem value="option2">Option 2</MenuItem>
// // // // // // //               <MenuItem value="option3">Option 3</MenuItem>
// // // // // // //             </Select>
// // // // // // //           </FormControl>
// // // // // // //         </Grid>
// // // // // // //       )}
// // // // // // //       {category === "detailActivity" && (
// // // // // // //         <Grid item xs={12} sm={6}>
// // // // // // //           <Paper elevation={3} style={{ padding: "20px" }}>
// // // // // // //             <Typography variant="h6">Detail Kegiatan</Typography>
// // // // // // //             {selectedActivity ? (
// // // // // // //               <div>
// // // // // // //                 <Typography variant="subtitle1">
// // // // // // //                   {selectedActivity.title}
// // // // // // //                 </Typography>
// // // // // // //                 <Typography>{selectedActivity.description}</Typography>
// // // // // // //               </div>
// // // // // // //             ) : (
// // // // // // //               <Typography>Select an activity to view details.</Typography>
// // // // // // //             )}
// // // // // // //           </Paper>
// // // // // // //         </Grid>
// // // // // // //       )}
// // // // // // //       <Grid item xs={12} sm={6}>
// // // // // // //         <Paper elevation={3} style={{ padding: "20px" }}>
// // // // // // //           <Typography variant="h6">Activities</Typography>
// // // // // // //           {activities
// // // // // // //             .filter(
// // // // // // //               (activity) => !selectedAlbum || activity.albumId === selectedAlbum
// // // // // // //             )
// // // // // // //             .map((activity) => (
// // // // // // //               <Button
// // // // // // //                 key={activity.id}
// // // // // // //                 fullWidth
// // // // // // //                 onClick={() => handleActivityClick(activity)}
// // // // // // //                 style={{
// // // // // // //                   marginTop: "10px",
// // // // // // //                   textAlign: "left",
// // // // // // //                   justifyContent: "flex-start",
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {activity.title}
// // // // // // //               </Button>
// // // // // // //             ))}
// // // // // // //           <Button2 variant="outlined" sx={{ width: "200px" }}>
// // // // // // //             coba saja
// // // // // // //           </Button2>
// // // // // // //           <Button3 variant="text">Hello word!</Button3>

// // // // // // //           <OutlinedInput
// // // // // // //             id="outlined-adornment-weight"
// // // // // // //             endAdornment={
// // // // // // //               <InputAdornment position="start">coba</InputAdornment>
// // // // // // //             }
// // // // // // //             aria-describedby="outlined-weight-helper-text"
// // // // // // //             inputProps={{
// // // // // // //               "aria-label": "weight",
// // // // // // //             }}
// // // // // // //           />
// // // // // // //           {/* ini benar */}
// // // // // // //           <FormControl sx={{ width: "25ch" }}>
// // // // // // //             <OutlinedInput placeholder="Please enter text" />
// // // // // // //             {/* <MyFormHelperText /> */}
// // // // // // //           </FormControl>
// // // // // // //         </Paper>
// // // // // // //       </Grid>
// // // // // // //     </Grid>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Testing;
// // // // // import React, { useRef } from 'react';
// // // // // import Button from '@mui/material/Button';
// // // // // const Testing = () => {
// // // // //   const fileInputRef = useRef(null);

// // // // //   const handleButtonClick = () => {
// // // // //     fileInputRef.current.click();
// // // // //   };

// // // // //   const handleFileChange = (e) => {
// // // // //     const selectedFile = e.target.files[0];
// // // // //     if (selectedFile) {
// // // // //       // Lakukan sesuatu dengan file yang dipilih
// // // // //       console.log('File yang dipilih:', selectedFile.name);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <input
// // // // //         type="file"
// // // // //         ref={fileInputRef}
// // // // //         style={{ display: 'none' }}
// // // // //         onChange={handleFileChange}
// // // // //       />
// // // // //       <Button variant="contained" onClick={handleButtonClick}>
// // // // //         Pilih File
// // // // //       </Button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Testing;
// // // // import React, { useState } from 'react';
// // // // import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// // // // const Testing = () => {
// // // //   const [data, setData] = useState([]);

// // // //   const addData = () => {
// // // //     const currentDate = new Date().toLocaleDateString();
// // // //     const newData = { title: 'New Post', author: 'John Doe', date: currentDate };
// // // //     setData([...data, newData]);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <TableContainer component={Paper}>
// // // //         <Table>
// // // //           <TableHead>
// // // //             <TableRow>
// // // //               <TableCell>Judul</TableCell>
// // // //               <TableCell>Penulis</TableCell>
// // // //               <TableCell>Tanggal Post</TableCell>
// // // //             </TableRow>
// // // //           </TableHead>
// // // //           <TableBody>
// // // //             {data.map((row, index) => (
// // // //               <TableRow key={index}>
// // // //                 <TableCell>{row.title}</TableCell>
// // // //                 <TableCell>{row.author}</TableCell>
// // // //                 <TableCell>{row.date}</TableCell>
// // // //               </TableRow>
// // // //             ))}
// // // //           </TableBody>
// // // //         </Table>
// // // //       </TableContainer>
// // // //       <Button onClick={addData} variant="contained" color="primary">
// // // //         Tambah Data
// // // //       </Button>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Testing;
// // // import React, { useState } from 'react';
// // // import { TextField, LocalizationProvider, DatePicker, AdapterDateFns } from '@mui/lab';
// // // import { format } from 'date-fns';
// // // const Testing = () => {
// // //   const [selectedDate, setSelectedDate] = useState(null);

// // //   const handleDateChange = (date) => {
// // //     setSelectedDate(date);
// // //   };

// // //   const formatDateToMonthName = (date) => {
// // //     if (!date) return '';

// // //     return format(date, 'dd MMMM yyyy', { locale: dateFnsLocale });
// // //   };

// // //   const dateFnsLocale = {
// // //     months: [
// // //       'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli',
// // //       'Agustus', 'September', 'Oktober', 'November', 'Desember'
// // //     ],
// // //     weekdays: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
// // //     weekdaysShort: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
// // //   };

// // //   return (
// // //     <LocalizationProvider dateAdapter={AdapterDateFns} locale={dateFnsLocale}>
// // //       <DatePicker
// // //         label="Pilih Tanggal"
// // //         value={selectedDate}
// // //         onChange={handleDateChange}
// // //         renderInput={(params) => <TextField {...params} />}
// // //         renderDay={(day, _value, _DayComponentProps) => (
// // //           <span>{format(day, 'd')}</span>
// // //         )}
// // //         renderMonth={(month, year, _MonthComponentProps) => (
// // //           <span>{format(new Date(year, month), 'MMMM yyyy', { locale: dateFnsLocale })}</span>
// // //         )}
// // //       />
// // //     </LocalizationProvider>
// // //   );
// // // }

// // // export default Testing;

// // import React, { useState } from "react";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   Modal,
// //   Backdrop,
// //   Fade,
// //   Card,
// //   CardContent,
// //   Typography,
// // } from "@mui/material";

// // const albums = [
// //   {
// //     id: 1,
// //     title: "Album 1",
// //     coverImageUrl: "link_gambar_1.jpg",
// //     description: "Deskripsi album 1...",
// //   },
// //   {
// //     id: 2,
// //     title: "Album 2",
// //     coverImageUrl: "link_gambar_2.jpg",
// //     description: "Deskripsi album 2...",
// //   },
// //   // Tambahkan lebih banyak data album
// // ];
// // const Testing = () => {
// //   const [selectedDetail, setSelectedDetail] = useState(null);

// //   const handleDetailClick = (detail) => {
// //     setSelectedDetail(detail);
// //   };

// //   const handleCloseDetail = () => {
// //     setSelectedDetail(null);
// //   };

// //   return (
// //     <div>
// //       {selectedDetail ? (
// //         <Card style={{ marginTop: "20px" }}>
// //           <CardContent>
// //             <Typography variant="h6">{selectedDetail.title}</Typography>
// //             <img
// //               src={selectedDetail.coverImageUrl}
// //               alt={selectedDetail.title}
// //               style={{ maxWidth: "100%" }}
// //             />
// //             <Typography variant="body1">{selectedDetail.description}</Typography>
// //             {/* Tambahkan informasi detail lainnya */}
// //             <button onClick={handleCloseDetail}>Tutup Detail</button>
// //           </CardContent>
// //         </Card>
// //       ) : (
// //         <TableContainer component={Paper}>
// //           <Table>
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell>Album</TableCell>
// //                 <TableCell>Deskripsi</TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {albums.map((album) => (
// //                 <TableRow
// //                   key={album.id}
// //                   onClick={() => handleDetailClick(album)}
// //                   style={{ cursor: "pointer" }}
// //                 >
// //                   <TableCell>
// //                     <img
// //                       src={album.coverImageUrl}
// //                       alt={album.title}
// //                       style={{ width: "100px", height: "auto" }}
// //                     />
// //                   </TableCell>
// //                   <TableCell>{album.description}</TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       )}
// //     </div>
// //   );
// // };

// // export default Testing;
// import React, { Component } from "react";
// import Slider from "react-slick";
// import gambar from "../assets/navbar/Logo.png";
// import { Box, Stack } from "@mui/material";

// const Foto = [
//   { id: 1, Image: gambar },
//   { id: 2, Image: gambar },
//   { id: 3, Image: gambar },
//   { id: 4, Image: gambar },
//   { id: 5, Image: gambar },
//   { id: 6, Image: gambar },
//   { id: 7, Image: gambar },
//   { id: 8, Image: gambar },
//   { id: 9, Image: gambar },
//   { id: 10, Image: gambar },
// ];
// const Testing = () => {
//     const settings = {
//         // dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         centerMode: true,
//         centerPadding: "0px",
//         autoplay: true,
//         autoplaySpeed: 1500,

//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 2,
//               infinite: true,
//               dots: false,
//             },
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 2,
//               initialSlide: 2,
//               dots: false,
//             },
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               dots: true,
//               autoplay: true,
//               // centerMode: false,
//             },
//           },
//         ],
//       }
//   return (
//     <div>
//       <h2> Responsive </h2>
//       <Slider {...settings}>
//             {Foto.map((item, index) => (
//               <div className="card carousel-image" key={item.id}>
//                 <div className="card-top  ">
//                   <Stack
//                     sx={{
//                       width: {
//                         xs: "140px",
//                         sm: "200px",
//                         md: "270px",
//                         lg: "300px",
//                       },
//                       height: {
//                         xs: "200px",
//                         sm: "350px",
//                         md: "340px",
//                         lg: "340px",
//                       },
//                       margin: "auto",
//                     }}
//                   >
//                     <img
//                       style={{
//                         borderRadius: "25px",
//                         width: "100%",
//                         height: "100%",
//                       }}
//                       src={item.Image}
//                       alt=""
//                     //   onError={handleErrorImage}
//                     />
//                   </Stack>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//     </div>
//   );
// };

// export default Testing;
import React, { useState } from "react";
import { Box, Paper, Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import Foto from "../assets/navbar/Logo.png";

const items = [
  {
    title: "Item 1",
    description: "Description for Item 1",
    images: [Foto],
  },
  {
    title: "Item 2",
    description: "Description for Item 2",
    images: [Foto, Foto, Foto],
  },
  {
    title: "Item 3",
    description: "Description for Item 3",
    images: [Foto, Foto],
  },
  {
    title: "Item 4",
    description: "Description for Item 4",
    images: [Foto, Foto, Foto, Foto, Foto],
  },
];

const Testing = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handlePrev = () => {
    setActiveStep(
      (prevStep) =>
        (prevStep - 1 + items.length) % items.length
    );
  };

  const handleNext = () => {
    setActiveStep(
      (prevStep) => (prevStep + 1) % items.length
    );
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 16 }}>
      {items.map((item, index) => (
        <Paper key={index} elevation={3} sx={{ marginBottom: 16, padding: 16 }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {item.images.length > 1 ? (
              <SwipeableViews index={0}>
                {item.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`Item ${index + 1} - Image ${imageIndex + 1}`}
                    style={{ maxWidth: "100%", marginBottom: 16 }}
                  />
                ))}
              </SwipeableViews>
            ) : (
              <img
                src={item.images[0]}
                alt={`Item ${index + 1} - Image 1`}
                style={{ maxWidth: "100%", marginBottom: 16 }}
              />
            )}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default Testing;
