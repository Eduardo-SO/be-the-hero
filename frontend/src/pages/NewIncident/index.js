import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '~/services/api';
import logo from '~/assets/logo.svg';
import { Wrapper } from './styles';
import {
    Container,
    LeftSection,
    FormSection,
} from '../_layouts/FormPage/styles';

export default function NewIncident() {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = { title, description, value };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                },
            });

            alert('Caso cadastrado com sucesso!');

            history.push('/profile');
        } catch (error) {
            alert('Algo deu errado, tente novamente');
        }
    }

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
                    <form onSubmit={handleNewIncident}>
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            placeholder="Titulo do caso"
                        />
                        <textarea
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            placeholder="Descrição"
                        />
                        <input
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                            type="number"
                            min="0"
                            placeholder="Valor em reais"
                        />

                        <button type="submit" className="button">
                            Cadastrar
                        </button>
                    </form>
                </FormSection>
            </Container>
        </Wrapper>
    );
}
