import React, { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { AuthContextProvider } from "../services/context/AuthContext";

// ? EXTERNAL REUSABLE EVENT CHANGER
import { HandleInputChange } from "../services/helper/InputHandler";


const SignUp = () => {
  const [inputs, setInputs] = useState({ email: "", password: "", name: "" });
  const { handleCreateUserAccount } = useContext(AuthContextProvider);
  const handleSubmitForm = useCallback(() => handleCreateUserAccount(inputs), [handleCreateUserAccount, inputs]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form
        onSubmitCapture={(e) => handleSubmitForm(e.preventDefault())}
        className="form"
      >
        <p className="form-title">Sign up for an account</p>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            required
            onChange={(e) => HandleInputChange(e, setInputs, inputs)}
            name="name"
            value={inputs.name}
            type="text"
            placeholder="Enter Name"
          />
        </div>
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
          Already have an account?
          <Link to="/sign-in">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
