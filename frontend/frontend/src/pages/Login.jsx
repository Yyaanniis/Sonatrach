import React, { useState } from 'react';
import '../styles/loginsignup.css';
import usericon from '../assets/person.png';
import emailicon from '../assets/email.png';
import passwordicon from '../assets/password.png';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";



function Login({}) {sss

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [route, setRoute] = useState("/api/token/");
  const [method, setMethod] = useState("login");
  const [action, setAction] = useState(method === "login" ? "Login" : "Sign Up");
  


  const name = method === "login" ? "Login" : "Register";


  const handleSubmit = async (e) => {
    localStorage.clear()
    setLoading(true);
    e.preventDefault();

    try {
        const res = await api.post(route, { username, password })
        if (method === "login") {
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/userpro")
        } else {
            navigate("/userhome")
        }
    } catch (error) {
        alert(error)
    } finally {
        setLoading(false)
    }
};

const handleButtonClick = (newMethod, newAction, newRoute) => {
  setAction(newAction);
  setMethod(newMethod); 
  setRoute(newRoute);
};


  return (
    <div className='bodya'>
      <div className='containeras'>
        <div className="submit-container">
          <div className={action === "Login" ? "submit active gray" : "submit gray"} onClick={() =>   {handleButtonClick("login", "Login","/api/token/")}}>Login</div>
          <div className={action === "Sign Up" ? "submit active gray" : "submit gray"} onClick={() => { handleButtonClick("register", "Sign Up","/api/user/register/")}}>Sign up</div>
        </div>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          {action === "Sign Up" && (
            <div className="input">
              <img src={usericon} alt="" />
              <input type="text" placeholder='Name' value={username} onChange={e => setUsername(e.target.value)} />
            </div>
          )}
          <div className="input">
            <img src={emailicon} alt="" />
            <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="input">
            <img src={passwordicon} alt="" />
            <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {action === "Login" && (
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
          )}
          
          <div className="submit-button">
          
          <button type="submit" className="submit">Envoyer</button>
          
          </div>
        </form>
      </div>
    </div>
  );
}


export default Login;
