import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { Dispatch, FC, FormEvent, useState } from 'react';
import { auth } from '../../firebase';
import { validateEmail } from '../../helpers';

interface Props {
  setForgotPassword: Dispatch<React.SetStateAction<boolean>>;
}

const FormLogin:FC<Props> = ({ setForgotPassword }) => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    if (!password) {
      setFormAlert(['danger', 'Enter your password.']);
      setFormIsLoading(false);
      return;
    }


    /**
     * Firebase
     */

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);

        switch (errorCode) {
          case 'auth/wrong-password':
            setFormAlert(['danger', 'Incorrect email and/or password.']);
            break;

          case 'auth/too-many-requests':
            setFormAlert(['danger', 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.']);
            break;

          default:
            setFormAlert(['danger', 'An error has occurred. Please try again.']);
            break;
        }

        setFormIsLoading(false);
      });
  };

  return (
    <form id="form-login" onSubmit={handleSubmit}>
      <h2 className="mb-3">Already have an account? Login!</h2>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-envelope"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input
            type="email"
            id="login-email"
            className="form-control"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="login-email">Email address</label>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-key"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input
            type="password"
            id="login-password"
            className="form-control"
            placeholder="*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="login-password">Password</label>
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
            Login
          </button>
        ) : (
          <button disabled className="btn btn-primary">
            <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
            Logging in...
          </button>
        )}

        <button type="button" className="btn btn-secondary" onClick={() => setForgotPassword(true)}>
          Forgot your password?
        </button>
      </div>
    </form>
  )
}

export default FormLogin;
