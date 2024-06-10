import { useEffect, useState } from 'react';
import { TitleContentPage } from '../TitleContentPage';
import {
  CertificatesList,
  CertificatesListType,
} from '../../data/certificates';
import { CertificateModal } from '../../modal/Certificate';

export function Certificates() {
  const [certificatesList, setCertificatesList] = useState<
    CertificatesListType[]
  >([]);
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificatesListType | null>(null);

  useEffect(() => {
    setCertificatesList(CertificatesList);
  }, []);

  function selectCertificate(certificate: CertificatesListType | null) {
    setSelectedCertificate(certificate);
  }

  return (
    <div className="contentContainer">
      <TitleContentPage title="Certificates" left="24.2" />
      <h1>CERTIFICATES COMPONENT</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {certificatesList.map((certificate) => {
          return (
            <div
              key={certificate.id}
              onClick={() => selectCertificate(certificate)}
              style={{
                border: '1px solid #CECECE',
                display: 'flex',
                flexDirection: 'column',
                width: '21rem',
                margin: '1rem',
                overflow: 'hidden',
              }}
            >
              <img
                src={certificate.image}
                alt=""
                style={{ width: '20rem', height: '20rem' }}
              />
              <span>{certificate.name}</span>
            </div>
          );
        })}
      </div>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          toggleModal={() => selectCertificate(null)}
        />
      )}
    </div>
  );
}
