import React, { useState, useEffect } from 'react';

import { Container, Title, Description } from './styles';
import api from '../../services/api';

import Header from '../../Components/Header'
import IncidentList from '../../Components/IncidentList'

export default function Incidents() {
  const [ incidents, setIncidents ] = useState([]);
  const [ total, setTotal ] = useState(0);
  const [ page, setPage ] = useState(1);
  const [ loading, setLoading ] = useState(false);

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if(total > 0 && incidents.length === total ) {
      return
    };

    setLoading(true);

    const response = await api.get('incidents', { 
      params: { page }
    });

    setIncidents([ ...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, [])

  return (
    <Container>
      <Header total={total} />

      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia!</Description>

      <IncidentList incidents={incidents} loadIncidents={loadIncidents} />
    </Container>
  );
}
