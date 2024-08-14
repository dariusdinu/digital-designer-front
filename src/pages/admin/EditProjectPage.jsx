import { useParams, useNavigate } from "react-router-dom";
import "../../components/UI/Button.css";
import Loading from "../../components/UI/Loading";
import EditProjectForm from "../../components/project/EditProjectForm";
import useProjectForm from "../../hooks/useProjectForm";
import { useEffect } from "react";
import { uploadImageToDigitalOcean } from "../../utils/uploadImage";

function EditProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    project,
    setProject,
    isLoading,
    setIsLoading,
    handleInputChange,
    handleImageChange,
    validateForm,
    errors,
  } = useProjectForm(null);

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error loading the project:", error));
  }, [id, setProject, setIsLoading]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      let imageUrl = project.images[0];

      if (project.images[0] instanceof File) {
        imageUrl = await uploadImageToDigitalOcean(project.images[0], id);
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
          navigate("/admin");
        })
        .catch((error) => console.error("Error deleting the project:", error));
    }
  };

  if (isLoading || !project) return <Loading />;

  return (
    <EditProjectForm
      project={project}
      handleInputChange={handleInputChange}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
      handleImageChange={handleImageChange}
      errors={errors}
    />
  );
}

export default EditProjectPage;
