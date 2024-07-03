import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/she-wallet.jpg";
import projImg2 from "../assets/img/phistrap.png";
import projImg3 from "../assets/img/soc.png";
import projImg4 from "../assets/img/homies.jpg";
import pjsy from "../assets/img/pjsym.png";
import karoba from "../assets/img/karobar.png";
import jest from "../assets/img/tiles.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import task from "../assets/img/Task.png";
import juice from "../assets/img/juice.png";
import 'animate.css';
import "./Projects.css";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const hobbyProjects = [

        {
            title: "Homies",
            description: "Homies is a streamlined Flutter app for household management. It features a login system for uploading cleaning details with photos, tracks petrol expenses, and includes a notification page for user messages. Built with Flutter and Firebase.",
            imgUrl: projImg4,
            link: "https://github.com/Daniel15maria/homies"
        },
        {
            title: "Task Manager",
            description: "The Task Management Application simplifies task organization with a user-friendly interface built on React and Bootstrap. Its backend leverages MongoDB for robust data management, enhancing productivity for both personal and professional use.",
            imgUrl: task,
            link: "https://daniel15maria.github.io/Todo/"
        },
        {
            title: "Billing App",
            description: "A mobile application to show items and proceess to Billing",
            imgUrl: juice,
            link: "https://github.com/Daniel15maria/juice_point"
        },
    ];

    const hackathonProjects = [
        {
            title: "Phistrap",
            description: "PhishTrap is your ultimate solution for monitoring emails, calls, and messages. This mobile app uses machine learning and APIs to detect phishing attempts instantly. It alerts users and blocks malicious URLs automatically, ensuring enhanced security and peace of mind.",
            imgUrl: projImg2,
            link: "https://github.com/Daniel15maria/phistrap-1"
        },
        {
            title: "Soc-Application",
            description: "Introducing Soc-Application: Revolutionize incident response with our fusion of SOAR and the ELK Stack. Using Elasticsearch, Logstash, and Kibana, alongside Velociraptor automation, we accelerate threat detection and remediation. Empower SOC analysts, streamline workflows, and reduce response costs with automated processes. Embrace efficient, effective security operations with advanced technology integration.",
            imgUrl: projImg3,
            link: "https://github.com/Daniel15maria/Soc-application"
        },
        {
            title: "She-wallet",
            description: "A mobile application to digitalize the Co-opeartive Society,which is run be government to empower womens",
            imgUrl: projImg1,
            link: "https://github.com/Daniel15maria/she-wallet"
        },
    ];

    const freelanceProjects = [
        {
            title: "PJSYM",
            description: "Donation website patna-jesuit Youth Ministry",
            imgUrl: pjsy,
            link: "https://pjsym.org"
        },
        {
            title: "Jes-Tiles",
            description: "Website for Tiles-Company",
            imgUrl: jest,
            link: "https://jes-tiles.onrender.com/"
        },
        {
            title: "KarobarAI",
            description: "A mobile application for a startup in IITM",
            imgUrl: karoba,
            link: "https://jes-tiles.onrender.com/"
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
                                    <div className="d-flex justify-content-center">
                                        <h2 className="skill-heading">Projects</h2>
                                    </div>
                                    <p>The following projects provide actual samples of my work that highlight my abilities and experience. Every project has a brief description, links to live demos, and code repositories. It displays my aptitude for handling challenging issues, utilizing a variety of technologies, and successfully managing projects.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="justify-content-center">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Hobby Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Hackathons Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Freelance Projects</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row className="mt-4">
                                                    {
                                                        hobbyProjects.map((project, index) => {
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
                                            <Tab.Pane eventKey="second">
                                                <Row className="mt-4">
                                                    {
                                                        hackathonProjects.map((project, index) => {
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
                                            <Tab.Pane eventKey="third">
                                                <Row className="mt-4">
                                                    {
                                                        freelanceProjects.map((project, index) => {
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
            <div id="custom-cursor" style={cursorStyle}></div>
            <img className="background-image-right" src={colorSharp2} alt="Background Image"></img>
        </section>
    );
};
