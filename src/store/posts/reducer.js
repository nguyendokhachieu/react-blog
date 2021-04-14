import { ACT_FETCH_LATEST_POSTS, ACT_FETCH_POPULAR_POSTS } from "./actions";

const initPostsState = {
    popularPosts: [],
    latestPosts: [],
    posts: [],
}

const postsReducer = (state = initPostsState, action) => {
    if (action.type === ACT_FETCH_LATEST_POSTS) {
        return {
            ...state,
            latestPosts: action.payload.latestPosts,
        };
    } else if (action.type === ACT_FETCH_POPULAR_POSTS) {
        return {
            ...state,
            popularPosts: action.payload.popularPosts,
        }
    }

    return state;
}

export default postsReducer;