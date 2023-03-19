import { Container, Nav, Row, Col, Badge, Tab, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const WebProjects = () => {
    const projects = [
       {
        title: 'OnlyDevs',
        description: '',
        imgUrl: '../../assets/images/Untitled_Artwork.jpg',
        link: 'https://onlydevs.herokuapp.com/'
       },
       {
        title: 'Ranker',
        description: '',
        imgUrl: '',
        link: 'https://vrgranker.herokuapp.com/'
       },
       {
        title: 'Employee Profile Generator',
        description: '',
        imgUrl: '',
        link: 'https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator'
       },
       {
        title: 'Password Generator',
        description: '',
        imgUrl: 'https://khiaotic.github.io/KHIs_Password_Generator/'
       },
       {
        title: 'Social Media Backend',
        description: '',
        imgUrl: '',
        link: 'https://github.com/Khiaotic/KhiaoticSocialMedia'
       },
       {
        title: 'E-Commerce BackEnd',
        description: '',
        imgUrl: '',
        link: 'https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator'
       },

    ]
    
    return (
<section className="project" id="project">
    <Container>
        <Row>
            <Col>
            <h2>WebDev Projects</h2>
            <p>description</p>
            <Tab.Container id="projects4Web-tabs" defaultActiveKey="first">

            <Nav variant="pills" defaultActiveKey="/home"></Nav>
            <Nav.Item>
                <Nav.Link eventKey="tab1">Featured</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="tab1">Business</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="tab1">Personal</Nav.Link>
            </Nav.Item>
            <TabContent>
<Tab.Pane eventKey="first">
    <Row>
        {
        projects.map((project, index) => {
            return (
                <ProjectCard
                key={index}
                {...project}
                />
            )
            })
            }
    </Row>
</Tab.Pane>
            </TabContent>
            </Tab.Container>
            </Col>

        </Row>
    </Container>
</section>
    )
}