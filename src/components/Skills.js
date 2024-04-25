import React, { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import "./Skills.css";

export const Skills = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorX(e.pageX);
            setCursorY(e.pageY);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p className="skill-heading">Here's the showcase of my skills</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <div className="skill-box">
                                        <h5>Cyber Security</h5>
                                        <ul>
                                            <li>Web App Pentesting</li>
                                            <li>Social Engineering</li>
                                            <li>Vulnerablitty Assesment</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="skill-box">
                                        <h5>Mernstack </h5>
                                        <ul>
                                            <li> javascript</li>
                                            <li>Reactjs</li>
                                            <li>nodejs</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="skill-box">
                                        <h5>Mobile Application Development</h5>
                                        <ul>
                                            <li>Flutter</li>
                                            <li>FlutterFlow</li>
                                            <li>dart language</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="skill-box">
                                        <h5>ui/ux design</h5>
                                        <ul>
                                            <li>Figma</li>
                                            <li> Adobe XD</li>
                                            <li>Adobe Photoshop</li>
                                        </ul>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-cursor" style={{ top: cursorY + 'px', left: cursorX + 'px' }}></div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
};
