
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
                Developer Skills
            </h2>
            <p></p>
            <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                <div className="item">
                    <img src={require('../images/html-skill.png')} alt="Image"></img>
                <h5>HTML</h5>
                </div>
                <div className="item">
                    <img src={require('../images/javascript-skill.png')} alt="Image"></img>
                <h5>JavaScript</h5>
                </div>
                <div className="item">
                    <img src={require('../images/css-skill.png')} alt="Image"></img>
                <h5>CSS</h5>
                </div>
                <div className="item">
                    <img src={require('../images/useState-skill.png')} alt="Image"></img>
                <h5>State</h5>
                </div>
                <div className="item">
                    <img src={require('../images/sql2.png')} alt="Image"></img>
                <h5>MySql</h5>
                </div>
                <div className="item">
                    <img src={require('../images/mongodb-skill.png')} alt="Image"></img>
                <h5>MongoDB</h5>
                </div>
                <div className="item">
                    <img src={require('../images/api-skill.png')} alt="Image"></img>
                <h5>API</h5>
                </div>
                <div className="item">
                    <img src={require('../images/node-skill.png')} alt="Image"></img>
                <h5>Node.JS</h5>
                </div>
                <div className="item">
                    <img src={require('../images/express-skill.png')} alt="Image"></img>
                <h5>Express.JS</h5>
                </div>
            </Carousel>
        </div>
        </Col>
    </Row>
</Container>
{/* <img className="background-image-left" src={'http://via.placeholder.com/260x360'}></img> */}
    </section>
)
}