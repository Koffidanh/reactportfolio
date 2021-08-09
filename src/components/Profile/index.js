import React from 'react'
import profileImage from "../Profile/photo.jpg";
import "../Profile/index.css"
export default function Profile() {
    return (
        <div >
            <div className="cardPicture">
                        <div className="container" >
                            <img src={profileImage} justifyContent='center' width=" 50%" height=" 10%"
                                className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                                alt="profile" />
                            <p className="d-flex justify-content-center" className="title">Full Stack Developer</p>
                        </div>
                    </div>
        </div>
    )
}
