import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "./ProjectCard.css";

function ProjectCard({ project, adminMode = false }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (adminMode) {
      navigate(`/admin/edit/${project._id}`);
    } else {
      navigate(`/projects/${project._id}`);
    }
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <LazyLoad offset={100} once>
        <img
          src={project.images || "/test-image.jpg"}
          alt={`Project ${project.title}`}
          className="project-image"
        />
      </LazyLoad>
    </div>
  );
}

export default ProjectCard;
