import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/she-wallet.jpg";
import projImg2 from "../assets/img/phistrap.jpg";
import projImg3 from "../assets/img/soc.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import "./Projects.css";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "She-wallet",
            description: "SheWallet: is a digital platform empowering women with accessible financial services. Using blockchain for security, it fosters a supportive community for learning and connection. SheWallet democratizes financial access, promoting independence and prosperity for women. Through transparency and education, it breaks barriers to economic empowerment,also used the Razorpay payment gateway.",
            imgUrl: projImg1,
        },
        {
            title: "Phistrap",
            description: "PhishTrap: Your all-in-one solution for comprehensive email, call, and message monitoring. Utilizing cutting-edge machine learning and APIs, PhishTrap detects phishing attempts in real-time, alerting users and automatically blocking malicious URLs for enhanced security and peace of mind.",
            imgUrl: projImg2,
        },
        {
            title: "Soc-Application",
            description: "Soc-Application: Transform incident response with our research- driven fusion of SOAR and the ELK Stack.Leveraging Elasticsearch, Logstash, and Kibana alongside Velociraptor automation, we accelerate threat detection and remediation.Empower SOC analysts, streamline workflows, and cut response costs with automated processes.Say farewell to manual labor and welcome a new era of efficient, effective security operations.",
            imgUrl: projImg3,
        },
    ];

    const cursorStyle = {
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundColor: 'transparent',
        border: '2px solid #4caf50',
        borderRadius: '50%',
        zIndex: '9999',
        pointerEvents: 'none',
        transition: 'border-color 0.3s ease',
    };

    // Track mouse movement to update cursor position
    const handleMouseMove = (e) => {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.top = e.pageY + 'px';
        cursor.style.left = e.pageX + 'px';
    };

    return (
        <section className="project" id="projects" onMouseMove={handleMouseMove}>

            <Container>

                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="d-flex justify-content-center" > <h2 className="skill-heading">Projects</h2> </div>
                                    <p>The following projects provide actual samples of my work that highlight my abilities and experience. Every project has a brief description, links to live demos, and code repositories. It displays my aptitude for handling challenging issues, utilizing a variety of technologies, and successfully managing projects.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* Render custom cursor */}
            <div id="custom-cursor" style={cursorStyle}></div>
            <img className="background-image-right" src={colorSharp2} alt="Background Image"></img>
        </section>
    )
}
