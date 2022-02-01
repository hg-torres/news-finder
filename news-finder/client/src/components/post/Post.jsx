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
        <p className = "postDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae reprehenderit quisquam aperiam culpa nesciunt deserunt eius odit libero ducimus voluptas sequi, ratione neque repellat omnis officia id, quos quis ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae reprehenderit quisquam aperiam culpa nesciunt deserunt eius odit libero ducimus voluptas sequi, ratione neque repellat omnis officia id, quos quis ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae reprehenderit quisquam aperiam culpa nesciunt deserunt eius odit libero ducimus voluptas sequi, ratione neque repellat omnis officia id, quos quis ipsum.</p>
    </div>

  );
  
}

export default Post;
