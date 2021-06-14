import React from 'react'
import ProfileAvatar from '../../images/avatars/JanaNavakova.jpg';
import UserOne from '../../images/avatars/DrewJames.png';
import UserTwo from '../../images/avatars/Davidkames.png';
import UserThree from '../../images/avatars/LavidEmes.png';

import './Profile.scss'

function Profile() {
    return (
        <div className="Profile BoxShadow">
            <div className="Header">
                <img className="Header__Image" src={ProfileAvatar} alt="profile-avatar"></img>
                <h4 className="Header__Name">Nick Herasimenka</h4>
                <p className="Header__Country">United States</p>
            </div>
            <div className="Profile__SocialMedia">
                <span className="Profile__Instagram"></span>
                <span className="Profile__Twitter"></span>
                <span className="Profile__Facebook"></span>
                <span className="Profile__Mail"></span>
            </div>
            <div className="Users">
                <div className="Users__Header">
                    <h2>Our Users</h2>
                    <span className="Users__DotIcon"></span>
                </div>
                <div className="Users__List">
                    <div className="User">
                        <img className="User__Avatar One" src={UserOne} alt="user-avatar"></img>
                        <div className="User__Content">
                            <h4>Drew James</h4>
                            <div className="User__Address">
                                <p className="User__Country">United States</p>
                                <p className="User__Mobile">Mobile: 871.567.987</p>
                            </div>
                        </div>
                    </div>
                    <div className="User">
                        <img className="User__Avatar Two" src={UserTwo} alt="user-avatar"></img>
                        <div className="User__Content">
                            <h4>Bavid Kames</h4>
                            <div className="User__Address">
                                <p className="User__Country">United States</p>
                                <p className="User__Mobile">Mobile: 871.567.987</p>
                            </div>
                        </div>
                    </div>
                    <div className="User">
                        <img className="User__Avatar Three" src={UserThree} alt="user-avatar"></img>
                        <div className="User__Content">
                            <h4>Lavid Emes</h4>
                            <div className="User__Address">
                                <p className="User__Country">United States</p>
                                <p className="User__Mobile">Mobile: 871.567.987</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
