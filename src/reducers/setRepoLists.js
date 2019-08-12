// creating initial repo state
const INIT_REPO_STATE = {
    forks: [],
    pullRequests: []
}

// @reducer
// set repo lists reducer
const setRepoListsReducer = (state = INIT_REPO_STATE, action) => {
    switch (action.type) {
        case "SET_REPOS":
            const { forks, pullRequests } = action.payload;
            return { ...state, forks, pullRequests };

        default:
            return state;
    }
};

export default setRepoListsReducer;