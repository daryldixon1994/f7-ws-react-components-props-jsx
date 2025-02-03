import ImageWithBackground from "../imageWithBackground/ImageWithBackground";
import "./style.css";
function ProjectsIdea() {
  return (
    <div id="projects-idea">
      <ImageWithBackground
        imgBg="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={100}
      />
      <div id="project-idea-details">
        <h2>Project Ideas</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          totam, eligendi quae amet in eveniet ipsum cum incidunt enim deleniti.
        </p>
      </div>
    </div>
  );
}

export default ProjectsIdea;
