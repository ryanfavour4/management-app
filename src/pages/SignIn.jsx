import React, { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { AuthContextProvider } from "../services/context/AuthContext";
import { HandleInputChange } from "../services/helper/InputHandler";



const SignIn = () => {
  const [inputs, setInputs] = useState({ email: "", password: "", name: "" });
  const { handleLoginUserAccount } = useContext(AuthContextProvider);
  const handleSubmitForm = useCallback(() => handleLoginUserAccount(inputs), [handleLoginUserAccount, inputs]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form
        onSubmitCapture={(e) => handleSubmitForm(e.preventDefault())}
        className="form"
      >
        <p className="form-title">Sign in to your account</p>

        <div className="input-container">
        <label htmlFor="email">Email</label>
          <input
            required
            onChange={(e) => HandleInputChange(e, setInputs, inputs)}
            name="email"
            value={inputs.email}
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="input-container">
        <label htmlFor="password">Password</label>
          <input
            required
            onChange={(e) => HandleInputChange(e, setInputs, inputs)}
            name="password"
            value={inputs.password}
            type="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="submit">
          Sign in
        </button>

        <p className="signup-link">
          No account?
          <Link to="/sign-up">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
