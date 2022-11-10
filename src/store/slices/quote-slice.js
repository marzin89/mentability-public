import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        content: '',
        author: '',
        errorMessage: '',
    },
    reducers: {
        setRandomQuote(state, action) {
            return {
                ...state,
                content: action.payload.content,
                author: action.payload.author,
            };
        },
        setErrorMessage(state, action) {
            return {
                ...state,
                errorMessage: action.payload,
            };
        }
    }
});

export const quoteActions = quoteSlice.actions;
export default quoteSlice;