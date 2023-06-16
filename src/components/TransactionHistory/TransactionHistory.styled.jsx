import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 8px;
  box-shadow: 0px 4px 10px -3px rgba(143, 143, 143, 1);
`;

export const Tr = styled.tr`
  &:nth-of-type(2n + 2) {
    background-color: ${props => props.theme.colors.veryLightBlue};
  }
`;

export const Th = styled.th`
  padding: ${props => props.theme.spacing(3)};
  border-right: ${props => `1px solid ${props.theme.colors.lightGreyTrans}`};
  width: 250px;
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: 14px;
  &:last-child {
    border-right: none;
  }
`;

export const Td = styled.td`
  padding: ${props => props.theme.spacing(3)};
  border-left: ${props => `1px solid ${props.theme.colors.lightGreyTrans}`};
  border-right: ${props => `1px solid ${props.theme.colors.lightGreyTrans}`};
  width: 200px;
  text-align: center;
  color: ${props => props.theme.colors.greyTextTable};
`;
