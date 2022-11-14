import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import './styles.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I am Beatriz!</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="mailto:biagavirete@gmail.com" rel="noopener noreferrer" target="_blank"><MailIcon /></a>
          <a href="https://github.com/biagavirete" rel="noopener noreferrer" target="_blank"><GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/bea-teixeira/" rel="noopener noreferrer" target="_blank"><LinkedInIcon /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;