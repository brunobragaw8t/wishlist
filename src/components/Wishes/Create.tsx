import { child, get, getDatabase, ref, set } from 'firebase/database';
import { FormEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { isValidUrl } from '../../helpers';
import ContentSection from '../partials/ContentSection';

const WishesCreate = () => {
  var [user] = useAuthState(auth);

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [formAlert, setFormAlert] = useState(['', '']);
  const [formIsLoading, setFormIsLoading] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormIsLoading(true);
    setFormAlert(['', '']);


    /**
     * Validation
     */

    if (!title) {
      setFormAlert(['danger', 'Enter the title of your wish.']);
      setFormIsLoading(false);
      return;
    }

    if (link && !isValidUrl(link)) {
      setFormAlert(['danger', 'Enter a valid link.']);
      setFormIsLoading(false);
      return;
    }


    /**
     * Firebase
     */

    if (user) {
      const dbRef = ref(getDatabase());

      get(child(dbRef, `lists/${user.uid}/wishes`)).then((snapshot) => {
        if (snapshot.exists()) {
          const wishes = snapshot.val();
          wishes.push({
            title: title,
            link: link,
          });

          if (user) {
            set(child(dbRef, `lists/${user.uid}/wishes`), wishes);

            navigate('/my-list');
          }
        } else {
          // console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
        setFormIsLoading(false);
      });
    }
  }

  return (
    <ContentSection>
      <div className="container">
        <h1>Create a wish</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-card-heading"></i>
            </span>

            <div className="form-floating flex-grow-1">
              <input
                type="text"
                id="title"
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="title">Title</label>
            </div>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-link-45deg"></i>
            </span>

            <div className="form-floating flex-grow-1">
              <input
                type="text"
                id="link"
                className="form-control"
                placeholder="www.example.com"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />

              <label htmlFor="link">Link</label>
            </div>
          </div>

          {formAlert[0] && formAlert[1] && (
            <div className={`alert alert-${formAlert[0]}`}>
              {formAlert[1]}
            </div>
          )}

          {!formIsLoading ? (
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          ) : (
            <button disabled className="btn btn-primary">
              <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
              Creating...
            </button>
          )}
        </form>
      </div>
    </ContentSection>
  )
}

export default WishesCreate;
