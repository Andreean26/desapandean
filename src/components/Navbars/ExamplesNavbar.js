import React from "react";

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import logodesa from "assets/img/logodesa.png";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top " + navbarColor}
        expand="lg"
        style={{ backgroundColor: "rgb(170, 203, 115)" }}
      >
        <Container>
          <div
            className="navbar-translate"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <img
              src={logodesa}
              alt="logodesa"
              class="img-fluid"
              style={{ width: "90px", height: "90px" }}
            ></img>
            <NavbarBrand
              href="/LandingPage"
              target="_blank"
              id="navbar-brand"
              style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
            >
              Desa pandean
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Tekan untuk ke halaman utama
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {/* dropdown1 */}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="secondary"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuLink"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  PROFIL DESA
                </DropdownToggle>
                <DropdownMenu aria-labelledby="dropdownMenuLink">
                  <DropdownItem href="/Sejarah-page">Sejarah Desa</DropdownItem>

                  <DropdownItem href="/Struktur-page">
                    Struktur Organisasi Desa
                  </DropdownItem>

                  <DropdownItem href="/Lembaga-page">Lembaga Desa</DropdownItem>

                  <DropdownItem href="/Geografis-page">
                    Kondisi Geografis Desa
                  </DropdownItem>

                  <DropdownItem href="/Demografis-page">
                    Kondisi Demografis Desa
                  </DropdownItem>

                  <DropdownItem href="/Ekonomi-page">
                    Kondisi Ekonomi Desa
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* dropdown 2 */}
              <UncontrolledDropdown>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="secondary"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuLink"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  ANGGARAN DESA
                </DropdownToggle>
                <DropdownMenu aria-labelledby="dropdownMenuLink">
                  <DropdownItem href="/Apbd-page">APBD Desa</DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Perencanaan Anggaran
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* dropdown3 */}
              <UncontrolledDropdown>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="secondary"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuLink"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  INFORMASI PUBLIK
                </DropdownToggle>
                <DropdownMenu aria-labelledby="dropdownMenuLink">
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Agenda Kegiatan
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Galeri
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Berita desa
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Sarana dan Prasarana
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* dropdown4 */}
              <UncontrolledDropdown>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="secondary"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuLink"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  INVENTARIS DESA
                </DropdownToggle>
                <DropdownMenu aria-labelledby="dropdownMenuLink">
                  <DropdownItem
                    href="/InventarisTanah-page"
                    
                  >
                    Inventaris Tanah
                  </DropdownItem>
                  <DropdownItem
                    href="/InventarisKendaraan-page"
                    
                  >
                    Inventaris Kendaraan
                  </DropdownItem>
                  <DropdownItem
                    href="/InventarisPeralatan-page"
                    
                  >
                    Inventaris Peralatan dan Mesin
                  </DropdownItem>
                  <DropdownItem
                    href="/InventarisBangunan-page"
                   
                  >
                    Inventaris Bangunan
                  </DropdownItem>
                  <DropdownItem
                    href="/InventarisJalan-page"
                   
                  >
                    Inventaris Jalan dan Jaringan
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* dropdown5 */}
              <UncontrolledDropdown>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="secondary"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuLink"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  DESTINASI WISATA
                </DropdownToggle>
                <DropdownMenu aria-labelledby="dropdownMenuLink">
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Potensi Desa
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
