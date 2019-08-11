import React, { Component } from 'react';

import { createStore } from 'redux';
import './App.css';

// creating initial search state
const INIT_SEARCH_STATE = {
  githubName: ""
};

// @action
// set search name
const setSearchName = name => ({
  type: "SET_SEARCH_NAME",
  payload: { name }
});


// @reducer
// search githubname reducer
const searchGithubNameReducer = (state = INIT_SEARCH_STATE, action) => {
  switch (action.type) {
    case "SET_SEARCH_NAME":
      return { ...state, githubName: action.payload.name };
    default:
      return state;
  }
};

// @store
// creating global store
export const store = createStore(searchGithubNameReducer);

const SearchBar = () => {
  return (
    <section>
      <input
        type="text"
        // value={pokemonName}
        // onChange={evt => setNewName(evt.target.value)}
      />

      <button type="button">Search</button>
    </section>
  );
};

class App extends Component {


  render() {
    return (
      <main>
        <SearchBar />
      </main>
    );
  }
};

export default App;

