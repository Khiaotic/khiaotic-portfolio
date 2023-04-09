import { Container, Nav, Row, Col, Tab, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import days from "../images/projects/endscreen.gif"
import suburbs from "../images/projects/Screenshot 2023-04-08 235045.jpg"
import graphicDemo from "../images/projects/graphicdesign_img.png";
import OnlyDevs from "../images/projects/dummy_360x200_000000_defc83.svg";
import OnlyDev from "../images/projects/dummy_360x260_000000_defc83.svg";

export const AnimateProjects = () => {
  const projectsFeatured = [
    {
      title: "30 Days of Animation",
      description: " ",
      imgUrl: days,
      link: "https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator"
      ,
    },
    {
      title: "Graphic Demo Real",
      description: "",
      imgUrl: graphicDemo,
      link: "https://youtu.be/NkAEZcminMk",
    },
    // {
    //   title: "",
    //   description: " ",
    //   imgUrl: OnlyDevs,
    //   link: "",
    // },
    // {
    //   title: "",
    //   description: " ",
    //   imgUrl: OnlyDevs,
    // },
    // {
    //   title: "",
    //   description: "",
    //   imgUrl: OnlyDevs,
    //   link: "",
    // },
    // {
    //   title: "",
    //   description: "",
    //   imgUrl: OnlyDevs,
    //   link: "",
    // },
  ];
  ////////////////////////////////////////////////
  const projectsBusiness = [
    {
      title: "Suburbs",
      description: "Animated music video for The Last Skeptik",
      imgUrl: suburbs,
      link: "https://youtu.be/Uob4XmGYYoM",
    },
    
 
   
   
  ];

  return (
    <section className="projectsAnimate" id="projectsAnimate">
      <Container>
        <Row>
          <Col className="section1" size={12}>
            
                <div className="pjDiv"
                  
                > 
                  <h2>Animation Projects</h2>
                  <p>multiple projects showing off my animation skills including illustration, 3D modeling, graphic design, and more</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                     id="pills-tab"
                    >

                    <Nav.Item>
                      <Nav.Link eventKey="first">Featured</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Business</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Personal</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <TabContent>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                          projectsFeatured.map((project, index) => {
                            return (
                            <ProjectCard key={index} {...project} />
                            )
                          })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                          projectsBusiness.map((project, index) => {
                            return (
                            <ProjectCard key={index} {...project} />
                            )
                          })
                          }
                        </Row>
                        
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p> nothing to see here</p>
                      </Tab.Pane>
                    </TabContent>
                  </Tab.Container>
                </div>
            
           
          </Col>
        </Row>
      </Container>
    </section>
  );
};
