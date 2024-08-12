import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styling/Portfolio.css";

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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching projects: {error}</p>;

  return (
    <div className="portfolio">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} adminMode={true} />
      ))}
    </div>
  );
}

export default AdminPage;
