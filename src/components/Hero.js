import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons';
// import { useState, useeEffect} from "react";
//need to import header img//
export const Hero = () => {
    return (
        <section className="hero" id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"></span>
                        <h1>{"Hej Hej! I'm Khiaotic"}</h1>
                        <span className="wrap">Animator and Web Developer</span>
                        <p>about me about me about me about me</p>
                        <button><ArrowRightCircle/></button>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src=() alt="placeholder"/> */}
                    </Col>
                </Row>
            </Container>

        </section>
    )
}