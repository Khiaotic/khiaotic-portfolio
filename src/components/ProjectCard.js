import { Container, Row, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col className="projectCard" size={12} sm={6} md={4}>
      <div className="project-imgbx">
        <img src={imgUrl} a href={link} />
          <h4>{title}</h4>
          <span>{description}</span>
        <div className="project-text">
        </div>
      </div>
    </Col>
  );
};
