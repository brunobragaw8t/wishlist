import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { child, get, getDatabase, ref } from 'firebase/database';
import ContentSection from '../partials/ContentSection';
import List from './List';
import { useEffect, useState } from 'react';

const MyList = () => {
  var [user] = useAuthState(auth);
  const [wishes, setWishes] = useState([]);
  const [tableIsLoading, setTableIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const dbRef = ref(getDatabase());

      get(child(dbRef, `lists/${user.uid}/wishes`)).then((snapshot) => {
        if (snapshot.exists()) {
          setWishes(snapshot.val());
        }

        setTableIsLoading(false);
      }).catch((error) => {
        console.error(error);

        setTableIsLoading(false);
      });
    }
  }, [])

  return (
    <ContentSection>
      <div className="container">
        {user ? (
          <>
            <div className="d-flex justify-content-end">
              <Link to="/wishes/create" className="btn btn-primary">
                <i className="bi bi-plus-circle me-1"></i>
                Add wish
              </Link>
            </div>

            <div className="mt-3">
              {tableIsLoading ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <List wishes={wishes} />
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="alert alert-danger">
              You need to be logged in to view your list.
            </div>

            <Link to="/profile" className="btn btn-primary">
              Log in now
              <i className="bi bi-box-arrow-in-right ms-1"></i>
            </Link>
          </div>
        )}
      </div>
    </ContentSection>
  )
}

export default MyList;
