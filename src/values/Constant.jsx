import { ReactComponent as Dashboard } from "../assets/navbar/dashboard.svg";
import { ReactComponent as Blog } from "../assets/navbar/blog.svg";
import { ReactComponent as Slider } from "../assets/navbar/slider.svg";
import { ReactComponent as Anggota } from "../assets/navbar/anggota.svg";
// import { ReactComponent as Kegiatan } from "../assets/navbar/kegiatan.svg";
import { ReactComponent as Agenda } from "../assets/navbar/agenda.svg";
import { ReactComponent as Admin } from "../assets/navbar/admin.svg";
import { ReactComponent as Kegiatan } from "../assets/navbar/kegiatan.svg";
import { ReactComponent as Karya } from "../assets/navbar/karya.svg";
import { ReactComponent as Gallery } from "../assets/navbar/gallery.svg";
import { ReactComponent as Presidium } from "../assets/navbar/presidium.svg";
import { ReactComponent as Bpo } from "../assets/navbar/bpo.svg";
import { ReactComponent as Divisi } from "../assets/navbar/divisi.svg";

export const menu = [
  {
    title: "Dashboard",
    router: "/",
    icon: <Dashboard width={"20px"} />,
  },
  {
    title: "Slider",
    router: "/slider",
    icon: <Slider width={"22px"} />,
  },
  {
    title: "Anggota",
    router: "/anggota",
    icon: <Anggota width={"22px"} />,
  },
  {
    title: "Presidium",
    router: "/presidium",
    icon: <Presidium width={"22px"} />,
  },
  {
    title: "Bpo",
    router: "/bpo",
    icon: <Bpo width={"22px"} />,
  },
  {
    title: "Division",
    router: "/division",
    icon: <Divisi width={"24px"} />,
  },
  {
    title: "Blog",
    router: "/blog",
    icon: <Blog style={{ paddingLeft: "1px" }} width={"18px"} />,
    // icon: <img src={Blog} alt="" />,
  },
  // {
  //   title: "Gallery",
  //   router: "/gallery",
  //   icon: <Gallery style={{ paddingLeft: "1px" }} width={"20px"} />,
  //   // icon: <img src={Blog} alt="" />,
  // },
  {
    title: "Kegiatan",
    router: "/kegiatan",
    icon: <Kegiatan style={{ paddingLeft: "2px" }} width={"20px"} />,
  },
  {
    title: "Karya",
    router: "/karya",
    icon: <Karya style={{ paddingLeft: "1px" }} width={"18px"} />,
  },
  // {
  //   title: "Agenda",
  //   router: "/agenda",
  //   icon: (
  //     <Agenda style={{ marginTop: "5px" }} width={"26px"} height={"18px"} />
  //   ),
  // },
  {
    title: "Admin",
    router: "/admin",
    icon: <Admin style={{ marginTop: "5px", paddingLeft: "1px" }} />,
  },
];

export const SliderData = [
  {
    id: 1,
    album: "Kegiatan Sosial Desa",
    gambar: "https://picsum.photos/id/1011/800/400",
    deskripsi:
      "Warga desa bergotong-royong membersihkan lingkungan sekitar balai desa.",
  },
  {
    id: 2,
    album: "Pelatihan Pemuda",
    gambar: "https://picsum.photos/id/1025/800/400",
    deskripsi:
      "Pelatihan keterampilan digital untuk pemuda desa agar siap menghadapi era teknologi.",
  },
  {
    id: 3,
    album: "Hari Kemerdekaan",
    gambar: "https://picsum.photos/id/1035/800/400",
    deskripsi:
      "Pawai kemerdekaan memperingati HUT RI ke-79 dengan berbagai perlombaan.",
  },
  {
    id: 4,
    album: "Bakti Sosial",
    gambar: "https://picsum.photos/id/1041/800/400",
    deskripsi: "Penyerahan bantuan sembako kepada warga yang membutuhkan.",
  },
  {
    id: 5,
    album: "Penghijauan Desa",
    gambar: "https://picsum.photos/id/1052/800/400",
    deskripsi: "Kegiatan penanaman pohon untuk menjaga kelestarian alam desa.",
  },
  {
    id: 6,
    album: "Festival Budaya",
    gambar: "https://picsum.photos/id/1067/800/400",
    deskripsi: "Pagelaran seni dan budaya yang menampilkan tarian tradisional.",
  },
  {
    id: 7,
    album: "Lomba Olahraga",
    gambar: "https://picsum.photos/id/1074/800/400",
    deskripsi: "Turnamen sepak bola antar dusun memperebutkan piala bergilir.",
  },
  {
    id: 8,
    album: "Pelatihan UMKM",
    gambar: "https://picsum.photos/id/1081/800/400",
    deskripsi:
      "Workshop pengembangan usaha mikro kecil dan menengah untuk warga.",
  },
  {
    id: 9,
    album: "Peringatan Hari Pahlawan",
    gambar: "https://picsum.photos/id/1090/800/400",
    deskripsi: "Upacara bendera dan doa bersama mengenang jasa para pahlawan.",
  },
  {
    id: 10,
    album: "Gotong Royong Perbaikan Jalan",
    gambar: "https://picsum.photos/id/1104/800/400",
    deskripsi: "Warga bekerja sama memperbaiki jalan desa yang rusak.",
  },
];

