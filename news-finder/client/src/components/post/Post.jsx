import "./post.css"

function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://static01.nyt.com/images/2021/10/21/well/SWIMMING-PHOTOS17/merlin_196438650_e704a1d1-50d6-4b48-9513-9a31f91a83c4-superJumbo.jpg?quality=75&auto=webp" alt="" srcset="" />
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
