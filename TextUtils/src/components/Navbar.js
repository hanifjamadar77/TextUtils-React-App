import React from 'react'
import probtype from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(probs) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${probs.mode} bg-${probs.mode}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand text-${probs.mode === 'light'?'dark':'light'}`} to="/" >{probs.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className={`nav-link active text-${probs.mode === 'light'?'dark':'light'}`} aria-current="page" to="/">{probs.home}</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className={`nav-link text-${probs.mode === 'light'?'dark':'light'}`} to="/about">About</Link>
                            </li> */}
                    
                            {/* <li className="nav-item">
                                <Link className={`nav-link text-${probs.mode === 'light'?'dark':'light'}`} to="/contact">Contact</Link>
                            </li> */}
                        </ul>
                        <div className={`form-check form-switch text-${probs.mode === 'light'?'dark':'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={probs.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// Probtypes in React
Navbar.prototype = {
    title: probtype.string.isRequired,
    home: probtype.string.isRequired
}

// default Probtypes in React
Navbar.defaultProps = {
    title: 'TextUtils',
    home: 'Home'
};