import { Container, Col, Row} from "react-bootstrap"

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Col sm={6} className='text-center text-sm-end'>
                {/* <div className="social-icons">
                    <a href=""><img> src={''} </img></a>
                    <a href=""><img> src={''}</img></a>
                    <a href=""><img> src={''}</img></a>
                </div> */}
                <p>CopyRight CopyRight Footer Footer</p>
                </Col>
            </Container>
        </footer>
    )
}