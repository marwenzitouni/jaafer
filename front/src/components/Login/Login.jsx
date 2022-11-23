import React from 'react'
import { login } from '../../Redux/actions/userActions'
import { useDispatch } from "react-redux";
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch();
     const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      login({
        email: data.get("email"),
        password: data.get("password"),
      },navigate)
    );
  };
  return (
    <div>
      
      <div className="Auth-form-container">
        <form className="Auth-form" method='POST' onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" /*link to register*/>
                
                <Link to="/register">Sign Up</Link>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
              name='email'
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
              name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
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
    
  
    </div>
  )
}

export default Login