import React from 'react';

const Form = () => {
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
        <input class="un " type="text" align="center" placeholder="Username" />
        <input class="pass" type="password" align="center" placeholder="Password" />
        <a href="/" className="submit" align="center">
          Sign in
        </a>
        <p className="forgot" align="center">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
}

export default Form