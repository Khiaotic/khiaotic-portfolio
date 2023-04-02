import { Container, Nav, Row, Col, Tab, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


import OnlyDevs from "../images/dummy_360x200_000000_defc83.svg";
import OnlyDev from "../images/dummy_360x260_000000_defc83.svg";

export const AnimateProjects = () => {
  const projectsFeatured = [
    {
      title: "30 Days of Animation",
      description: " ",
      imgUrl: OnlyDevs,
      link: "https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator"
      ,
    },
    {
      title: "Graphic Demo Real",
      description: "",
      imgUrl: OnlyDevs,
      link: "https://youtu.be/NkAEZcminMk",
    },
    {
      title: "",
      description: " ",
      imgUrl: OnlyDevs,
      link: "",
    },
    {
      title: "",
      description: " ",
      imgUrl: OnlyDevs,
    },
    {
      title: "",
      description: "",
      imgUrl: OnlyDevs,
      link: "",
    },
    {
      title: "",
      description: "",
      imgUrl: OnlyDevs,
      link: "",
    },
  ];
  ////////////////////////////////////////////////
  const projectsBusiness = [
    {
      title: "Suburbs",
      description: "Animated music video for The Last Skeptik",
      imgUrl: OnlyDevs,
      link: "https://youtu.be/Uob4XmGYYoM",
    },
    {
      title: "",
      description: " ",
      imgUrl: OnlyDevs,
      link: "https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator"
      ,
    },
    {
      title: "Employee Profile Generator",
      description: "a team job title/profile generator ",
      imgUrl: OnlyDevs,
      link: "https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator",
    },
    {
      title: "Password Generator",
      description: "generates a random passwords ",
      imgUrl: OnlyDevs,
    },
    {
      title: "Social Media Backend",
      description: "a social media platform back-end",
      imgUrl: OnlyDevs,
      link: "https://github.com/Khiaotic/KhiaoticSocialMedia",
    },
    {
      title: "Ranker",
      description: " community rank VR games",
      imgUrl: OnlyDevs,
      link: "https://vrgranker.herokuapp.com/",
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
                  <p>multiple projects showing off my animation skills including illustration, graphic design, and more</p>
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
                        <p> whatever and ever</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p> whatever and ever</p>
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
