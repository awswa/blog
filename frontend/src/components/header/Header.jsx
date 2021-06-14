import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall"> React & Node </span>
                <span className="headerTitleLarge"> Blog </span>
            </div>
            <img className="headerImg" src="https://retroianbucket.s3.ap-northeast-2.amazonaws.com/mike-enerio-7ryPpZK1qV8-unsplash.jpg" alt="">
            </img>
        </div>
    )
}
