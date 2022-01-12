import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import ContentSection from '../partials/ContentSection';
import FormRegister from '../Profile/FormRegister';

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <ContentSection>
      <div className="container">
        <div className="row align-items-center g-5 py-5">
          <div className={`text-center ${!user && 'col-lg-7 text-lg-start'}`}>
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

          {!user && (
            <div className="col-md-10 mx-auto col-lg-5">
              <FormRegister
                className="p-4 p-md-5 border rounded-3 bg-light"
                isHome={true}
              />
            </div>
          )}
        </div>
      </div>
    </ContentSection>
  )
}

export default Home;
