import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 900px) {
        justify-content: center;
    }
`;

export const FormSection = styled.section`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;

    img {
        align-self: flex-start;
    }

    form {
        margin-top: 100px;

        h1 {
            font-size: 32px;
            margin-bottom: 32px;
        }
    }
`;

export const HeroesSection = styled.section`
    margin: 20px;

    img {
        width: 100%;
        max-width: 600px;
    }

    @media (max-width: 900px) {
        display: none;
    }
`;
