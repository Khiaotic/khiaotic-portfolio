import {Container, Row, Col} from "react-bootstrap"

export const ProjectCard = ({ title, description, imgURL, link}) => {
    return (
    <Col sm={6} md={4}>
        <div>
            <img src={imgURL} href={link}   />
            <div className="project-text">
<h4>{title}</h4>
<span>{description}</span>
            </div>
        </div>
    </Col>    
    )
}