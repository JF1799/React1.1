import React from 'react';

function Servicios(){
    return(
        <section className="site-section pb-0" id="section-services">
		<div className="container">

			<div className="row mb-4">
				<div className="col-md-12">
					<div className="section-heading text-center">
						<h2>My <strong>Services</strong></h2>
					</div>
				</div>
			</div>
			<div className="row">

				<div className="col-md-6 col-lg-4 text-center mb-5">
					<div className="site-service-item site-animate fadeIn site-animated" data-animate-effect="fadeIn">
						<span className="icon">
							<span className="icon-browser2"></span>
						</span>
						<h3 className="mb-4">Web Design</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						<p><a href="/#" className="site-link">Learn More <i className="icon-chevron-right"></i></a></p>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 text-center mb-5">
					<div className="site-service-item site-animate fadeIn site-animated" data-animate-effect="fadeIn">
						<span className="icon">
							<span className="icon-presentation"></span>
						</span>
						<h3 className="mb-4">Search Engine Optimization</h3>
						<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
						<p><a href="/#" className="site-link">Learn More <i className="icon-chevron-right"></i></a></p>
					</div>
				</div>
				<div className="col-md-6 col-lg-4 text-center mb-5">
					<div className="site-service-item site-animate fadeIn site-animated" data-animate-effect="fadeIn">
						<span className="icon">
							<span className="icon-video2"></span>
						</span>
						<h3 className="mb-4">Video Editing</h3>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
						<p><a href="/#" className="site-link">Learn More <i className="icon-chevron-right"></i></a></p>
					</div>
				</div>

				

			</div>
		</div>
	</section>
    )
}

export default Servicios;