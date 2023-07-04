import * as React from 'react';

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

import ExamplesNavbar from 'components/Navbars/ExamplesNavbar';
import TransparentFooter from 'components/Footers/TransparentFooter';

// img
import apbd from 'assets/img/APBD2022.png';
function ApbdPage() {
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
        <div className="page   clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/desapandean.jpg") + ")",
            }}
          ></div>
          <div className="content" style={{display:"flex", justifyContent:"center"}}>
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
                  APBD DESA 2022
                </h2>
                <img
            src={apbd}
            alt="apbd"
            class="img-fluid"
            style={{alignItems:"center", width:"100%"}}
          ></img>
              </CardBody>
            </Card>
          </div>
          <TransparentFooter />
        </div>
      </>
    );
  }

export default ApbdPage;