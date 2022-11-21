// importing react and setting navBar header
import React from 'react'
import './navBar.css'

function navBar() {
    return (
        <div className='navBar'>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <img className='netLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NETFLIX" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">TV Series</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Movies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">New & Popular</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">My list</a>
                                </li>
                            </ul>  
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default navBar