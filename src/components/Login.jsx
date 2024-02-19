const Login = () => {
  return (
    <div className="login-container">
      <form className="login">
        <h1>Login</h1>
        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="form-check">
          <div>
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <div>
            <a href="/">Forgot Password?</a>
          </div>
              </div>
              <div className="form-button">
                  <button className="login-btn">Login</button>
              </div>
      </form>
    </div>
  );
};

export default Login;
