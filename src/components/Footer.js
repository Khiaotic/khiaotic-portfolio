import { Container, Col, Row} from "react-bootstrap"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Col sm={6} className='text-center text-sm-end'>
                {/* <div className="social-icons">
                    <a href=""><img> src={''} </img></a>
                    <a href=""><img> src={''}</img></a>
                    <a href=""><img> src={''}</img></a>
                </div> */}
                <p>the website is currently still under construction...</p>
                <p>©2024 Khiaotic | Privacy Policy</p>
                </Col>
            </Container>
        </footer>
    )
}