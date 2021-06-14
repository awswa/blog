import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://retroianbucket.s3.ap-northeast-2.amazonaws.com/mike-enerio-7ryPpZK1qV8-unsplash.jpg" alt="">
                </img>
                <h1 className="singlePostTitle">
                    this is a title
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singPostInfo">
                    <span className="singlePostAuthor">Author: <b> Jang Whan</b></span>
                    <span className="singlePostDate">1 hr ago</span>
                </div>
                <p className="singlePostDesc">
                    this is the actual contents
                    this is the actual contents
                    this is the actual contents
                    this is the actual contents
                    this is the actual contents
                    this is the actual contents
                    this is the actual contents
                    this is the actual contents
                    this is the actual contents
                </p>
            </div>
        </div>
    )
}
