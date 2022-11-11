import { createSlice } from '@reduxjs/toolkit';

const activitySlice = createSlice({
    name: 'activity',
    initialState: {
        activities: [],
        activity: [],
        numberOfActivities: 3,
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
            };
        },
        setNumberOfActivities(state, action) {
            switch(action.type) {
                case 'increment':
                    if ((state.numberOfActivities + 3) <= state.activities.length) {
                        return {
                            ...state,
                            numberOfActivities: state.numberOfActivities + 3,
                        };
                    
                    } else {
                        return state;
                    }

                case 'decrement':
                    if ((state.numberOfActivities) > 3) {
                        return {
                            ...state,
                            numberOfActivities: state.numberOfActivities - 3,
                        }
                    }
            };
        },
    }
});

export const activityActions = activitySlice.actions;
export default activitySlice;