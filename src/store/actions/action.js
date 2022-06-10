import { FETCH_MOVIE, FETCH_PEOPLE } from "./actinoType";

export const fetchMovie = (payload) => {
    return {
        type: FETCH_MOVIE,
        payload,
    };
};

export const fetchPeople = (payload) => {
    return {
        type: FETCH_PEOPLE,
        payload,
    };
};

export const fetchAllMovie = () => {
    return (dispatch) => {
        fetch("https://swapi.dev/api/films")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => dispatch(fetchMovie(data.results)))
            .catch((error) => {
                console.log(error);
            });
    };
};

export const fetchAllPeople = () => {
    return (dispatch) => {
        fetch("https://swapi.dev/api/people")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => dispatch(fetchPeople(data.results)))
            .catch((error) => {
                console.log(error);
            });
    };
};
