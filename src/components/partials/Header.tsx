import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase';

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/img/logos/logo-white.png" alt="Wishlist Logo" height="60" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end bg-secondary" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">Wishlist</h5>

            <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/my-list">My list</NavLink>
              </li>

              {!user ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">Login / Register</NavLink>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                    <li>
                      <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#" role="button" onClick={() => signOut(auth)}>
                        Sign out
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
