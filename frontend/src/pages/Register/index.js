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

export default function Register() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = { name, email, phone: whatsapp, city, uf };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu id de acesso: ${response.data.id}`);

            history.push('/');
        } catch (error) {
            alert(`Erro no cadastro, `);
        }
    }

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
                    <form onSubmit={handleRegister}>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome da ONG"
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="E-mail"
                        />
                        <input
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            type="tel"
                            placeholder="WhatsApp"
                        />
                        <div className="input-group">
                            <input
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Cidade"
                            />
                            <input
                                value={uf}
                                onChange={(e) => setUf(e.target.value)}
                                placeholder="UF"
                            />
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
