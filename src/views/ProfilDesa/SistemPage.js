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

function SistemPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/desapandean.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Card
            style={{
              width: "95%",
              height: "90%",
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
              <p style={{ color: "black" }}>
                Menurut legenda yang ada di masyarakat bahwa pada jaman dahulu
                kala wilayah Desa Pacekelan adalah salah satu tempat pertempuran
                antara Prabu Baka dengan Raden Bandung Bandawasa. Pertempuran
                begitu sengit dan berhari-hari karena memang sama-sama saktinya,
                ketika pertempuran terjadi di daerah pegunungan Prabu Baka
                dipukul dengan batu kepalanya tetapi hanya rambutnya saja yang
                rontok sehingga kepalanya botak sehingga tepat itu dinamakan
                Gunung Butak dan merupakan salah satu pedusunan di Desa
                Pacekelan, pertempuran terus berlangsung bahkan sampai ditempat
                orang hajatan yang ada pertunjukan wayang, disitu tidak ada
                orang yang berani memisah bahkan pertunjukan jadi berantakan
                diterjang oleh sengitnya pertempuran. Kelir wayang terbang jauh
                sampai wilayah Kaligesing disana jatuh menjadi gunung dan
                dinamakan Gunung Kelir, kecreknya jatuh diwilayah Desa Plipir
                disebuah sumur dan dinamai Sumur Wayang, kempul jatuh diwilayah
                Dusun Cocolan dan menjadi gunung dinamai Gunung Kempul, pintu
                jatuh dihutan dengan fenomena menjadi batu dan dinamai Watu
                Lawang. Setelah lama akhirnya Prabu Baka tertangkap dalam bahasa
                jawa kecekel, tetapi dengan kesaktiannya bisa menghilang dalam
                bahasa jawa ilang, dari dua kata kecekel dan ilang sehingga
                tempat tersebut dinamai cekelang dan kerena perkembangan jaman
                menjadi Pacekelan. Setelah berhari-hari akhirnya Prabu Baka
                dapat dikalahkan, kepalanya dipukul dengan kesaktiannya Raden
                Bandung Bandawasa hingga pecah dan otaknya tercerai berai dan
                menjadi gunung kapur di Desa Brenggong dinamai Gunung Jambul
                karena bercampur batok kepala (jambul) dan sebagian lagi
                bercampur darah merah (abang) sehingga tampak kemerah-merahan
                orang jawa menyebutnya abang-abang sehingga daerah itu dikenal
                dengan nama awang-awang (dusun terletak di Desa Brenggong). Pada
                tahun 1825-1830 terjadi Perang Diponegoro, Desa Pacekelan
                termasuk sebagian Barisan Bukit Menoreh, yang menjadi pertahanan
                pasukan Diponegoro, terdapat peninggalan yang berbentuk gudang
                senjata dan orang menyebutnya beteng terletak di Dusun
                Bendungan. Sebagai juru kunci adalah Singoyudo dan setelah
                meninggal dimakamkan disekitar beteng. Konon salah satu senopati
                perangnya bernama Joyo Ngali (nama samara), setelah Pangeran
                Diponegoro ditangkap di Tegalrejo Magelang lalu kembali
                kewilayah Pacekelan dan memperistri anak angkat Singoyudo, dan
                berjuang bermasyarakat dan dijalan agama. Dalam perjuangannya
                menggunakan beberapa nama samaran dan menjadi cikal bakal
                disebagian wilayah Desa Pacekelan dan membangun kehidupan
                bermasyarakat serta mencari nafkah secara gotong-royong.
                Demikian sekelumit ringkasan Sejarah Desa Pacekelan, yang kami
                tulis berdasarkan keterangan dari para narasumber.
              </p>
            </CardBody>
          </Card>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default SistemPage;
