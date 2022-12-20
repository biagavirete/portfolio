import { Helmet } from 'react-helmet';
import ProjectItem from '../../components/ProjectItem';
import { ProjectList } from '../../helpers/ProjectList';

import './styles.css';

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div className="projects">
        <h3>Here you can find some of my personal projects. </h3>
        <p>Click the cards to see more details.</p>
        <div className="projectList">
          {ProjectList.map((project, index) => (
            <ProjectItem key={index} id={index} name={project.name} image={project.image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
