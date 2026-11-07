import { useState } from 'react'

export default function SimpleForm() {
    const [formData, setFormData] = useState({ name: '', age: 13, email: '', pass: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Collected data:", formData);
    };

    const hasAtSymbol = formData.email.includes('@');

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="form">
                <h2>UDC Order Form</h2>
                <label>
                    Name:
                    <input
                        name="name"
                        value={formData.name}
                        required
                        onChange={handleChange}
                        placeholder="User"
                    ></input>
                </label>
                <label>
                    Age:
                    <input
                        name="age"
                        type="number"
                        required
                        min="13"
                        placeholder="13"
                        value={formData.age}
                        onChange={handleChange}
                    ></input>
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="hi@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    ></input>

                    {!hasAtSymbol ? (
                        <p className="error-text">Invalid email!</p>
                    ) : null}
                </label>
                <label>
                    Password:
                    <input
                        name="pass"
                        type="password"
                        required
                        minLength="6"
                        value={formData.pass}
                        onChange={handleChange}
                    ></input>

                    <br></br>

                    {formData.pass.length < 6 ? (
                        <span className="error-text">Password is too short!</span>
                    ) : null}
                </label>

                <button type="submit">
                    Submit Form
                </button>
            </form>
        </div>
    );
};