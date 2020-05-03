import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
// Obtenemos nuestro hook personalizados
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const Home = () => {
	// Le pasamos el url de la API y nos retorna la respuesta en JSON
	const initialState = useInitialState(API);

	return (
		<>
			<Search />
			{initialState.mylist.length > 0 && (
				<Categories title='Mi Lista'>
					<Carousel>
						{initialState.mylist.map((item) => (
							<CarouselItem key={item.id} {...item} />
						))}
					</Carousel>
				</Categories>
			)}

			<Categories title='Tendencias'>
				<Carousel>
					{/* Pasamos un key para poder identificar el item y luego destructuramos
					el item de trends */}
					{initialState.trends.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			{/* NOTA ----> Recuerda que el map puede ser un un return implicito como arriba o explicito como abajo */}
			<Categories title='Originales'>
				<Carousel>
					{initialState.originals.map((item) => {
						return <CarouselItem key={item.id} {...item} />;
					})}
					<CarouselItem />
				</Carousel>
			</Categories>
		</>
	);
};

export default Home;
