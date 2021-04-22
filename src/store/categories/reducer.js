import { ACT_GET_CATEGORIES_LIST } from "./actions";

export function generateCategoryHashKey(id) {
    return "category-" + id;
}

const initCategoriesState = {
    categoriesHashObj: {},
};

// hashCategories (hash table)
/**
 * 
 * chuyển cấu trúc mảng [] thành cấu trúc bảng băm {} để chỉ cần lặp 1 lần đầu, lần sau chỉ cần chấm tới.
 */

const categoriesReducer = (state = initCategoriesState, action) => {
    if (action.type === ACT_GET_CATEGORIES_LIST) {
        let hashObj = {};
        action.payload.categoriesList.forEach(category => {
            let key = generateCategoryHashKey(category.id);
            let value = {
                id: category.id,
                name: category.name,
                slug: category.slug,
            }
            hashObj[key] = value;
        });

        return {
            ...state,
            categoriesHashObj: hashObj,
        }
    }
    return state;
}

export default categoriesReducer;