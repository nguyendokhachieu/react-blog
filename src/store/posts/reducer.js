import { ACT_FETCH_LATEST_POSTS, ACT_FETCH_POPULAR_POSTS, ACT_FETCH_POSTS } from "./actions";

const initPostsState = {
    popularPosts: [],
    latestPosts: [],
    posts: {
        postsPaging: [],
        currentPage: 1,
        perPage: 2,
        totalPage: 0,
        totalPosts: 0,
    },
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
    } else if (action.type === ACT_FETCH_POSTS) {
        if (action.payload.currentPage === 1) {
            return {
                ...state,
                posts: {
                    postsPaging: action.payload.posts,
                    currentPage: action.payload.currentPage,
                    perPage: action.payload.perPage,
                    totalPage: action.payload.totalPage,
                    totalPosts: action.payload.totalPosts,
                }
            }
        }
        return {
            ...state,
            posts: {
                postsPaging: [
                    ...state.posts.postsPaging,
                    ...action.payload.posts,
                ],
                currentPage: action.payload.currentPage,
                perPage: action.payload.perPage,
                totalPage: action.payload.totalPage,
                totalPosts: action.payload.totalPosts,
            }
        }
    }

    return state;
}

export default postsReducer;