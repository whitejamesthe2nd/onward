// import { removeUser } from './authentication';

const LOAD = "api/task/LOAD";
const SET_CURRENT = "pokedex/pokemon/SET_CURRENT";
const LOAD_TYPES = "pokedex/pokemon/LOAD_TYPES";
const FORM_ERRORS = "pokedex/pokemon/FORM_ERRORS";

const load = (tasks) => {
  return {
    type: LOAD,
    tasks
  };
};

// const setCurrent = (pokemon) => {
//   return {
//     type: SET_CURRENT,
//     pokemon
//   };
// };

// const setTypes = (types) => {
//   return {
//     type: LOAD_TYPES,
//     types
//   };
// };
// const formErrors = (errors) => {
//   return {
//     type: FORM_ERRORS,
//     errors
//   };
// };

// export const getOnePokemon = (id) => async (dispatch) => {
//   const res = await fetch(`/api/pokemon/${id}`);
//   if (res.ok) {
//     const data = await res.json();
//     dispatch(setCurrent(data));
//     return data;
//   } else if (res.status === 401) {
//     return dispatch(removeUser());
//   }
//   throw res;
// };

export const getTasks = () => async dispatch => {
  const res = await fetch('/api/task');
  console.log(res);
  if (res.ok) {
    const data = await res.json();
    // console.log(data);
    // console.log(load(data));
    dispatch(load(data));
    // return data;
  }
  throw res;
};

// export const getPokemonTypes = () => async dispatch => {
//   const res = await fetch('/api/pokemon/types');
//   if (res.ok) {
//     const data = await res.json();
//     dispatch(setTypes(data));
//     return data;
//   } else if (res.status === 401) {
//     return dispatch(removeUser());
//   }
//   throw res;
// };

// export const createPokemon = (pokemon) => async dispatch => {
//   const res = await fetch('/api/pokemon/', {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(pokemon)
//   });
//   if (res.ok) {
//     dispatch(getPokemon());
//     return res;
//   } else if (res.status === 401) {
//     dispatch(removeUser());
//     return res;
//   } else if (res.status === 422) {
//     const { errors } = await res.json();
//     dispatch(formErrors(errors));
//     return res;
//   }
//   throw res;
// };

const initialState = {
  tasks: [],
  project:{},
  Orgization:{}
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case LOAD:
      return { ...state, tasks: action.tasks };

    default:
      return state;
  }
}
