import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import Switch from "./Switch";
import TextArea from "./TextArea";
import ImagePicker from "./ImagePicker"; // New ImagePicker component
import "../styling/Buttons.css";
import "../styling/EditProjectForm.css";
import "../styling/ProjectPage.css";

function AddProjectForm({
  project,
  handleInputChange,
  handleImageChange,
  handleAdd,
}) {
  const categoryOptions = [
    { code: "logo", name: "Logo Design" },
    { code: "social", name: "Social Media" },
    { code: "branding", name: "Branding" },
    { code: "advertising", name: "Digital Advertising" },
    { code: "newsletter", name: "Newsletters" },
  ];

  return (
    <div className="project-page">
      <ImagePicker
        image={project.images[0]}
        onImageChange={handleImageChange}
      />
      <section className="project-info">
        <Input
          label="Title"
          id="title"
          name="title"
          isRequired={true}
          value={project.title}
          onChange={handleInputChange}
          placeholder="Enter project title"
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
        <TextArea
          label="Description"
          name="description"
          value={project.description}
          onChange={handleInputChange}
          placeholder="Project Description"
        />
        <Switch
          handleInputChange={handleInputChange}
          text="Show project"
          checked={project.isShown}
        />
        <div className="buttons-container">
          <Button text="Add project" handler={handleAdd} />
        </div>
      </section>
    </div>
  );
}

export default AddProjectForm;
