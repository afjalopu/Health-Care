import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import './Register.css';

const Register = () => {
  const { signupUsingForm } = useAuth();

  return (
    <div className="my-5 bg-warning w-25 mx-auto cardClass"> 
        <br />
<br /> <h2 className="register" >Register</h2>
      <form onSubmit={signupUsingForm}>
        <input type="email" className="my-3 height" name="email" placeholder="Enter an email"
        />
        <br />
        <input type="password" className="height" name="password" placeholder="Password" />
        <br /> <br />
        <input type="submit" className="my-3 btn btn-primary" value="Submit" />
        <br /> <br />
        <Link to="/login"> <h5 className="registerText" > Already Registered ? </h5> </Link>
        <br /> <br /> <br /><br /> <br /> <br />

      </form>
    </div>
  );
};

export default Register;
