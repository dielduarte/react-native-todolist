import React, { PureComponent } from 'react';
import {
  ScrollView
} from 'react-native';
import styled from 'styled-components/native';
import Dimensions from 'Dimensions';

const { height } = Dimensions.get('window');

export const FullView = styled(ScrollView)`
  height: ${height - 124};
  width: 100%;
`;
