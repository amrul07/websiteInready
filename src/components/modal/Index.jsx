import { Box, Card, CardMedia, Modal, Stack, Typography } from "@mui/material";
import Sukses from "../../assets/sukses.svg";
import Delete from "../../assets/delete.jpg"
import {  ButtonRed, ButtonYellow } from "../button/Index";

const styleModalSucces = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

const styleLogin = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  borderRadius: "12px",
  backgroundColor: "white",
  outline: "none",
};

// modal slider
const ModalSlider = (props) => {
  return (
    <Modal
      open={props.open}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModalSucces}>
        <Stack sx={{ alignSelf: "center" }}>
          <CardMedia
            sx={{
              width: "125px",
              height: "125px",
              mt: 1,
              alignSelf: "center",
            }}
            image={Sukses}
          />
          <Typography
            id="modal-modal-title"
            sx={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 500,
              textAlign: "center",
              mt: 2,
            }}
          >
            Sukses!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 400,
              textAlign: "center",
              mt: 1,
            }}
          >
            Berhasil menyimpan data
          </Typography>
          <ButtonYellow
            onClick={props.onClick}
            sx={{
              width: "185px",
              alignSelf: "center",
              my: 2,
              borderRadius: "8px",
              color: "white",
            }}
          >
            Oke
          </ButtonYellow>
        </Stack>
      </Box>
    </Modal>
  );
};

// modal login
const ModalLogin = (props) => {
  return (
    <Modal
      open={props.open}
      // // open={open}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={styleLogin}>
        <Typography
          fontSize={"26px"}
          sx={{
            backgroundColor: "#FFF1C2",
            textAlign: "center",
            fontWeight: 600,
            py: 2,
          }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Lupa Password
        </Typography>
        <Typography
          id="modal-modal-description"
          fontSize={"18px"}
          sx={{ mt: 3, px: 6, fontFamily: "Poppins" }}
        >
          Kami sudah mengirim link untuk mengubah password anda ke
          <b style={{ marginLeft: "5px" }}>email admin yang terdaftar.</b>
        </Typography>
        <Typography
          id="modal-modal-description"
          fontSize={"18px"}
          sx={{ mt: 1, pl: 6, fontFamily: "Poppins" }}
        >
          Harap cek dan klik link tersebut. Sampai jumpa!
        </Typography>
        <Stack sx={{ alignItems: "center", pb: 2 }}>
          <button
            onClick={props.onClick}
            style={{
              marginTop: "20px",
              width: "84%",
              backgroundColor: "#FFC400",
              paddingTop: "12px",
              paddingBottom: "12px",
              borderRadius: "12px",
              textTransform: "none",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "20px",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Selesai
          </button>
          <Typography
            onClick={props.onClickBack}
            // onClick={handleClose}
            id="modal-modal-description"
            fontSize={"18px"}
            sx={{
              mt: 2,
              color: "#646464",
              cursor: "pointer",
              fontFamily: "Poppins",
            }}
          >
            Kembali ke halaman login
          </Typography>
        </Stack>
      </Card>
    </Modal>
  );
};

const ModalDelete = (props) => {
  return (
    <Modal
      open={props.open}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModalSucces}>
        <Stack sx={{ alignSelf: "center" }}>
          <CardMedia
            sx={{
              width: "135px",
              height: "135px",
              mt: 1,
              alignSelf: "center",
            }}
            image={Delete}
          />
          <Typography
            id="modal-modal-title"
            sx={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 500,
              textAlign: "center",
              mt: 2,
            }}
          >
            Apakah anda yakin ingin menghapus data?
          </Typography>
          <Stack sx={{display: "flex",flexDirection: "row",justifyContent: "space-around", mt: 1}}>
            <ButtonYellow
              onClick={props.onClickDelete}
              sx={{
                width: "85px",
                alignSelf: "center",
                my: 2,
                borderRadius: "8px",
                color: "white",
              }}
            >
              Yes
            </ButtonYellow>
            <ButtonRed
              onClick={props.onClick}
              sx={{
                width: "85px",
                alignSelf: "center",
                my: 2,
                borderRadius: "8px",
                color: "white",
              }}
            >
              No
            </ButtonRed>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export { ModalSlider, ModalLogin, ModalDelete };
