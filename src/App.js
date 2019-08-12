import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { setSearchName, searchName, setRepos, searchAnother } from './actions';
import RepoList from './RepoList';

// @component
// search bar component
const SearchBar = () => {
  // we get access to the whole state
  const githubName = useSelector(state => state.githubName);
  const dispatch = useDispatch();
  return (
    <section className="searchBar wrapper">
      <label htmlFor="githubName">Github Username: </label>
      <input
        type="text"
        id="githubName"
        value={githubName}
        placeholder="Type something..."
        onChange={e => dispatch(setSearchName(e.target.value))}
      />

      <button type="button" onClick={() => dispatch(searchName(githubName))}>Get User</button>
    </section>
  );
};

const mapStateToProps = state => (state);
const mapDispatchToProps = { setRepos, searchAnother }

const RepoListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);


const App = (props) => {
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

