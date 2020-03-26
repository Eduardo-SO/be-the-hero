import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import api from '~/services/api';
import { Container } from './styles';
import Header from '~/Components/Header';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');

    useEffect(() => {
        async function loadIncidents() {
            api.get('profile', {
                headers: {
                    Authorization: ongId,
                },
            }).then((response) => {
                setIncidents(response.data);
            });
        }

        loadIncidents();
    }, [ongId]);

    async function handleDeleteIncident(id) {
        const confirm = window.confirm(
            'Você realmente deseja excluir este caso?'
        );

        if (!confirm) return;

        await api.delete(`incidents/${id}`, {
            headers: {
                Authorization: ongId,
            },
        });

        setIncidents(incidents.filter((incident) => incident.id !== id));
    }

    return (
        <>
            <Header />
            <Container>
                <h1>Casos cadastrados</h1>

                <ul>
                    {incidents.map((incident) => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                            <p>
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(incident.value)}
                            </p>

                            <button
                                type="button"
                                onClick={() =>
                                    handleDeleteIncident(incident.id)
                                }
                            >
                                <FiTrash2 size={16} />
                            </button>
                        </li>
                    ))}
                </ul>
            </Container>
        </>
    );
}
