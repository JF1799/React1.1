import React from 'react';

function Copyright(){
    return(
        <footer className="site-footer">
		<div className="container">

			<div className="row mb-5">
				<p className="col-12 text-center">
					
					Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" ></i> by <a href="https://www.instagram.com/_iamgama/?hl=es-la" target="_blank" className="text-primary">Jeff</a>
					
				</p>
			</div>
			
			<div className="row mb-5">
				<div className="col-md-12 text-center">
					<p>
						<a href="/#" className="social-item"><span className="icon-facebook2"></span></a>
						<a href="/#" className="social-item"><span className="icon-twitter"></span></a>
						<a href="/#" className="social-item"><span className="icon-instagram2"></span></a>
						<a href="/#" className="social-item"><span className="icon-linkedin2"></span></a>
						<a href="/#" className="social-item"><span className="icon-vimeo"></span></a>
					</p>
				</div>
			</div>
			
		</div>
	</footer>
    )
}

export default Copyright;