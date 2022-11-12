import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        articles: [],
        article: [],
        text: [],
    },
    reducers: {
        getArticles(state, action) {
            return {
                ...state,
                articles: action.payload,
            };
        },
        getArticle(state, action) {
            return {
                ...state,
                article: state.articles.find((article) => article.id 
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

export const articleActions = articleSlice.actions;
export default articleSlice;