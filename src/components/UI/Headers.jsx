import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Headers = () => {
    const [show, setShow] = useState(false);

    const handleButtonToggle =() => {
        return setShow(!show);
    };

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <NavLink to="/" className="logo-link">
                            <img
                            src="https://i.pinimg.com/736x/94/b1/3d/94b13d8e3d06cfa2fef8b09af0302d6f.jpg"
                            alt="WorldAtlas Logo"
                            className="logo-img"
                            />                                        
                            <h1>WorldAtlas</h1>
                        </NavLink>   
                    </div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="country">Country</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink></NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu/>

                        </button>

                    </div>
                </div>
            </div>
        </header>
    )
};