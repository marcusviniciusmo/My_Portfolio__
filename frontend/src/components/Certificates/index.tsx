import { useEffect, useState } from 'react';
import { TitleContentPage } from '../TitleContentPage';
import {
  CertificatesList,
  CertificatesListType,
} from '../../data/certificates';

export function Certificates() {
  const [certificatesList, setCertificatesList] = useState<
    CertificatesListType[]
  >([]);

  useEffect(() => {
    setCertificatesList(CertificatesList);
  }, []);

  return (
    <div className="contentContainer">
      <TitleContentPage title="Certificates" left="24.2" />
      <h1>CERTIFICATES COMPONENT</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {certificatesList.map((certificate) => {
          return (
            <div
              key={certificate.id}
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
              <span>{certificate.workload}</span>
              <span>{certificate.instructor}</span>
              <span>{certificate.institution}</span>
              <span>{certificate.conclusion}</span>
              <span>{certificate.score}</span>
              <span>{certificate.sharingLink}</span>
              <span>{certificate.area}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
