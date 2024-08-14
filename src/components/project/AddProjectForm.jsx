import Button from "../UI/Button";
import ProjectForm from "./ProjectForm";

function AddProjectForm({
  project,
  handleInputChange,
  handleImageChange,
  handleAdd,
  errors,
}) {
  return (
    <div className="project-page">
      <ProjectForm
        project={project}
        handleImageChange={handleImageChange}
        handleInputChange={handleInputChange}
        onSubmit={handleAdd}
        errors={errors}
      >
        <div className="buttons-container">
          <Button text="Add project" handler={handleAdd} />
        </div>
      </ProjectForm>
    </div>
  );
}

export default AddProjectForm;
