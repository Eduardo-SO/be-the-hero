import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { Container, HeaderText, HeaderTextBold, Logo } from './styles';
import logo from '../../assets/logo.png';

export default function Header({ goBack, total }) {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Logo source={logo} />
      {goBack
        ? 
        <TouchableOpacity onPress={() => navigateBack()}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
        :
        <HeaderText>
          Total de <HeaderTextBold>{total}</HeaderTextBold> casos
        </HeaderText>
      }
    </Container>
  );
}
