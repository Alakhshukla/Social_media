import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
let newPostList = currPostList;
  if(action.type===DELETE_POST){
    (newPostList=currPostList.filter( post => post.id !== action.payload.postId)
      )}
      else if (action.type===ADD_POST){
        newPostList = [action.payload, ...currPostList]
      }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
   dispatchPostList({
    type: "ADD_POST",
    payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        user_id: userId,
        tags: tags,
      }
    
   })
  };

  const deletePost = (postId) => {
dispatchPostList({
  type: "DELETE_POST",
  payload: {
    postId,
  },
})
  };

  return (
    <PostList.Provider value={{postList, addPost, deletePost}}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "gym",
    body: "i was busy but gym is mandotory",
    reaction: 50,
    user_id: "user_3",
    tags: ["#gym", "#workout"],
  },
  {
    id: 2,
    title: "market",
    body: "Sometime shoping for ourselves feel like tharepy",
    reaction: 73,
    user_id: "user_9",
    tags: ["#Market", "#Shoping", "#selfLove"],
  }
];

export default PostListProvider;
