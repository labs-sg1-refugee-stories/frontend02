import React from "react";

class Login extends React.Component {
  state = {
    newCredentials: {
      username: "",
      password: ""
    }
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <h2>User Name</h2>
          <input type="text" />
          <h2>password</h2>
          <input type="text" />
          <p>user or admin?</p>
        </form>
      </div>
    );
  }
}

export default Login;