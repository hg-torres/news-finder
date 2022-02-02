import "./singlepost.css"

function SinglePost() {
  return <div className="singlePost">
                <div className="singlePostWrapper">
                    <img src="https://static01.nyt.com/images/2021/10/21/well/SWIMMING-PHOTOS17/merlin_196438650_e704a1d1-50d6-4b48-9513-9a31f91a83c4-superJumbo.jpg?quality=75&auto=webp" alt="" className="singlePostImg" />
                    <h1 className="singlePostTitle">SINGLE TITLE
                    <div className="singlePostLike">
                    <i class="far fa-heart"></i>
                    </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Author: <b>AUTHOR NAME</b></span>
                        <span className="singlePostDate">Date: <b>Post Date</b></span>
                    </div>
                    <p className="singlePostWriting">Article writing stuff</p>
                </div>
        </div>;
}

export default SinglePost;
