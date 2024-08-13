import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import Switch from "./Switch";
import TextArea from "./TextArea";
import "../styling/Buttons.css";
import "../styling/EditProjectForm.css";
import "../styling/ProjectPage.css";

function EditProjectForm({
  project,
  handleInputChange,
  handleUpdate,
  handleDelete,
}) {
  if (!project) return <p>Loading project details...</p>;

  const categoryOptions = [
    { code: "logo", name: "Logo Design" },
    { code: "social", name: "Social Media" },
    { code: "branding", name: "Branding" },
    { code: "advertising", name: "Digital Advertising" },
    { code: "newsletter", name: "Newsletters" },
  ];

  return (
    <div className="project-page">
      <img
        src={project.imageUrl || "/test-image.jpg"}
        alt={project.title}
        className="project-image-p"
      />
      <section className="project-info">
        <Input
          label="Title"
          id="title"
          name="title" // Ensure name is set for state management
          isRequired={true}
          value={project.title}
          onChange={handleInputChange}
          placeholder="Enter project title"
        />
        <TextArea
          label="Description"
          name="description"
          value={project.description}
          onChange={handleInputChange}
          placeholder="Project Description"
        />
        <Input
          label="Client Website"
          id="clientSiteLink"
          name="clientSiteLink"
          value={project.clientSiteLink}
          onChange={handleInputChange}
          placeholder="Enter client website URL"
        />
        <Select
          label="Category"
          options={categoryOptions}
          name="category"
          value={project.category}
          onChange={handleInputChange}
        />
        <Switch
          handleInputChange={handleInputChange}
          text="Show project"
          checked={project.isShown}
        />
        <div className="buttons-container">
          <Button text="Update project" handler={handleUpdate} />
          <Button
            text="Delete project"
            handler={handleDelete}
            isDelete={true}
          />
        </div>
      </section>
    </div>
  );
}

export default EditProjectForm;
