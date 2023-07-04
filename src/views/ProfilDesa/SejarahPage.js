import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function SejarahPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("Sejarah-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("Sejarah-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page clear-filter" filter-color="blue">
        <div
          className="page-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")", overflow:"auto"
          }}
        ></div>
        <div className="content" style={{display: "flex",
              justifyContent: "center",}}>
          <Card
            style={{
              width: "95%",
              height: "90%",
              marginTop: "150px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <CardBody>
              <h2
                style={{
                  color: "black",
                  fontSize: "17px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                SEJARAH DESA
              </h2>
              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                1. Sejarah Nama Desa Pandean
              </h3>
              <p style={{ color: "#000000", textAlign: "justify" }}>
                Sebuah Desa yang terletak disebelah utara ± 14 Km dari pusat
                pemerintahan Kabupaten Nganjuk, dan ± 1 Km dari pusat
                pemerintahan kecamatan Gondang. Merupakan desa sedang, yang
                anggota masyarakatnya sebagaian besar berprofesi sebagai petani.
                <strong> Dengan luas Wilayah ± 236.19 Ha</strong>, Berupa{" "}
                <b>Tanah Darat : 47.17 Ha</b> dan berupa{" "}
                <b>Tanah Sawah : 189.02 Ha</b>, dengan jumlah Penduduk sampai
                dengan saat ini Bulan Oktober 2018 <b>2.324 jiwa</b>. Dan Pada
                ketinggian{" "}
                <b>
                  598 Meter dari permukaan laut, 7 ° Ls 31 Menit 920 Detik, 111°
                  Bt 57 menit 602 detik diukur dari titik pusat kantor desa
                  Pandean
                </b>
              </p>
              <p style={{ color: "black", textAlign: "justify" }}>
                Sedang asal mula desa Pandean Sendiri, dahulu merupakan hutan
                belantara, masyarakat sering menyebut Hutan Tua ( Alas Tuo ).
                Dari sesepuh desa yang masih ada, sesepuh juga cerita dari
                sesepuh terdahulu, bahwa yang mengawali babat hutan pertama
                kali, sekelompok orang yang berasal dari Bojonegoro, pada saat
                babat hutan ditemukan alat alat Pande atau yang sering dinamakan
                <b> Besalen</b>, yang mana pemiliknya tidak diketaui
                keberadaannya, akhirnya sekelompok orang tersebut memanfaatkan
                alat besalen yang ada, dari hari kehari mingu keminggu bulan
                kebulan tahun ketahun akhirnya oleh sekelompok tersebut menamai
                tempatnya dengan nama <b>Pandean</b>, dan sampai sekarang masih
                ada yang melanjutkan pande besi pande besi dari generasi
                kegenerasi berikutnya.
              </p>
              <p style={{ color: "black", textAlign: "justify" }}>
                Desa Pandean sendiri ada beberapa bagian nama ada yang menamai,
                <b>Gempol Pecut</b>, karena di tempat itu tumbuh Pohon Gempol besar
                menjulang tinggi dan ujungnya membentuk seperti pecut akhirnya
                masyarakat menamai dengan Gempol Pecut, juga ada yang menamai
                <b>Jantok, Janeng, Pekalangan</b> juga ada yang menamai <b>Sembung</b> semua
                menjadi satu dinamai <b>Dusun Pandean</b>.
              </p>
              <br />

              <h2
                style={{
                  color: "black",
                  fontSize: "17px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                <b>DESA PANDEAN SENDIRI ADA 3 DUSUN:</b>
              </h2>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>1. Dusun Pandean:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
                Bermula ditemukan alat alat pande akhirnya dinamai Pandean.</p>

                <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>2. Dusun Kampungbaru:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Bermula dari tanah sawah keseluruhan dirubah menjadi tanah darat menjadi Kampungbaru.</p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>3. Dusun Sumbersari:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Bermula dari Pohon Panggang yang besar dibawahnya ada sumber air yang besar, akhirnya dinamai sumbersari.</p>
              <br />

              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Masyarakat desa Pandean sendiri juga memiliki tempat yang oleh masyarakat dikeramatkan antara lain :</p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black", textIndent:"15px" }}
              >
                <b>-  JEMBATAN MAKAM DOWO:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}> 
              Masyarakat sering menyebut <b>Kali buntung</b>, dinamakan kali buntung karena hilir dari sungai tesebut dari jembatan hanya sekitar 75 Meter dan sudah tidak ada kelanjutan lagi.  </p>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}> 
              <b>Jembatan Makam Dowo</b>  Yaitu  : Jembatan yang berada disebelah utara dari pemakaman yang diyakini oleh masyarakat keangkerannya.  </p>
            
              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black", textIndent:"15px" }}
              >
                <b>-  CUNGKUP:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Merupakan tempat dimana dahulu ditempati oleh salah satu sesepuh desa bernama <b>Mbah Dipo</b>, akhirnya sampek sekarang masyarakat masih meyakini keberadaan dari <b>Mbah Dipo</b> tersebut yang berupa punden.  </p>
                
              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black", textIndent:"15px" }}
              >
                <b>-  SUMUR GEDE:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Masyarakat menamai sumur gede karena sumur tersebut merupakan sumur tua, karena waktu itu sumur yang digunakan masyarakat desa Pandean untuk mengambil air yang terkenal <b>sumber mata airnya yang besar</b>, dan sampek sekarang masih ada keberadaanya yang terletak di belakang dari kantor desa Pandean.  </p>
            
              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black", textIndent:"15px" }}
              >
                <b>-  SUMUR PANGGANG:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Sumur yang terletak disebelah barat dusun Kampungbaru, dibuat oleh sesepuh dusun, tempat mengambil air dari warga disekitarnya oleh sipembuat sumur dinamai tempat suci, waktu ngambil air ditempat tersebut tidak boleh memiliki sifat serik serai dengki atau membawa barang yang kotor, dengan bergulirnya waktu karena kecerobohan masyarakat setempat pantangan yang ada dilanggar akhirnya seketika itu juga, keberadaan sumur menjadi rata dengan tanah yang ada disekitarnya. </p>

              <h3
                style={{ textAlign: "center", fontSize: "15px", color: "black", textIndent:"15px" }}
              >
                <b>-  ADAT DESA:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Masing masing dusun setiap tahunnya mengadakan acara adat yang berupa bersih dusun atau sedekah bumi, dilaksanakan oleh Perangat desa serta masyarakat setempat setelah musim panen selesai, dengan cara kirim doa bersama sama ditujukan keseluruh leluhur leluhur yang kembali kerohmatulloh yang dipimpin oleh sesepuh dusun dan tokoh masyarakat yang ada. </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black", textIndent:"15px" }}
              >
                <b>-  Pemangku Pemerintahan Desa Dalam Kurun Waktu Yang Ada:</b>
              </h3>
              <h3
                style={{ textAlign: "center", fontSize: "15px", color: "black", textIndent:"15px" }}
              >
                <b>-  KEPALA DESA / LURAH:</b>
              </h3>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>1. SONO KROMO / PALANG:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Kepala desa yang berasal dari desa Pandean sendiri. </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>2. SUPRAPTO:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Juga berasal dari desa Pandean sendiri. </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>3. KROMO SENTONO:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Juga berasal dari desa Pandean sendiri. </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>4. SADIMIN / SATIMAN:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Juga berasal dari desa Pandean sendiri. </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>5. JOYO ASMO:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Menjabat dari tahun 1929 s/d 1968
              Juga berasal dari desa Balonggebang.
               </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>6. SUPRAPTO ::</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Belum lama menjabat dipermasalahkan oleh masyarakat karena bukan penduduk Pandean masih penduduk desa Balonggebang Tahun 1970.
              Desa dalam keadaan rawan dan fakum pemerintahan, Kepala desa diisi oleh pihak keamanan : <b>ABRI ( Lurah Karteker)</b>. </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>7. SAJI:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Menjabat Dari Tahun 1972 S/D 1974 </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>8. SUGENG:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Menjabat Dari Tahun 1974 s/d 1977 </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>9. ABDUL SOMAD:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Menjabat Dari Tahun 1977 s/d 1982
              Keadaan sudah kembali stabil aman terkendali diadakan pemilihan kepala desa tahun 1982.
              . </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>10. SUKI  BASUKI:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Menjabat selama 8 Tahun :Tahun 1983 s/d 1991
              </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>11.  YANTO  SUWARSO:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Menjabat selama 8 Tahun :Tahun 1991 s/d 1999 </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>12. MIYADI:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Menjabat selama 8 Tahun :Tahun 1999 s/d 2008 </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>13. MIYADI:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Menjabat selama 8 Tahun :Tahun 2008 s/d 2013 </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>14. SUPRAPTO:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Menjabat selama 6 Tahun :Tahun 2013 s/d 2019 </p>

              <h3
                style={{ textAlign: "left", fontSize: "15px", color: "black" }}
              >
                <b>15. MIYADI:</b>
              </h3>
              <p style={{ color: "black", textAlign: "justify", textIndent:"15px" }}>
              Menjabat selama 6 Tahun :Tahun 2019 s/d 2025 
	            Menjabat saat ini sampai Pebruari 2025 </p>
               
            </CardBody>
          </Card>

          
        </div>
        
        <TransparentFooter />
      </div>
    </>
  );
}

export default SejarahPage;
