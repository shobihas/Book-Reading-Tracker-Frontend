import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState("");
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 

    const handleSignUp = async (e) => {
        e.preventDefault();

        
        if (!name || !email || !password || !age || !phone || !dob || !gender) {
            setError("Please fill all the fields.");
            return;
        }

        try {
           
            const response = await axios.post("http://localhost:3000/signup", {
                name,
                email,
                password,
                age,
                phone,
                dob,
                gender,
            });

            
            if (response.data.message === "User created successfully") {
                alert("Signup successful! You can now log in.");
                navigate("/signin"); 
            }
        } catch (error) {
            
            if (error.response && error.response.data.message) {
                setError(error.response.data.message); 
            } else {
                setError("An error occurred during signup. Please try again.");
            }
            console.error("Signup error:", error);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">SignUp</h2>
                {error && <p className="error-message">{error}</p>} 
                <form className="signup-form" onSubmit={handleSignUp}>
                    <div className="form-left">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                id="age"
                                placeholder="Enter your age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone No.</label>
                            <input
                                type="text"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-right">
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                className="input-date"
                                value={dob}
                                onChange={(e) => setDOB(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <button type="submit" className="signup-btn">
                        SignUp
                    </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default SignUp;