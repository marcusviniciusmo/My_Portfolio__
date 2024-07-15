import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  title: string;
  toggleModal: () => void;
}
