import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../images/singup.jpg'

const Login = () => {
    return(
        <>
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title2">Login</h2>
                <form action="" id="register-form" className="register-form">
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <i class="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email2"
                      autoComplete="off"
                      placeholder="Your email"
                    />
                  </div>
                 
                 
                  <div className="form-group">
                    <label htmlFor="password">
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password2"
                      autoComplete="off"
                      placeholder="Your password"
                    />
                  </div>
                
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="login"
                    />
                  </div>
                </form>
                  <div className="signup-image">
                  <figure>
                    <img src={image} alt="registration pic" />
                  </figure>
                  <NavLink to="/login" className="signin-image-link">
                    Create An Account
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default Login
