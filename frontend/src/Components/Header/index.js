import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="Be The Hero" />
            <span>Bem vinda, APAD</span>

            <Link className="button" to="/profile/new/incidents">
                Cadastrar novo caso
            </Link>
            <button type="button">
                <FiPower size={22} />
            </button>
        </Container>
    );
}
