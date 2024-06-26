
import {Container, Row, Col} from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export const AnimationSkills = () =>{
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
                Graphic Design Skills
            </h2>
            <p></p>
            <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                <div className="item">
                    <img src={require('../images/skills/html-skill.png')} alt="Image"></img>
                <h5>Photoshop</h5>
                </div>
                <div className="item">
                    <img src={require('../images/skills/css-skill.png')} alt="Image"></img>
                <h5>Illustrator</h5>
                </div>
                <div className="item">
                    <img src={require('../images/skills/javascript-skill.png')} alt="Image"></img>
                <h5>Blender</h5>
                </div>
                <div className="item">
                    <img src={require('../images/skills/node-skill.png')} alt="Image"></img>
                <h5>Animate</h5>
                </div>
                <div className="item">
                    <img src={require('../images/skills/sql2.png')} alt="Image"></img>
                <h5>Unity</h5>
                </div>
                <div className="item">
                    <img src={require('../images/skills/css-skill.png')} alt="Image"></img>
                <h5>After Effects</h5>
                </div>
                <div className="item">
                    <img src={require('../images/skills/useState-skill.png')} alt="Image"></img>
                <h5>Maya</h5>
                </div>
                <div className="item">
                    <img src={require('../images/skills/javascript-skill.png')} alt="Image"></img>
                <h5>Procreate</h5>
                </div>
                <div className="item">
                    <img src={require('../images/skills/node-skill.png')} alt="Image"></img>
                <h5>Nomad</h5>
                </div>
                <div className="item">
                    <img src={require('../images/skills/sql2.png')} alt="Image"></img>
                <h5>InDesign</h5>
                </div>
                <div className="item">
                    <img src={require('../images/skills/express-skill.png')} alt="Image"></img>
                <h5>Premiere Pro</h5>
                </div>
            </Carousel>
        </div>
        </Col>
    </Row>
</Container>
    </section>
)
}