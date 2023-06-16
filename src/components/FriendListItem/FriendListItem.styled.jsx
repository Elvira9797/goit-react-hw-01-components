import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 250px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 15px;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const FriendStatus = styled.span`
  display: block;
  border-radius: 50%;
  width: 16px;
  height: 16px;
`;

export const FriendName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
