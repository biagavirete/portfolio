import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './styles.css';

function Footer() {
  return (
    <footer>
      <div id="icons-container">
        <a href="mailto:biagavirete@gmail.com" rel="noopener noreferrer" target="_blank"><MailIcon fontSize="medium" /></a>
        <a href="https://github.com/biagavirete" rel="noopener noreferrer" target="_blank"><GitHubIcon fontSize="medium" /></a>
        <a href="https://www.linkedin.com/in/bea-teixeira/" rel="noopener noreferrer" target="_blank"><LinkedInIcon fontSize="medium" /></a>
        <a href="https://wa.me/5519998083142" rel="noopener noreferrer" target="_blank"><WhatsAppIcon fontSize="medium" /></a>
      </div>
      <div id="developed-with">
        <p>
          Developed with <FavoriteIcon /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;