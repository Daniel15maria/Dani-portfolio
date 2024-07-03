import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx" style={{ border: "4px solid white", padding: "0px", borderRadius: "20px" }}>
                <img
                    style={{ height: "300px" }} // Set the desired height inline
                    className="img-fluid proj-img"
                    src={imgUrl}
                    alt={title}
                />
                <div className="proj-txtx">
                    <h4>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-light">
                            {title} <span style={{ marginLeft: "5px" }}>→</span>
                        </a>
                    </h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};