export const AnggotaData = [
  {
    id: 1,
    nama: "Ahmad Fauzi",
    nomor_registrasi: "ORG001",
    alamat: "Jl. Merdeka No. 12, Jakarta",
    tempat_tanggal_lahir: "Jakarta, 12 Januari 2000",
    jenis_kelamin: "Laki-laki",
    angkatan: "2020",
    jurusan: "Teknik Informatika",
    konsentrasi: "website",
    jabatan: "Ketua",
    no_wa: "081234567890",
    instagram: "@ahmad_fz",
    fb: "facebook.com/ahmadfauzi",
    foto: "https://picsum.photos/id/1011/300/300",
  },
  {
    id: 2,
    nama: "Siti Nurhaliza",
    nomor_registrasi: "ORG002",
    alamat: "Jl. Melati No. 5, Bandung",
    tempat_tanggal_lahir: "Bandung, 20 Februari 2001",
    jenis_kelamin: "Perempuan",
    angkatan: "2021",
    jurusan: "Sistem Informasi",
    konsentrasi: "mobile",
    jabatan: "Wakil Ketua",
    no_wa: "081298765432",
    instagram: "@sitinurhaliza",
    fb: "facebook.com/sitinurhaliza",
    foto: "https://picsum.photos/id/1025/300/300",
  },
  {
    id: 3,
    nama: "Budi Santoso",
    nomor_registrasi: "ORG003",
    alamat: "Jl. Kenanga No. 7, Surabaya",
    tempat_tanggal_lahir: "Surabaya, 15 Maret 2000",
    jenis_kelamin: "Laki-laki",
    angkatan: "2019",
    jurusan: "Teknik Informatika",
    konsentrasi: "desain",
    jabatan: "Sekretaris",
    no_wa: "081345678912",
    instagram: "@budisantoso",
    fb: "facebook.com/budisantoso",
    foto: "https://picsum.photos/id/1035/300/300",
  },
  {
    id: 4,
    nama: "Rina Wulandari",
    nomor_registrasi: "ORG004",
    alamat: "Jl. Anggrek No. 8, Yogyakarta",
    tempat_tanggal_lahir: "Yogyakarta, 1 April 2002",
    jenis_kelamin: "Perempuan",
    angkatan: "2022",
    jurusan: "Sistem Informasi",
    konsentrasi: "website",
    jabatan: "Bendahara",
    no_wa: "081356789123",
    instagram: "@rinawulandari",
    fb: "facebook.com/rinawulandari",
    foto: "https://picsum.photos/id/1041/300/300",
  },
  {
    id: 5,
    nama: "Agus Pratama",
    nomor_registrasi: "ORG005",
    alamat: "Jl. Cendana No. 4, Semarang",
    tempat_tanggal_lahir: "Semarang, 10 Mei 1999",
    jenis_kelamin: "Laki-laki",
    angkatan: "2018",
    jurusan: "Teknik Informatika",
    konsentrasi: "mobile",
    jabatan: "Koordinator Lapangan",
    no_wa: "081367891234",
    instagram: "@aguspratama",
    fb: "facebook.com/aguspratama",
    foto: "https://picsum.photos/id/1052/300/300",
  },
  {
    id: 6,
    nama: "Dewi Anggraini",
    nomor_registrasi: "ORG006",
    alamat: "Jl. Flamboyan No. 3, Medan",
    tempat_tanggal_lahir: "Medan, 25 Juni 2001",
    jenis_kelamin: "Perempuan",
    angkatan: "2021",
    jurusan: "Desain Komunikasi Visual",
    konsentrasi: "desain",
    jabatan: "Humas",
    no_wa: "081378912345",
    instagram: "@dewianggraini",
    fb: "facebook.com/dewianggraini",
    foto: "https://picsum.photos/id/1067/300/300",
  },
  {
    id: 7,
    nama: "Fajar Ramadhan",
    nomor_registrasi: "ORG007",
    alamat: "Jl. Dahlia No. 6, Makassar",
    tempat_tanggal_lahir: "Makassar, 14 Juli 2000",
    jenis_kelamin: "Laki-laki",
    angkatan: "2020",
    jurusan: "Sistem Informasi",
    konsentrasi: "website",
    jabatan: "Anggota",
    no_wa: "081389123456",
    instagram: "@fajarramadhan",
    fb: "facebook.com/fajarramadhan",
    foto: "https://picsum.photos/id/1074/300/300",
  },
  {
    id: 8,
    nama: "Lestari Putri",
    nomor_registrasi: "ORG008",
    alamat: "Jl. Mawar No. 11, Bali",
    tempat_tanggal_lahir: "Denpasar, 9 Agustus 2002",
    jenis_kelamin: "Perempuan",
    angkatan: "2022",
    jurusan: "Desain Komunikasi Visual",
    konsentrasi: "desain",
    jabatan: "Anggota",
    no_wa: "081390123567",
    instagram: "@lestariputri",
    fb: "facebook.com/lestariputri",
    foto: "https://picsum.photos/id/1081/300/300",
  },
  {
    id: 9,
    nama: "Rizky Saputra",
    nomor_registrasi: "ORG009",
    alamat: "Jl. Teratai No. 15, Palembang",
    tempat_tanggal_lahir: "Palembang, 5 September 2000",
    jenis_kelamin: "Laki-laki",
    angkatan: "2020",
    jurusan: "Teknik Informatika",
    konsentrasi: "mobile",
    jabatan: "Anggota",
    no_wa: "081301234578",
    instagram: "@rizkysaputra",
    fb: "facebook.com/rizkysaputra",
    foto: "https://picsum.photos/id/1090/300/300",
  },
  {
    id: 10,
    nama: "Nur Aisyah",
    nomor_registrasi: "ORG010",
    alamat: "Jl. Sakura No. 2, Malang",
    tempat_tanggal_lahir: "Malang, 19 Oktober 2001",
    jenis_kelamin: "Perempuan",
    angkatan: "2021",
    jurusan: "Sistem Informasi",
    konsentrasi: "website",
    jabatan: "Anggota",
    no_wa: "081312345689",
    instagram: "@nuraisyah",
    fb: "facebook.com/nuraisyah",
    foto: "https://picsum.photos/id/1104/300/300",
  },
];

