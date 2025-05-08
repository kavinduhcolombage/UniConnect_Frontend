import { createSlice } from "@reduxjs/toolkit";
import { updateProfile } from "../Services/ProfileService";

const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {},
    reducers: {
        changeProfile: (state, action) => {
            // Directly modify the state
            Object.assign(state, updateProfile(action.payload));
        },
        setProfile: (state, action) => {
            // Directly modify the state
            Object.assign(state, action.payload);
        }
    }
});

export const { changeProfile, setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;