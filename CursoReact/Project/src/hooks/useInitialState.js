/************
 * HOOK Personalizado que se puedo ocupar en varias clases*
 ***********/

import { useState, useEffect } from 'react';

const useInitialState = (API) => {
	// Uso de la logica del component
	// useState recibe elementos para inicializar la variable
	const [videos, setVideos] = useState({
		mylist: [],
		trends: [],
		originals: [],
	});

	/* useEffect sirve para actualizar estados
	 useEffect recibe 2 parametros, una funcion anonima y elemento el cual
	 va a estar monitoreando SINO SE LE PASA SE PRODUCE UN LOOP INFINITO
	 */

	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => setVideos(data));
	}, []);

	return videos;
};

export default useInitialState;
