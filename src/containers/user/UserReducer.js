function userReducer(state={
    user: {
        id: null,
        name:'Anne',
        age: null
    },
    fetching: false,
    fetched: false,
    error: null
  }, action) {
      switch (action.type) {
          case 'FETCHING_USER': {
            return {...state, fetching: true}
          }
          case 'FETCH_USER_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
          }
          case 'FETCH_USER_ERROR': {
              return {
                ...state,
                fetching: false,
                error: action.payload
              }
          }
          case 'EDITING_USER': {
            return {...state, fetching: true}
          }
          case 'EDIT_USER_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
          }
          case 'EDIT_USER_ERROR': {
              return {
                ...state,
                fetching: false,
                error: action.payload
              }
          }
          default:
          return state

      }
  }

  export default userReducer;