

// invoke as:
//import * as user from 'User/userActions';

import axios from 'axios';

export function fetchUser(id) {
  return function(dispatch) {
    dispatch({type: 'FETCHING_USER'});
    console.log('FETCHED');
      	dispatch({ type: 'FETCH_USER_FULFILLED', payload:{ name: 'José', age: 37, id: 25 } })
  }
}

export function editUser(id, data) {
  return function(dispatch) {
    dispatch({type: 'EDITING_USER'});
    axios.put('path/to/user/'+id, data)
      .then((response) => {
      	dispatch({ type: 'EDIT_USER_FULFILLED', payload: response.data })
      })
      .catch((err) => {
      	dispatch({ type: 'EDIT_USER_ERROR', payload: err.msg });
      })
  }
}