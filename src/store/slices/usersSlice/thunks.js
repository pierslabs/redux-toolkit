import { setIsLoadingStart, setUsers } from './usersSlice';

export const getUSers = (page = 0) => {
  return async (dispatch, getState) => {
    //Ponemos el state en modo de carga
    dispatch(setIsLoadingStart());

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page + 1}`
    );
    const data = await response.json();
    dispatch(setUsers({ users: data.results, page: page + 1 }));
  };
};
