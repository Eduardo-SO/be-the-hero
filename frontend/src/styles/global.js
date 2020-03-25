import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

*:focus {
    outline: 0;
}

#root, html, body {
    height: 100%;
}

body {
    -webkit-font-smoothing: antialiased !important;
    background-color: #f0f0f5;
}

body, input, button {
    font: 400 14px 'Roboto', sans-serif;
}

button {
    cursor: pointer;
}

input[type='submit'] {
    border: none;
    cursor: pointer;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

form input {
    width: 100%;
    height: 60px;
    padding: 0 24px;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    color: #333;
}

.button {
    width: 100%;
    height: 60px;
    margin-top: 16px;
    display: inline-block;
    border: 0;
    border-radius: 8px;

    font-size: 18px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    line-height: 60px;

    color: #fff;
    background-color: #e02041;

    transition: background-color 0.3s;

    &:hover {
        background-color: ${darken(0.08, '#e02041')};
    }
}

.icon-link {
    display: flex;
    align-items: center;

    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    font-weight: 500;
    transition: opacity 0.3s;

    svg {
        margin-right: 8px;
    }

    &:hover {
        opacity: 0.8;
    }
}
`;
