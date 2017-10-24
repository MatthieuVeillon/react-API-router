import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import GithubUser from "./GithubUser.jsx";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    let url = `https://api.github.com/users/${this.props.username}/followers`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ followers: data });
      });
  }

  renderGitHubUser = data => {
    return <GithubUser login={data.login} avatar_url={data.avatar_url} />;
  };

  render() {
    // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    if (!this.state.followers) {
      return <div className="user-followers">LOADING...</div>;
    }

    // If we get to this part of `render`, then the user is loaded
    const userfollowers = this.state.followers;
    console.log(userfollowers);

    return (
      <div className="followers-page">
        <h3>Followers of {this.props.username}</h3>
        <ul>{this.state.followers.map(this.renderGitHubUser)}</ul>
      </div>
    );
  }
}

export default Followers;
