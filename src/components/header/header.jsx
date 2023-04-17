import React, {useState} from "react"
import {Link} from "react-router-dom"
import "./header.css"

const Header = () => {
    const [isActive, setActive] = useState(false)
    const isActiveHandle = () => {
        setActive(prev => !prev)
    }
    return (
        <div className="header">
            <div className="person">
                <span>Person</span>
            </div>
            <div className="navBar">
                <ul>
                    <li>Table</li>
                    <li>Person Id</li>
                    <li>
                        <Link to="create" className={isActive ? "activeLink" : "desactive"} onClick={isActiveHandle}>
                            Create Id
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
