import ProjectCard from "./ProjectCard";

function Portfolio({ projects, adminMode }) {
  return (
    <div className="portfolio">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          adminMode={adminMode}
        />
      ))}
    </div>
  );
}

export default Portfolio;
