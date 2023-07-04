import * as React from "react";

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

function GeografiPage() {
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
        <div
          className="content"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            style={{
              width: "95%",
              height: "90%",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              marginTop: "150px",
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
                KONDISI GEOGRAFIS
              </h2>
              <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                Desa Pandean merupakan salah satu desa di wilayah Kecamatan
                Gondang Kabupaten Nganjuk, yang berada pada ketinggian 598 meter
                di atas permukaan laut. Luas wilayah 289,06 Ha,dengan
                peruntukkan sebagai berikut:
              </p>

              <div
                className="section-story-overview"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  className="image-container image-right"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/geografi1.png") + ")",
                    height: "383px",
                    width: "867px",
                    bottom: "200px",
                  }}
                ></div>
              </div>
              <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                Batas wilayah administrasi pemerintahan Desa Pandean adalah :
              </p>
              <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                - Sebelah utara berbatasan dengan Desa Gondang Kulon
              </p>
              <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                - Sebelah timur berbatasan dengan Desa Balonggebang
              </p>
              <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                - Sebelah selatan berbatasan dengan Desa Nglinggo
              </p>
              <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                - Sebelah barat berbatasan dengan Desa Gondangkulon
              </p>
            </CardBody>
          </Card>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default GeografiPage;
