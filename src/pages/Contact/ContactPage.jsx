import "./ContactPage.css";
import "../../components/UI/Button.css";
import Input from "../../components/UI/Input";
import TextArea from "../../components/UI/TextArea";
import Button from "../../components/UI/Button";
import { useState } from "react";

function ContactPage() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    email: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const errors = {
      firstName: formValues.firstName.trim() === "",
      email: formValues.email.trim() === "",
    };

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(true);
    } else {
      console.error("Form has errors");
    }
  };

  return (
    <div className="contact-page">
      <h1>Talk to us.</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <Input
          label="First Name *"
          type="text"
          id="firstName"
          name="firstName"
          isRequired={true}
          value={formValues.firstName}
          onChange={handleInputChange}
          hasError={formErrors.firstName}
        />
        <Input
          label="Last Name"
          type="text"
          id="lastName"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
        />
        <Input
          label="Email *"
          type="email"
          id="email"
          name="email"
          isRequired={true}
          value={formValues.email}
          onChange={handleInputChange}
          hasError={formErrors.email}
        />
        <Input
          label="Subject"
          type="text"
          id="subject"
          name="subject"
          value={formValues.subject}
          onChange={handleInputChange}
        />
        <TextArea
          label="Tell us what's on your mind!"
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
        />
        <div className="contact-button--container">
          <Button type="submit" text="CONTACT US" handler={handleSubmit} />
        </div>
      </form>
      {isSubmitted && (
        <p className="success-message">
          Your message has been sent successfully!
        </p>
      )}
    </div>
  );
}

export default ContactPage;
