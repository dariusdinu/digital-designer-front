import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styling/Buttons.css";
import EditProjectForm from "../../components/EditProjectForm";
import Loading from "../../components/Loading";

function EditProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = () => {
    const updateData = {
      title: project.title,
      description: project.description,
      images: [],
      clientSiteLink: project.clientSiteLink,
      isShown: project.isShown,
      category: project.category,
    };

    console.log(updateData);

    fetch(`http://localhost:3000/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Update successful:", data);
        navigate("/admin"); // Redirect back to admin page after successful update
      })
      .catch((error) => console.error("Error updating the project:", error));
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      fetch(`http://localhost:3000/projects/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          console.log("Delete successful");
          navigate("/admin"); // Redirect back to the admin page after deletion
        })
        .catch((error) => console.error("Error deleting the project:", error));
    }
  };

  if (isLoading) return <Loading />;

  return (
    <EditProjectForm
      project={project}
      handleInputChange={handleInputChange}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />
  );
}

export default EditProjectPage;
