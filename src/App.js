import React from "react";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationView from "./pages/common/navigation/NavigationView";
import ContainerView from "./pages/common/container/ContainerView";

import HomeContainer from "./pages/home/HomeContainer";
import SearchContainer from "./pages/search/SearchContainer";
import UploadContainer from "./pages/upload/UploadContainer";
import ActivityContainer from "./pages/activity/ActivityContainer";
import ProfileContainer from "./pages/profile/containers/ProfileContainer";
import PostContainer from "./pages/profile/containers/PostContainer";
import CommentContainer from "./pages/profile/containers/CommentContainer";

import "./App.css";

moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ",
    s: "1 s",
    m: "1 m",
    mm: "%d m",
    h: "1 h",
    hh: "%d h",
    d: "1 d",
    dd: "%d d",
    M: "1 m",
    MM: "%d mths",
    y: "1 y",
    yy: "%d y",
  },
});

function App() {
  return (
    <div className="app">
      <Router>
        <ContainerView>
          <Switch>
            <Route exact path="/" component={HomeContainer}></Route>
            <Route exact path="/search" component={SearchContainer}></Route>
            <Route exact path="/upload" component={UploadContainer}></Route>
            <Route exact path="/activity" component={ActivityContainer}></Route>
            <Route exact path="/profile/:userId">
              <ProfileContainer userId={1} />
            </Route>
            <Route
              exact
              path={`/profile/:userId/posts/:postId`}
              component={PostContainer}
            ></Route>
            <Route
              exact
              path={`/profile/:userId/posts/:postId/comments`}
              component={CommentContainer}
            ></Route>
          </Switch>
        </ContainerView>

        <NavigationView></NavigationView>
      </Router>
    </div>
  );
}

export default App;
