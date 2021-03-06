import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 32px;
    margin: 0 auto;

    h1 {
        margin-top: 60px;
        margin-bottom: 24px;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
        list-style: none;

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }

        li {
            background: #fff;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(100, 100, 100, 0.1);

            position: relative;

            button {
                background: transparent;
                position: absolute;
                right: 24px;
                top: 24px;
                border: 0;
                color: #a8a8b3;

                transition: color ease 0.3s;

                &:hover {
                    color: #e02041;
                }
            }

            strong {
                display: block;
                margin-bottom: 12px;
                color: #41414d;
            }

            p + strong {
                margin-top: 32px;
            }

            p {
                color: #737380;
                line-height: 21px;
                font-size: 16px;
            }
        }
    }
`;
