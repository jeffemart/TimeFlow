import React, { useState } from "react";
import './Login.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'; // Importe o componente Link

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="card">
          <div className="top-div">
              <h2>Título ou Logo</h2>
              <h4>Bem vindo de volta 😎</h4>
              <p>Novo por aqui?<Link to="#"> Criar Conta</Link></p> {/* Use o componente Link */}
          </div>
          
          <div className="input-text">
              <input type="text" required="required" />
              <span>Email</span>
              <i className="fa fa-envelope-o"></i>
          </div>
          <div className="input-text">
              <input
                type={showPassword ? "text" : "password"}
                required="required"
                id="password_input"
              />
              <span>Password</span>
              <i
                className={`fa ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                } passcode`}
                onClick={togglePasswordVisibility}
              ></i>
              <Link to="#">Forgot your password?</Link> {/* Use o componente Link */}
          </div>
        
          <div className="remember">
              <div> 
                  <input type="checkbox" name="rr" id="r1" /> 
                  <label htmlFor="r1">Remember your password</label> 
              </div>
          </div>
          <div className="sign-in">
              <button>Sign in</button>
          </div>
          
          <div className="or">
              <small>or sign in with</small>
          </div>
          <hr />
          <div className="google">
              <button><i className="fa fa-google"></i> Google</button>
          </div>
      </div>   
    </div>
  )
}

export default UserLogin;
