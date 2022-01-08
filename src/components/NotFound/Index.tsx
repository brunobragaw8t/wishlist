import { Link } from 'react-router-dom';
import ContentSection from '../partials/ContentSection';

const NotFound = () => {
  return (
    <ContentSection className="notfound-section">
      <div className="container text-center">
        <h1 className="title text-primary">404</h1>

        <p className="text-light mb-5">
          It looks like you're lost...
        </p>

        <Link className="btn btn-primary btn-lg" to="/">
          <i className="bi bi-house me-1"></i>
          Return home
        </Link>
      </div>
    </ContentSection>
  )
}

export default NotFound;
