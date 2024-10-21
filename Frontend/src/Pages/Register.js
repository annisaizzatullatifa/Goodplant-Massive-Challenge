import React, { useState } from "react";
import axios from "axios";
import "../Style/Register.css"
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "../Gambar/Loginbackground.png"

function Register () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/users', {
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate("/login");
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
                        <form onSubmit={handleSubmit}>
                             <h4 className="text-center">REGISTER</h4>
                             <p className="text-center">Get started today! Create your account by entering your details below</p>
                             <p className="has-text-centered">{msg}</p>
                             <div className="input-box" style={{marginLeft: '10px', marginTop: '30px'}}>
                                 <input className='text-dark' type="text" placeholder='Email' required 
                                  value={email} onChange={(e) => setEmail(e.target.value)} /> 
                             </div>
                             <div className="input-box" style={{marginLeft: '10px', marginTop: '10px'}}>
                                 <input className='text-dark' type="password" placeholder='Password' required
                                   value={password} onChange={(e) => setPassword(e.target.value)} /> 
                             </div>
                             <div className="input-box" style={{marginLeft: '10px', marginTop: '10px'}}>
                                 <input className='text-dark' type="password" placeholder='Confirm Password' required
                                   value={confPassword} onChange={(e) => setConfPassword(e.target.value)} /> 
                             </div>
                             <div className="remember-forgot" style={{ marginTop: '20px'}}>
                                 <label className="text-dark text-decoration-none" >
                                     <input type="checkbox" style={{ marginLeft: '15px'}} />
                                     <a>I agree to the Terms of service and Privacy policy</a>
                                </label>
                            </div>
                            {/* Menggunakan elemen <button> dengan type="submit" */}
                            <button type="submit" className="button" style={{ marginTop: '30px', color: '#434738' }}>Sign Up</button>
                             <div className="register-link">
                                <p>Have an Account? <a href="/login">Login</a></p>
                             </div>
                         </form>
                     </div>
                 </div>
            </Container>

            
        </div>
    )
}

export default Register;
