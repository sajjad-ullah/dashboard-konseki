import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './login.css';

export default function Login({ show, setShow }) {
    setShow(false);
    const { innerWidth: width, innerHeight: height } = window;
    const [loginData, setLoginData] = useState();
    let history = useHistory();

    return (
        <div className='container' style={{ marginLeft: width / 2 * 0.65, justifyContent: 'center', alignItems: 'center' }}>
            <section>
                <div class="color"></div>
                <div class="color"></div>
                {/* <div class="color"></div> */}
                <div className='box'>
                    <div className='containerr' style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <div className='form' >
                            <h2>Login Form</h2>
                            <form>
                                <div className='inputBox'>
                                    <input type="email" placeholder="Enter Email" required />
                                </div>
                                <div className='inputBox'>
                                    <input type="password" placeholder="Enter Password" required />
                                </div>
                              
                                    <div className='inputBox'>
                                        <input type="submit" value="Login" onClick={(e) => {
                                            if (e.keyCode === 13) {
                                                alert("error")
                                                e.preventDefault();
                                            } else {
                                                
                                                setShow(true);
                                                history.push("/home");
                                            }
                                        }
                                        } />
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
