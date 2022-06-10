import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import './App.css';
//import styled from 'styled-components';
import img1 from '../assets/img/maquillaje/slidemakeup1.svg';
import img2 from '../assets/img/maquillaje/slidemakeup2.svg';
import img3 from '../assets/img/maquillaje/slidemakeup3.svg';
import img4 from '../assets/img/maquillaje/slidemakeup4.svg';
import img5 from '../assets/img/maquillaje/slidemakeup5.svg';

const App = () => {
	return (
		<main>

			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
						<img src={img1} alt=""/>
					<TextoSlide colorFondo="navy">
						<p>Productos pensados para Tí!</p>
					</TextoSlide>
				</Slide>

				<Slide>
						<img src={img2} alt=""/>
					<TextoSlide>
						<p>Productos pensados para Tí!</p>
					</TextoSlide>
				</Slide>

				<Slide>
						<img src={img3} alt=""/>
					<TextoSlide>
						<p>Productos pensados para Tí!</p>
					</TextoSlide>
				</Slide>

				<Slide>
						<img src={img4} alt=""/>
					<TextoSlide>
						<p>Productos pensados para Tí!</p>
					</TextoSlide>
				</Slide>

				<Slide>
						<img src={img5} alt=""/>
					<TextoSlide>
						<p>Productos pensados para Tí!</p>
					</TextoSlide>
				</Slide>

			</Slideshow>
		</main>
	);
}

/*const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;*/
 
export default App;
