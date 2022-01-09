import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <img src="/img/logos/logo-white.png" alt="Wishlist logo" height="60" />

              <p className="text-light mt-2 mb-0">
                Wishlist is the place where you grant your loved ones' wishes.
              </p>
            </div>

            <div className="col-sm-6 col-md-4">
              <h5 className="text-white">Social media</h5>

              <div className="d-flex">
                <a href="https://www.facebook.com/" target="_blank" title="Facebook" className="me-3">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="https://www.instagram.com/" target="_blank" title="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <h5 className="text-white">Legal information</h5>

              <ul className="text-light">
                <li>
                  <Link to="/privacy-policy">Privacy policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 text-center text-light bg-dark bg-opacity-10">
        <div className="container">
          <small>
            2022 &copy; Wishlist. Created by <a href="https://github.com/brunobragaw8t" target="_blank">Bruno Braga</a>
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
