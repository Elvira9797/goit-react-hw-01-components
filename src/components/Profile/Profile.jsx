import PropTypes from 'prop-types';
import {
  UserProfile,
  UserPhoto,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsInfo,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <div>
        <UserPhoto src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </div>

      <UserStats>
        <UserStatsInfo>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </UserStatsInfo>
        <UserStatsInfo>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </UserStatsInfo>
        <UserStatsInfo>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </UserStatsInfo>
      </UserStats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
