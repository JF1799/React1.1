import React from 'react';

function Testimonios(){
    return(
        <section className="site-section">
		<div className="container">
			<div className="row mb-5">
				<div className="col-md-12">
					<div className="section-heading text-center">
						<h2>Client <strong>Testimonial</strong></h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">

					<div className="block-47 d-flex mb-5">
						<div className="block-47-image">
							<img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid"/>
						</div>
						<blockquote className="block-47-quote">
							<p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
						</blockquote>
					</div>

				</div>
				<div className="col-md-6">

					<div className="block-47 d-flex mb-5">
						<div className="block-47-image">
							<img src="images/person_2.jpg" alt="Image placeholder" className="img-fluid"/>
						</div>
						
					</div>

				</div>

				<div className="col-md-6">

					<div className="block-47 d-flex mb-5">
						<div className="block-47-image">
							<img src="images/person_3.jpg" alt="Image placeholder" className="img-fluid"/>
						</div>
						<blockquote className="block-47-quote">
							<p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
							<cite className="block-47-quote-author">— Ethan McCown, CEO <a href="#">XYZ Inc.</a></cite>
						</blockquote>
					</div>

				</div>
				<div className="col-md-6">

					<div className="block-47 d-flex mb-5">
						<div className="block-47-image">
							<img src="images/person_4.jpg" alt="Image placeholder" className="img-fluid"/>
						</div>
						<blockquote className="block-47-quote">
							<p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
							<cite className="block-47-quote-author">— Craig Gowen, CEO <a href="#">XYZ Inc.</a></cite>
						</blockquote>
					</div>

				</div>

			</div>
		</div>
	</section>
    )
}

export default Testimonios;