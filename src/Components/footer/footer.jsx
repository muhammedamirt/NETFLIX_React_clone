import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer mt-5'>
            <footer className="text-center text-lg-start text-white footerStyle">
                <div className="container p-4">
                    <div className="row mt-4">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">See other Movies</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Action Movies</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Romantic Movies</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-user-edit fa-fw fa-sm me-2"></i>Comedy Movies</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Execution of the contract</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Supply</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="fas fa-backspace fa-fw fa-sm me-2"></i>Returns</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>Regulations</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Community</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white">About</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Help</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>

        </div>
    )
}

export default Footer