export const DivisiData = [
  { id: 1, nama: "Ahmad Fauzi", nama_divisi: "Divisi Teknologi Informasi" },
  { id: 2, nama: "Siti Nurhaliza", nama_divisi: "Divisi Humas" },
  { id: 3, nama: "Budi Santoso", nama_divisi: "Divisi Kreatif & Desain" },
  { id: 4, nama: "Rina Wulandari", nama_divisi: "Divisi Keuangan" },
  { id: 5, nama: "Agus Pratama", nama_divisi: "Divisi Acara & Event" },
  { id: 6, nama: "Dewi Anggraini", nama_divisi: "Divisi Publikasi" },
  {
    id: 7,
    nama: "Fajar Ramadhan",
    nama_divisi: "Divisi Penelitian & Pengembangan",
  },
  { id: 8, nama: "Lestari Putri", nama_divisi: "Divisi Seni & Budaya" },
  { id: 9, nama: "Rizky Saputra", nama_divisi: "Divisi Olahraga" },
  { id: 10, nama: "Nur Aisyah", nama_divisi: "Divisi Kaderisasi" },
];

export const BlogData = [
  {
    "id": 1,
    "judul": "Pelatihan Desain Web untuk Anggota Baru",
    "kategori": "Pelatihan",
    "penulis": "Ahmad Fauzi",
    "tanggal_post": "2025-02-01",
    "tanggal_update": "2025-02-02",
    "isi_berita": "Organisasi mengadakan pelatihan desain web untuk anggota baru dengan fokus pada HTML, CSS, dan JavaScript.",
    "gambar": "https://picsum.photos/id/1011/800/400"
  },
  {
    "id": 2,
    "judul": "Lomba Poster Digital Tingkat Nasional",
    "kategori": "Kompetisi",
    "penulis": "Siti Nurhaliza",
    "tanggal_post": "2025-02-05",
    "tanggal_update": "2025-02-06",
    "isi_berita": "Anggota organisasi berhasil meraih juara 2 lomba poster digital tingkat nasional yang diadakan secara daring.",
    "gambar": "https://picsum.photos/id/1025/800/400"
  },
  {
    "id": 3,
    "judul": "Pengabdian Masyarakat di Desa Binaan",
    "kategori": "Pengabdian",
    "penulis": "Budi Santoso",
    "tanggal_post": "2025-02-10",
    "tanggal_update": "2025-02-12",
    "isi_berita": "Kegiatan pengabdian masyarakat berupa pelatihan komputer dasar untuk warga desa binaan berjalan sukses.",
    "gambar": "https://picsum.photos/id/1035/800/400"
  },
  {
    "id": 4,
    "judul": "Webinar Nasional tentang Keamanan Siber",
    "kategori": "Webinar",
    "penulis": "Rina Wulandari",
    "tanggal_post": "2025-02-15",
    "tanggal_update": "2025-02-16",
    "isi_berita": "Webinar ini membahas tren keamanan siber terkini dan tips melindungi data pribadi di dunia digital.",
    "gambar": "https://picsum.photos/id/1041/800/400"
  },
  {
    "id": 5,
    "judul": "Workshop Mobile App Development",
    "kategori": "Pelatihan",
    "penulis": "Agus Pratama",
    "tanggal_post": "2025-02-18",
    "tanggal_update": "2025-02-19",
    "isi_berita": "Workshop ini membahas pembuatan aplikasi mobile berbasis Flutter dengan praktek langsung.",
    "gambar": "https://picsum.photos/id/1052/800/400"
  },
  {
    "id": 6,
    "judul": "Pentas Seni Budaya Organisasi",
    "kategori": "Kegiatan",
    "penulis": "Dewi Anggraini",
    "tanggal_post": "2025-02-20",
    "tanggal_update": "2025-02-21",
    "isi_berita": "Pentas seni budaya yang menampilkan tarian tradisional dan musik daerah sukses memikat penonton.",
    "gambar": "https://picsum.photos/id/1067/800/400"
  },
  {
    "id": 7,
    "judul": "Seminar Kewirausahaan untuk Mahasiswa",
    "kategori": "Seminar",
    "penulis": "Fajar Ramadhan",
    "tanggal_post": "2025-02-22",
    "tanggal_update": "2025-02-23",
    "isi_berita": "Seminar ini mengajarkan strategi memulai usaha bagi mahasiswa dengan modal minim.",
    "gambar": "https://picsum.photos/id/1074/800/400"
  },
  {
    "id": 8,
    "judul": "Turnamen E-Sport Antar Fakultas",
    "kategori": "Kompetisi",
    "penulis": "Lestari Putri",
    "tanggal_post": "2025-02-25",
    "tanggal_update": "2025-02-26",
    "isi_berita": "Turnamen e-sport game Mobile Legends antar fakultas berlangsung seru dan kompetitif.",
    "gambar": "https://picsum.photos/id/1081/800/400"
  },
  {
    "id": 9,
    "judul": "Penghijauan Kampus dengan Penanaman Pohon",
    "kategori": "Lingkungan",
    "penulis": "Rizky Saputra",
    "tanggal_post": "2025-02-28",
    "tanggal_update": "2025-03-01",
    "isi_berita": "Program penghijauan ini bertujuan menciptakan lingkungan kampus yang asri dan nyaman.",
    "gambar": "https://picsum.photos/id/1090/800/400"
  },
  {
    "id": 10,
    "judul": "Penggalangan Dana untuk Korban Bencana Alam",
    "kategori": "Sosial",
    "penulis": "Nur Aisyah",
    "tanggal_post": "2025-03-03",
    "tanggal_update": "2025-03-04",
    "isi_berita": "Organisasi mengadakan penggalangan dana untuk membantu korban bencana alam di daerah terdampak.",
    "gambar": "https://picsum.photos/id/1104/800/400"
  }
]


