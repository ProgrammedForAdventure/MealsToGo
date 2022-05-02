import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import {
  AccountBackground,
  AccountCover,
  AuthButton,
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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>

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
        onChangeText={(p1) => setPassword(p1)}
      />

      <AuthInput
        style={styles.authItem}
        label="Repeat Password"
        value={repeatedPassword}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(p2) => setRepeatedPassword(p2)}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <AuthButton
        style={styles.authItem}
        icon="email"
        onPress={() => onRegister(email, password, repeatedPassword)}
      >
        Register
      </AuthButton>

      <AuthButton style={styles.authItem} onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};

const styles = {
  authItem: {
    marginTop: 12,
  },
};
