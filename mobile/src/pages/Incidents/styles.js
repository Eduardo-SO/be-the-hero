import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex:1;
  padding: ${Constants.statusBarHeight + 20}px 24px 0;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 16px;
  color: #13131a;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;