import styled from 'styled-components';

export const ModalContainer = styled.div`
  background: var(--backgroundOpacityModal);
  z-index: var(--max-z-index);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;

  div.modalContent {
    background: ${({ theme }) => theme.colors.primaryBackground};
    box-shadow: var(--boxShadowModal);
    width: 90rem;
    height: 50rem;
    border-radius: 2rem;
  }
`;

export const Header = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  span {
    cursor: pointer;

    svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &::after {
      content: '';
      margin-inline: 2rem;
      position: absolute;
      inset: 0;
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.tertiaryText}`};
    }
  }
`;
