import "./ProjectsStyling/ProjectsMain.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../utils/projects";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__header">
        <h1 className="projects__header--text">Take a look at my work</h1>
      </div>
      <div className="projects__container">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
