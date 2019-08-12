// creating initial search state
const INIT_SEARCH_STATE = {
  githubName: "",
  searched: false
};

// @reducer
// search githubname reducer
const searchNameReducer = (state = INIT_SEARCH_STATE, action) => {
  switch (action.type) {
    case "SET_SEARCH_NAME":
      return { ...state, githubName: action.payload.name };
    case "SEARCH_NAME":
      return {...state, searched: true };
    case "SEARCH_ANOTHER":
      return {...state, githubName: "", searched: false }
    default:
      return state;
  }
};

export default searchNameReducer;