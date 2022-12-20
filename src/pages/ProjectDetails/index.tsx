import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";
import { Tooltip } from "@material-ui/core";
import { Helmet } from "react-helmet";
import GitHubIcon from '@material-ui/icons/GitHub';
import NotFound from "../NotFound";

import './styles.css';

type ProjectParam = {
  id: string;
};

const defaultValues = {
  name: '',
  image: '',
  description: '',
  skills: [],
  github: ''
};

function ProjectDetails() {
  const [shouldDisplayNotFound, setShouldDisplayNotFound] = useState(false);
  const { id } = useParams<keyof ProjectParam>() as ProjectParam;
  const projectIndexes = Object.keys(ProjectList);

  useEffect(() => {
    if (!projectIndexes.includes(id)) {
      setShouldDisplayNotFound(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const project = !shouldDisplayNotFound ? ProjectList[Number(id)] : defaultValues;

  if (shouldDisplayNotFound) {
    return (
      <NotFound />
    );
  }

  return (
    <>
      <Helmet>
        <title>Project {!shouldDisplayNotFound && `- ${project?.name}`}</title>
      </Helmet>
      <div className="project">
        <h1>{project?.name}</h1>
        <img src={project?.image} alt={project?.name} />
        <div>
          <p>{project?.description}</p>
        </div>
        <div className="techs">
          {project?.skills.map(skill => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
        <Tooltip title="Click to check GitHub repository">
          <a href={project?.github}><GitHubIcon /></a>
        </Tooltip>
      </div>
    </>
  );
}

export default ProjectDetails;