import React from 'react';
import img3 from '../../images/img3.png';
const Navbar = () => {
    return (
        <>
            <div class="header-color">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                            <ul class="navbar-nav mb-3 mb-lg-0">
                                <li class="nav-item ps-5 ms-5 ">

                                    <img src={img3.src} alt=""/>

                                </li>


                            </ul>
                            <form class="d-flex" id="services">
                                <a class="nav-link  text-white" aria-current="page" href="#">Services</a>
                                <a class="nav-link text-white ps-5" aria-current="page" href="#">Contact</a>

                            </form>
                            <form id="submit">

                                <button class="btn border text-white" type="submit">Get the B2B</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    );
};

export default Navbar;