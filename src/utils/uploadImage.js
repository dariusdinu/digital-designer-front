export const uploadImageToDigitalOcean = async (file, projectId) => {
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

  const { imageUrl } = await response.json();
  return imageUrl;
};
