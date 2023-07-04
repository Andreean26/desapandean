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

function DemografisPage() {
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
                GAMBARAN UMUM DEMOGRAFIS
              </h2>
              <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                Jumlah penduduk  2.420  orang, terdiri atas :
              </p>
              <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                laki-laki 	1.205 orang
              </p>
              <p
                style={{
                  color: "black",
                  textAlign: "justify",
                  textIndent: "15px",
                }}
              >
                perempuan	1.215 orang
              </p>
              <div className="section-story-overview" style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
              <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/demografis.png") + ")"
                    , height:'662px', width:'890px',  bottom:'200px'}}
                  >
                    
                  </div>
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/demografis1.png") + ")"
                    , height:'330px', width:'875px',  bottom:'300px', right:'50px' }}
                  >
                    
                  </div>
                  </div>
            </CardBody>
          </Card>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default DemografisPage;
