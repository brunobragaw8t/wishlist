import { Dispatch, FC } from 'react';

interface Props {
  setForgotPassword: Dispatch<React.SetStateAction<boolean>>;
}

const FormForgotPassword:FC<Props> = ({ setForgotPassword }) => {
  return (
    <form id="form-forgot-password">
      <h2 className="mb-3">Forgot your password?</h2>

      <p>
        Enter your email below and you will receive instructions on how to recover your lost password.
      </p>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-envelope"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input type="email" id="forgot-password-email" className="form-control" placeholder="email@example.com" />
          <label htmlFor="forgot-password-email">Email address</label>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <button type="button" className="btn btn-secondary" onClick={() => setForgotPassword(false)}>
          Back to login
        </button>
      </div>
    </form>
  )
}

export default FormForgotPassword;
