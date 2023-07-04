/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="#LandingPageHeader"
                  target="_blank"
                >
                  Desa Pandean
                </a>
              </li>
              <li>
                <a
                >
                  Nganjuk
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, KKN-UPNVJT
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
            >
              andreean
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
