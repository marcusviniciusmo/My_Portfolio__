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
import * as Styles from './styles';

export function Certificates() {
  const [certificates, setCertificates] = useState<CertificateType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

    setIsLoading(true);

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
      })
      .finally(() => {
        setIsLoading(false);
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
    <Styles.CertificatesContainer>
      <TitleContentPage title="Certificates" />

      <Filter
        list={isLoading ? [] : certificates}
        setListFiltered={setCertificatesFiltered}
      />

      <div
        className="certificateContainer"
        onMouseEnter={() => handleMouseEnterList(true)}
        onMouseLeave={() => handleMouseEnterList(false)}
      >
        {isLoading ? (
          <Styles.CertificateSkeleton />
        ) : (
          <>
            {certificatesFiltered.map((certificate) => {
              return (
                <Styles.Certificate
                  key={certificate.id}
                  $borderColor={getBorderColor(certificate.id)}
                  $isListInHover={isItemHover}
                  $isItemInHover={certificate.id === itemInHover}
                  title={`${certificate.name} certificate`}
                  onClick={() => selectCertificate(certificate)}
                  onMouseEnter={() => handleMouseEnterItem(certificate.id)}
                  onMouseLeave={() => handleMouseEnterItem(null)}
                >
                  <Styles.Image
                    src={CertificatesImagesMap[certificate.image]}
                    alt=""
                  />
                  <Styles.Name>{certificate.name}</Styles.Name>
                </Styles.Certificate>
              );
            })}
          </>
        )}
      </div>

      {selectedCertificate && (
        <Modal title="Certificate" toggleModal={() => selectCertificate(null)}>
          <CertificateModal certificate={selectedCertificate} />
        </Modal>
      )}
    </Styles.CertificatesContainer>
  );
}
