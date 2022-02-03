import "./singlepost.css"

const SinglePost = ({title, creator, description, pub_date, image_url, source_id, link}) => {
  return <div className="singlePost">
                <div>
                    <img src={image_url} alt="" className="singlePostImg" />
                    <h1 className="singlePostTitle"> {title}   </h1>
                    <div className="singlePostLike">
                    <i class="far fa-heart"></i>
                    </div>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Creator: <b>{creator}</b></span>
                        <span className="singlePostDate">Date: <b>Post Date</b>{[pub_date]}</span>
                    </div>
                    <p className="singlePostDescription">{description}</p>
                    <p className="singlePostSource">{source_id}</p>
                    <p className="singlePostLink">{link}</p>
                </div>
        </div>;
}

export default SinglePost;
