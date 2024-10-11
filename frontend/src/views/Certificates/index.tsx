import { useEffect, useState } from 'react';

import { TitleContentPage } from '../../components/TitleContentPage';
import { Filter } from '../../components/Filter';
import { Modal } from '../../components/Modal';
import { CertificateModal } from '../../modal/Certificate';

import {
  CertificateType,
  CertificatesImagesMap,
} from '../../@types/Certificates';
import { getIndexMap, setBorderColor } from '../../utils/Functions';

import { borderColors } from '../../styles/global';
import { CertificatesContainer, Certificate, Image, Name } from './styles';

export function Certificates() {
  const [certificates, setCertificates] = useState<CertificateType[]>([]);
  const [isItemHover, setIsItemHover] = useState<boolean>(false);
  const [itemInHover, setItemInHover] = useState<string | null>(null);
  const [indexMap, setIndexMap] = useState<Map<string, number>>(new Map());
  const [certificatesFiltered, setCertificatesFiltered] = useState<
    CertificateType[]
  >([]);
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateType | null>(null);

  useEffect(() => {
    const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
    const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

    fetch(`${baseUrlApi}/certificates/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        const sortedCertificates = data.sort(
          (a: CertificateType, b: CertificateType) => {
            const dateA = new Date(a.conclusion).getTime();
            const dateB = new Date(b.conclusion).getTime();
            return dateB - dateA;
          },
        );

        setCertificates(sortedCertificates);
      })
      .catch((error) => {
        console.log(`Error: ${error}.`);
      });
  }, []);

  useEffect(() => {
    const map = getIndexMap(certificates);

    setIndexMap(map);

    setCertificatesFiltered(
      certificates.sort((a, b) => {
        const dateA = new Date(a.conclusion).getTime();
        const dateB = new Date(b.conclusion).getTime();
        return dateB - dateA;
      }),
    );
  }, [certificates]);

  function selectCertificate(certificate: CertificateType | null) {
    setSelectedCertificate(certificate);
  }

  function getBorderColor(listId: string) {
    return setBorderColor(borderColors, indexMap, listId);
  }

  function handleMouseEnterList(isHover: boolean) {
    setIsItemHover(isHover);
  }

  function handleMouseEnterItem(itemId: string | null) {
    setItemInHover(itemId);
  }

  return (
    <CertificatesContainer>
      <TitleContentPage title="Certificates" />

      <Filter list={certificates} setListFiltered={setCertificatesFiltered} />

      <div
        className="certificateContainer"
        onMouseEnter={() => handleMouseEnterList(true)}
        onMouseLeave={() => handleMouseEnterList(false)}
      >
        {certificatesFiltered.map((certificate) => {
          return (
            <Certificate
              key={certificate.id}
              $borderColor={getBorderColor(certificate.id)}
              $isListInHover={isItemHover}
              $isItemInHover={certificate.id === itemInHover}
              title={`${certificate.name} certificate`}
              onClick={() => selectCertificate(certificate)}
              onMouseEnter={() => handleMouseEnterItem(certificate.id)}
              onMouseLeave={() => handleMouseEnterItem(null)}
            >
              <Image src={CertificatesImagesMap[certificate.image]} alt="" />
              <Name>{certificate.name}</Name>
            </Certificate>
          );
        })}
      </div>

      {selectedCertificate && (
        <Modal title="Certificate" toggleModal={() => selectCertificate(null)}>
          <CertificateModal certificate={selectedCertificate} />
        </Modal>
      )}
    </CertificatesContainer>
  );
}
