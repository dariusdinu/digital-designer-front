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

  const handleImageChange = (file) => {
    setProject((prev) => ({
      ...prev,
      images: [file],
    }));
  };

  const uploadImageAndGetUrl = async (file, projectId) => {
    const formData = new FormData();
    formData.append("images", file);

    const response = await fetch(
      `http://localhost:3000/projects/${projectId}/images`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Image upload failed with status: " + response.status);
    }

    const data = await response.json();
    console.log("Uploaded Image Response:", data);

    if (!data.images || data.images.length === 0) {
      throw new Error("No images URL found in the response");
    }

    return data.images[1];
  };

  const handleUpdate = async () => {
    try {
      let imageUrl = project.images[0];

      if (project.images[0] instanceof File) {
        imageUrl = await uploadImageAndGetUrl(project.images[0], id);
      }

      const updateData = {
        title: project.title,
        description: project.description,
        images: [imageUrl],
        clientSiteLink: project.clientSiteLink,
        isShown: project.isShown,
        category: project.category,
      };

      const response = await fetch(`http://localhost:3000/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Update successful:", data);

      setProject(data);
      navigate("/admin");
    } catch (error) {
      console.error("Error updating the project:", error);
    }
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
          navigate("/admin");
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
      handleImageChange={handleImageChange}
    />
  );
}

export default EditProjectPage;
