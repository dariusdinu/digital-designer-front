import { useState, useEffect } from "react";
import "../styling/Portfolio.css";
import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";

function Portfolio() {
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAllProjects(data);
        setFilteredProjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? allProjects
        : allProjects.filter(
            (project) => project.category.toLowerCase() === selectedCategory
          );

    setFilteredProjects(filtered);
  }, [selectedCategory, allProjects]); // Rerun this effect if selectedCategory or allProjects changes

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching projects: {error}</p>;

  return (
    <>
      <NavBar
        onSelectCategory={(category) =>
          setSelectedCategory(category.replace(/\s+/g, "").toLowerCase())
        }
      />
      <div className="portfolio">
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
