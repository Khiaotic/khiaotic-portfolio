import { Container, Row, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col className="projectCard" size={12} sm={6} md={4}>
        <a href={link}>
      <div className="project-imgBox">
         <img src={imgUrl}/>
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
        </a>
      
    </Col>
  );
};
