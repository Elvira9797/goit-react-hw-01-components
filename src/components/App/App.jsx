import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import { Container } from './App.styled';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export const App = () => {
  return (
    <Container>
      <Global styles={GlobalStyles} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </Container>
  );
};
