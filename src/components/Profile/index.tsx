import { useState } from 'react';
import ContentSection from '../partials/ContentSection';
import FormForgotPassword from './FormForgotPassword';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

const Profile = () => {
  const isLoggedIn = false; // TODO: connect this with auth system
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <ContentSection>
      <div className="container">
        {!isLoggedIn ? (
          <div className="row">
            <div className="col-md-6">
              <div className="p-4 bg-white rounded">
                {!forgotPassword ? (
                  <FormLogin setForgotPassword={setForgotPassword} />
                ) : (
                  <FormForgotPassword setForgotPassword={setForgotPassword} />
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 bg-white rounded">
                <FormRegister />
              </div>
            </div>
          </div>
        ) : (
          <div className="alert alert-warning">Profile panel is currently under development.</div>
        )}
      </div>
    </ContentSection>
  )
}

export default Profile;
