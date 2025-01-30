import React from "react";
import { useState } from "react";
import MultiSelect from "multiselect-react-dropdown";
const SignUp = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState("");
    const [genres, setGenres] = useState([]);
    const [dob, setDOB] = useState("");
    const [gender, setGeder] = useState("");
    const [selectedgenres, setSelectedGenres] = useState([]);
    
    const genreslist = [
        { label: "Fiction", value: "fiction" },
        { label: "Non-Fiction", value: "nonfiction" },
        { label: "Fantasy", value: "fantasy" },
        { label: "Mystery", value: "mystery" },
        { label: "Thriller", value: "thriller" },
        { label: "Romance", value: "romance" }
    ];

    const addMemeber = (e) => {
        e.preventDefault();
        if (name != '' && email != '' && password != '' && age != '' && phone != '' && dob != "" && gender != "") {
            props.addToList(name, email, password, age, phone, dob, gender);
            setName('');
            setEmail('');
            setPassword('');
            setAge(0);
            setPhone('');
            setDOB('');
            setGeder('');
        }
        else {
            alert("Please fill all the fields");
        }
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChanege = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleGenresChange = (e) => {
        const options = event.target.options;
        const selected = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        setSelectedGenres(selected);
    }
    const handleGenderChange = (e) => {
        setGeder(e.target.value);
    }
    const handleDOBChange = (e) => {
        setDOB(e.target.value);
    }

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">SignUp</h2>
                <form className="signup-form">
                    {/* Left Section */}
                    <div className="form-left">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="number" id="age" placeholder="Enter your age" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone No.</label>
                            <input
                                type="text"
                                id="phone"
                                placeholder="Enter your phone number"
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
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select id="gender">
                                <option value="">Select</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </form>
                <button type="submit" className="signup-btn" onClick={addMemeber}>
                    SignUp
                </button>
            </div>
        </div>
    );
};

export default SignUp;
