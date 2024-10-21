import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/userSlice';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await dispatch(registerUser({ username, password })).unwrap();
            // Optionally redirect or show success message here
            console.log("User registered successfully!");
        } catch (error) {
            console.error("Registration failed: ", error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Registration;
