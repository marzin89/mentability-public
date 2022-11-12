import { createSlice } from '@reduxjs/toolkit';

const activitySlice = createSlice({
    name: 'activity',
    initialState: {
        activities: [],
        activity: [],
        text: [],
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
                    == action.payload),
            };
        },
        splitTextIntoParagraphs(state, action) {
            if (action.payload.includes('\r\n\r\n')) {
                return {
                    ...state,
                    text: action.payload.split('\r\n\r\n'),
                };
            
            } else {
                return {
                    ...state,
                    text: action.payload,
                };
            }
        },
    }
});

export const activityActions = activitySlice.actions;
export default activitySlice;