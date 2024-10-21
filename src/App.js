import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css'; // Adjust the path if necessary

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Login />} /> {/* Redirect to Login as default */}
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
