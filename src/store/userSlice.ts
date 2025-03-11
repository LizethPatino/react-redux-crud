import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

interface UsersState {
    users: User[];
    loading: boolean;
}

const initialState : UsersState = {
    users: [],
    loading: false,
}

const userSlice = createSlice({
 name: "users",
 initialState,
 reducers:{
    setUsers: (state, action : PayloadAction<User[]>) =>{
        state.users = action.payload;
    },
    addUser: (state, action : PayloadAction<User>) =>{
        const newUser = { ...action.payload, id: Date.now() }; 
        state.users.push(newUser);
    },
    deleteUser:(state, action : PayloadAction<number>) =>{
        state.users = state.users.filter( user => user.id !== action.payload);
    }
 } 
});

export const {setUsers, addUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;