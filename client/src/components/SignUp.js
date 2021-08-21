import React,{useState} from "react";
import { NavLink} from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import singup from '../images/people.png';



const SignUp = () => {
  const history = useHistory();
     const [user, setuser] = useState({
       name: "",
       email: "",
       phone: "",
       work: "",
       password: "",
       cpassword: ""
     });
     let name, value;
     const handleInputs = (e) => {  
      
          name = e.target.name;
         value = e.target.value

           setuser({...user, [name]:value});
      
     }

     const PostData = async (e) => {
         e.preventDefault();
          const {name, email, phone, work, password, cpassword} = user;
          const response = await fetch('/register', {
           method: "POST",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify({
             name, email, phone, work, password, cpassword
            })
          });
          const data = await response.json();
           
          
        

           if(data.status === 422 || !data){
             window.alert('Invalid Registration');
             console.log('Invalid Registration')
           } else {
             window.alert('Registraion Succesful');
             console.log('succesful registration')
             history.push('/login')
           }
     }
  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" id="register-form" className="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i class="zmdi zmdi-assignment-account"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="Your Profession"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Your confirm password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={PostData}
                  />
                </div>
              </form>
              <div className="signup-image">
                <figure>
                  <img src={singup} alt="registration pic" />
                </figure>
                <NavLink to="/login" className="signup-image-link">
                  Iam Already Registered
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
