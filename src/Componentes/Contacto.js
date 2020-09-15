import React from 'react';

function Contacto(){
    return(
        <section class="site-section" id="section-contact">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-5">
                        <div class="section-heading text-center">
                            <h2>Get <strong>In Touch</strong></h2>
                        </div>
                    </div>

                    <div class="col-md-7 mb-5 mb-md-0">
                        <form action="" class="site-form">
                            <h3 class="mb-5">Get In Touch</h3>
                            <div class="form-group">
                                <input type="text" class="form-control px-3 py-4" placeholder="Your Name"/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control px-3 py-4" placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control px-3 py-4" placeholder="Your Phone"/>
                            </div>
                            <div class="form-group mb-5">
                                <textarea class="form-control px-3 py-4" cols="30" rows="10" placeholder="Write a Message"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary  px-4 py-3" value="Send Message"/>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-5 pl-md-5">
                        <h3 class="mb-5">My Contact Details</h3>
                        <ul class="site-contact-details">
                            <li>
                                <span class="text-uppercase">Email</span>
                                    <h4>jeffersogmb7@gmail.com</h4>
                            </li>
                            <li>
                                <span class="text-uppercase">Phone</span>
                                    <h4>+502 4785-0323</h4>
                            </li>
                            <li>
                                <span class="text-uppercase">Address</span>
                                <h4>
                                   San Francisco, CA
                                    4th Floor8 Lower  
                                    San Francisco street, M1 50F
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
	    </section>
    )
}

export default Contacto;