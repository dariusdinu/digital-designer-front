import "../styling/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:hello@milahayes.com">hello@milahayes.com</a>
          <a href="/policies">Policies</a> {/* Link to the Policies Page */}
        </section>
        <div className="logo-container">
          <span className="logo-icon">MH</span>
          <span className="logo-name">@milahayes</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
