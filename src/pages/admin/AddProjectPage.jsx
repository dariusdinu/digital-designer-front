import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styling/Buttons.css";
import AddProjectForm from "../../components/AddProjectForm";
import Loading from "../../components/Loading";

function AddProjectPage() {
  const navigate = useNavigate();
  const [project, setProject] = useState({
    title: "",
    description: "",
    images: [],
    clientSiteLink: "",
    isShown: false,
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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
      images: [file], // Store file object temporarily
    }));
  };

  const handleAdd = async () => {
    setIsLoading(true);

    try {
      // Step 1: Create the project without images
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

      console.log("Project created successfully:", createdProject);

      // Step 2: Upload the image to Digital Ocean using the new project ID
      if (project.images[0]) {
        const imageUrl = await uploadImageToDigitalOcean(
          project.images[0],
          projectId
        );

        // Step 3: Update the project with the image URL
        const updateData = {
          images: [imageUrl],
        };

        const updateResponse = await fetch(
          `http://localhost:3000/projects/${projectId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
          }
        );

        const updatedProject = await updateResponse.json();
        console.log(
          "Project updated successfully with image URL:",
          updatedProject
        );
      }

      navigate("/admin");
    } catch (error) {
      console.error("Error adding the project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle image upload to Digital Ocean
  const uploadImageToDigitalOcean = async (file, projectId) => {
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
      throw new Error("Image upload failed");
    }

    const { imageUrl } = await response.json(); // Assuming the server responds with the image URL
    return imageUrl;
  };

  if (isLoading) return <Loading />;

  return (
    <AddProjectForm
      project={project}
      handleInputChange={handleInputChange}
      handleImageChange={handleImageChange}
      handleAdd={handleAdd}
    />
  );
}

export default AddProjectPage;
