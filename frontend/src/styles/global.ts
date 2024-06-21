import { createGlobalStyle } from 'styled-components';

export const borderColors = [
  'var(--borderColor1)',
  'var(--borderColor2)',
  'var(--borderColor3)',
];

export const GlobalStyle = createGlobalStyle`
  :root {
    --backgroundWhite: #FFFFFF;
    --textWhite: #FFFFFF;

    /** DELETE */
    --gradientHoverBackgroundFrom: #FA5252;
    --gradientHoverBackgroundTo: #DD2476;

    --colorIconDark: darkblue;
    --colorIconLight: orange;

    --colorProfileInfoDataHover: #FA5252;

    --colorProfileIconSmartphone: #E93B81;
    --colorProfileIconEmail: #6AB5B9;
    --colorProfileIconLocation: #FD7590;
    --colorProfileIconBirthday: #C17CEB;

    --max-z-index: 999;

    --gradientBackgroundFrom: #FA5252;
    --gradientBackgroundTo: #DD2476;

    --borderColor1: #FCF4FF;
    --borderColor2: #EEFBFF;
    --borderColor3: #FFF0F0;

    --boxShadow: ${({ theme }) => `0 2px 4px -2px ${theme.colors.border}`};

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

  &.backgroundGradientToRight {
    color: var(--textWhite);
    background: linear-gradient(
      to right,
      var(--gradientHoverBackgroundFrom),
      var(--gradientHoverBackgroundTo)
    );
  }

  &.gradientHover {
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover {
      color: var(--textWhite);
      background: linear-gradient(
        var(--gradientDirection),
        var(--gradientHoverBackgroundFrom),
        var(--gradientHoverBackgroundTo)
      );
    }
  }

  &.gradientHoverToRight {
    --gradientDirection: to right;
  }

  &.gradientHoverToLeft {
    --gradientDirection: to left;
  }

  &.pageMarginTop {
    background: ${({ theme }) => theme.colors.background};
    height: 100%;
    border-radius: 2rem;
    position: relative;
    top: 17.6rem;
  }

  &.pageContainer {
    color: ${({ theme }) => theme.colors.text};
    padding: 4.8rem 5.6rem;
    display: flex;
    flex-direction: column;
  }

  &.fieldContainer,
  &.fieldTextareaContainer {
    background: ${({ theme }) => theme.colors.background};
    flex: 1;
    position: relative;
  }

  &.fieldStyled,
  &.fieldTextareaStyled {
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.borderFieldForm};
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
      border: 2px solid ${({ theme }) => theme.colors.borderFieldFormFocused};
    }
  }

  &.fieldLabel,
  &.fieldTextareaLabel {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textFieldFormLabel};
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
