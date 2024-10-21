import React, { useState } from "react";
import axios from "axios";
import "../Style/Login.module.css"
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: email,
                password: password,
            
            });
            navigate("/Homepage");
        } catch (error) {
           if(error.response){
            setMsg(error.response.data.msg);
           }
        }
    };


    return (
     
        <div className='login-form'>
        <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
            <div className="wrapper">
                <div className="wrapper2">
                    <form onSubmit={Auth} action="">
                         <h4 className="text-center mb-3">Login</h4>
                         <p className="text-center mb-3">Enter the email and password correctly</p>
                         <p className="has-text-centered">{msg}</p>
                         <div className="input-box" style={{marginLeft: '10px'}}>
                             <input className='text-dark' type="text" placeholder='Email' required 
                             value={email} onChange={(e) => setEmail(e.target.value)} /> 
                         </div>
                         <div className="input-box" style={{marginLeft: '10px', marginTop: '25px'}}>
                             <input className='text-dark' type="password" placeholder='Password' required
                              value={password} onChange={(e) => setPassword(e.target.value)} /> 
                         </div>
                         <div className="remember-forgot" style={{ marginTop: '10px'}}>
                             <label className="text-dark text-decoration-none">
                                 <input type="checkbox" />
                                 Remember Me
                            </label>
                             <a href="/lupa" className="text-dark text-decoration-none">Forget Password?</a>
                        </div>
                       <button type="submit" className="button" style={{ marginTop: '30px', color: '#434738'}}>Login</button>
                         <div className="register-link">
                            <p>Don't Have an account? <a href="/register">Register Now</a></p>
                         </div>
                     </form>
                 </div>
             </div>
        </Container>
    </div>
    )
}

export default Login;
