import "./ContactPage.css";
import "../../components/UI/Button.css";
import Input from "../../components/UI/Input";
import TextArea from "../../components/UI/TextArea";
import Button from "../../components/UI/Button";

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Talk to us.</h1>
      <form className="contact-form">
        <Input
          label="First Name *"
          type="text"
          id="firstName"
          htmlFor="firstName"
          isRequired={true}
        />
        <Input label="Last Name" type="text" id="lastName" htmlFor="lastName" />
        <Input
          label="Email *"
          type="email"
          id="email"
          htmlFor="email"
          isRequired={true}
        />
        <Input label="Subject" type="text" id="subject" htmlFor="subject" />
        <TextArea
          label="Tell us what's on your mind!"
          id="message"
          htmlFor="message"
        />
        <div className="contact-button--container">
          <Button type="submit" text="CONTACT US" />
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
