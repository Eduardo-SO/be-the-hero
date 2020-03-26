import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
    const history = useHistory();

    const ongName = localStorage.getItem('ongName');

    function handleLogout() {
        const confirm = window.confirm(
            'Você realmente deseja sair da aplicação?'
        );

        if (!confirm) return;

        localStorage.clear();
        history.push('/');
    }

    return (
        <Container>
            <img src={logo} alt="Be The Hero" />
            <span>Bem vinda, {ongName}</span>

            <Link className="button" to="/incidents/new">
                Cadastrar novo caso
            </Link>
            <button onClick={handleLogout} type="button">
                <FiPower size={22} />
            </button>
        </Container>
    );
}
