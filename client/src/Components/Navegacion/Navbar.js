import React from 'react';
import '../Styles/Navegacion/Nav.css'
import { Link } from 'react-router-dom';
import Gorca from '../../Gorca.jpg';
const Navbar = ({ links }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={Gorca} alt="Brand"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {links.map((link) => (
                            link.name === 'Home' ? (
                                <li className="nav-item" key={link.href}>
                                    <Link className="nav-link" to={link.href}>{link.name}</Link>
                                </li>
                            ) : link.subLinks ? (
                                <li className="nav-item dropdown" key={link.name}>
                                    <a className="nav-link dropdown-toggle" href="#" id={`navbarDropdown-${link.name}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {link.name}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby={`navbarDropdown-${link.name}`}>
                                        {link.subLinks.map((subLink) => (
                                            <li key={subLink.href}>
                                                <Link className="dropdown-item" to={subLink.href}>{subLink.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item" key={link.href}>
                                    <Link className="nav-link" to={link.href}>{link.name}</Link>
                                </li>
                            )
                        ))}
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true"></a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;