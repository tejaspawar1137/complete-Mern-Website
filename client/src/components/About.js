import React from 'react'
import dp from '../images/tejaspawar.jpg';

function About() {
    return (
        <div>
          <h2>About Me</h2>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
	

	<div class="carousel-inner">		
		<div class="carousel-item active">
			<div class="img-box"><img src={dp} alt=""/></div>
			<p class="testimonial">Iam a BCA Student In BAMU University In Aurangabad I have completed my Mern Stack Developement</p>
			<p class="overview"><b>Tejas</b>Mern Stack Developer <a href="#">Computer Science</a></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
	
		
	</div>


</div>
        </div>
    )
}

export default About
