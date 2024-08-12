import "../../styling/Buttons.css";
import "../../styling/EditProjectForm.css";
import "../../styling/ProjectPage.css";
function EditProjectForm({
  project,
  handleInputChange,
  handleUpdate,
  handleDelete,
}) {
  if (!project) return <p>Loading project details...</p>;

  return (
    <div className="project-page">
      <img
        src={project.imageUrl || "/test-image.jpg"}
        alt={project.title}
        className="project-image-p"
      />
      <section className="project-info">
        <input
          type="text"
          name="title"
          value={project.title || ""}
          onChange={handleInputChange}
          placeholder="Project Title"
        />
        <textarea
          name="description"
          value={project.description || ""}
          onChange={handleInputChange}
          placeholder="Project Description"
        />
        <div className="is-visible-switch">
          <span>Show project</span>
          <label className="switch">
            <input
              type="checkbox"
              name="isShown"
              checked={project.isShown || false}
              onChange={handleInputChange}
              className="toggle"
            />
            <div></div>
          </label>
        </div>
        <div className="buttons-container">
          <button onClick={handleUpdate} className="button">
            Update Project
          </button>
          <button onClick={handleDelete} className="delete-button">
            Delete Project
          </button>
        </div>
      </section>
    </div>
  );
}

export default EditProjectForm;
