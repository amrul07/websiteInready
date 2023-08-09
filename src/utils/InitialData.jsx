import Foto from "../assets/navbar/Logo.png";

const initialData = [
  {
    id: 1,
    image: Foto,
    album: "Beranda",
    description:
      "Inready Workgroup merupakan salah satu organisasi yang ada di Universitas Islam Negeri Alauddin Makassar yang didirikan pada tahun 2007, bertujuan untuk mengembangkan wawasan dan kemampuan baik itu dalam bidang IT maupun keorganisasian anggotanya....",
  },
  { id: 2, image: Foto, album: "Album 2", description: "Deskripsi 2" },
  { id: 3, image: Foto, album: "Album 3", description: "Deskripsi 2" },
  { id: 4, image: Foto, album: "Album 4", description: "Deskripsi 2" },
  { id: 5, image: Foto, album: "Album 5", description: "Deskripsi 2" },
  { id: 6, image: Foto, album: "Album 6", description: "Deskripsi 2" },
  { id: 7, image: Foto, album: "Album 7", description: "Deskripsi 2" },
  { id: 8, image: Foto, album: "Album 8", description: "Deskripsi 2" },
  { id: 9, image: Foto, album: "Album 9", description: "Deskripsi 2" },
  {
    id: 10,
    image: Foto,
    album: "Album 10",
    description: "Deskripsi 2",
  },
  {
    id: 11,
    image: Foto,
    album: "Album 11",
    description: "Deskripsi 2",
  },
  {
    id: 12,
    image: Foto,
    album: "Album 12",
    description: "Deskripsi 2",
  },
  {
    id: 13,
    image: Foto,
    album: "Album 13",
    description: "Deskripsi 2",
  },
  {
    id: 14,
    image: Foto,
    album: "Album 14",
    description: "Deskripsi 2",
  },
  {
    id: 15,
    image: Foto,
    album: "Album 15",
    description: "Deskripsi 2",
  },
];

const dataAnggota = [
  {
    id: 1,
    nama: "amrul",
    nri: 430702030001,
    alamat: "samata",
    tempatLahir: "gowa",
    tanggalLahir: "07 april 2003",
    jenisKelamin: "laki-laki",
    angkatan: "14",
    jurusan: "teknik informatika",
    konsentrasi: "website",
    jabatan: "keorganisasian",
    noWa: "085251689674",
    instagram: "peh",
    facebook: "fb",
    image: Foto,
  },
];

const dataAngkatan = [
  { id: 1, label: "pendiri" },
  { id: 2, label: "1" },
  { id: 3, label: "2" },
  { id: 4, label: "3" },
  { id: 5, label: "4" },
  { id: 6, label: "5" },
  { id: 7, label: "6" },
  { id: 8, label: "7" },
  { id: 9, label: "8" },
  { id: 10, label: "9" },
  { id: 11, label: "10" },
  { id: 12, label: "11" },
  { id: 13, label: "12" },
  { id: 14, label: "13" },
  { id: 15, label: "14" },
  { id: 16, label: "15" },
];

const dataBlog = [
  {
    id: 1,
    judul: "dodit ame",
    kategori: "making Love",
    penulis: "Dodit mpk",
    tanggalPost: "07/08/20023",
    tanggalUpdate: "08/09/2024",
    isiBerita: "kisah percintaan dodit dan dame",
    image: Foto,
  },
];

const dataKegiatan = [
  {
    id: 1,
    judulKegiatan: "Bootcamp",
    lokasi: "sekret inready",
    linkDaftar: "https://bit.ly/PendaftaranBootcampInreadyWorkgroup",
    waktu: "23-09-2023",
    tanggalPost: "23 juli 2023",
    tanggalUpdate: "24 juli 2023",
    deskripsi: "test",
    image: Foto,
  },
];

const dataKarya = [
  {
    id: 1,
    judulKarya: "kos Ta'",
    kreator: "muammar",
    konsentrasi: "website",
    link: "nuppa",
    tanggalPost: "23 juli 2023",
    tanggalUpdate: "23 juli 2023",
    deskripsi: "deskripsi",
    image: Foto,
  },
];

const dataAgenda = [
  {
    id: 1,
    judulAgenda: "judul",
    lokasi: "lokasi",
    waktu: "23 juli 2023",
    tanggalPost: "23 juli 2023",
    tanggalUpdate: "23 juli 2024",
  },
];

const dataAdmin = [
  {
    id: 1,
    username: "user",
    password: "password",
    level: "admin",
    tanggalPost: "23 juli 2023",
    tanggalUpdate: "23 juli 2003",
  },
];

export {
  initialData,
  dataAnggota,
  dataAngkatan,
  dataBlog,
  dataKegiatan,
  dataKarya,
  dataAgenda,
  dataAdmin,
};
