import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";
import GitHubIcon from '@material-ui/icons/GitHub';

import './styles.css';
import { Tooltip } from "@material-ui/core";

type ProjectParam = {
  id: string;
};

function ProjectDetails() {
  const { id } = useParams<keyof ProjectParam>() as ProjectParam;
  const { name, image, github, skills, description } = ProjectList[Number(id)];
  return (
    <div className="project">
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <div>
        <p>{description}</p>
      </div>
      <div className="techs">
        {skills.map(skill => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
      <Tooltip title="Click to check GitHub repository">
        <a href={github}><GitHubIcon /></a>
      </Tooltip>
    </div>
  );
}

export default ProjectDetails;