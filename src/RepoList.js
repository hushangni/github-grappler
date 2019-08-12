import React, { Component } from 'react';

class RepoList extends Component {
    componentDidMount() {
        const { githubName } = this.props.searchNameReducer;
        const { setRepos } = this.props;

        fetch(`https://api.github.com/users/${githubName}/events`)
            .then(res => {
                return res.json();
            })
            .then(data => {

                const pullRequests = data
                    .filter(event => event.type === 'PullRequestEvent')
                    .reduce((acc, curr) => {
                        const { action, pull_request } = curr.payload;
                        return [
                            ...acc,
                            {
                                status: action,
                                title: pull_request.title
                            }
                        ]
                    }, []);


                const forks = data
                    .filter(event => event.type === 'ForkEvent')
                    .reduce((acc, curr) => {
                        const { repo, payload } = curr;
                        return [
                            ...acc,
                            {
                                title: payload.forkee.full_name,
                                forkedFrom: repo.name
                            }
                        ]
                    }, [])

                setRepos( { forks, pullRequests })
            })
            .catch(() => {
                console.error("error in setting repos");
            })

    }
    render() {
        const { forks, pullRequests } = this.props.setRepoListsReducer;
        const { githubName } = this.props.searchNameReducer;
        const { searchAnother } = this.props;

        return (
            <section className="repos wrapper">
                <h1>{githubName}</h1>

                <div className="repoList">
                    <h2>Recent Forks</h2>
                    <ul className="forks">
                        {forks.length > 0 ?
                            forks.map(fork => (
                                <li>
                                    <h3>{fork.title}</h3>
                                    <p>Forked from: {fork.forkedFrom}</p>
                                </li>
                            ))
                            :
                            <h3 className="noRepos">No recent forks</h3>
                        }
                    </ul>
                </div>

                <div className="repoList">
                    <h2>Recent Pull Requests</h2>
                    <ul className="pullRequests">
                        {pullRequests.length > 0 ?
                            pullRequests.map( pr => (
                            <li>
                                <h3>{pr.title}</h3>
                                <p>Status: {pr.status}</p>
                            </li>
                            ))
                            :
                            <h3 className="noRepos">No recent PRs</h3>
                        }
                    </ul>
                </div>
                <button type="button" onClick={() => searchAnother()}>Search Another</button>
            </section>
        );
    }
};

export default RepoList;