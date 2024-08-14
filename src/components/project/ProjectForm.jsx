import Input from "../UI/Input";
import Select from "../UI/Select";
import Switch from "../UI/Switch";
import TextArea from "../UI/TextArea";
import ImagePicker from "../UI/ImagePicker";

function ProjectForm({
  project,
  handleImageChange,
  handleInputChange,
  children,
  onSubmit,
  errors,
}) {
  const categoryOptions = [
    { code: "logo", name: "Logo Design" },
    { code: "social", name: "Social Media" },
    { code: "branding", name: "Branding" },
    { code: "advertising", name: "Digital Advertising" },
    { code: "newsletter", name: "Newsletters" },
  ];
  return (
    <>
      <ImagePicker
        image={project.images[0]}
        onImageChange={handleImageChange}
      />
      <form className="project-info" onSubmit={onSubmit}>
        <Input
          label="Title"
          id="title"
          name="title"
          isRequired={true}
          value={project.title}
          onChange={handleInputChange}
          placeholder="Enter project title"
          hasError={errors.title}
          errorMessage="Title is required"
        />
        <Input
          label="Client Website"
          id="clientSiteLink"
          name="clientSiteLink"
          value={project.clientSiteLink}
          onChange={handleInputChange}
          placeholder="Enter client website URL"
          hasError={errors.clientSiteLink}
          errorMessage="Invalid URL"
        />
        <Select
          label="Category"
          options={categoryOptions}
          name="category"
          value={project.category}
          onChange={handleInputChange}
          hasError={errors.category}
        />
        <TextArea
          label="Description"
          name="description"
          value={project.description}
          onChange={handleInputChange}
          placeholder="Project Description"
          hasError={errors.description}
          errorMessage="Description is required"
        />
        <Switch
          handleInputChange={handleInputChange}
          text="Show project"
          checked={project.isShown}
        />
        {children}
      </form>
    </>
  );
}

export default ProjectForm;
