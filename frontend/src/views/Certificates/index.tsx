import { useEffect, useState } from 'react';
import { TitleContentPage } from '../../components/TitleContentPage';
import {
  CertificatesList,
  CertificatesListType,
} from '../../data/certificates';
import { CertificateModal } from '../../modal/Certificate';
import {
  CertificatesContainer,
  CertificateContainer,
  borderColors,
} from './styles';

export function Certificates() {
  const [certificatesList, setCertificatesList] = useState<
    CertificatesListType[]
  >([]);
  const [hashIndexMap, setHashIndexMap] = useState<Map<string, number>>(
    new Map(),
  );
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificatesListType | null>(null);

  useEffect(() => {
    setCertificatesList(CertificatesList);
  }, []);

  useEffect(() => {
    const map = new Map<string, number>();

    certificatesList.forEach((certificate, index) => {
      map.set(certificate.id, index);
    });

    setHashIndexMap(map);
  }, [certificatesList]);

  function selectCertificate(certificate: CertificatesListType | null) {
    setSelectedCertificate(certificate);
  }

  return (
    <div className="contentContainer">
      <TitleContentPage title="Certificates" $left="24.2" />

      <CertificatesContainer>
        {certificatesList.map((certificate) => {
          return (
            <CertificateContainer
              key={certificate.id}
              onClick={() => selectCertificate(certificate)}
              $borderColor={
                borderColors[
                  hashIndexMap.get(certificate.id)! % borderColors.length
                ]
              }
            >
              <img
                src={certificate.image}
                alt=""
                title={`${certificate.name} certificate`}
              />
              <span>{certificate.name}</span>
            </CertificateContainer>
          );
        })}
      </CertificatesContainer>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          toggleModal={() => selectCertificate(null)}
        />
      )}
    </div>
  );
}
