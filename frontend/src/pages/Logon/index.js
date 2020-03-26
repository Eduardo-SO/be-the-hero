import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '~/services/api';
import { Container, FormSection, HeroesSection } from './styles';
import logo from '../../assets/logo.svg';
import heroes from '~/assets/heroes.png';

export default function Logon() {
    const history = useHistory();

    const [id, setId] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });

            const { name } = response.data;

            localStorage.setItem('ongName', name);
            localStorage.setItem('ongId', id);

            history.push('profile');
        } catch (error) {
            alert('Nenhuma ONG com este ID foi encontrada');
        }
    }

    return (
        <Container>
            <FormSection>
                <img src={logo} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        type="text"
                        placeholder="Sua ID"
                    />
                    <button type="submit" className="button">
                        Entrar
                    </button>

                    <Link className="icon-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </FormSection>

            <HeroesSection>
                <img src={heroes} alt="The Heroes" />
            </HeroesSection>
        </Container>
    );
}
