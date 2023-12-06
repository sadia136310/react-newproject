import React from 'react';
import img4 from '../../images/img4.png';
import img1 from '../../images/img1.png';
const Footer = () => {
    return (
       
<>

<footer class="header-color mt-5">
        <div class="footer pt-5 ">
            <div class="text-white" id='footer-img'>
           <img src={img4.src} alt=""/> 
                <p class="pb-3 pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis in accusantium
                    labore excepturi iure.
                    Molestiae asperiores soluta temporibus, cum sapiente eos. Voluptates sed doloremque sint,
                    reprehenderit tenetur vero unde incidunt?</p>

                <small>© Copyright 2022 Rushan Smart Laundry</small>
            </div>
            <div class="text-white pt-3" id='condition'>
                <h6>Privacy & Policy
                </h6>
                <h6> Terms & Conditions</h6>

            </div>
            <div class="form">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Enter your phone number here"
                        aria-label="Search"/>

                     
                    <button class="btn border bg-light" type="submit">Register</button>
                </form>
               <div id='foo-img'>
               <img class="pt-3 foo" src={img1.src} alt=""/>
               </div>

                 <div class="pt-3 social-media">
                <div> <a href=""><i class="fa-brands fa-square-whatsapp"></i></a></div>
                <div><a href=""><i class="fa-brands fa-facebook"></i></a></div>
                <div><a href=""><i class="fa-brands fa-instagram"></i></a></div>
                <div><a href=""><i class="fa-brands fa-linkedin"></i></a></div>   
                </div> 
                

            </div>
        </div>

    </footer>
</>
    );
};

export default Footer;