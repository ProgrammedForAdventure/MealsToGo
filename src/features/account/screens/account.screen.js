import React from 'react';
import styled from 'styled-components';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from '../components/account.styles';
import { Text } from '../../../components/typography/text.component';

const RegisterButton = styled(AuthButton)`
  margin-top: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-size: 30px;
`;

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon={'lock-open-outline'}
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <RegisterButton
          icon={'email'}
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </RegisterButton>
      </AccountContainer>
    </AccountBackground>
  );
};
