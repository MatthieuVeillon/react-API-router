import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class GithubUser extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Link className="followers-user-link" to={`/user/${this.props.login}`}>
        <div className="followers-wrapper">
          <img className="followers-user-picture" src={this.props.avatar_url} />
          {this.props.login}
        </div>
      </Link>
    );
  }
}

export default GithubUser;
