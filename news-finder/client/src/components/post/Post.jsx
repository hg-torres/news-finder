import "./post.css"

function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2022-02/220201-un-russia-us-mb-0923-319473.jpg" alt="" srcset="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Test Title</span>
            <hr/>
            <span className="postDate">Post Date</span>
        </div>
    </div>

  );
  
}

export default Post;
