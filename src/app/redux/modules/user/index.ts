import { IUser, IUserAction } from 'interfaces/user';
import Ajax from 'helpers/AjaxHelper';

export const GET_USER_REQUEST: string = 'user/GET_USER_REQUEST';
export const GET_USER_SUCCESS: string = 'user/GET_USER_SUCCESS';
export const GET_USER_FAILURE: string = 'user/GET_USER_FAILURE';

export const LOGIN_SUCCESS: string = 'user/LOGIN_SUCCESS';
export const LOGIN_FAILURE: string = 'user/LOGIN_FAILURE';

export const LOGOUT: string = 'user/LOGOUT';

const initialState: IUser = {
  isFetching: false,
  isLoggedIn: false,
  user: {}
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
        isLoggedIn: true,
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
        isLoggedIn: true,
        user: action.payload.user
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
        error: true,
      });

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}

/**
 * Log a user in and receive a JSON web token for authentication
 * @param email User's email provided at login
 * @param password User's password provided at login
 * @param cb Callback method to be fired after successful login
 */
export function loginUser(email: string, password: string, cb?) {
  return (dispatch) => {
    const body = JSON.stringify({
      email: email,
      password: password
    });

    return Ajax.post(`users/login`, {
      body: body
    })
    .then(res => {
      if (res.ok) {
        return res.json()
          .then((res) => dispatch(loginSuccess(res)))
          .then(res => cb());
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
  const { _id, email } = user;

  // Set the token to localstorage. No real need to pass it to state.
  window.localStorage.setItem('token', token);
  // Store the userId and email in storage
  window.localStorage.setItem('userEmail', email);
  window.localStorage.setItem('userId', _id);

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
 * Logout the current user session and destroy the token
 */
export function logoutUser() {
  window.localStorage.removeItem('token');

  return {
    type: LOGOUT
  };
}

/**
 * Get a single user based on their ID and store it in state
 * Used to re-authenticate
 * @param userId
 */
export function getUser(userId: string) {
  return (dispatch) => {
    dispatch(userRequest());

    return Ajax.get(`users/${userId}`)
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
      user: user,
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
