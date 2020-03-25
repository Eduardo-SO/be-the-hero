import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #e02041;
`;

export const Container = styled.div`
    background: white;
    width: 100%;
    max-width: 1200px;
    border-radius: 4px;
    margin: 0 auto;
    padding: 100px;

    box-shadow: 0 0 100px rgba(50, 50, 50, 0.1), 0 0 10px rgba(50, 50, 50, 0.3);

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1050px) {
        flex-direction: column;
        justify-content: center;
        max-width: 500px;
        padding: 50px;
    }
`;

export const LeftSection = styled.section`
    width: 100%;
    max-width: 380px;

    img {
        width: 100%;
        max-width: 250px;
        min-width: 150px;
    }

    h1 {
        margin: 64px 0 32px;
        font-size: 32px;
    }

    p {
        font-size: 18px;
        color: #737380;
        line-height: 32px;
    }
`;

export const FormSection = styled.section`
    width: 100%;
    max-width: 450px;

    form {
        input {
            margin-top: 8px;
        }

        .input-group {
            display: flex;

            input + input {
                width: 80px;
                margin-left: 8px;
            }
        }
    }
`;
