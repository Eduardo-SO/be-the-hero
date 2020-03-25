import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, FormSection, HeroesSection } from './styles';
import logo from '../../assets/logo.svg';
import heroes from '~/assets/heroes.png';

export default function Logon() {
    return (
        <Container>
            <FormSection>
                <img src={logo} alt="Be The Hero" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder="Sua ID" />
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
