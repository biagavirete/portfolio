import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import './styles.css';

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsExpanded(false);
  }, [location]);

  return (
    <nav>
      <div className="navbar" id={isExpanded ? "open" : "close"}>
        <div className="toggleButton">
          <button onClick={() => setIsExpanded(!isExpanded)}><ReorderIcon /></button>
        </div>
        <ul className="links">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;