import styled from 'styled-components/native';

export const TaskRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10;
  padding-right: 10;
  padding-top: 15;
  padding-bottom: 15;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const TaskTitle = styled.Text`
  font-size: 16;
`;
