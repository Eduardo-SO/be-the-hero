import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    max-width: 1180px;
    padding: 32px;
    margin: 0 auto;

    img {
        height: 64px;
    }

    span {
        font-size: 20px;
        margin-left: 24px;
    }

    a {
        width: 260px;
        margin-left: auto;
        margin-top: 0;
    }

    button {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        border: 1px solid #dcdce6;
        background: transparent;
        color: #e02041;
        margin-left: 16px;

        transition: all ease 0.3s;

        &:hover {
            /* background: #e02041;
            color: #fff; */
            border: 1px solid #e02041;
        }
    }
`;
