import React from 'react'
import './NavBar.scss';
import Avatar from '../../images/avatars/Davidkames.png';

function NavBar() {
    return (
        <div className="NavigationContainer">
            <div className="Navigation">
                <span className="Navigation__MenuIcon"></span>
                <div className="NavigationSearch">
                    <span className="NavigationSearch__Icon"></span>
                    <p>Search transactions, invoices or help</p>
                </div>
                <div className="NavigationRight">
                    <span className="NavigationRight__Notification"></span>
                    <div className="NavigationRight__Account">
                        <p>John Doe</p>
                        <span className="NavigationRight__DownArrow"></span>
                        <img className="NavigationRight__Avatar" src={Avatar} alt="profile-img"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
