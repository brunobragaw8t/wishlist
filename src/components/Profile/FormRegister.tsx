import { FC, FormEvent, useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { validateEmail } from '../../helpers';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  isHome?: boolean;
}

const FormRegister:FC<Props> = ({ className = '', isHome = false }) => {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formAlert, setFormAlert] = useState(['', '']);
  let navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    /**
     * Validation
     */

    setFormIsLoading(true);
    setFormAlert(['', '']);

    if (name.length < 2) {
      setFormAlert(['danger', 'Enter your name.']);
      setFormIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setFormAlert(['danger', 'Enter a valid email.']);
      setFormIsLoading(false);
      return;
    }

    if (!password) {
      setFormAlert(['danger', 'Enter a password.']);
      setFormIsLoading(false);
      return;
    }

    if (!passwordConfirmation) {
      setFormAlert(['danger', 'Please repeat your password.']);
      setFormIsLoading(false);
      return;
    }

    if (password !== passwordConfirmation) {
      setFormAlert(['danger', 'The password don\'t match.']);
      setFormIsLoading(false);
      return;
    }

    if (!acceptTerms) {
      setFormAlert(['danger', 'You have to read and accept the terms of our privacy policy.']);
      setFormIsLoading(false);
      return;
    }


    /**
     * Firebase
     */

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, { displayName: name });

        sendEmailVerification(user);

        if (isHome) {
          navigate('/profile');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);

        switch (errorCode) {
          case 'auth/weak-password':
            setFormAlert(['danger', 'Your password should be at least 6 characters.']);
            break;

          default:
            setFormAlert(['danger', 'An error has occurred. Please try again.']);
            break;
        }

        setFormIsLoading(false);
      });
  };

  return (
    <form id="form-register" onSubmit={handleSubmit} className={className}>
      {!isHome && (
        <h2 className="mb-3">Don't have an account? Register!</h2>
      )}

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-person"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input
            type="text"
            id="register-name"
            className="form-control"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="register-name">Name</label>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-envelope"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input
            type="email"
            id="register-email"
            className="form-control"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="register-email">Email address</label>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-key"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input
            type="password"
            id="register-password"
            className="form-control"
            placeholder="*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="register-password">Password</label>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-key-fill"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input
            type="password"
            id="register-password-confirmation"
            className="form-control"
            placeholder="*****"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />

          <label htmlFor="register-password-confirmation">Password confirmation</label>
        </div>
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          id="privacy-policy"
          className="form-check-input"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />

        <label className="form-check-label" htmlFor="privacy-policy">
          I declare that I have read and accept the <Link to="/privacy-policy">privacy policy</Link>.
        </label>
      </div>

      {formAlert[0] && formAlert[1] && (
        <div className={`alert alert-${formAlert[0]}`}>
          {formAlert[1]}
        </div>
      )}

      {!formIsLoading ? (
        <button type="submit" className={`btn btn-primary ${isHome ? 'w-100 btn-lg' : ''}`}>
          Register
        </button>
      ) : (
        <button disabled className={`btn btn-primary ${isHome ? 'w-100 btn-lg' : ''}`}>
          <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
          Registering...
        </button>
      )}
    </form>
  )
}

export default FormRegister;
