import Button from "../UI/Button";

import "../UI/Button.css";
import "./EditProjectForm.css";
import "../../pages/Project/ProjectPage.css";
import Loading from "../UI/Loading";
import ProjectForm from "./ProjectForm";

function EditProjectForm({
  project,
  handleInputChange,
  handleUpdate,
  handleDelete,
  handleImageChange,
}) {
  if (!project) return <Loading />;

  return (
    <div className="project-page">
      <ProjectForm
        project={project}
        handleImageChange={handleImageChange}
        handleInputChange={handleInputChange}
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
