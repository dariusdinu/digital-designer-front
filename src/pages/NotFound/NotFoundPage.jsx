import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import "../../components/UI/Button.css";

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>The page you are looking for does not exist</p>
      <div className="btn-container">
        <Link to="/" className="button">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
