import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./Search";
import User from "./User";
import Followers from "./Followers.jsx";
import Following from "./Following.jsx";
import Repo from "./Repo.jsx";

/*
This function is used to render the user route. Unfortunately, it always
renders the same user. You need to fix this.
*/
const renderUser = info => {
  return <User username={info.match.params.name} />;
};

const renderFollowers = info => {
  console.log("info", info);
  return <Followers username={info.match.params.name} />;
};

const renderFollowing = info => {
  console.log("info", info);
  return <Following username={info.match.params.name} />;
};

const renderRepo = info => {
  return <Repo username={info.match.params.name} />;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="main-header" />
          <main className="main-content">
            <Route exact={true} path="/" render={() => <Search />} />
            <Route path="/user/:name" render={renderUser} />
            {/* why this doesn't replace the whole page and just update below user ? no nested  */}
            {/* <Route path="/user/:name/followers" component={Followers} /> */}
            <Route path="/user/:name/followers" render={renderFollowers} />
            <Route path="/user/:name/following" render={renderFollowing} />
            <Route path="/user/:name/repos" render={renderRepo} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
