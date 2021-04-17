import { ACT_GET_CATEGORIES_LIST } from "./actions";

const initCategoriesState = {
    categoriesList: [],
};

const categoriesReducer = (state = initCategoriesState, action) => {
    if (action.type === ACT_GET_CATEGORIES_LIST) {
        return {
            ...state,
            categoriesList: action.payload.categoriesList,
        }
    }
    return state;
}

export default categoriesReducer;