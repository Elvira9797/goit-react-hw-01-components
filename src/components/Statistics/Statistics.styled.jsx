import styled from '@emotion/styled';

export const StatSection = styled.section`
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const StatTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing(8)};
  color: ${props => props.theme.colors.grey};
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(6)};
  color: ${props => props.theme.colors.white};
`;

export const Label = styled.span`
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Percentage = styled.span`
  font-size: 24px;
`;
