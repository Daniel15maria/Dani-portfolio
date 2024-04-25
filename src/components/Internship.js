import React from 'react';
import { Container } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Internship = () => {
    return (
        <section id="Internship">
            <Container>
                <div className='mt-4 d-flex justify-content-center'><h1>EXPERIENCE</h1></div>
                <div className='my-4'>
                    <VerticalTimeline lineColor={"black"}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Jan 2024 - March 2024"
                            contentStyle={{ background: '#282A3A', color: '#fff' }}
                            contentArrowStyle={{ borderRight: "7px solid #735F32" }}
                            iconStyle={{ background: "#781ACF", color: "#fff" }}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title text-light">PENETRATION TESTER INTERN</h3>
                            <h4 className="vertical-timeline-element-subtitle text-light">
                                HackersForYou
                            </h4>
                            <p className='text-white-1000 fs-3'>• Web App Penetration testing <br />
                                • Report creating</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Oct 2022 - Aug 2023"
                            contentStyle={{ background: '#282A3A', color: '#fff' }}
                            contentArrowStyle={{ borderRight: "7px solid #735F32" }}
                            iconStyle={{ background: " #781ACF", color: "#fff" }}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title text-light">VULNERABLITY ASSESMENT INTERN</h3>
                            <h4 className="vertical-timeline-element-subtitle text-light">
                                CyberSapiens United LLP
                            </h4>
                            <p className='text-white-1000 fs-3'>• Red Team projects and worked on finding potential threats <br />
                                • Securing organisation’s websites</p>
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

