import React from "react";
import classes from "./Header.module.css"
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className={classes.Header}>
            <div>
                <Link to="/" className="anchor-link">
                    <pre>"Nahid"</pre>
                </Link>
            </div>
            <nav className={classes.Nav}>
                <ul>
                    <li><Link to="/" className="anchor-link">Home</Link></li>
                    <li><Link to="/portfolio" className="anchor-link">Portfolio</Link></li>
                    <li><Link to="/about" className="anchor-link">About</Link></li>
                    <li><Link to="/contact" className="anchor-link">Contact Us</Link></li>
                    <li>
                        <button>Resume</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header