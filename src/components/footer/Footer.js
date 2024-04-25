import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footers = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">

                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <h1 style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>   Portfolio</h1>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/maria-daniel-s-106360234/"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/triCKY05"><img src={navIcon2} alt="" /></a>
                            <a href="https://wa.me/8531864229"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}