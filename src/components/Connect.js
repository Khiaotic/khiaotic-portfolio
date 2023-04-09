import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Connect = () => {
    const formInitDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    }

    const [ formDetails, setFormDetails] = useState(formInitDetails)
    const [ buttonText, setButtonText] = useState('Send')
    const [ status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4hjg6h8', 'template_pj6h7yu', form.current, '9NakTyaqzcRl9N9V8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
        };
              const handleSubmit = async (e) => {
              e.preventDefault();
              setButtonText("Sending...");
              let response = await fetch("https://localhost:5000/connect", {
                      method: "POST",
                      headers: {
                              "Content-Type":  "application/json;charset=utf-8"
                          },
                          body: JSON.stringify(formDetails),
                      });
                      setButtonText("Send");
                      let result = await response.json();
                      setFormDetails(formInitDetails);
                      if (result.code == 200) {
                              setStatus({ success: true, message: "You're message has been sent!✨ We'll be in touch.✨"})
                          } else {
                                  setStatus({ success: false, message: 'An error had occurred, please try again. 🥹'})
                              }
                                  }

    return (
<section className="contact" id='connect'>
    <Container>
        <Row className="align-items-center">
            <Col md={6}>
                <img src={''}/>
            </Col>
            <Col md={6}>
                <h2>Let's Connect</h2>
                {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
                
                <form ref={form} onSubmit={sendEmail}>
                    <Row>
                        <Col size={12} sm={6} className="px-1">
                            <input type="text" 
                            name="firstName"
                            value={formDetails.firstName} 
                            placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                            <input type="text" 
                            name="lastName"
                            value={formDetails.lastName} 
                            placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                            <input type="email" 
                            name="email"
                            value={formDetails.email} 
                            placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                            <input type="tel" 
                            name="phoneNumber"
                            value={formDetails.phoneNumber} 
                            placeholder="Phone Number" onChange={(e) => onFormUpdate('phoneNumber', e.target.value)}/>
                        </Col>
                        <Col size={12} className="px-1">
                            <textarea rows="6" 
                            name="message"
                            value={formDetails.message} 
                            placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                        <button type="submit" onClick={handleSubmit}><span>{buttonText}</span></button>
                        </Col>
                        {
                            status.message  &&
                            <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                        }
                    </Row>
                </form>
                <p>Check your DevTools to see if it sent....💀</p>
            </Col>
        </Row>
    </Container>
</section>
    )
}

