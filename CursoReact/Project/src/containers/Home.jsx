import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
// Obtenemos nuestro hook personalizados
import useInitialState from '../hooks/useInitialState';

// Integracion de Redux
import { connect } from 'react-redux';

// const API = 'http://localhost:3000/initialState';

const Home = ({ mylist, trends, originals }) => {
	// Le pasamos el url de la API y nos retorna la respuesta en JSON
	// const initialState = useInitialState(API);
	return (
		<>
			<Search isHome />
			{mylist.length > 0 && (
				<Categories title='Mi Lista'>
					<Carousel>
						{mylist.map((item) => (
							<CarouselItem isList key={item.id} {...item} />
						))}
					</Carousel>
				</Categories>
			)}

			<Categories title='Tendencias'>
				<Carousel>
					{/* Pasamos un key para poder identificar el item y luego destructuramos
					el item de trends */}
					{trends.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			{/* NOTA ----> Recuerda que el map puede ser un un return implicito como arriba o explicito como abajo */}
			<Categories title='Originales'>
				<Carousel>
					{originals.map((item) => {
						return <CarouselItem key={item.id} {...item} />;
					})}
					<CarouselItem />
				</Carousel>
			</Categories>
		</>
	);
};
/* Solo traemos los elementos que se necesitan */
const mapStateToProps = (state) => {
	return {
		mylist: state.mylist,
		trends: state.trends,
		originals: state.originals,
	};
};
//Conectamos el componente con Redux
/* Primer elementos los props que vamos a mapear y el segun los actions(eventos, clicks, scroll, peticiones) que 
haran que un elemento se modifique */
export default connect(mapStateToProps, null)(Home);
