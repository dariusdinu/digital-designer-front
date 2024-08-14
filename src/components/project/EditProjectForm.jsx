import Button from "../UI/Button";
import ProjectForm from "./ProjectForm";
import "../UI/Button.css";

function EditProjectForm({
  project,
  handleInputChange,
  handleUpdate,
  handleDelete,
  handleImageChange,
  errors,
}) {
  return (
    <div className="project-page">
      <ProjectForm
        project={project}
        handleImageChange={handleImageChange}
        handleInputChange={handleInputChange}
        onSubmit={handleUpdate}
        errors={errors}
      >
        <div className="buttons-container">
          <Button text="Update project" handler={handleUpdate} />
          <Button
            text="Delete project"
            handler={handleDelete}
            isDelete={true}
          />
        </div>
      </ProjectForm>
    </div>
  );
}

export default EditProjectForm;