export const KegiatanData = [
  {
    "id": 1,
    "gambar": "https://picsum.photos/id/201/800/400",
    "judul": "Pelatihan Public Speaking",
    "lokasi": "Aula Gedung C Kampus",
    "link_daftar": "https://bit.ly/daftar-public-speaking",
    "waktu": "2025-03-10 09:00",
    "tanggal_post": "2025-02-25",
    "tanggal_update": "2025-02-26",
    "deskripsi": "Pelatihan public speaking untuk meningkatkan kemampuan berbicara di depan umum bagi anggota organisasi."
  },
  {
    "id": 2,
    "gambar": "https://picsum.photos/id/202/800/400",
    "judul": "Workshop Desain Grafis",
    "lokasi": "Lab Multimedia Kampus",
    "link_daftar": "https://bit.ly/daftar-desain-grafis",
    "waktu": "2025-03-12 13:00",
    "tanggal_post": "2025-02-26",
    "tanggal_update": "2025-02-27",
    "deskripsi": "Workshop pembuatan desain grafis dengan Adobe Illustrator dan Photoshop."
  },
  {
    "id": 3,
    "gambar": "https://picsum.photos/id/203/800/400",
    "judul": "Lomba Cerdas Cermat",
    "lokasi": "Aula Fakultas",
    "link_daftar": "https://bit.ly/daftar-cerdas-cermat",
    "waktu": "2025-03-14 10:00",
    "tanggal_post": "2025-02-27",
    "tanggal_update": "2025-02-28",
    "deskripsi": "Lomba cerdas cermat antar mahasiswa untuk mengasah wawasan dan kerja sama tim."
  },
  {
    "id": 4,
    "gambar": "https://picsum.photos/id/204/800/400",
    "judul": "Webinar Keamanan Siber",
    "lokasi": "Zoom Meeting",
    "link_daftar": "https://bit.ly/daftar-webinar-cyber",
    "waktu": "2025-03-16 19:00",
    "tanggal_post": "2025-02-28",
    "tanggal_update": "2025-03-01",
    "deskripsi": "Webinar nasional membahas ancaman dan solusi keamanan siber."
  },
  {
    "id": 5,
    "gambar": "https://picsum.photos/id/205/800/400",
    "judul": "Pengabdian Masyarakat",
    "lokasi": "Desa Binaan Sukamaju",
    "link_daftar": "https://bit.ly/daftar-pengabdian",
    "waktu": "2025-03-18 08:00",
    "tanggal_post": "2025-03-01",
    "tanggal_update": "2025-03-02",
    "deskripsi": "Kegiatan pengabdian masyarakat berupa pelatihan komputer untuk warga desa."
  },
  {
    "id": 6,
    "gambar": "https://picsum.photos/id/206/800/400",
    "judul": "Seminar Kewirausahaan",
    "lokasi": "Aula Gedung A Kampus",
    "link_daftar": "https://bit.ly/daftar-kewirausahaan",
    "waktu": "2025-03-20 09:00",
    "tanggal_post": "2025-03-02",
    "tanggal_update": "2025-03-03",
    "deskripsi": "Seminar membahas strategi membangun usaha bagi mahasiswa."
  },
  {
    "id": 7,
    "gambar": "https://picsum.photos/id/207/800/400",
    "judul": "Turnamen E-Sport Mobile Legends",
    "lokasi": "Aula Olahraga Kampus",
    "link_daftar": "https://bit.ly/daftar-esport",
    "waktu": "2025-03-22 14:00",
    "tanggal_post": "2025-03-03",
    "tanggal_update": "2025-03-04",
    "deskripsi": "Turnamen e-sport antar fakultas untuk memperebutkan piala bergilir."
  },
  {
    "id": 8,
    "gambar": "https://picsum.photos/id/208/800/400",
    "judul": "Pelatihan Fotografi",
    "lokasi": "Studio Fotografi Kampus",
    "link_daftar": "https://bit.ly/daftar-fotografi",
    "waktu": "2025-03-24 09:00",
    "tanggal_post": "2025-03-04",
    "tanggal_update": "2025-03-05",
    "deskripsi": "Pelatihan teknik fotografi dasar dan editing foto."
  },
  {
    "id": 9,
    "gambar": "https://picsum.photos/id/209/800/400",
    "judul": "Bakti Sosial",
    "lokasi": "Panti Asuhan Harapan",
    "link_daftar": "https://bit.ly/daftar-baksos",
    "waktu": "2025-03-26 08:00",
    "tanggal_post": "2025-03-05",
    "tanggal_update": "2025-03-06",
    "deskripsi": "Bakti sosial berupa pembagian sembako dan kegiatan bermain bersama anak-anak panti."
  },
  {
    "id": 10,
    "gambar": "https://picsum.photos/id/210/800/400",
    "judul": "Pentas Seni Budaya",
    "lokasi": "Lapangan Utama Kampus",
    "link_daftar": "https://bit.ly/daftar-pentas-seni",
    "waktu": "2025-03-28 18:00",
    "tanggal_post": "2025-03-06",
    "tanggal_update": "2025-03-07",
    "deskripsi": "Pentas seni budaya menampilkan musik, tari, dan drama dari mahasiswa."
  }
]



