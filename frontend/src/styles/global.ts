import { createGlobalStyle } from 'styled-components';

export const borderColors = [
  'var(--borderColor1)',
  'var(--borderColor2)',
  'var(--borderColor3)',
];

export const GlobalStyle = createGlobalStyle`
  :root {
    --backgroundWhite: #FFFFFF;
    --backgroundOpacityModal: rgba(0, 0, 0, 0.7);

    --textWhite: #FFFFFF;

    --colorIconDark: #00008B;
    --colorIconLight: #FFA500;

    --gradientBackgroundFrom: #FA5252;
    --gradientBackgroundTo: #DD2476;

    --borderColor1: #FCF4FF;
    --borderColor2: #EEFBFF;
    --borderColor3: #FFF0F0;

    --boxShadow: ${({ theme }) => `0 2px 4px -2px ${theme.colors.borderAlfa}`};
    --boxShadowModal: 0 0 5px #CECECE;

    --max-z-index: 999;

    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-image: url(${({ theme }) => theme.backgroundImage});
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    all: unset;
  }

  &:focus {
    outline: 0;
  }

  &.viewContent {
    background: ${({ theme }) => theme.colors.primaryBackground};
    height: 100%;
    border-radius: 2rem;
    margin-top: 17.6rem;
  }

  &.pageContainer {
    color: ${({ theme }) => theme.colors.primaryText};
    padding: 4.8rem 5.6rem;
    display: flex;
    flex-direction: column;
  }

  &.fieldInputContainer,
  &.fieldTextareaContainer {
    background: ${({ theme }) => theme.colors.primaryBackground};
    flex: 1;
    position: relative;
  }

  &.fieldInputStyled,
  &.fieldTextareaStyled {
    color: ${({ theme }) => theme.colors.primaryText};
    border: 2px solid ${({ theme }) => theme.colors.secondaryBorder};
    background: transparent;
    font-size: 1.6rem;
    line-height: 4rem;
    width: 100%;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    transition: all 0.3s ease-in-out;
    z-index: var(--max-z-index);

    &:focus,
    &:valid {
      border: 2px solid ${({ theme }) => theme.colors.primaryBorder};
    }
  }

  &.fieldInputLabel,
  &.fieldTextareaLabel {
    background: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 1.6rem;
    margin: 0 2rem;
    padding: 0 1.5rem;
    position: absolute;
    top: 2rem;
    left: -1rem;
    user-select: none;
    pointer-events: none;
    transition: all 0.2s ease;
  }
`;
