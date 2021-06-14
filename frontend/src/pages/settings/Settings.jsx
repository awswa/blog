import SideBar from "../../components/sidebar/SideBar"
import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label> Profile Picture </label>
                    <div className="settingsProfilePicture">
                        <img className="topImage" src="https://retroianbucket.s3.ap-northeast-2.amazonaws.com/mike-enerio-7ryPpZK1qV8-unsplash.jpg" alt=""></img>
                        <label htmlFor="fileInput">
                            <i className="settingsProfileIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}></input>
                    </div>
                    <label>Username </label>
                    <input type="text" placeholder="Username"></input>
                    <label>Email </label>
                    <input type="email" placeholder="email@domain.com"></input>
                    <label>Password </label>
                    <input type="password"></input>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar/>
        </div>
    )
}
