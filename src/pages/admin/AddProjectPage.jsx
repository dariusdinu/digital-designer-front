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
      // First, upload the image to Digital Ocean and get the URL
      const imageUrl = await uploadImageToDigitalOcean(project);

      // Prepare project data with the image URL
      const projectData = {
        title: project.title,
        description: project.description,
        images: [imageUrl], // Use image URL instead of file
        clientSiteLink: project.clientSiteLink,
        isShown: project.isShown,
        category: project.category,
      };

      const response = await fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error("Failed to add project");
      }

      const data = await response.json();
      console.log("Project added successfully:", data);
      navigate("/admin");
    } catch (error) {
      console.error("Error adding the project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle image upload to Digital Ocean
  const uploadImageToDigitalOcean = async (project) => {
    const formData = new FormData();
    formData.append("images", [project.images[0]]);
    const response = await fetch(
      `http://localhost:3000/66ba055bf83e6c783d3b2868/images`,
      {
        // Endpoint for handling image upload
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
