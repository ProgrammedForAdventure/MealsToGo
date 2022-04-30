import React from 'react';
import styled from 'styled-components';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from '../components/account.styles';

const RegisterButton = styled(AuthButton)`
  margin-top: ${(props) => props.theme.space[3]};
`;

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton onPress={() => navigation.navigate('Login')}>
          Login
        </AuthButton>
        <RegisterButton onPress={() => navigation.navigate('Register')}>
          Register
        </RegisterButton>
      </AccountContainer>
    </AccountBackground>
  );
};
