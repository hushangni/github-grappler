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
        return (
            <section>

            </section>
        );
    }
};

export default RepoList;