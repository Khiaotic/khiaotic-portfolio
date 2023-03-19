import { Container, Nav, Row, Col, Badge } from "react-bootstrap"

export const WebProjects = () => {
    const projects4Web = [
       {
        title: 'OnlyDevs',
        description: '',
        imgUrl: 'http://via.placeholder.com/160x160',
        link: 'https://onlydevs.herokuapp.com/'
       },
       {
        title: 'Ranker',
        description: '',
        imgUrl: 'http://via.placeholder.com/160x160',
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
        description: 'http://via.placeholder.com/160x160',
        imgUrl: 'https://khiaotic.github.io/KHIs_Password_Generator/'
       },
       {
        title: 'Social Media Backend',
        description: '',
        imgUrl: 'http://via.placeholder.com/160x160',
        link: 'https://github.com/Khiaotic/KhiaoticSocialMedia'
       },
       {
        title: 'E-Commerce BackEnd',
        description: '',
        imgUrl: 'http://via.placeholder.com/160x160',
        link: 'https://github.com/Khiaotic/AKhiaoticTeamProfileGenerator'
       },

    ]
    
    return (
<section>
    <Container>
        <Row>
            <Col>
            <h2>WebDev Projects</h2>
            <p>description</p>
            <Nav variant="pills" defaultActiveKey="/home"></Nav>
            <Nav.Item>
                <Nav.Link eventKey="tab1"></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="tab1"></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="tab1"></Nav.Link>
            </Nav.Item>
            </Col>

        </Row>
    </Container>
</section>
    )
}