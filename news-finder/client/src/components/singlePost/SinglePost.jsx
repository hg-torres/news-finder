import "./singlepost.css"

function SinglePost(article) {
  return <div className="singlePost">
                <div className="singlePostWrapper">
                    <img src="https://static01.nyt.com/images/2021/10/21/well/SWIMMING-PHOTOS17/merlin_196438650_e704a1d1-50d6-4b48-9513-9a31f91a83c4-superJumbo.jpg?quality=75&auto=webp" alt="" className="singlePostImg" />
                    <h1 className="singlePostTitle">
                    <div className="singlePostLike">
                    <i class="far fa-heart"></i>
                    </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Author: <b>AUTHOR NAME</b></span>
                        <span className="singlePostDate">Date: <b>Post Date</b></span>
                    </div>
                    <p className="singlePostWriting">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa quasi dolore dignissimos quisquam quos adipisci. Omnis ab, deserunt atque dicta nulla reprehenderit laborum soluta error architecto dolorum? Molestiae, modi!</p>
                </div>
        </div>;
}

export default SinglePost;
