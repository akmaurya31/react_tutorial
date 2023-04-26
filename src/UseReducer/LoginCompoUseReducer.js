import React, { useReducer } from 'react';
//We used five useState Hooks, and we had to worry about when each of these states is transitioned. We can refactor the code above to use useReducer and encapsulate all our logic and state transitions in one reducer function:

function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case 'login': {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect username or password!',
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: '',
      };
    }
    case 'logOut': {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}
const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};
export default function LoginCompoUseReducer() {
  const [loginstate, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = loginstate;
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'login' });
    try {
      await function login({ username, password }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (username === 'ejiro' && password === 'password') {
              resolve();
            } else {
              reject();
            }
          }, 1000);
        });
      }
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };
  return (
    <div className='App'>
      <div className='login-container'>
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => dispatch({ type: 'logOut' })}>
              Log Out
            </button>
          </>
        ) : (
          <form className='form' onSubmit={onSubmit}>
            {error && <p className='error'>{error}</p>}
            <p>Please Login!</p>
            <input
              type='text'
              placeholder='username'
              value={username}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  fieldName: 'username',
                  payload: e.currentTarget.value,
                })
              }
            />
            <input
              type='password'
              placeholder='password'
              autoComplete='new-password'
              value={password}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  fieldName: 'password',
                  payload: e.currentTarget.value,
                })
              }
            />
            <button className='submit' type='submit' disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

//Notice how the new implementation with useReducer has made us more focused on the action the user is going to take. For example, when the login action is dispatched, we can see clearly what we want to happen. We want to return a copy of our current state, set our error to an empty string, and set isLoading to true:

//One simple answer is that you should avoid using Redux or any other third-party state management library until you have problems with vanilla React.