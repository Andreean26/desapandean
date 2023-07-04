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

function StrukturPage() {
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
      <div className="page clear-filter" filter-color="blue">
        <div
          className="page-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/desapandean.jpg") + ")",
          }}
        ></div>
        <div className="content" style={{display:"flex", justifyContent:"center"}}>
          <Card
            style={{
              width: "95%",
              height: "90%",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              marginTop:"150px",
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
                ORGANISASI PEMERINTAHAN DESA
              </h2>
              <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                Berdasarkan Peraturan Desa Nomor 03 Tahun 2017 tentang Susunan
                Organisasi dan Tata Kerja Pemerintah Desa Pandean, kelembagaan
                Pemerintah Desa Pandean terdiri dari:
              </p>
              <div className="section-story-overview" style={{display:"flex", justifyContent:"center"}}>
              <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/organisasi.png") + ")"
                    , height:'599px', width:'843px',  bottom:'200px'}}
                  >
                    
                  </div>
                  </div>
                  <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                Bagan susunan organisasi Pemerintah Desa dan data aparatur Pemerintah Desa Pandean Keadaan per tanggal 2 Januari 2022 secara lengkap sebagaimana terlampir.
              </p>
            </CardBody>
          </Card>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default StrukturPage;
