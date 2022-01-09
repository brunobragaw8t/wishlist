const FormRegister = () => {
  return (
    <form id="form-register">
      <h2 className="mb-3">Don't have an account? Register!</h2>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-person"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input type="text" id="register-name" className="form-control" placeholder="John Doe" />
          <label htmlFor="register-name">Name</label>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-envelope"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input type="email" id="register-email" className="form-control" placeholder="email@example.com" />
          <label htmlFor="register-email">Email address</label>
        </div>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-key"></i>
        </span>

        <div className="form-floating flex-grow-1">
          <input type="password" id="register-password" className="form-control" placeholder="*****" />
          <label htmlFor="register-password">Password</label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  )
}

export default FormRegister;
