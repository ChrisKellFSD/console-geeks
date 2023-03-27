import React, { useState } from "react";
import logo_main from "../../assets/logo_main.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/ContactEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useAlert } from "react-alert";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

const ContactForm = () => {
    const [errors] = useState({});
    const history = useHistory();

    const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const { name, subject, message } = formData;

  const alert = useAlert();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosReq.post("/contact/", formData);
      console.log(response.data);
      alert.success("Message sent successfully!");
      history.push("/");
      setFormData({
        name: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the message.");
    }
  };


  const textFields = (
    <div>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                className="small-input"
            />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control
                type="text"
                name="subject"
                value={subject}
                onChange={handleChange}
                className="small-input"
            />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}

        <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
                as="textarea"
                rows={6}
                name="message"
                value={message}
                onChange={handleChange}
            />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
        ))}
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Send
        </Button>
    </div>
);


return (
    <Form onSubmit={handleSubmit}>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className={`${appStyles.Content} ${styles.Container}`}>
          <img className={`${styles.Logo}`} src={logo_main} alt="logo"/>
            <h2>Contact Us</h2>
            <p>
              Have a question about Console Geeks that you want answered? Get in
              touch now by filling in the contact form below and we will get back to
              you asap. Thank you
            </p>
            {textFields}
          </div>
        </Col>
      </Row>
    </Form>
  );
}  

export default ContactForm;
