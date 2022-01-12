import { sendPasswordResetEmail } from 'firebase/auth';
import { Dispatch, FC, FormEvent, useState } from 'react';
import { auth } from '../../firebase';
import { validateEmail } from '../../helpers';

interface Props {
  setForgotPassword: Dispatch<React.SetStateAction<boolean>>;
}

const FormForgotPassword:FC<Props> = ({ setForgotPassword }) => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [formAlert, setFormAlert] = useState(['', '']);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    /**
     * Validation
     */

    setFormIsLoading(true);
    setFormAlert(['', '']);

    if (!validateEmail(email)) {
      setFormAlert(['danger', 'Enter a valid email.']);
      setFormIsLoading(false);
      return;
    }


    /**
     * Firebase
     */

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmail('');

        setFormAlert(['success', 'We have sent you an email with instructions on how to reset your password.']);

        setFormIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);

        switch (errorCode) {
          case 'auth/user-not-found':
            setFormAlert(['danger', 'That email does not exist.']);
            break;

          default:
            setFormAlert(['danger', 'An error has occurred. Please try again.']);
            break;
        }

        setFormIsLoading(false);
      });
  };

  return (
    <form id="form-forgot-password" onSubmit={handleSubmit}>
      <h2 className="mb-3">Forgot your password?</h2>

      <p>
        Enter your email below and you will receive instructions on how to recover your lost password.
      </p>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-envelope"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input
            type="email"
            id="forgot-password-email"
            className="form-control"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="forgot-password-email">Email address</label>
        </div>
      </div>

      {formAlert[0] && formAlert[1] && (
        <div className={`alert alert-${formAlert[0]}`}>
          {formAlert[1]}
        </div>
      )}

      <div className="d-flex justify-content-between">
        {!formIsLoading ? (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        ) : (
          <button disabled className="btn btn-primary">
            <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
            Submitting...
          </button>
        )}

        <button type="button" className="btn btn-secondary" onClick={() => setForgotPassword(false)}>
          Back to login
        </button>
      </div>
    </form>
  )
}

export default FormForgotPassword;
