import PropTypes from 'prop-types';
import { FriendStatus, FriendItem, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const backgroundColor = isOnline ? 'green' : 'red';

  return (
    <FriendItem>
      <FriendStatus style={{ backgroundColor }}></FriendStatus>
      <img src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
