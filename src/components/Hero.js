import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons';
import TrackVisibility from "react-on-screen";
import { useState, useeEffect} from "react";






//need to import header img//
export const Hero = () => {

    ////////////CONSTANTS//////////////////
    const period = 2000;
    const toRotate = [ "Animator", "Web Developer", "Graphic Designer" ]; 
    const [text, setText] = useState('');
    return (
        <section className="hero" id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                        <span className="tagline">Thanks for visiting my Portfolio</span>
                        <h1>{"Hej! Hej! I'm KHIAOTIC "}
                        <span className="text-rotation" dataPeriod="1000" data-rotate='["Animator", "Web Developer", "Graphic Designer"]'><span className="wrap">{text}</span></span>
                        </h1>
 
                        <span className="wrap">Graphic Designer and  Developer</span>
                        <p> Experienced in conceptualizing campaigns, company branding, and website visualization(UI/UX), with a passion for creating engaging and innovative animation projects.
</p>
                        <button><ArrowRightCircle/></button>
                        </div>}
                        </TrackVisibility>
                        
                    </Col>
                    <Col className="heroImg"xs={12} md={6} xl={5}>
                        <img src={require("../images/projects/resumeicon.png")} alt="placeholder"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}