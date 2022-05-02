import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import {
  AccountBackground,
  AuthButton,
  AccountCover,
  AccountContainer,
  AuthInput,
} from '../components/account.styles';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Text } from '../../../components/typography/text.component';

const Title = styled(Text)`
  font-size: 30px;
`;

const ErrorMessage = styled(Text)`
  color: red;
`;

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          style={styles.authItem}
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />

        <AuthInput
          style={styles.authItem}
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />

        {error && <ErrorMessage style={styles.authItem}>{error}</ErrorMessage>}

        <AuthButton
          style={styles.authItem}
          icon="lock-open-outline"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </AccountContainer>
      <AuthButton style={styles.authItem} onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};

const styles = {
  authItem: {
    marginTop: 16,
  },
};
