import { IUser, IUserAction } from 'interfaces/user';

export const GET_USER_REQUEST: string = 'user/GET_USER_REQUEST';
export const GET_USER_SUCCESS: string = 'user/GET_USER_SUCCESS';
export const GET_USER_FAILURE: string = 'user/GET_USER_FAILURE';

export const LOGIN_SUCCESS: string = 'user/LOGIN_SUCCESS';
export const LOGIN_FAILURE: string = 'user/LOGIN_FAILURE';

const initialState: IUser = {
  isFetching: false
};

export function userReducer(state = initialState, action: IUserAction) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case GET_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.payload.user
      });

    case GET_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
        error: true,
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.payload.user
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
        error: true,
      });

    default:
      return state;
  }
}

/**
 * Log a user in and receive a JSON web token for authentication
 * @param email
 * @param password
 */
export function login(email: string, password: string) {
  return (dispatch) => {
    const body = JSON.stringify({
      email: email,
      password: password
    });

    return fetch(`/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(res => {
      if (res.ok) {
        return res.json()
          .then((res) => dispatch(loginSuccess(res)));
      } else {
        return res.json()
          .then((res) => dispatch(loginFailure(res)));
      }
    })
    .catch(err => {
      dispatch(loginFailure(err));
    });
  };
}

export function loginSuccess(res: any) {
  const { user, token } = res;
  // Set the token to localstorage. No real need to pass it to state.
  window.localStorage.setItem('token', token);

  return {
    type: LOGIN_SUCCESS,
    payload: {
      user: user
    }
  };
}

export function loginFailure(message: any) {
  return {
    type: LOGIN_FAILURE,
    payload: {
      message
    }
  };
}

/**
 * Get a single user based on their ID
 * @param userId
 */
export function getUser(userId: string) {
  return (dispatch) => {
    dispatch(userRequest());

    return fetch(`/api/users/${userId}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
            .then((res) => dispatch(userSuccess(res)));
        } else {
          return res.json()
            .then((res) => dispatch(userFailure(res)));
        }
      })
      .catch((err) => dispatch(userFailure(err)));
  };
}

export function userRequest(): IUserAction {
  return {
    type: GET_USER_REQUEST,
  };
}

export function userSuccess(user: any): IUserAction {
  return {
    type: GET_USER_SUCCESS,
    payload: {
      user: user
    }
  };
}

export function userFailure(message: any): IUserAction {
  return {
    type: GET_USER_FAILURE,
    payload: {
      message,
    },
  };
}