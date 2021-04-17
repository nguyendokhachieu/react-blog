import { api } from "./api";

export const PostService = {
    getList: ({
        page = 1,
        per_page = 3,
        ...restParams
    }) => {
        return api.call().get('wp/v2/posts', {
            params: {
                page,
                per_page,
                ...restParams,
            }
        })
    }
}

/**
 * Chỗ nào muốn gọi API dùng PostService
 
  PostService.getList({
    page: 1,
    per_page: 3
  })
 * 
*/