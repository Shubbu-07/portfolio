import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import footerLogo from "../assets/img/mylogo.png";

export const Footer = () => {
  return (
    <footer className="footer d-flex align-items-center justify-content-center p-0">
      <Container style={{ margin: "1rem 0 1rem 0" }}>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <img src={footerLogo} style={{height: "2rem", width: "auto"}} alt="" />
          </Col>
          <Col size={12} sm={4}>
            <p className="text-center">&#169; 2024 All Rights Reserved</p>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shubham-mergu" target="_blank" rel="noopener noreferrer" >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.github.com/Shubbu-07" target="_blank" rel="noopener noreferrer" >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="####">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
