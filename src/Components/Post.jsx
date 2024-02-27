import { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { PostList } from "../../Store/post-list-Store";


const Post = ({post}) =>{
 
 const{deletePost} = useContext(PostList)

    return(
        <div className="card postCard" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={()=> deletePost(post.id)}>
    <MdDelete />
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>
    <span  key = {tag} class="badge text-bg-primary hastag">{tag}</span>)}

<div class="modal-footer reaction">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{post.reaction}
        <FcLike />
        </button>
      </div> 
  </div>



</div>
    )
}
export default Post;