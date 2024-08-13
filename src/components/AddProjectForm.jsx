import Button from "./Button";
import "../styling/Buttons.css";
import "../styling/EditProjectForm.css";
import "../styling/ProjectPage.css";
import ProjectForm from "./ProjectForm";

function AddProjectForm({
  project,
  handleInputChange,
  handleImageChange,
  handleAdd,
}) {
  return (
    <div className="project-page">
      <ProjectForm
        project={project}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
      >
        <div className="buttons-container">
          <Button text="Add project" handler={handleAdd} />
        </div>
      </ProjectForm>
    </div>
  );
}

export default AddProjectForm;
