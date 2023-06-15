import { Profile } from "../Profile/Profile";
import user from "../../user.json";
import { Container } from "./App.styled";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../GlobalStyles/GlobalStyles";

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
    </Container>
  );
};
