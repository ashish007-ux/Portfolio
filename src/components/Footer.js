import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/AP.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/gbicon2.png';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
  
          <Col size={12} sm={6}>
            <img  src={logo}  alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ashish-puraviya-718b081b8"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ashish007-ux"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/ashishpuraviya"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Ap©2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
