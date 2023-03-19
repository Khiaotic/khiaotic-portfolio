import { Container, Nav, Row, Col, Tab, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import TrackVisibility from "react-on-screen";
import OnlyDevs from "../images/dummy_360x200_000000_defc83.svg";
import OnlyDev from "../images/dummy_360x260_000000_defc83.svg";

export const Projects = () => {
  const projects = [
    {
      title: "OnlyDevs",
      description: "blah blah blah blah blah",
      imgUrl: OnlyDev,
      link: "https://onlydevs.herokuapp.com/",
    },
    {
      title: "Ranker",
      description: "",
      imgUrl: OnlyDevs,
      link: "https://vrgranker.herokuapp.com/",
    },
    {
      title: "Employee Profile Generator",
      description: "",
      imgUrl: OnlyDevs,
      link: "https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator",
    },
    {
      title: "Password Generator",
      description: "",
      imgUrl: OnlyDev,
    },
    {
      title: "Social Media Backend",
      description: "",
      imgUrl: OnlyDevs,
      link: "https://github.com/Khiaotic/KhiaoticSocialMedia",
    },
    {
      title: "E-Commerce BackEnd",
      description: "",
      imgUrl: OnlyDev,
      link: "https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col className="section1" size={12}>
            {/* <TrackVisibility>
              {({ isVisible }) => 
                <div
                  className={isVisible ? "animate_animated animate_fadeIn" : ""}
                > */}
                  <h2>WebDev Projects</h2>
                  <p>description</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-4 justify-content-center align-items-center"
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
                          projects.map((project, index) => {
                            return (
                            <ProjectCard key={index} {...project} />
                            )
                          })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p> whatever and ever</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p> whatever and ever</p>
                      </Tab.Pane>
                    </TabContent>
                  </Tab.Container>
                {/* </div>}
            
            </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
