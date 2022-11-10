import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        articles: [],
        article: [],
        numberOfArticles: 0,
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
                    == action.payload)
            }
        },
        setNumberOfArticles(state) {
            if ((numberOfArticles + 3) <= state.articles.length) {
                return {
                    ...state,
                    numberOfArticles: numberOfArticles += 3,
                };
            
            } else {
                return state;
            }
        },
    }
});

export const articleActions = articleSlice.actions;
export default articleSlice;