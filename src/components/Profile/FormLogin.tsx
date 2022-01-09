import { Dispatch, FC } from 'react';

interface Props {
  setForgotPassword: Dispatch<React.SetStateAction<boolean>>;
}

const FormLogin:FC<Props> = ({ setForgotPassword }) => {
  return (
    <form id="form-login">
      <h2 className="mb-3">Already have an account? Login!</h2>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-envelope"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input type="email" id="login-email" className="form-control" placeholder="email@example.com" />
          <label htmlFor="login-email">Email address</label>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-key"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input type="password" id="login-password" className="form-control" placeholder="*****" />
          <label htmlFor="login-password">Password</label>
        </div>
      </div>

      <div className="mb-3 d-flex align-items-center justify-content-between">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="remember-me" />

          <label className="form-check-label" htmlFor="remember-me">
            Remember me
          </label>
        </div>

        <button type="button" className="btn btn-link" onClick={() => setForgotPassword(true)}>
          Forgot your password?
        </button>
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default FormLogin;
