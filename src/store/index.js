import { applyMiddleware } from "redux";
import { createStore, combineReducers } from "redux";
import postsReducer from "./posts/reducer";
import categoriesReducer from "./categories/reducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    categories: categoriesReducer,
});

const middleware = (store) => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch);
    }

    return next(action);
}

const store = createStore(rootReducer, applyMiddleware(middleware));

export default store;