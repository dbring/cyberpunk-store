import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formFieldsCopy = { ...formFields };
    formFieldsCopy[name] = value;
    setFormFields(formFieldsCopy);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      user.displayName = displayName;
      await createUserDocumentFromAuth(user);
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          value={displayName}
          name="displayName"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          name="email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          name="password"
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
