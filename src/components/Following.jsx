import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import GithubUser from "./GithubUser.jsx";
import Infinite from "react-infinite";

class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: [],
      loading: false,
      page: 1
    };
  }

  fetchData = () => {
    this.setState({ loading: true });
    let url = `https://api.github.com/users/${this.props
      .username}/following?page=${this.state.page}&per_page=50`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(st => ({
          following: st.following.concat(data),
          loading: false,
          page: st.page + 1
        }));
      });
  };

  renderGitHubUser = data => {
    return <GithubUser login={data.login} avatar_url={data.avatar_url} />;
  };

  render() {
    // <div className="followers-page">
    //   <h3>Following :</h3>
    //   <ul>{this.state.following.map(this.renderGitHubUser)}</ul>
    // </div>
    return (
      <div>
        <h3>Following :</h3>
        <Infinite
          elementHeight={41}
          isInfiniteLoading={this.state.loading}
          onInfiniteLoad={this.fetchData}
          useWindowAsScrollContainer
          infiniteLoadBeginEdgeOffset={100}
          loadingSpinnerDelegate={<div className="loader" />}
        >
          {this.state.following.map(this.renderGitHubUser)}
        </Infinite>
      </div>
    );
  }
}

export default Following;
