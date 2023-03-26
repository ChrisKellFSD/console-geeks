import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosReq.post("/contact/", formData);
      console.log(response.data);
      alert("Message sent successfully!");
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
    <div className="text-center">
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
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
        <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                <Container
                    className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                >
                    <div className="d-md-none">{textFields}</div>
                </Container>
            </Col>
            <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                <Container className={appStyles.Content}>{textFields}</Container>
            </Col>
        </Row>
    </Form>
);
}

export default ContactForm;
