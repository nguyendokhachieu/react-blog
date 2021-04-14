import { api } from "./api";

export const PostService = {
    getList: (queryObj) => {
        let queryString = '';
        for (let key in queryObj) {
            queryString += key + '=' + queryObj[key] + '&';
        }
        queryString = queryString.substr(0, queryString.length - 1);

        let path = 'wp/v2/posts?' + queryString;
        
        return api.call().get(path);
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