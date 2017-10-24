import React from "react";

class GithubRepo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="followers-wrapper">
        <a className="followers-user-link" href={this.props.html_url}>
          {this.props.full_name}
        </a>
        <div className="stargazers-wrapper">
          <p>{this.props.stargazers_count}</p>
          <img
            className="stargazers-picture"
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/431-200.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default GithubRepo;
