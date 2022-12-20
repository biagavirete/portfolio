import ProjectItem from '../../components/ProjectItem';
import { ProjectList } from '../../helpers/ProjectList';

import './styles.css';

function Projects() {
  return (
    <div className="projects">
      <p>Here you can find some of my personal projects. </p>
      <p>Click the cards to see more details.</p>
      <div className="projectList">
        {ProjectList.map((project, index) => (
          <ProjectItem key={index} id={index} name={project.name} image={project.image} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
