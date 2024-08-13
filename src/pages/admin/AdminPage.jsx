import { useState, useEffect } from "react";
import "../../styling/Portfolio.css";
import "../../styling/Buttons.css";
import Portfolio from "../../components/Portfolio";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

function AdminPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <p>Error fetching projects: {error}</p>;

  return (
    <>
      <div className="button-center-container">
        <Link to="/admin/add" className="button">
          + Add Project
        </Link>
      </div>

      <Portfolio projects={projects} adminMode={true} />
    </>
  );
}

export default AdminPage;
