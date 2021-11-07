import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import "./Login.css";
import { useHistory, useLocation } from "react-router-dom";
import { isEmpty } from "lodash";

const Login = () => {
  const { signInUsingGoogle, signInUsingForm, user, signInUsingFacebook, error } = useAuth();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if(!isEmpty(user)){
      let path = location.state && location.state.from && location.state.from.pathname;
      path = path ?? "/home";
      history.push(path);
    }
  }, [user]);

  return (
    <div className="my-5 bg-warning w-25 mx-auto cardClass " > 
      <form onSubmit={signInUsingForm}>
      <br /> <br /> 
        <h2 className="register" >Log in</h2>
        <input type="email" name="email" id="" className="my-3" placeholder="Your Email" /> <br />
        <input type="password" name="password" className="my-2" id="" placeholder="Your Password" /> <br />
        {error && <p style={{color: "red"}}>{error}</p>}
        <button className="btn-primary my-3" type="submit">Submit</button> <br />
        <button onClick={signInUsingGoogle} className="btn-danger my-3" type="button">
          {" "}
          Google Sign in{" "}
        </button>{" "}
        <button onClick={signInUsingFacebook} className="btn-dark my-3" type="button">
          {" "}
          Facebook Sign in{" "}
        </button>{" "}
        <br /> <br />
        <Link to="/register"> <h5 className="text-primary" >  New User ? </h5></Link> <br /> <br /><br /> <br />
      </form>
    </div>
  );
};

export default Login;
