import { Close } from '@mui/icons-material';

import { ModalProps } from '../../@types/Modal';

import { ModalContainer, Header } from './styles';

export function Modal({ children, title, toggleModal }: ModalProps) {
  return (
    <ModalContainer>
      <div className="modalContent">
        <Header>
          <h2>{title}</h2>
          <span title="Close" onClick={toggleModal}>
            <Close fontSize="large" />
          </span>
        </Header>

        <div>{children}</div>
      </div>
    </ModalContainer>
  );
}
