import React from "react";

class SignUp extends React.Component {
  state = {
    newCredentials: {
      username: "",
      password: ""
    }
  };
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <h2>User Name</h2>
          <input type="text" />
          <h2>password</h2>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default SignUp;