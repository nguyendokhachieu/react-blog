import { ACT_SEARCH_BY_CATEGORIES } from "./actions";

const initSearchState = {
    searchPosts: {
        postsPaging: [],
        currentPage: 1,
        perPage: 2,
        totalPage: 0,
        totalPosts: 0,
    }
}

const searchReducer = (state = initSearchState, action) => {
    if (action.type === ACT_SEARCH_BY_CATEGORIES) {
        if (action.payload.currentPage === 1) {
            return {
                ...state,
                searchPosts: {
                    postsPaging: action.payload.postsPaging,
                    currentPage: action.payload.currentPage,
                    perPage: action.payload.perPage,
                    totalPage: action.payload.totalPage,
                    totalPosts: action.payload.totalPosts,
                }
            }
        }
        return {
            ...state,
            searchPosts: {
                postsPaging: [
                    ...state.searchPosts.postsPaging,
                    ...action.payload.postsPaging,
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

export default searchReducer;