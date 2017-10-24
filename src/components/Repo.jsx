import React from "react";
import GithubRepo from "./GithubRepo.jsx";

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let url = `https://api.github.com/users/${this.props.username}/repos`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ repos: data });
      });
  }

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
      return <div className="user-followers">LOADING...</div>;
    }

    // If we get to this part of `render`, then the user is loaded
    const userRepos = this.state.repos;

    return (
      <div className="followers-page">
        <h3>Repos of {this.props.username}</h3>
        <ul>{this.state.repos.map(this.renderGitHubRepo)}</ul>
      </div>
    );
  }
}

export default Repo;
