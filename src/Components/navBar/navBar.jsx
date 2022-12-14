// importing react and setting navBar header
import React from 'react'
import './navBar.css'

function navBar() {
    return (
        <div className='navbar'>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <img className="navbar-brand" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='logo' />
                <button style={{ background: "white" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href='/#' style={{ color: 'white' }} id="home" className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a href='/#' style={{ color: 'white' }} className="nav-link" >Tv shows</a>
                        </li>

                        <li className="nav-item">
                            <a href='/#' style={{ color: 'white' }} className="nav-link" >Movies</a>
                        </li>
                        <li className="nav-item">
                            <a href='/#' style={{ color: 'white' }} className="nav-link" >Latest</a>
                        </li>
                        <li className="nav-item">
                            <a href='/#' style={{ color: 'white' }} className="nav-link" >MY List</a>
                        </li>
                    </ul>
                    
                    <img className='Avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avathar'/>
                </div>
            </div>
        </nav>

    </div>
    )
}
 
export default navBar