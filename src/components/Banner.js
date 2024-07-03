import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/home-main.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import styles from "./banner.css"; // Import CSS Module for Banner component

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Web Developer", "PenTester", "UI/UX Designer"];
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        // Event listeners for cursor
        const cursor = document.querySelector('.cursor');

        const handleMouseMove = (e) => {
            cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
        };

        const handleClick = () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        return () => {
            clearInterval(ticker);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    const handleConnectClick = () => {
        console.log('Connect button clicked');
        // Add your connect functionality here
    };


    return (

        <section className={`${styles.banner} banner `} id="home" >
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>
                                        <span>This is Daniel</span>
                                        <br />
                                        <span className="smaller-text">And I am a</span>{" "}
                                        <span className={`highlighted-text ${styles['custom-cursor']}`}>
                                            <span className="txt-rotate" dataPeriod="30" data-rotate='[ "Web Developer", "PenTester", "UI/UX Designer" ]'>
                                                <span className="wrap">{text}</span>
                                            </span>
                                        </span>
                                    </h1>
                                    <p>An passionate, self-motivated individual with strong skills in web development, penetration testing, Vulnerability Assessment, and some knowledge in networking, as well as a curious cat who enjoys learning new things.</p>
                                    <button onClick={handleConnectClick}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <div className="cursor"></div>
        </section >
    )
}
