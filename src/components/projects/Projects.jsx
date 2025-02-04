import { useState } from "react";
import HeaderParagraphBtn from "../headerParagraphBtn/HeaderParagraphBtn";
import ProjectsIdea from "../projectsIdea/ProjectsIdea";
import "./style.css";
function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  return (
    <div id="projects">
      {/* HeaderParagraphBtn */}
      <HeaderParagraphBtn
        title="150+"
        description="Electronics Projects for Engineering Students"
        bgColor="#67bdb0"
        setShowProjects={setShowProjects}
        showProjects={showProjects}
      />
      {/* Prjects idea */}
      {showProjects && <ProjectsIdea />}
    </div>
  );
}

export default Projects;
