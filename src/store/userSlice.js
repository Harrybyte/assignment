import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Register user
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async ({ username, password }) => {
        const response = await axios.post('http://localhost:5000/api/register', { username, password });
        return response.data;
    }
);

// Fetch users
export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async () => {
        const response = await axios.get('http://localhost:5000/api/users');
        return response.data;
    }
);

// Login user
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ username, password }) => {
        const response = await axios.post('http://localhost:5000/api/login', { username, password });
        return response.data;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        // Other state as necessary
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.users.push(action.payload); // Add new user to the state
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload; // Set the users in state
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                // Handle login success
                // You might want to store user info or token here
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.error(action.error.message);
            });
    },
});

export const { } = userSlice.actions; // Export your actions here if you add any
export default userSlice.reducer;
