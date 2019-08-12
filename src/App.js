import React, { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { setSearchName, searchName, setRepos } from './actions';
import setRepoLists from './reducers/setRepoLists';
import RepoList from './RepoList';
import './App.css';



// @component
// search bar component
const SearchBar = () => {
  // we get access to the whole state
  const githubName = useSelector(state => state.githubName);
  const dispatch = useDispatch();
  return (
    <section>
      <input
        type="text"
        value={githubName}
        onChange={e => dispatch(setSearchName(e.target.value))}
      />

      <button type="button" onClick={() => dispatch(searchName(githubName))}>Search</button>
    </section>
  );
};

const mapStateToProps = state => (state);
const mapDispatchToProps = { setRepos }

const RepoListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);


const App = (props) => {
  console.log(props)
    return (
      <main>
        {
          props.searchNameReducer.searched ?
            <RepoListConnected />
            :
            <SearchBar />
        }

      </main>
    );
};

export default connect(mapStateToProps)(App);

