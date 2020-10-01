import Cookies from 'js-cookie';
const SET_USER = "auth/SET_USER";
const CREATE_USER = "auth/CREATE_USER";
const REMOVE_USER = "auth/REMOVE_USER";
export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
};

export const removeUser = () => ({
    type: REMOVE_USER,
  });

export const createUser = user => ({
    type: CREATE_USER,
    user,
})

export const logout = () => async (dispatch) => {
    const authToken = Cookies.get("token")
    console.log(authToken)
    const response = await fetch('/api/session', {
        method: 'delete',
    })
    if(response.ok){
        dispatch(removeUser());
    }
}

export const signup = (username, email, password) => async dispatch => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const response = await fetch('api/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                "XSRF-TOKEN": csrfToken
            },
            body: JSON.stringify({ username, email, password }),
        });
        if (response.ok) {
            const { user } = await response.json();
            dispatch(createUser(user));
        }
}

export const login = (username, password) => {
    return async dispatch => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = await fetch('/api/session', {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": csrfToken
            },
            body: JSON.stringify({ username, password })
        })
        res.data = await res.json();
        if (res.ok) {
            dispatch(setUser(res.data.user))
        }
        return res;
    }
}

window.login = login;

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case CREATE_USER:
            return action.user
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
}
