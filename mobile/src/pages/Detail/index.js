import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import { formatPrice } from '../../util/format';
import {  
  Container, 
  Incident,
  IncidentProperty, 
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText
} from './styles';
import Header from '../../Components/Header'

export default function Detail() {
  const route = useRoute();

  const { incident } = route.params;
  const message = `Olá APAD, estou entrando em contato pois gostaria de ajudar no caso da "${incident.title}" com o valor de ${formatPrice(incident.value)}`;

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.phone}&text=${message}`)
  }

  return (
    <Container>
      <Header goBack />

      <Incident>
        <IncidentProperty style={{ marginTop: 0 }}>ONG:</IncidentProperty>
          <IncidentValue>{incident.name} de {incident.city}, {incident.uf}</IncidentValue>

          <IncidentProperty>CASO:</IncidentProperty>
          <IncidentValue>{incident.title}</IncidentValue>

          <IncidentProperty>VALOR:</IncidentProperty>
          <IncidentValue>{formatPrice(incident.value)}</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={() => sendWhatsapp()}>
            <ActionText>
              WhatsApp
            </ActionText>
          </Action>

          <Action onPress={() => sendMail()}>
            <ActionText>
              E-mail
            </ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
