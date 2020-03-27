import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Incident, IncidentProperty, IncidentValue, DetailsButton, DetailsButtonText } from './styles';
import { formatPrice } from '../../util/format';

export default function IncidentList({ incidents, loadIncidents }) {
  const navigation = useNavigation();
  
  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  return (
    <FlatList 
      style={{ marginTop: 32 }}
      // showsVerticalScrollIndicator={ false }
      data={incidents}
      onEndReached={loadIncidents}
      onEndReachedThreshold={0.2}
      keyExtractor={(incident => String(incident.id))}
      renderItem={({item: incident}) => (
        <Incident>
          <IncidentProperty>ONG:</IncidentProperty>
          <IncidentValue>{incident.name}</IncidentValue>

          <IncidentProperty>CASO:</IncidentProperty>
          <IncidentValue>{incident.title}</IncidentValue>

          <IncidentProperty>VALOR:</IncidentProperty>
          <IncidentValue>{formatPrice(incident.value)}</IncidentValue>

          <DetailsButton onPress={() => navigateToDetail(incident)}>
            <DetailsButtonText>
              Ver mais detalhes
            </DetailsButtonText>
            <Feather name="arrow-right" size={16} color="blue" />
          </DetailsButton>
        </Incident>
      )}
    />
  );
}
