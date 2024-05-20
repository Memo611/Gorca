import React from 'react'
import Nav from '../Styles/Nav.css'
import {Link} from 'react-router-dom'
import Gorca from '../../Gorca.jpg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'><img src={Gorca} alt="Logo de GORCA" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{height: 100 + 'px'}}>
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
            
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to='/Catalogo' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Catalogo
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/Powerade'>Powerade</Link></li>
                                <li><Link className="dropdown-item" to='/Fanta'> Fanta</Link></li>
                                <li><Link className="dropdown-item" to='/Jumex'> Jumex</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to='/Promociones' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Promociones
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/10%'>10%</Link></li>
                                <li><Link className="dropdown-item" to='/20%'>20%</Link></li>
                                <li><Link className="dropdown-item" to='/2x1'>2x1</Link></li>
                                <li><Link className="dropdown-item" to='/4x3'>4x3</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to='/Sucursales' role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Sucursales
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/Guyamas'>Guaymas</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to='/Acerca' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Acerca
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/Desarrollo'>Desarrollo</Link></li>
                                <li><Link className="dropdown-item" to='/Historia'>Historia</Link></li>
                                <li><Link className="dropdown-item"to='/Valores'>Valores</Link></li>                               
                                <li><hr className="dropdown-divider"/></li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;