import React, { useState } from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        const login='alumini';
        this.state = {
            rightPanelActive: false
        };
    }

    handleSignInClick = () => {
        this.setState({ rightPanelActive: false });
    };

    handleSignUpClick = () => {
        this.setState({ rightPanelActive: true });
    };

    render() {
        return (
            <div className={`container ${this.state.rightPanelActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Register</h1>
                        <input type="text" name="enrollmentId" placeholder="Enrollment Id" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <select>
                            <option value="" disabled selected>Choose a Role</option>
                            <option>Alumni</option>
                            <option>Student</option>
                            <option>Host</option>
                        </select>
                        
                        <select>
                            <option value="" disabled selected>Choose your Field</option>
                            <option>Data Science</option>
                            <option>Cyber Security</option>
                            <option>Machine Learning</option>
                            <option>FrontEnd Developer</option>
                            <option>BackEnd Developer</option>
                        </select>
                        <button>Register</button>
                    </form>
                </div>

                <div className="form-container sign-up-container">
                    <form>
                        <h1>Login</h1>
                        <input type="text" name="enrollmentId" placeholder="Enrollment Id" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <a href="#">Forgot Password</a>
                        <button>Login</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>New User!</h1>
                            <p>To start your journey with us,<br></br>First register with your personal info.</p>
                            <button className="ghost" onClick={this.handleSignInClick}>Register</button>
                            
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome to LinkUp</h1>
                            <p>Already a user? Login with your personal info.</p>
                            <button className="ghost" onClick={this.handleSignUpClick}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
