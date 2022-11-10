import { createSlice } from '@reduxjs/toolkit';

const activitySlice = createSlice({
    name: 'activity',
    initialState: {
        activities: [],
        activity: [],
    },
    reducers: {
        getActivities(state, action) {
            return {
                ...state,
                activities: action.payload,
            };
        },
        getActivity(state, action) {
            return {
                ...state,
                activity: state.activities.find((activity) => activity.id
                    == action.payload)
            },
        },
    }
});

export const activityActions = activitySlice.actions;
export default activitySlice;