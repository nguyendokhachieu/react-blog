import { PostService } from "./../../services/posts";

export const ACT_FETCH_LATEST_POSTS = "ACT_FETCH_LATEST_POSTS";
export const ACT_FETCH_POPULAR_POSTS = "ACT_FETCH_POPULAR_POSTS";
export const ACT_FETCH_POSTS = "ACT_FETCH_POSTS";

// ============ ACTION FETCH LATEST POSTS ASYNC ============
export const actFetchLatestPostAsync = () => {
  return (dispatch) => {
    let queryObj = {
      page: 1,
      per_page: 3,
    };

    PostService.getList(queryObj)
      .then((data) => {
        dispatch(actFetchLatestPost(data.data));
      })
      .catch((e) => {
        console.log("ERROR FETCH", e);
      });
  };
};

const actFetchLatestPost = (latestPosts) => {
  return {
    type: ACT_FETCH_LATEST_POSTS,
    payload: {
      latestPosts,
    },
  };
};


// ============ ACTION FETCH POPULAR POSTS ASYNC ============
export const actFetchPopularPostAsync = () => {
  let queryObj = {
    page: 1,
    per_page: 4,
    orderby: "post_views",
  };

  return (dispatch) => {
    PostService.getList(queryObj)
      .then((data) => {
        dispatch(actFetchPopularPosts(data.data));
      })
      .catch((e) => {
        console.log("ERROR FETCH", e);
      });
  };
};

const actFetchPopularPosts = (popularPosts) => {
  return {
    type: ACT_FETCH_POPULAR_POSTS,
    payload: {
      popularPosts,
    }
  }
}


// ============ ACTION FETCH POSTS ASYNC ============
export const actFetchPostsAsync = (currentPage = 1, perPage = 2) => {
  return async (dispatch) => {
    try {
      const data = await PostService.getList({page: currentPage, per_page: perPage});
      const posts = data.data;
      const totalPosts = Number(data.headers['x-wp-total']);
      const totalPage = Number(data.headers['x-wp-totalpages']);
      dispatch(actFetchPosts(posts, currentPage, perPage, totalPage, totalPosts));
    } catch (e) {
      console.log("ERROR FETCH", e);
    }

  }
}

const actFetchPosts = (posts, currentPage, perPage, totalPage, totalPosts) => {
  return {
    type: ACT_FETCH_POSTS,
    payload: {
      posts,
      currentPage,
      perPage,
      totalPage,
      totalPosts,
    }
  }
}