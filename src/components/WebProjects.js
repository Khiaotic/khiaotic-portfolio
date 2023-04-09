import { Container, Nav, Row, Col, Tab, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


import OnlyDevs from "../images/dummy_360x200_000000_defc83.svg";
import OnlyDev from "../images/dummy_360x260_000000_defc83.svg";

export const Projects = () => {
  const projects = [
    // {
    //   title: "OnlyDevs",
    //   description: " Devs  looking to collaborate!",
    //   imgUrl: OnlyDevs,
    //   link: "https://onlydevs.herokuapp.com/",
    // },
    {
      title: "PawSafe",
      description: "pet medication scheduler ",
      imgUrl: OnlyDevs,
      link: "https://mrjakeschultz.github.io/project-mayhem/index.html"
      ,
    },
    {
      title: "E-Commerce BackEnd",
      description: "back end e-commerce site ",
      imgUrl: OnlyDevs,
      link: "https://github.com/Khiaotic/Khiaotic-E-commerce-Back-End"
      ,
    },
    {
      title: "Employee Profile Generator",
      description: "a job title/profile generator ",
      imgUrl: OnlyDevs,
      link: "https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator",
    },
    {
      title: "Password Generator",
      description: "generates a random password ",
      imgUrl: OnlyDevs,
    },
    {
      title: "Social Media Backend",
      description: "a social media platform back-end",
      imgUrl: OnlyDevs,
      link: "https://github.com/Khiaotic/KhiaoticSocialMedia",
    },
    // {
    //   title: "Ranker",
    //   description: " community rank VR games",
    //   imgUrl: OnlyDevs,
    //   link: "https://vrgranker.herokuapp.com/",
    // },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col className="section1" size={12}>
            
                <div className="pjDiv"
                  
                > 
                  <h2>Dev Projects</h2>
                  {/* <p>description</p> */}
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
                          projects.map((project, index) => {
                            return (
                            <ProjectCard key={index} {...project} />
                            )
                          })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p> nothing to see here</p>
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
