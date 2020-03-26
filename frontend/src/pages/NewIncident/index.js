import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '~/assets/logo.svg';
import { Wrapper } from './styles';
import {
    Container,
    LeftSection,
    FormSection,
} from '../_layouts/FormPage/styles';

export default function NewIncident() {
    return (
        <Wrapper>
            <Container>
                <LeftSection>
                    <img src={logo} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>

                    <p>
                        Descreva o caso detalhadamente para encontrar um herói
                        para resolver isso.
                    </p>

                    <Link className="icon-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </LeftSection>

                <FormSection>
                    <form>
                        <input placeholder="Titulo do caso" />
                        <textarea placeholder="Descrição" />
                        <input placeholder="Valor em reais" />

                        <button type="submit" className="button">
                            Cadastrar
                        </button>
                    </form>
                </FormSection>
            </Container>
        </Wrapper>
    );
}
