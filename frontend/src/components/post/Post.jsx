import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://retroianbucket.s3.ap-northeast-2.amazonaws.com/mike-enerio-7ryPpZK1qV8-unsplash.jpg" alt="">
            </img>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Life</span>
                    <span className="postCat">Music</span>
                </div>
                <span className="postTitle">my post title</span>
                <hr></hr>
                <span className="postDate">1 hr ago</span>
            </div>
            <p className="postDesc">
                Description : this post running in Reacct Application
                Description : this post running in Reacct Application
                Description : this post running in Reacct Application
                Description : this post running in Reacct Application
                Description : this post running in Reacct Application
                Description : this post running in Reacct Application
                Description : this post running in Reacct Application
                Description : this post running in Reacct Application
            </p>
        </div>
    )
}
