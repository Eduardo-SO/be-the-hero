import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Wrapper, Container, LeftSection, FormSection } from './styles';
import logo from '~/assets/logo.svg';

export default function Register() {
    return (
        <Wrapper>
            <Container>
                <LeftSection>
                    <img src={logo} alt="Be The Hero" />

                    <h1>Faça seu registro</h1>

                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a
                        encontrarem os casos da sua ONG.
                    </p>

                    <Link className="icon-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho cadastro
                    </Link>
                </LeftSection>

                <FormSection>
                    <form>
                        <input placeholder="Sua ID" />
                        <input type="email" placeholder="E-mail" />
                        <input type="tel" placeholder="WhatsApp" />
                        <div className="input-group">
                            <input placeholder="Cidade" />
                            <input placeholder="UF" />
                        </div>

                        <button type="submit" className="button">
                            Cadastrar
                        </button>
                    </form>
                </FormSection>
            </Container>
        </Wrapper>
    );
}
