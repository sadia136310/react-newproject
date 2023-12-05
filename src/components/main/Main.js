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

        <section class="d-flex mt-5 pt-3 justify-content-evenly">

            <div>
            <img src={img11.src} alt="" />
               
            </div>

            <div>
                <h5 class="pt-5">Choose a Service</h5>
                <p class="pt-2">Save you time, money and energy and start to washing with us,
                    How to Order?</p>


                <div>
                    <i class="fa-sharp fa-solid fa-square-check rushan-color"></i>
                    <label class="form-check-label" for="flexCheckDefault">
                        Download App
                    </label>
                </div>
                <div>
                    <i class="fa-sharp fa-solid fa-square-check rushan-color"></i>
                    <label class="form-check-label" for="flexCheckChecked">
                        Find Categories
                    </label>
                </div>
                <div>
                    <i class="fa-sharp fa-solid fa-square-check rushan-color"></i>
                    <label class="form-check-label" for="flexCheckChecked">
                        Start schedule your laundry
                    </label>
                </div>

            </div>




        </section>

        <section class="d-flex mt-5 pt-3 px-5 mx-5 justify-content-evenly">
            <div>
                <h5 class="pt-5">Schedule a pickup</h5>
                <p class="pt-2 pe-5 me-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod voluptate
                    perferendis soluta distinctio quas vel, ipsam atque aut reiciendis expedita itaque voluptas esse
                    similique, beatae libero eum eligendi corporis!</p>


            </div>

            <div>
            <img src={img9.src} alt="" />
            </div>
        </section>

        <section class="d-flex mt-5 pt-3 justify-content-between ps-5 ms-5">

            <div class="">
            <img src={img10.src} alt="" />
            </div>

            <div class="px-5 ms-5">
                <h5 class="pt-5">Get your clean Items</h5>
                <p class="pt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid impedit, repellat quia
                    sit, repellendus rem consequatur distinctio modi fugit molestiae quod et, placeat commodi. A soluta
                    error cumque voluptates aut!</p>



                <button type="button" class="btn header-color text-white">Go to app <i
                        class="fa-solid fa-arrow-right"></i></button>
            </div>
        </section>


        <section class="py-5 my-5">
            <div class="bg-color text-center py-5">
                 <img class="pb-3" src={img6.src} alt="" />
                <button type="button" class="btn header-color text-white">View More</button>

            </div>
        </section>

        <section>
            <section class="download">
                <div class="mx-5 ps-5">
                    <div id="app">
                        <h4 class="pb-4">Download this app</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur voluptas temporibus
                            deleniti suscipit. Perferendis aperiam mollitia ab, odit fugiat commodi sequi veniam dolore,
                            aspernatur illo, eius velit? Fugit, illo reprehenderit.</p>
                    </div>
                   
                    <img class="mt-3" src={img1.src} alt=""/>
                </div>

                <div class="group-img text-center">
                    <img width="60%" src={img7.src} alt=""/>

                    <div id="bg-images">
                        <img src={img2.src} alt=""/>
                    </div>
                </div>

            </section>
        </section>
        <section class="pt-5">
            <div class="bg-color pt-5">
                <div>
                    <h2 class="text-center">Our Mission & Vision</h2>
                    <p class="text-center mission">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sed
                        asperiores, harum placeat quae enim ratione quibusdam quo optio incidunt et error unde eum
                        numquam
                        suscipit ut autem, facilis perspiciatis!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum placeat vero saepe dolores
                        nesciunt laudantium rerum, sunt repudiandae laboriosam ipsam mollitia nisi deserunt atque!
                        Ducimus
                        corrupti praesentium nesciunt aut ea.
                    </p>


                    <div>
                        <h4 class="text-center"><span>Our excellent works</span></h4>
                    </div>
                    <p class="text-center">Gallery and some inspiration for doing a good washer</p>
                </div>

                <div class="py-5 text-center">
                    <img src={img12.src} alt=""/>

                    <img class="pb-5" src={img13.src} alt=""/>
                    <img src={img14.src} alt=""/>

                </div>
            </div>
        </section>



       </>
    );
};

export default Main;