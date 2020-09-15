import React from 'react';

function Presentacion(){
    return(
        
        <section className="site-hero" style={{backgroundImage: "url(images/image2.jpeg)" }} id="section-home" data-stellar-background-ratio="0.5">
		<div className="container">
			<div className="row intro-text align-items-center justify-content-center">
				<div className="col-md-10 text-center pt-5">

					<h1 className="site-heading site-animate">Hello, I'm <strong className="d-block">Jeff</strong></h1>
					<strong className="d-block text-white text-uppercase letter-spacing">and this is My Portafolio</strong>

				</div>
			</div>
		</div>
	</section>
    )
}
export default Presentacion;