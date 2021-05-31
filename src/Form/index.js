import "../App.css";
import { useState } from "react";
import { StyledInput, StyledButton, StyledPar } from "./Form.style";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: false,
  });

  const [errorText, setErrorText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    // if (validate()) {
    // alert(JSON.stringify(validate()));
    // console.log(values);
    // }
  };

  const validate = () => {
    if (!values.firstName) {
      return setErrorText({ firstName: "Fill the First Name" });
    }
    if (!values.lastName) {
      return setErrorText({ lastName: "Fill the Last Name" });
    }
    if (!values.email) {
      return setErrorText({ email: "Fill the Email Address" });
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      return setErrorText({ email: "Invalid Email Address" });
    }
    if (!values.password) {
      return setErrorText({ password: "Enter Your Password" });
    } else if (values.password.length < 8) {
      return setErrorText({ password: "Password must be min 8 characters!" });
    } else if (values.password.search(/\d/) === -1) {
      return setErrorText({ password: "Password must contain number!" });
    } else if (values.password.search(/[A-Z]/) === -1) {
      return setErrorText({
        password: "Password must contain capital and lowercase letter!",
      });
    } else if (values.password.search(/[a-z]/) === -1) {
      return setErrorText({
        password: "Password must contain lowercase letter!",
      });
    } else if (values.password.search(/[^a-zA-Z0-9!@#$%^&*()_+]/) === -1) {
      return setErrorText({
        password: "Password must contain special character!",
      });
    } else if (!values.confirmPassword) {
      return setErrorText({ confirmPassword: "Confirm Password" });
    } else if (!(values.password === values.confirmPassword)) {
      return setErrorText({ confirmPassword: "Didn't Match Password" });
    }
    if (!values.policy) {
      return setErrorText({ policy: "You should accept Privacy Policy!" });
    }
    alert("Registered Succesfully");
    return setErrorText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="fisrtName"
          onChange={(e) => setValues({ ...values, firstName: e.target.value })}
          value={values.firstName}
          placeholder="First Name"
        />
        <StyledPar> {errorText?.firstName}</StyledPar>
        <StyledInput
          type="text"
          name="lastName"
          onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          value={values.lastName}
          placeholder="Last Name"
        />
        <StyledPar> {errorText?.lastName}</StyledPar>
        <StyledInput
          type="email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          placeholder="Email Address"
        />
        <StyledPar> {errorText?.email}</StyledPar>
        <StyledInput
          type="password"
          name="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          value={values.password}
          placeholder="Password"
        />
        <StyledPar> {errorText?.password}</StyledPar>
        <StyledInput
          type="password"
          name="confirmPassword"
          onChange={(e) =>
            setValues({ ...values, confirmPassword: e.target.value })
          }
          value={values.confirmPassword}
          placeholder="Confirm Password"
        />
        <StyledPar> {errorText?.confirmPassword}</StyledPar>
        <input
          type="checkbox"
          name="policy"
          // required
          value={values.policy}
          onChange={(e) => setValues({ ...values, policy: e.target.checked })}
        />
        <span style={{ fontSize: "1.2rem", paddingLeft: "0.5rem" }}>
          I accept the{" "}
          <a href="/" style={{ color: "white" }}>
            Privacy Policy
          </a>
          .
        </span>
        <StyledPar> {errorText?.policy}</StyledPar>
        <StyledButton type="submit" value="Register">
          Register
        </StyledButton>
        <p style={{ fontSize: "1rem" }}>
          Already have an account?{" "}
          <a href="/" style={{ color: "white" }}>
            Login.
          </a>
        </p>
      </form>
    </div>
  );
}

export default App;
