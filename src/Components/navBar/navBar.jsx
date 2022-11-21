// importing react and setting navBar header
import React from 'react'
import './navBar.css'

function navBar() {
    return (
        <div className='navBar'>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <img className='netLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NETFLIX" />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">TV Series</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">Movies</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">New & Popular</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">My list</a>
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