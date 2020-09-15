import React from 'react';
import Card from './Card';
function Portafolio(){
	const datos = [
		{
			title: 'Square Box Mockup',
			subtitle:'MOCKUP',
			imege: 'images/p1.jpg'
		},
		{
			title: 'Product Box Package Mockup',
			subtitle:'MOCKUP',
			imege: 'images/p2.jpg'
		},
		{
			title: 'Creative Package Design',
			subtitle:'PACKAGING',
			imege: 'images/p3.jpg'
		},
		{
			title: 'Packaging Brand',
			subtitle:'PACKAGING',
			imege: 'images/p4.jpg'
		},
		{
			title: 'Isometric 3D Extrusion',
			subtitle:'TYPOGRAPHY',
			imege: 'images/p5.jpg'
		},
		{
			title: 'White Space Photography',
			subtitle:'PHOTOGRAPHY',
			imege: 'images/p6.jpg'
		}
	]
    return(
        <>
        <section className="site-section" id="section-portfolio">
		<div className="container">
			<div className="row">
				{
					datos.map((value)=> {
						return <Card
						title= {value.title}
						subtitle= {value.subtitle}
						image={value.imege} />
					})
				}
				<Card title= "Square Box Mockup" subtitle="MOCKUP" image="images/p7.jpg"/>
				<Card title= "Product Box Package Mockup" subtitle="MOCKUP" image="images/p8.jpg"/>
				<Card title= "Creative Package Design" subtitle="PACKAGING" image="images/p9.jpg"/>
				
			</div>
		</div>
	</section>
    </>
    )
}

export default Portafolio;