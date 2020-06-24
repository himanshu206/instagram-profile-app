import React from "react";
import isEmpty from "lodash/isEmpty";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchUserProfile } from "../../../actions/profile";

import Header from "../../common/header/Header";
import ProfileView from "../components/user/ProfileView";

import PathUtils from "../../pathUtils";

class ProfileContainer extends React.PureComponent {
  componentDidMount() {
    const { userId, fetchUserProfile } = this.props;
    fetchUserProfile(userId);
  }

  loadPostsAndScrollTo = (postId) => {
    const { history, userId } = this.props;
    history.push(PathUtils.getPostsViewPath(userId, postId));
  };

  render() {
    const { user } = this.props;

    return (
      <>
        <Header title={"Profile"}></Header>
        {!isEmpty(user) ? (
          <ProfileView
            user={user}
            onGalleryImageClick={this.loadPostsAndScrollTo}
          ></ProfileView>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: { ...state.profile[props.userId] },
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserProfile: (userId) => dispatch(fetchUserProfile(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
