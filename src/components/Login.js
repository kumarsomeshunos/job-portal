import React from "react";

const Login = () => {
  return (
    <div className="main-form-div">
      <div className="form-bg">
        <div className="img-muj">
          <img
            src="http://ickhi.in/wp-content/uploads/2022/02/MUJ-LOGOcolor.png"
            alt=""
          />
        </div>
        <div className="line"></div>
        <div className="log-form">
          <form action="">
            <h3>Admin Portal</h3>
            <input
              type="text"
              placeholder="Enter Username"
              className="log-input"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="log-input"
            />
            <div className="btn-container">
            <button type="submit" className="btn">
                Log In
              </button>
              <button type="button" className="btn">
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
