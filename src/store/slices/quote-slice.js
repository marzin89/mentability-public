import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quotes: [],
        content: '',
        author: '',
    },
    reducers: {
        getQuotes(state, action) {
            return {
                ...state,
                quotes: action.payload,
            };
        },
        setRandomQuote(state, action) {
            return {
                ...state,
                content: action.payload.content,
                author: action.payload.author,
            };
        },
    }
});

export const quoteActions = quoteSlice.actions;
export default quoteSlice;