import "../App.css";
import { useState } from "react";
import { StyledInput, StyledButton } from "./Form.style";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (validate()) {
      alert(JSON.stringify(validate()));
      // console.log(values);
    }
  };

  const validate = () => {
    const errors = {};

    if (!values.firstName) {
      // console.log("Fill the First Name");
      return (errors.firstName = "Fill the First Name");
    }
    if (!values.lastName) {
      // console.log("Fill the First Name");
      return (errors.lastName = "Fill the Last Name");
    }

    if (!values.email) {
      // console.log("Fill the Email Address");
      return (errors.email = "Fill the Email Address");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      // console.log("Invalid Email");
      return (errors.email = "Invalid Email Address");
    }
    if (!values.password) {
      // console.log("Enter Password!");
      return (errors.password = "Enter Your Password");
    } else if (values.password.length < 8) {
      // console.log("Password must be min 8 characters!");
      return (errors.password = "Password must be min 8 characters!");
    } else if (!values.confirmPassword) {
      // console.log("Confirm Password!");
      return (errors.password = "Confirm Password");
    } else if (!(values.password === values.confirmPassword)) {
      // console.log("Didn't match password!");
      return (errors.password = "Didn't Match Password");
    }
    return "Resgistered Succesfully!";
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
        <br />
        <StyledInput
          type="text"
          name="lastName"
          onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          value={values.lastName}
          placeholder="Last Name"
        />
        <br />
        <StyledInput
          type="email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          placeholder="Email Address"
        />
        <br />
        <StyledInput
          type="password"
          name="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          value={values.password}
          placeholder="Password"
        />
        <br />
        <StyledInput
          type="password"
          name="confirmPassword"
          onChange={(e) =>
            setValues({ ...values, confirmPassword: e.target.value })
          }
          value={values.confirmPassword}
          placeholder="Confirm Password"
        />
        <br />
        <input type="checkbox" name="policy" required value={values.policy} />
        <span style={{ fontSize: "1.2rem", paddingLeft: "0.5rem" }}>
          I accept the{" "}
          <a href="/" style={{ color: "white" }}>
            Privacy Policy
          </a>
          .
        </span>
        <br />
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
