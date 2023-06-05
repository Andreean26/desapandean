import React from "react";

// reactstrap components
import {
 
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import julie from "assets/img/julie.jpg";

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
      <Navbar className={"fixed-top " + navbarColor} style={{ backgroundColor: 'rgb(170, 203, 115)' }}  expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <img src={julie} alt="logodesa"></img>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Dropdown header
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Separated link
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                One more separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href="/LandingPage"
              id="navbar-brand"
              style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
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

          {/* dropdown1 */}
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
              style={{ backgroundColor: "transparent", color: "white", fontWeight: "bold", fontSize: "15px" }}
            >
              PROFIL DESA
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem href="/Sejarah-page" >
                Sejarah desa
              </DropdownItem>
              <DropdownItem href="/Sistem-page">
                Sistem pemerintahan
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Visi dan misi
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Struktur organisasi
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Kondisi umum desa
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Proyek desa
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Potensi desa
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
              style={{ backgroundColor: "transparent", color: "white", fontWeight: "bold", fontSize: "15px" }}
            >
              ANGGARA DESA
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
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
              style={{ backgroundColor: "transparent", color: "white", fontWeight: "bold", fontSize: "15px" }}
            >
              DATA DESA
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
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
              style={{ backgroundColor: "transparent", color: "white", fontWeight: "bold", fontSize: "15px" }}
            >
              PELAYANAN
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
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
              style={{ backgroundColor: "transparent", color: "white", fontWeight: "bold", fontSize: "15px" }}
            >
              REGULASI
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          {/* dropdown6 */}
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
              style={{ backgroundColor: "transparent", color: "white", fontWeight: "bold", fontSize: "15px" }}
            >
              BUMDES
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
