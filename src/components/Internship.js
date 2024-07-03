import React from 'react';
import { Container } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import cyber from '../assets/img/cs.png'
import hackers from '../assets/img/h4u.png'
import karobar from '../assets/img/karo-intern.png'


export const Internship = () => {
    return (
        <section id="Internship">
            <Container>
                <div className='mt-4 d-flex justify-content-center'><h1>EXPERIENCE</h1></div>
                <div className='my-4'>
                    <VerticalTimeline lineColor={"black"}>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="June 2024 - July 2024"
                            contentStyle={{ background: '#282A3A', color: '#fff' }}
                            contentArrowStyle={{ borderRight: "7px solid #735F32" }}
                            iconStyle={{ background: " #781ACF", color: "#fff" }}
                            icon={<img src={karobar} alt="icon" style={{ width: '100%', borderRadius: '50%', padding: '5px' }} />}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title text-light mb-2">Flutter Developer Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle text-light small mt-2">
                                Karobar Ai - StartUp
                            </h4>



                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Jan 2024 - March 2024"
                            contentStyle={{ background: '#282A3A', color: '#fff' }}
                            contentArrowStyle={{ borderRight: "7px solid #735F32" }}
                            iconStyle={{ background: "#781ACF", color: "#fff" }}
                            icon={<img src={hackers} alt="icon" style={{ width: '100%', borderRadius: '50%', padding: '5px' }} />}

                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title text-light mb-2">PENETRATION TESTER INTERN</h3>
                            <h4 className="vertical-timeline-element-subtitle text-light small mt-2">
                                HackersForYou
                            </h4>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Oct 2022 - Aug 2023"
                            contentStyle={{ background: '#282A3A', color: '#fff' }}
                            contentArrowStyle={{ borderRight: "7px solid #735F32" }}
                            iconStyle={{ background: " #781ACF", color: "#fff" }}
                            icon={<img src={cyber} alt="icon" style={{ width: '100%', borderRadius: '50%', padding: '5px' }} />}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title text-light mb-2">VULNERABLITY ASSESMENT INTERN</h3>
                            <h4 className="vertical-timeline-element-subtitle text-light small mt-2">
                                CyberSapiens United LLP
                            </h4>

                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            iconStyle={{ background: "#781ACF", color: "#fff" }}
                        //    icon={<StarIcon />}
                        />
                    </VerticalTimeline>
                </div>

            </Container>
        </section>
    );
}
