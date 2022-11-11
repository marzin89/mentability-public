import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        articles: [],
        article: [],
        numberOfArticles: 3,
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
            switch(action.type) {
                case 'increment':
                    if ((state.numberOfArticles + 3) <= state.articles.length) {
                        return {
                            ...state,
                            numberOfArticles: state.numberOfArticles + 3,
                        };
                    
                    } else {
                        return state;
                    }

                case 'decrement':
                    if ((state.numberOfArticles) > 3) {
                        return {
                            ...state,
                            numberOfArticles: state.numberOfArticles - 3,
                        }
                    }
            };
        },
    }
});

export const articleActions = articleSlice.actions;
export default articleSlice;