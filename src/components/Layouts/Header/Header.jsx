import React from "react";
import classes from "./Header.module.scss"
import {Link} from "react-router-dom";

function Header() {
    const logo = "Nahid"
    const links = [
        {to: '/about', label: 'About'},
        {to: '/experience', label: 'Experience'},
        {to: '/work', label: 'Work'},
        {to: '/contact', label: 'Contact'},
    ]

    return (
        <header className={`${classes.Header} ${classes.Sticky}`}>
            <div>
                <Link to="/" className="anchor-link"><span>00.</span>{logo}</Link>
            </div>
            <nav className={classes.Nav}>
                <ul>
                    {links.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to} className="anchor-link">
                                <span>0{index + 1}.</span>{item.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button className={"bordered-button"}>Resume</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header