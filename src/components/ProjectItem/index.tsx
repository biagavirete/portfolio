import { useNavigate } from 'react-router-dom';
import './styles.css';

interface Props {
  id: number;
  image: string;
  name: string;
}

function ProjectItem({ image, name, id }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="projectItem"
      onClick={() => navigate(`/project/${id}`)}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;