import { useState } from "react";

function useProjectForm(initialState) {
  const [project, setProject] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    title: false,
    clientSiteLink: false,
    description: false,
  });

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

  const validateForm = () => {
    const newErrors = {
      title: project.title.trim() === "",
      clientSiteLink:
        project.clientSiteLink.trim() !== "" &&
        !/^https?:\/\/[^\s$.?#].[^\s]*$/gm.test(project.clientSiteLink),
      description: project.description.trim() === "",
      category: project.category.trim() === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  return {
    project,
    setProject,
    isLoading,
    setIsLoading,
    handleInputChange,
    handleImageChange,
    validateForm,
    errors,
  };
}

export default useProjectForm;
