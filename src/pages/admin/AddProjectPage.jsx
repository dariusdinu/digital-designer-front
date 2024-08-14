import { useNavigate } from "react-router-dom";
import "../../components/UI/Button.css";
import Loading from "../../components/UI/Loading";
import AddProjectForm from "../../components/project/AddProjectForm";
import useProjectForm from "../../hooks/useProjectForm";
import { uploadImageToDigitalOcean } from "../../utils/uploadImage";

function AddProjectPage() {
  const navigate = useNavigate();
  const {
    project,
    isLoading,
    setIsLoading,
    handleInputChange,
    handleImageChange,
    validateForm,
    errors,
  } = useProjectForm({
    title: "",
    description: "",
    images: [],
    clientSiteLink: "",
    isShown: false,
    category: "",
  });

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const projectData = {
        title: project.title,
        description: project.description,
        clientSiteLink: project.clientSiteLink,
        isShown: project.isShown,
        category: project.category,
        images: [],
      };

      const createResponse = await fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!createResponse.ok) {
        throw new Error("Failed to create project");
      }

      const createdProject = await createResponse.json();
      const projectId = createdProject._id;

      if (project.images[0]) {
        const imageUrl = await uploadImageToDigitalOcean(
          project.images[0],
          projectId
        );

        const updateData = {
          images: [imageUrl],
        };

        await fetch(`http://localhost:3000/projects/${projectId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        });
      }

      navigate("/admin");
    } catch (error) {
      console.error("Error adding the project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <AddProjectForm
      project={project}
      handleInputChange={handleInputChange}
      handleImageChange={handleImageChange}
      handleAdd={handleAdd}
      errors={errors}
    />
  );
}

export default AddProjectPage;
