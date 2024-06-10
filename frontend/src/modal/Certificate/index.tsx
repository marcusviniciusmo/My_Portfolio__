interface CertificateModalProps {
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
    area: string;
  };
  toggleModal: () => void;
}

export function CertificateModal({
  certificate,
  toggleModal,
}: CertificateModalProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        zIndex: 999,
      }}
    >
      <h1>CERTIFICATE MODAL</h1>
      <span onClick={toggleModal}>X</span>
      <img
        src={certificate.image}
        alt=""
        style={{ width: '40rem', height: '40rem' }}
      />
      <span>{certificate.name}</span>
      <span>{certificate.workload}</span>
      <span>{certificate.instructor}</span>
      <span>{certificate.institution}</span>
      <span>{certificate.conclusion}</span>
      <span>{certificate.score}</span>
      <span>{certificate.sharingLink}</span>
      <span>{certificate.area}</span>
    </div>
  );
}
