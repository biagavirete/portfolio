import { useNavigate } from "react-router-dom";
import { ArrowBack, } from '@material-ui/icons';

import './styles.css';
import { Helmet } from "react-helmet";
import Button from "../../components/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <div className="container">
        <h1>Oops! Page not found.</h1>
        <Button
          icon={<ArrowBack />}
          text="Back to homepage"
          onClick={() => navigate('/')}
        />
      </div>
    </>
  );
}

export default NotFound;