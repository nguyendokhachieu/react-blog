import { api } from "./api";

export const CategoriesService = {
    getCategories: () => {
        return api.call().get('wp/v2/categories', {
            params: {
                page: 1, 
                per_page: 100
            }
        })
    }
}