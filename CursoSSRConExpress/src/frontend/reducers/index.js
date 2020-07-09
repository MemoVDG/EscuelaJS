const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_FAVORITE':
			if (
				state.mylist.filter((items) => items.id === action.payload.id)
					.length === 0
			) {
				return {
					...state,
					mylist: [...state.mylist, action.payload],
				};
			} else {
				return {
					...state,
				};
			}
		case 'REMOVE_FAVORITE':
			return {
				...state,
				// Filtramos y removemos del estado el item que se recibe
				mylist: state.mylist.filter((items) => items.id !== action.payload),
			};
		case 'ADD_USER':
			return {
				...state,
				user: payload,
			};
		case 'LOGIN_REQUEST':
			return {
				...state,
				user: action.payload,
			};
		case 'LOGOUT_REQUEST':
			return {
				...state,
				user: action.payload,
			};
		case 'REGISTER_REQUEST':
			return {
				...state,
				user: action.payload,
			};
		case 'GET_VIDEO_SOURCE':
			return {
				...state,
				playing:
					state.trends.find((item) => item.id === Number(action.payload)) ||
					state.original.find((item) => item.id === Number(action.payload)) ||
					[],
			};
		default:
			return state;
	}
};

export default reducer;
