import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        articles: [],
        article: [],
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
                article: articles.find((article) => state.article.id 
                    == action.payload)
            }
        },
    }
});

export const articleActions = articleSlice.actions;
export default articleSlice;