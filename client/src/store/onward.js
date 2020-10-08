// import { removeUser } from './authentication';

const LOAD_PROJECTS = "api/task/LOAD_PROJECTS";
const LOAD_TASKS = "api/task/LOAD_TASKS";
const LOAD_ORG = "api/task/LOAD_ORG";

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
const loadOrg = (orgs) => {
  return {
    type: LOAD_ORG,
    orgs
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

export const getTasks = (userId) => async dispatch => {
// const obj = {userId:userId}
  const res = await fetch(`/api/task/${userId}`);
  console.log(res);
  if (res.ok) {
    const data = await res.json();
    const {tasks, projects, organization} = data;
    // console.log(data);
    // console.log(load(data));
    dispatch(loadTasks(tasks));
    dispatch(loadProjects(projects));
    dispatch(loadOrg(organization));
    // return data;
  }
  throw res;
};


export const createTask = (obj) => async dispatch => {
  const {userId} = obj;
  const res = await fetch('/api/task/', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
  });
  if (res.ok) {
    dispatch(getTasks(userId));
    return res;
    }
    throw res;
};
export const createProject = (obj) => async dispatch => {
  const {userId} = obj;
  const res = await fetch('/api/project/', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
  });
  if (res.ok) {
    dispatch(getTasks(userId));
    return res;
    }
    throw res;
};
export const deleteTask = (recieve)=> async dispatch => {
  const {target, userId} = recieve;
  let obj = {taskId:target};
  const res = await fetch('/api/task/', {
    method: "delete",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
  });
  if (res.ok) {
    dispatch(getTasks(userId));
    return res;
    }
}
export const deleteProject = (recieve)=> async dispatch => {
  const {target, userId} = recieve;
  console.log('Helllooooo');
  let obj = {projectId:target};
  const res = await fetch('/api/project/', {
    method: "delete",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj),
  });
  if (res.ok) {
    dispatch(getTasks(userId));
    return res;
    }
}
const initialState = {
  tasks: [],
  projects:[],
  orgs:[]
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case LOAD_TASKS:
      return { ...state, tasks: action.tasks };

    case LOAD_PROJECTS:
      return { ...state, projects: action.projects };
    case LOAD_ORG:
      return { ...state, orgs: action.orgs };

    default:
      return state;
  }
}
