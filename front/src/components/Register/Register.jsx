
import React from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../Redux/actions/userActions";
import "./register.css"
export default function Register() {

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      register(
        {
          email: data.get("email"),
          password: data.get("password"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
        },
        navigate
      )
    );
  };

  // let [authMode, setAuthMode] = useState("signin")

  // const changeAuthMode = () => {
  //   setAuthMode(authMode === "signin" ? "signup" : "signin")
  // }

 

  return (
    <div className="Auth-form-container">
      <form method="POST" onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" /*link to login page*/ >
              
           <Link to="/login">Sign In</Link>   
            </span>
          </div>
          <div className="form-group mt-3">
            <label>firstName</label>
            <input
                name="firstName"
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>lastName</label>
            <input
              type="text"
              name="lastName"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit"  className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot password?
          </p>
        </div>
      </form>
    </div>
  )
}