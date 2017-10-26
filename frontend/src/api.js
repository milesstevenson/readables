const myHeaders = new Headers({
  'Content-Type': 'application/json',
  'Authorization': 'auth-placeholder'
});
const serverUrl = 'http://localhost:3001';

const get = (url) => fetch(`${serverUrl}/${url}`, { headers: myHeaders }).then((response) => response.json());
const getCategories = () => get(`categories`);
const getCategoryPosts = (category) => get(`${category}/posts`);
const getPosts = () => get(`posts`);
const getPostDetails = (id) => get(`posts/${id}`);
const getPostComments = (id) => get(`posts/${id}/comments`);
const getComment = (id) => get(`comments/${id}`);

const post = (url, param) => fetch(url, { method: `POST`, body: param, headers: myHeaders });
const addPost = (param) => post(`/posts`, param);
const votePost = (id, param) => post(`/posts/${id}`, param);
const addComment = (param) => post(`/comments`, param);
const voteComment = (id, vote) => post(`/comments/${id}`, vote);

const put = (url, param) => fetch(url, { method: `PUT` });
const editPost = (id, param) => put(`/posts/${id}`, param);
const editComment = (id, param) => put(`/comments/${id}`, param);

const del = (url) => fetch(url, { method: `DELETE` });
const deletePost = (id) => del(`/posts/${id}`);
const deleteComment = (id) => del(`/comments/${id}`);

export const api = {
  getCategories,
  getCategoryPosts,
  getPosts,
  getPostDetails,
  getPostComments,
  getComment,
  
  addPost,
  votePost,
  addComment,
  voteComment,
  
  editPost,
  editComment,
  
  deletePost,
  deleteComment
};
