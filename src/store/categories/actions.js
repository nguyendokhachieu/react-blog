import { CategoriesService } from "./../../services/categories";

export const ACT_GET_CATEGORIES_LIST = "ACT_GET_CATEGORIES_LIST";

export const actGetCategoriesAsync = () => {
    return (dispatch) => {
        CategoriesService.getCategories().then(data => {
            dispatch(actGetCategories(data.data));
        }).catch(e => {
            console.log("ERROR FETCH", e);
        });
    }
}

const actGetCategories = (categoriesList) => {
    return {
        type: ACT_GET_CATEGORIES_LIST,
        payload: {
            categoriesList,
        }
    }
}