import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/userSlice'; // Adjust import as necessary

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
