import { Link } from 'react-router-dom';
import ContentSection from '../partials/ContentSection';
import FormRegister from '../Profile/FormRegister';

const Home = () => {
  return (
    <ContentSection>
      <div className="container">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-1 fw-bold lh-1 mb-0">Wishlist</h1>

            <h2>Where you grant wishes</h2>

            <p className="fs-4 mb-2">
              With the help of Wishlist, you can:
            </p>

            <ul className="fs-5 list-unstyled mb-0">
              <li>Setup your own wishlist;</li>
              <li>View your loved ones' wishes;</li>
              <li>Organize a group gift with mutual friends.</li>
            </ul>
          </div>

          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>

                <div className="form-floating flex-grow-1">
                  <input type="text" id="register-name" className="form-control" placeholder="John Doe" />
                  <label htmlFor="register-name">Name</label>
                </div>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-envelope"></i>
                </span>

                <div className="form-floating flex-grow-1">
                  <input type="email" id="register-email" className="form-control" placeholder="email@example.com" />
                  <label htmlFor="register-email">Email address</label>
                </div>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-key"></i>
                </span>

                <div className="form-floating flex-grow-1">
                  <input type="password" id="register-password" className="form-control" placeholder="*****" />
                  <label htmlFor="register-password">Password</label>
                </div>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="privacy-policy" />

                <label className="form-check-label" htmlFor="privacy-policy">
                  I declare that I have read and accept the <Link to="/privacy-policy">privacy policy</Link>.
                </label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </ContentSection>
  )
}

export default Home;
