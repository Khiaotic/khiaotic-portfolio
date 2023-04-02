import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col size={12} sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                            <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                            <input type="tel" value={formDetails.phoneNumber} placeholder="Phone Number" onChange={(e) => onFormUpdate('phoneNumber', e.target.value)}/>
                        </Col>
                        <Col size={12} className="px-1">
                            <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                        <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                        {
                            status.message  &&
                            <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                        }
                    </Row>
                </form>
            </Col>
        </Row>
    </Container>
</section>
    )
}

