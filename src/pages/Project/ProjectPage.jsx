import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";
import Loading from "../../components/UI/Loading";

function ProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error loading the project:", error));
  }, [id]);

  if (isLoading) return <Loading />;
  if (!project) return <div>No project found!</div>;

  return (
    <div className="project-page">
      <img
        src={project.images}
        alt={project.title}
        className="project-image-p"
      />
      <section className="project-info">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{project.description}</p>
        <span className="project-client"> Client - </span>
        <a href={project.clientSiteLink} className="project-client-link">
          {project.clientSiteLink}
        </a>
      </section>
    </div>
  );
}

export default ProjectPage;
