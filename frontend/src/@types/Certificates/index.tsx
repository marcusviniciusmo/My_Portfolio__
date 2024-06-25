export interface CertificateType {
  id: string;
  name: string;
  image: string;
  workload?: string;
  instructor?: string;
  institution?: string;
  conclusion: string;
  type: 'graduation' | 'certification' | 'certificate';
  score?: string;
  sharingLink?: string;
  area: string;
}

export interface CertificateProps {
  $borderColor: string;
  $isListInHover: boolean;
  $isItemInHover: boolean;
}

export interface CertificateModalProps {
  certificate: {
    image: string;
    name: string;
    workload?: string;
    instructor?: string;
    institution?: string;
    conclusion: string;
    type: string;
    score?: string;
    sharingLink?: string;
  };
  toggleModal: () => void;
}

export interface ImageModalProps {
  $background: string;
}

export interface RowTableModalProps {
  $isListInHover: boolean;
  $isItemInHover: boolean;
}
