import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import sjceit from '../assets/img/sjce.png'
import campione from '../assets/img/campion.png'
import mimss from '../assets/img/mims.jpeg'

export const Education = () => {
    return (
        <div id="Education">


            <Container>
                <div className='mt-4 d-flex justify-content-center' ><h1>EDUCATION</h1></div>
                <div className='my-4'>

                    <VerticalTimeline lineColor={"black"}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2021-2025"
                            contentStyle={{ background: ' #781ACF', color: '#fff' }}
                            contentArrowStyle={{ borderRight: "7px solid #781ACF" }}
                            iconStyle={{ background: " #781ACF", color: "#fff" }}
                            icon={<img src={sjceit} alt="icon" style={{ width: '100%', borderRadius: '50%', padding: '5px' }} />}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title text-light">B.Tech - Information Technolog</h3>
                            <h4 className="vertical-timeline-element-subtitle text-light">
                                St. Joseph’s College of Engineering Technology.
                            </h4>
                            <p className='text-white-1000 fs-3'>• 7.89 CGPA
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2021"
                            contentStyle={{ background: ' #781ACF', color: '#fff' }}
                            contentArrowStyle={{ borderRight: "7px solid #781ACF" }}
                            iconStyle={{ background: " #781ACF", color: "#fff" }}
                            icon={<img src={campione} alt="icon" style={{ width: '100%', borderRadius: '50%', padding: '5px' }} />}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title text-light">Campion Anglo-Indian Higher Secondary School</h3>
                            <h4 className="vertical-timeline-element-subtitle text-light">
                                Trichy
                            </h4>
                            <p className='text-white-1000 fs-3'>• 89 percent</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2019"
                            contentStyle={{ background: ' #781ACF', color: '#fff' }}
                            contentArrowStyle={{ borderRight: "7px solid #781ACF" }}
                            iconStyle={{ background: " #781ACF", color: "#fff" }}
                            icon={<img src={mimss} alt="icon" style={{ width: '100%', borderRadius: '50%', padding: '5px' }} />}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title text-dark">Mary Immaculate Matriculation School</h3>
                            <h4 className="vertical-timeline-element-subtitle text-dark">
                                Alangudi
                            </h4>
                            <p className='text-white-1000 fs-3'>• 96 percent</p>
                        </VerticalTimelineElement>




                        <VerticalTimelineElement
                            iconStyle={{ background: "#781ACF", color: "#fff" }}
                        //    icon={<StarIcon />}
                        />
                    </VerticalTimeline>
                </div>
            </Container>
        </div>
    )
}