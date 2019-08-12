// @action
// set search name
export const setSearchName = name => ({
    type: "SET_SEARCH_NAME",
    payload: { name }
});

// @action
// search name
export const searchName = name => ({
    type: "SEARCH_NAME",
    payload: { name }
});

// @action
// search another
export const searchAnother = () => ({
    type: "SEARCH_ANOTHER"
})

// @action
// set repos
export const setRepos = ({ forks, pullRequests }) => ({
    type: "SET_REPOS",
    payload: { forks, pullRequests }
})