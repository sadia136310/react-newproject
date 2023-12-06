import React from 'react';
import img6 from '../../images/img6.png';
import img7 from '../../images/img7.png';
import img11 from '../../images/img11.png';
import img9 from '../../images/img9.png';
import img10 from '../../images/img10.png';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img12 from '../../images/img12.png';
import img13 from '../../images/img13.png';
import img14 from '../../images/img14.png';


const Main = () => {
    return (
        <>
            <h5 class="text-center works">How Rushan Works</h5>

            <p class="text-center">Save you time, money and energy and start to washing with us</p>

            <section class="d-flex mt-5 pt-3 justify-content-evenly gap-5 " id='choose'>
                <div>
                    <img src={img11.src} alt="" />
                </div>
                <div class='choose-text'>
                    <h5 class="pt-5">Choose a Service</h5>
                    <p class="pt-2">Save you time, money and energy and start to washing with us,
                        How to Order?</p>

                    <div>
                        {/* <i class="fa-sharp fa-solid fa-square-check rushan-color"></i> */}
                        <label class="form-check-label" for="flexCheckDefault">
                            Download App
                        </label>
                    </div>
                    <div>
                        {/* <i class="fa-sharp fa-solid fa-square-check rushan-color"></i> */}
                        <label class="form-check-label" for="flexCheckChecked">
                            Find Categories
                        </label>
                    </div>
                    <div>
                        {/* <i class="fa-sharp fa-solid fa-square-check rushan-color"></i> */}
                        <label class="form-check-label" for="flexCheckChecked">
                            Start schedule your laundry
                        </label>
                    </div>

                </div>
            </section>

            <section class="d-flex mt-5 pt-3 px-5 mx-5 justify-content-evenly gap-5 " id='schedule'>
                <div>
                    <h5 class="pt-5">Schedule a pickup</h5>
                    <p class="pt-2 pe-5 me-5">Are you tired of managing your laundry schedule? We Have got you covered! Schedule a pickup with just a few clicks and enjoy the convenience of our hassle-free laundry service. We pick up and deliver at your doorstep, ensuring a seamless experience.
                    </p>
                </div>

                <div>
                    <img src={img9.src} alt="" />
                </div>
            </section>

            <section class="d-flex mt-5 pt-3 justify-content-evenly gap-5 px-5" id='items'>

                <div class="">
                    <img src={img10.src} alt="" />
                </div>

                <div id='get-items'>
                    <h5 class="pt-5">Get your clean Items</h5>
                    <p class="pt-2">Experience the joy of receiving freshly cleaned and neatly folded items right at your doorstep. Our dedicated team ensures that your laundry is handled with care and delivered promptly. Say goodbye to laundry hassles and hello to clean, crisp clothes!
                    </p>



                    <button type="button" class="btn header-color text-white">Go to app <i
                        class="fa-solid fa-arrow-right"></i></button>
                </div>
            </section>


            <section class="py-2 my-3 bg-color">
                <div class="py-5 text-center" id='service'>
                    <img src={img6.src} alt="" />
                </div>
                <div className='text-center'>
                    <button type="button" class="btn header-color text-white">View More</button>
                </div>
            </section>

            <section>
                <section class="download">
                    <div class="mx-5 ps-5">
                        <div id="app">
                            <h4 class="pb-4">Download this app</h4>
                            <p>Unlock the full potential of our laundry services by downloading our user-friendly app. With a few taps, you can schedule pickups, track your orders, and stay connected with our services. Download now and simplify your laundry routine!
                            </p>
                        </div>

                        <img class="mt-3" src={img1.src} alt="" />
                    </div>

                    <div class="group-img text-center">
                        <img width="45%" src={img7.src} alt="" />

                        <div id="bg-images">
                            <img src={img2.src} alt="" />
                        </div>
                    </div>

                </section>
            </section>
            <section class="pt-5">
                <div class="bg-color pt-5">
                    <div>
                        <h2 class="text-center">Our Mission & Vision</h2>
                        <p class="text-center mission">
                            Mission:
                            At Rushan Smart Laundry, our mission is to redefine the laundry experience by providing a convenient, reliable, and efficient service that adapts to your lifestyle. We aim to save you time and effort, allowing you to focus on what matters most.
                            <br />
                            Vision:
                            Our vision is to be the leading laundry service provider, setting the standard for excellence in the industry. We strive to continuously innovate, exceed customer expectations, and contribute to a cleaner and more sustainable future.

                        </p>


                        <div>
                            <h4 class="text-center"><span>Our excellent works</span></h4>
                        </div>
                        <p class="text-center">Gallery and some inspiration for doing a good washer</p>
                    </div>

                    <div class="py-5 text-center" id="mission-img">
                        <img src={img12.src} alt="" />

                        <img class="pb-5" src={img13.src} alt="" />
                        <img src={img14.src} alt="" />

                    </div>
                </div>
            </section>



        </>
    );
};

export default Main;