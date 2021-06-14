import "./topbar.css";
import { Link } from "react-router-dom";

//shorcur "rfc"
export default function TopBar() {
    //pseudo user
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-amazon"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
                    <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                    <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItem"><Link to="/contact" className="link">CONTACT</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (<img className="topImage" src="https://retroianbucket.s3.ap-northeast-2.amazonaws.com/mike-enerio-7ryPpZK1qV8-unsplash.jpg" alt=""></img>
                    ) :(
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">Login</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">Register</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearch fas fa-search"></i>
            </div>
        </div>
    )
}
