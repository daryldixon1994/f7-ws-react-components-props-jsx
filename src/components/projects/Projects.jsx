import HeaderParagraphBtn from "../headerParagraphBtn/HeaderParagraphBtn";
import ProjectsIdea from "../projectsIdea/ProjectsIdea";
import "./style.css";
function Projects() {
  return (
    <div id="projects">
      {/* HeaderParagraphBtn */}
      <HeaderParagraphBtn
        title="150+"
        description="Electronics Projects for Engineering Students"
        bgColor="#67bdb0"
      />
      {/* Prjects idea */}
      <ProjectsIdea />
    </div>
  );
}

export default Projects;
