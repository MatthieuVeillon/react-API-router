import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import GithubUser from "./GithubUser.jsx";
import Infinite from "react-infinite";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
      loading: false,
      page: 1
    };
  }

  fetchData = () => {
    this.setState({ loading: true });
    let url = `https://api.github.com/users/${this.props
      .username}/followers?page=${this.state.page}&per_page=50`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(st => ({
          followers: st.followers.concat(data),
          loading: false,
          page: st.page + 1
        }));
      });
  };

  renderGitHubUser = data => {
    return <GithubUser login={data.login} avatar_url={data.avatar_url} />;
  };

  render() {
    // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    /* loadingSpinnerDelegate={this.elementInfiniteLoad()} */
    /* timeScrollStateLastsForAfterUserScrolls={1000} */

    return (
      <div>
        <h3>Followers of {this.props.username}</h3>
        <Infinite
          elementHeight={41}
          isInfiniteLoading={this.state.loading}
          onInfiniteLoad={this.fetchData}
          useWindowAsScrollContainer
          infiniteLoadBeginEdgeOffset={100}
          loadingSpinnerDelegate={<div className="loader" />}
        >
          {this.state.followers.map(this.renderGitHubUser)}
        </Infinite>
      </div>
    );
  }
}

export default Followers;
