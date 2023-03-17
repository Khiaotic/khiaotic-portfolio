
import {Container, Row, Col} from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export const WebSkills = () =>{
    /////responsiveness  for all around devices///////
    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      
      return (
          ///////template for future skills/////////
          <section className="skills" id='skills'>
<Container>
    <Row>
        <Col>
        <div className='skills-bx'>
            <h2>
                WebDev Skills
            </h2>
            <p>description</p>
            <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                <div>
                    <img src={'http://via.placeholder.com/360x360'} alt="Image"></img>
                </div>
                <h5>HTML</h5>
                <div>
                    <img src={''} alt="Image"></img>
                </div>
                <h5>JavaScript</h5>
                <div>
                    <img src={''} alt="Image"></img>
                </div>
                <h5>CSS</h5>
                <div>
                    <img src={''} alt="Image"></img>
                </div>
                <h5>State</h5>
                <div>
                    <img src={''} alt="Image"></img>
                </div>
                <h5>MySql</h5>
                <div>
                    <img src={''} alt="Image"></img>
                </div>
                <h5>MongoDB</h5>
                <div>
                    <img src={''} alt="Image"></img>
                </div>
                <h5>API</h5>
                <div>
                    <img src={''} alt="Image"></img>
                </div>
                <h5>Node.JS</h5>
                <div>
                    <img src={''} alt="Image"></img>
                </div>
                <h5>Express.JS</h5>
            </Carousel>
        </div>
        </Col>
    </Row>
</Container>
    </section>
)
}