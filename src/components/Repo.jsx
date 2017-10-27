({
  babel: {
    presets: ["react-app"]
  }
});

import React from "react";
import GithubRepo from "./GithubRepo.jsx";
import Infinite from "react-infinite";

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loading: false,
      page: 1
    };
  }

  fetchData = () => {
    this.setState({ loading: true });
    let url = `https://api.github.com/users/${this.props
      .username}/repos?page=${this.state.page}&per_page=50`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(st => ({
          repos: st.repos.concat(data),
          loading: false,
          page: st.page + 1
        }));
      });
  };

  renderGitHubRepo = data => {
    return (
      <GithubRepo
        html_url={data.html_url}
        full_name={data.full_name}
        stargazers_count={data.stargazers_count}
      />
    );
  };

  render() {
    // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    console.log("Repo render");
    if (!this.state.repos) {
      return <div className="loader" />;
    }

    // If we get to this part of `render`, then the user is loaded
    const userRepos = this.state.repos;

    return (
      <div className="followers-page">
        <h3>Repos of {this.props.username}</h3>
        <Infinite
          elementHeight={41}
          isInfiniteLoading={this.state.loading}
          onInfiniteLoad={this.fetchData}
          useWindowAsScrollContainer
          infiniteLoadBeginEdgeOffset={100}
          loadingSpinnerDelegate={<div className="loader" />}
        >
          {this.state.repos.map(this.renderGitHubRepo)}
        </Infinite>
      </div>
    );
  }
}

export default Repo;
