import React, { useState } from "react";
import './css/login.css'; 

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rightPanelActive: false,
            formData: {
                enrollmentId: '',
                email: '',
                password: ''
            }
        };
    }

    handleSignInClick = () => {
        this.setState({ rightPanelActive: false });
    };

    handleSignUpClick = () => {
        this.setState({ rightPanelActive: true });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            }
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { enrollmentId, email, password } = this.state.formData;

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ e_id: enrollmentId, email, password })
            });
            const result = await response.json();

            if (result.success) {
                if (result.role === 'student') {
                    // Redirect to student dashboard
                    window.location.href = '/student-dashboard';
                } else {
                    // Redirect to alumni dashboard
                    window.location.href = '/alumni-dashboard';
                }
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    };

    render() {
        return (
            <div id="main-L" className={`container ${this.state.rightPanelActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-in-container">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                        <input 
                            type="text" 
                            name="enrollmentId" 
                            placeholder="Enrollment Id" 
                            value={this.state.formData.enrollmentId}
                            onChange={this.handleInputChange}
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={this.state.formData.email}
                            onChange={this.handleInputChange}
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={this.state.formData.password}
                            onChange={this.handleInputChange}
                        />
                        <a href="#">Forgot Password</a>
                        <button type="submit">Login</button>
                    </form>
                </div>

                <div className="form-container sign-up-container">
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

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>New User!</h1>
                            <p>To start your journey with us,<br />First register with your personal info.</p>
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






































/*import React, { useState } from "react";
import './css/login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rightPanelActive: false,
            enrollmentId: '',
            email: '',
            password: '',
            role: '',
            field: ''
        };
    }

    handleSignInClick = () => {
        this.setState({ rightPanelActive: false });
    };

    handleSignUpClick = () => {
        this.setState({ rightPanelActive: true });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { enrollmentId, email, password, role, field } = this.state;

        try {
            if (this.state.rightPanelActive) {
                // Registration
                const response = await fetch('http://localhost:5000/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ enrollmentId, email, password, role, field })
                });
                const result = await response.json();
                // Handle registration response
                if (result.success) {
                    alert('Registration successful');
                } else {
                    alert('Registration failed');
                }
            } else {
                // Login
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ e_id: enrollmentId, password })
                });
                const result = await response.json();
                // Handle login response
                if (result.success) {
                    alert('Login successful');
                    // Redirect or perform any post-login action
                } else {
                    alert('Login failed');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    };

    render() {
        return (
            <div id="main-L" className={`container ${this.state.rightPanelActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-in-container">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                        <input
                            type="text"
                            name="enrollmentId"
                            placeholder="Enrollment Id"
                            value={this.state.enrollmentId}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <a href="#">Forgot Password</a>
                        <button type="submit">Login</button>
                    </form>
                </div>

                <div className="form-container sign-up-container">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Register</h1>
                        <input
                            type="text"
                            name="enrollmentId"
                            placeholder="Enrollment Id"
                            value={this.state.enrollmentId}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <select
                            name="role"
                            value={this.state.role}
                            onChange={this.handleInputChange}
                        >
                            <option value="" disabled>Select Role</option>
                            <option>Alumni</option>
                            <option>Student</option>
                            <option>Host</option>
                        </select>
                        <select
                            name="field"
                            value={this.state.field}
                            onChange={this.handleInputChange}
                        >
                            <option value="" disabled>Select Field</option>
                            <option>Data Science</option>
                            <option>Cyber Security</option>
                            <option>Machine Learning</option>
                            <option>FrontEnd Developer</option>
                            <option>BackEnd Developer</option>
                        </select>
                        <button type="submit">Register</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>New User!</h1>
                            <p>To start your journey with us,<br />First register with your personal info.</p>
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
























/*import React, { useState } from "react";
import './css/login.css'; 




class Login extends React.Component {
    constructor(props) {
        super(props);
        
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
            <div id="main-L" className={`container ${this.state.rightPanelActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Login</h1>
                        <input type="text" name="enrollmentId" placeholder="Enrollment Id" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <a href="#">Forgot Password</a>
                        <button>Login</button>
                    </form>
                    
                </div>

                <div className="form-container sign-up-container">
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



/*const Login = () => {
    const [rightPanelActive, setRightPanelActive] = useState(false);
    const [formData, setFormData] = useState({
        enrollmentId: '',
        email: '',
        password: '',
        role: '',
        field: ''
    });

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };

    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { enrollmentId, email, password, role } = formData;

        try {
            // Handle login or registration based on the rightPanelActive state
            if (rightPanelActive) {
                // Registration
                const response = await fetch('http://localhost:5000/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ enrollmentId, email, password, role, field: formData.field })
                });
                const result = await response.json();
                // Handle registration response
                if (result.success) {
                    alert('Registration successful');
                } else {
                    alert('Registration failed');
                }
            } else {
                // Login
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ enrollmentId, email, password })
                });
                const result = await response.json();
                // Handle login response
                if (result.success) {
                    alert('Login successful');
                    // Redirect or perform any post-login action
                } else {
                    alert('Login failed');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    };

    return (
        <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`}>
            <div className="form-container sign-in-container">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        name="enrollmentId"
                        placeholder="Enrollment Id"
                        value={formData.enrollmentId}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <a href="#">Forgot Password</a>
                    <button type="submit">Login</button>
                </form>
            </div>

            <div className="form-container sign-up-container">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <input
                        type="text"
                        name="enrollmentId"
                        placeholder="Enrollment Id"
                        value={formData.enrollmentId}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Choose a Role</option>
                        <option>Alumni</option>
                        <option>Student</option>
                        <option>Host</option>
                    </select>
                    <select
                        name="field"
                        value={formData.field}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Choose your Field</option>
                        <option>Data Science</option>
                        <option>Cyber Security</option>
                        <option>Machine Learning</option>
                        <option>FrontEnd Developer</option>
                        <option>BackEnd Developer</option>
                    </select>
                    <button type="submit">Register</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>New User!</h1>
                        <p>To start your journey with us,<br />First register with your personal info.</p>
                        <button className="ghost" onClick={handleSignInClick}>Register</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Welcome to LinkUp</h1>
                        <p>Already a user? Login with your personal info.</p>
                        <button className="ghost" onClick={handleSignUpClick}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

/*import React, { useState } from "react";
import './login.css'; */
