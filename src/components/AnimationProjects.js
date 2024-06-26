import { Container, Nav, Row, Col, Tab, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import samplesPDf from "../images/projects/buisness.png"
import days from "../images/projects/endscreen.gif"
import stool from "../images/projects/stool.jpg"
import suburbs from "../images/projects/Screenshot 2023-04-08 235045.jpg"
import graphicDemo from "../images/projects/graphicdesign_img.png";
import OnlyDevs from "../images/projects/dummy_360x200_000000_defc83.svg";
import OnlyDev from "../images/projects/dummy_360x260_000000_defc83.svg";

export const AnimateProjects = () => {
  const projectsFeatured = [
   
    {
      title: "Samples PDF",
      description: " ",
      
      imgUrl: samplesPDf,
      link: "https://docs.google.com/presentation/d/1aLO9tk0kZwjgXMo6XTLo84bUBZfdHwx3P7hDJDKQP8U/edit?usp=sharing",
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
    
 ////////////////////////////////////

   
  ];

  const projectsPersonal = [
    {
        title: "Midnight Gospel Stool",
        description: "Hand-painted stool ",
        imgUrl: stool,
        link: "https://youtu.be/j671ucU-sKM?si=ZiJBxeVb1l1N0Wm9",
      },
    {
        title: "30 Days of Animation",
        description: " ",
        imgUrl: days,
        link: "https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator",
      },
    ];

  return (
    <section className="projectsAnimate" id="projectsAnimate">
      <Container>
        <Row>
          <Col className="section1" size={12}>
            
                <div className="pjDiv"
                  
                > 
                  <h2>Graphic Design Projects</h2>
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
                       <Row>
                          {
                          projectsPersonal.map((project, index) => {
                            return (
                            <ProjectCard key={index} {...project} />
                            )
                          })
                          }
                        </Row>
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
