import React from "react";
import Statistic from "../../../common/Statistic";

import "./ProfileStatistics.css";

const ProfileStatistics = ({ statistics }) => {
  const { posts, followers, following } = statistics;
  return (
    <div className="profile-statistics">
      <Statistic title={"Posts"} value={posts}></Statistic>
      <Statistic title={"Followers"} value={followers}></Statistic>
      <Statistic title={"Following"} value={following}></Statistic>
    </div>
  );
};

export default ProfileStatistics;
