import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img
                    style={{ height: "325px" }} // Set the desired height inline
                    className="img-fluid proj-img"
                    src={imgUrl}
                    alt={title}
                />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
