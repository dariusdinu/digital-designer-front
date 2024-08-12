import "../styling/ContactPage.css";
import "../styling/Buttons.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Talk to us.</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Tell us what&apos;s on your mind!</label>
          <textarea id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="button">
          CONTACT US
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