export const KaryaData = [
  {
    "id": 1,
    "gambar": "https://picsum.photos/id/301/800/400",
    "judul": "Website Portal Informasi Kampus",
    "kreator": "Ahmad Fauzi",
    "konsentrasi": "Website",
    "link": "https://example.com/portal-kampus",
    "tanggal_post": "2025-02-15",
    "tanggal_update": "2025-02-16",
    "deskripsi": "Portal informasi kampus yang menyediakan berita, jadwal kuliah, dan pengumuman."
  },
  {
    "id": 2,
    "gambar": "https://picsum.photos/id/302/800/400",
    "judul": "Aplikasi Mobile Absensi Mahasiswa",
    "kreator": "Siti Nurhaliza",
    "konsentrasi": "Mobile",
    "link": "https://example.com/app-absensi",
    "tanggal_post": "2025-02-17",
    "tanggal_update": "2025-02-18",
    "deskripsi": "Aplikasi mobile untuk memudahkan proses absensi mahasiswa menggunakan QR Code."
  },
  {
    "id": 3,
    "gambar": "https://picsum.photos/id/303/800/400",
    "judul": "Desain Poster Edukasi Digital",
    "kreator": "Budi Santoso",
    "konsentrasi": "Desain",
    "link": "https://example.com/poster-edukasi",
    "tanggal_post": "2025-02-18",
    "tanggal_update": "2025-02-19",
    "deskripsi": "Poster edukasi untuk meningkatkan kesadaran literasi digital di kalangan mahasiswa."
  },
  {
    "id": 4,
    "gambar": "https://picsum.photos/id/304/800/400",
    "judul": "Website Sistem Perpustakaan Online",
    "kreator": "Rina Wulandari",
    "konsentrasi": "Website",
    "link": "https://example.com/perpustakaan-online",
    "tanggal_post": "2025-02-19",
    "tanggal_update": "2025-02-20",
    "deskripsi": "Sistem perpustakaan berbasis web untuk meminjam dan mengembalikan buku secara online."
  },
  {
    "id": 5,
    "gambar": "https://picsum.photos/id/305/800/400",
    "judul": "Aplikasi Mobile Jadwal Sholat",
    "kreator": "Agus Pratama",
    "konsentrasi": "Mobile",
    "link": "https://example.com/jadwal-sholat",
    "tanggal_post": "2025-02-20",
    "tanggal_update": "2025-02-21",
    "deskripsi": "Aplikasi mobile yang menampilkan jadwal sholat dan pengingat otomatis."
  },
  {
    "id": 6,
    "gambar": "https://picsum.photos/id/306/800/400",
    "judul": "Desain Branding Cafe Kampus",
    "kreator": "Dewi Anggraini",
    "konsentrasi": "Desain",
    "link": "https://example.com/branding-cafe",
    "tanggal_post": "2025-02-21",
    "tanggal_update": "2025-02-22",
    "deskripsi": "Konsep branding lengkap untuk cafe kampus, termasuk logo, menu, dan interior."
  },
  {
    "id": 7,
    "gambar": "https://picsum.photos/id/307/800/400",
    "judul": "Website E-Learning Mahasiswa",
    "kreator": "Fajar Ramadhan",
    "konsentrasi": "Website",
    "link": "https://example.com/e-learning",
    "tanggal_post": "2025-02-22",
    "tanggal_update": "2025-02-23",
    "deskripsi": "Platform e-learning berbasis web untuk materi kuliah dan tugas mahasiswa."
  },
  {
    "id": 8,
    "gambar": "https://picsum.photos/id/308/800/400",
    "judul": "Aplikasi Mobile Manajemen Keuangan",
    "kreator": "Lestari Putri",
    "konsentrasi": "Mobile",
    "link": "https://example.com/app-keuangan",
    "tanggal_post": "2025-02-23",
    "tanggal_update": "2025-02-24",
    "deskripsi": "Aplikasi untuk membantu mahasiswa mengatur pemasukan dan pengeluaran bulanan."
  },
  {
    "id": 9,
    "gambar": "https://picsum.photos/id/309/800/400",
    "judul": "Desain UI/UX Aplikasi Transportasi Kampus",
    "kreator": "Rizky Saputra",
    "konsentrasi": "Desain",
    "link": "https://example.com/uiux-transport",
    "tanggal_post": "2025-02-24",
    "tanggal_update": "2025-02-25",
    "deskripsi": "Desain antarmuka untuk aplikasi transportasi internal kampus."
  },
  {
    "id": 10,
    "gambar": "https://picsum.photos/id/310/800/400",
    "judul": "Website Forum Diskusi Mahasiswa",
    "kreator": "Nur Aisyah",
    "konsentrasi": "Website",
    "link": "https://example.com/forum-mahasiswa",
    "tanggal_post": "2025-02-25",
    "tanggal_update": "2025-02-26",
    "deskripsi": "Forum diskusi online untuk mahasiswa bertukar ide dan informasi akademik."
  }
]

