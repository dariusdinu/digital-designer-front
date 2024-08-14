import { useState, useEffect } from "react";
import "../../components/project/Portfolio.css";
import "../../components/UI/Button.css";
import { Link } from "react-router-dom";
import Loading from "../../components/UI/Loading";
import Portfolio from "../../components/project/Portfolio";
import Error from "../../components/UI/Error";

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
  if (error)
    return <Error message="Error: Cannot get projects from the database" />;

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
