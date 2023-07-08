import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
// import ModalImage from "react-modal-image";
import Apbd23 from "assets/img/APBD2023.jpg";
import berital1 from "assets/img/berital1.jpeg";
import berital2 from "assets/img/berital2.jpg";
import berital3 from "assets/img/berital3.jpg";
import berital4 from "assets/img/berital4.jpg";
import berital5 from "assets/img/berital5.jpg";
import berital6 from "assets/img/berital6.jpg";

// import Landing1 from "assets/img/landing1.png";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />

        <div className="section section-about-us">
          <Container>
            <h2 className="title" style={{textAlign:"center"}}>Selamat datang di website Desa Pandean </h2>
            
            <div className="separator separator-primary"></div>
            <Row>
              <Col>
                <div
                  className="section-story-overview"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Row>
                    <Col md="-6">
                      <div
                        className="image-container image-left"
                        style={{
                          backgroundImage:
                            "url(" + require("assets/img/landing1.jpg") + ")",
                          height: "300px",
                          width: "300px",
                        }}
                      ></div>
                    </Col>

                    <Col md="5">
                      <div
                        className="image-container image-right"
                        style={{
                          backgroundImage:
                            "url(" + require("assets/img/landing2.jpg") + ")",
                          height: "300px",
                          width: "300px",
                          marginTop: "100px",
                          marginLeft: "10px",
                        }}
                      ></div>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col>
              <div class="card" style={{ borderRadius: "10px" }}>
                  <div class="card-body">
                  <img
                          src={Apbd23}
                          alt="Apbd"
                          class="img-fluid"
                          style={{ width: "100%", height: "100%" }}
                        ></img>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <Row>
              <Col>
                <div
                  class="card"
                  style={{
                    borderRadius: "10px",
                    maxWidth: "500px",
                    maxHeight: "700px",
                    overflow: "auto",
                  }}
                >
                  <div class="card-body">
                    <h2 className="title">Berita Terkini</h2>
                    <ul class="list-unstyled">
                      <li class="media">
                        <img
                          src={berital1}
                          alt="Apbd"
                          class="img-fluid"
                          style={{ width: "50%", height: "20%" }}
                        ></img>
                        <div class="media-body">
                          <a
                            href="https://poskotajatim.co.id/2023/06/25/keseruan-workshop-ecoprint-oleh-mahasiswa-kkn-untuk-pelajar-sdn-1-padean-di-nganjuk/"
                            style={{ color: "black" }}
                          >
                            Keseruan Workshop Ecoprint oleh Mahasiswa KKN untuk
                            Pelajar SDN 1 Padean di Nganjuk
                          </a>
                          <p class="card-text">
                            <small class="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </li>
                      <li class="media my-4">
                        <img
                          src={berital2}
                          alt="Apbd"
                          class="img-fluid"
                          style={{ width: "50%", height: "20%" }}
                        ></img>
                        <div class="media-body">
                          <a
                            href="https://poskotajatim.co.id/2023/06/25/keseruan-workshop-ecoprint-oleh-mahasiswa-kkn-untuk-pelajar-sdn-1-padean-di-nganjuk/"
                            style={{ color: "black" }}
                          >
                            Mahasiswa KKNT Menggelar Bimbingan Belajar untuk
                            Para Pelajar SD di Pandean Nganjuk
                          </a>
                          <p class="card-text">
                            <small class="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </li>
                      <li class="media">
                        <img
                          src={berital3}
                          alt="Apbd"
                          class="img-fluid"
                          style={{ width: "50%", height: "20%" }}
                        ></img>
                        <div class="media-body">
                          <a
                            href="https://poskotajatim.co.id/2023/06/25/keseruan-workshop-ecoprint-oleh-mahasiswa-kkn-untuk-pelajar-sdn-1-padean-di-nganjuk/"
                            style={{ color: "black" }}
                          >
                            Begini Sosialisasi Perancangan Desa Wisata di
                            Pandean, Nganjuk oleh Mahasiswa KKNT
                          </a>
                          <p class="card-text">
                            <small class="text-muted">25/05/2023</small>
                          </p>
                        </div>
                      </li>
                      <li class="media my-4">
                        <img
                          src={berital4}
                          alt="Apbd"
                          class="img-fluid"
                          style={{ width: "50%", height: "20%" }}
                        ></img>
                        <div class="media-body">
                          <a
                            href="https://poskotajatim.co.id/2023/06/25/keseruan-workshop-ecoprint-oleh-mahasiswa-kkn-untuk-pelajar-sdn-1-padean-di-nganjuk/"
                            style={{ color: "black" }}
                          >
                            KKN Mahasiswa UPN Surabaya di Desa Pandean Ngajuk,
                            Membuat Program Khusus Petani Bawang Merah
                          </a>
                          <p class="card-text">
                            <small class="text-muted">22/03/2023</small>
                          </p>
                        </div>
                      </li>
                      <li class="media">
                        <img
                          src={berital5}
                          alt="Apbd"
                          class="img-fluid"
                          style={{ width: "50%", height: "20%" }}
                        ></img>
                        <div class="media-body">
                          <a
                            href="https://poskotajatim.co.id/2023/06/25/keseruan-workshop-ecoprint-oleh-mahasiswa-kkn-untuk-pelajar-sdn-1-padean-di-nganjuk/"
                            style={{ color: "black" }}
                          >
                            Metode Penyiraman Sprinkler Irrigation Menekan Biaya
                            Produksi Petani Bawang Merah Nganjuk
                          </a>
                          <p class="card-text">
                            <small class="text-muted">03/04/2023</small>
                          </p>
                        </div>
                      </li>
                      <li class="media my-4">
                        <img
                          src={berital6}
                          alt="Apbd"
                          class="img-fluid"
                          style={{ width: "50%", height: "20%" }}
                        ></img>
                        <div class="media-body">
                          <a
                            href="https://poskotajatim.co.id/2023/06/25/keseruan-workshop-ecoprint-oleh-mahasiswa-kkn-untuk-pelajar-sdn-1-padean-di-nganjuk/"
                            style={{ color: "black" }}
                          >
                            Kelompok Mahasiswa KKNT di Gondang Nganjuk, Gelar
                            Sosisalisasi Literasi Digital untuk Remaja
                          </a>
                          <p class="card-text">
                            <small class="text-muted">02/05/2023</small>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col>
                <div class="card" style={{ borderRadius: "10px" }}>
                  <div class="card-body">
                    <h2 className="title">NO Telepon Penting</h2>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Num</th>
                          <th scope="col">Nama</th>
                          <th scope="col">No Telpon</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Pak Muhib</td>
                          <td>0853-3503-9468</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Mas Arif</td>
                          <td>0852-3142-9420</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Bu Nuroin</td>
                          <td>0857-3656-1311</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