export const AdminData = [
  {
    "id": 1,
    "nama": "Ahmad Fauzi",
    "username": "fauzi_admin",
    "level": "Super Admin",
    "tanggal_post": "2025-02-15",
    "tanggal_update": "2025-02-16"
  },
  {
    "id": 2,
    "nama": "Siti Nurhaliza",
    "username": "siti_admin",
    "level": "Admin",
    "tanggal_post": "2025-02-16",
    "tanggal_update": "2025-02-17"
  },
  {
    "id": 3,
    "nama": "Budi Santoso",
    "username": "budi_super",
    "level": "Super Admin",
    "tanggal_post": "2025-02-17",
    "tanggal_update": "2025-02-18"
  },
  {
    "id": 4,
    "nama": "Rina Wulandari",
    "username": "rina_admin",
    "level": "Admin",
    "tanggal_post": "2025-02-18",
    "tanggal_update": "2025-02-19"
  },
  {
    "id": 5,
    "nama": "Agus Pratama",
    "username": "agus_admin",
    "level": "Admin",
    "tanggal_post": "2025-02-19",
    "tanggal_update": "2025-02-20"
  },
  {
    "id": 6,
    "nama": "Dewi Anggraini",
    "username": "dewi_super",
    "level": "Super Admin",
    "tanggal_post": "2025-02-20",
    "tanggal_update": "2025-02-21"
  },
  {
    "id": 7,
    "nama": "Fajar Ramadhan",
    "username": "fajar_admin",
    "level": "Admin",
    "tanggal_post": "2025-02-21",
    "tanggal_update": "2025-02-22"
  },
  {
    "id": 8,
    "nama": "Lestari Putri",
    "username": "lestari_admin",
    "level": "Admin",
    "tanggal_post": "2025-02-22",
    "tanggal_update": "2025-02-23"
  },
  {
    "id": 9,
    "nama": "Rizky Saputra",
    "username": "rizky_super",
    "level": "Super Admin",
    "tanggal_post": "2025-02-23",
    "tanggal_update": "2025-02-24"
  },
  {
    "id": 10,
    "nama": "Nur Aisyah",
    "username": "aisyah_admin",
    "level": "Admin",
    "tanggal_post": "2025-02-24",
    "tanggal_update": "2025-02-25"
  }
]

