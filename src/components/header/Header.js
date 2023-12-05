import React from 'react';
import img1 from '../../images/img1.png';
import img8 from '../../images/img8.png';

const Header = () => {
    return (
        <>
            <header class="header-color">

                <section class="flexible-container ">
                    <div class="container">

                        <div class="container2">
                            <h3 class="text-white  pb-4">Clean clothes
                                in an instant</h3>

                            <small id="para" class="text-white">We will use all our strength to shorten the time it
                                takes for the laundry to take place</small>
                        </div>

                        <div class="my-5">
                            <img src={img1.src} alt=""/>

                        </div>

                    </div>

                    <div class="half-width">
                        <img src={img8.src} alt=""/>
                    </div>

                </section>

            </header>
        </>
    );
};

export default Header;