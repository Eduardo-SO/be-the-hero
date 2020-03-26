import React from 'react';

import { FiTrash2 } from 'react-icons/fi';

import { Container } from './styles';
import Header from '~/Components/Header';

export default function Profile() {
    return (
        <>
            <Header />
            <Container>
                <h1>Casos cadastrados</h1>

                <ul>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={16} />
                        </button>
                    </li>

                    <li>
                        <strong>CASO 2:</strong>
                        <p>Caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={16} />
                        </button>
                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={16} />
                        </button>
                    </li>

                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>Descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={16} />
                        </button>
                    </li>
                </ul>
            </Container>
        </>
    );
}
