import { PostService } from "./../../services/posts";

export const ACT_SEARCH_BY_CATEGORIES = "ACT_SEARCH_BY_CATEGORIES";

export const actSearchPostsByCategoriesAsync = (page = 1, perPage = 2, categories) => {
    return (dispatch) => {
        let queryObj = {
            page: page,
            per_page: perPage,
            categories,
        }
        PostService.getList(queryObj).then(data => {
            const totalPosts = Number(data.headers['x-wp-total']);
            const totalPage = Number(data.headers['x-wp-totalpages']);
            const currentPage = page;
            const postsPaging = data.data;

            dispatch(actSearchPostsByCategories(postsPaging, totalPosts, perPage, totalPage, currentPage));
        }).catch(e => {
            console.log("ERROR FETCH WHEN SEARCH BY CATEGORY", e);
        });
    }
}

const actSearchPostsByCategories = (postsPaging, totalPosts, perPage, totalPage, currentPage) => {
    return {
        type: ACT_SEARCH_BY_CATEGORIES,
        payload: {
            postsPaging, 
            totalPosts, 
            perPage, 
            totalPage, 
            currentPage
        }
    }
}