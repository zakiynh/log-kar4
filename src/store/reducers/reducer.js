import { FETCH_MOVIE, FETCH_PEOPLE } from "../actions/actinoType";

const initialState = {
    movies: [],
    peoples: []
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIE:
            return {
                ...state,
                movies: action.payload,
            };
        case FETCH_PEOPLE:
            return {
                ...state,
                peoples: action.payload,
            };
        default:
            return state;
    }
}

export default dataReducer;
