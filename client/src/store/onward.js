// import { removeUser } from './authentication';

const LOAD_PROJECTS = "api/task/LOAD_PROJECTS";
const LOAD_TASKS = "api/task/LOAD_TASKS";
const SET_CURRENT = "pokedex/pokemon/SET_CURRENT";

const loadTasks = (tasks) => {
  return {
    type: LOAD_TASKS,
    tasks
  };
};
const loadProjects = (projects) => {
  return {
    type: LOAD_PROJECTS,
    projects
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
    const {tasks, projects} = data;
    // console.log(data);
    // console.log(load(data));
    dispatch(loadTasks(tasks));
    dispatch(loadProjects(projects));
    // return data;
  }
  throw res;
};


export const createTask = (obj) => async dispatch => {
  const res = await fetch('/api/task/', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
  });
  if (res.ok) {
    dispatch(getTasks());
    return res;
    }
    throw res;
};
export const createProject = (obj) => async dispatch => {
  const res = await fetch('/api/project/', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
  });
  if (res.ok) {
    dispatch(getTasks());
    return res;
    }
    throw res;
};
export const deleteTask = (target)=> async dispatch => {
  let obj = {taskId:target};
  const res = await fetch('/api/task/', {
    method: "delete",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
  });
  if (res.ok) {
    dispatch(getTasks());
    return res;
    }
}
const initialState = {
  tasks: [],
  projects:[],
  Orgization:{}
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case LOAD_TASKS:
      return { ...state, tasks: action.tasks };

    case LOAD_PROJECTS:
      return { ...state, projects: action.projects };

    default:
      return state;
  }
}
