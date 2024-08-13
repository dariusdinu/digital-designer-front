import { useState, useEffect } from "react";
import "../../components/project/Portfolio.css";
import Loading from "../../components/UI/Loading";
import NavBar from "../../components/layout/NavBar";
import Portfolio from "../../components/project/Portfolio";

function PortfolioPage() {
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
  }, [selectedCategory, allProjects]);

  if (isLoading) return <Loading />;
  if (error) return <p>Error fetching projects: {error}</p>;

  return (
    <>
      <NavBar
        onSelectCategory={(category) =>
          setSelectedCategory(category.replace(/\s+/g, "").toLowerCase())
        }
      />
      <Portfolio projects={filteredProjects} />
    </>
  );
}

export default PortfolioPage;
