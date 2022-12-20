import { Helmet } from 'react-helmet';
import { ArrowDropDownCircleRounded } from '@material-ui/icons';
import ProfilePic from '../../assets/profile-pic.png';
import Button from '../../components/Button';
import { techs } from '../../helpers/Techs';
import './styles.css';

function About() {

  const onClick = () => {
    fetch('sample-resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = fileURL;
        link.download = 'Beatriz Teixeira.pdf';
        link.click();
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="about">
        <div className="content">
          <div className="profile">
            <img src={ProfilePic} alt="Profile" />
          </div>
          <div className="text">
            <h3>Beatriz Teixeira - Front-end Developer</h3>
            <p>Front end developer with 2+ years of experience using
              JavaScript/TypeScript, HTML5, and CSS3 to build all aspects of the
              user experience and user interface for websites and applications.
              Specialized in React to build single-page applications.
            </p>
            <div className="techs">
              {techs.map(tech => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
            <div className="download">
              <Button
                onClick={onClick}
                text="Download CV"
                icon={<ArrowDropDownCircleRounded />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
