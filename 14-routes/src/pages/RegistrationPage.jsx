import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./RegistrationPage.css"

function Register() {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [mail, setMail] = useState("");
    const [mailRender, setEmailField] = useState(false);

    const onAgeChange = (e) => {
        const age= e.target.value;
        setAge(age);

        const showEmail = parseInt(age, 10) >= 18;
        setEmailField(showEmail);
    }



    return (
        <>
            <div className="page-container">
                <Link to="/" className="nav-button">Back</Link>
                <h1>Registration Simulator 1.0</h1>
                <form>
                    <div className="form-group">
                        <label>
                            Name:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
                        </label>
                    </div>

                    {name && (
                    <div className="form-group">
                            <label>
                            Age:
                            <input type="number" value={age} onChange={onAgeChange} required></input>
                        </label>
                    </div>
                    )}

                    {name && age && mailRender && (
                    <div className="form-group">
                            <label>
                            Email:
                            <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} required></input>
                        </label>
                    </div>
                    )}

                    <button type="submit" disabled={!name || !age || (!mail)}>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register
