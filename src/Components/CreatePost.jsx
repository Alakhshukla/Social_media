import { useContext, useRef } from "react";
import { PostList } from "../../Store/post-list-Store";


const CreatePost = () => {

 const {addPost} = useContext(PostList)

 const userIdElement= useRef();
 const postTitleElement= useRef();
 const postBodyElement= useRef();
 const reactionElement= useRef();
 const tagsElement= useRef();

  const handleSubmit = (event)=>{
event.preventDefault()
const userId = userIdElement.current.value;
const postTitle = postTitleElement.current.value;
const postBody = postBodyElement.current.value;
const reaction = reactionElement.current.value;
const tags = tagsElement.current.value.split(" ");

addPost(userId, postTitle, postBody, reaction, tags);
  }

  return (
    <form className = "createPost formStyle"  onSubmit={handleSubmit}>
     <div className="mb-3">
        <label htmlFor="user_id" className="Form-label">
        user_id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="Form-control"
          id="user_id"
         placeholder="Your user_id???"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="Form-label">
          Post-Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="Form-control"
          id="title"
         placeholder="Enter your's post title here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="Form-label">
          Post-Caption
        </label>
        <textarea
          type="text"
          rows="4"
          ref={postBodyElement}
          className="Form-control"
          id="body"
         placeholder="Tell us more about it..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="Form-label">
        Total Likes
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="Form-control"
          id="reaction"
         placeholder="Your total reaction "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="Form-label">
        hasTags##
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="Form-control"
          id="tags"
         placeholder="please enter tages here using space "
        />
      </div>
     
      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
};

export default CreatePost;
