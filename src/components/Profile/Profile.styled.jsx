import styled from '@emotion/styled';

export const UserProfile = styled.div`
  text-align: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 260px;
  padding-top: ${props => props.theme.spacing(8)};
`;

export const UserPhoto = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const UserTag = styled.p`
  color: ${props => props.theme.colors.grey};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const UserLocation = styled.p`
  color: ${props => props.theme.colors.grey};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const UserStats = styled.ul`
  display: flex;
  border-top: ${props => `0.5px solid ${props.theme.colors.grey}`};
`;

export const UserStatsInfo = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(3)};
  background: ${props => props.theme.colors.lightGrey};
  border-right: ${props => `0.5px solid ${props.theme.colors.grey}`};
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.grey};
  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const Quantity = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.black};
`;
