import React from "react"
import "./header.css"
 const Header = () => {
    return (
        <div className="header">
            <div className="person">
                <span>Person</span>
            </div>
            <div className="navBar">
                <ul>
                    <li>Table</li>
                    <li>Person Id</li>
                    <li>Create Id</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
