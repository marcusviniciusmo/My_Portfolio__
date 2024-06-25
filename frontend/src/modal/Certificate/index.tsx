import { Close } from '@mui/icons-material';

import { CertificateModalProps as ModalProps } from '../../@types/Certificates';

import * as Styles from './styles';
import { useState } from 'react';

export function CertificateModal({ certificate, toggleModal }: ModalProps) {
  const [isListInHover, setIsHoverInList] = useState<boolean>(false);
  const [isItemHover, setIsItemHover] = useState<string | null>(null);

  function handleMouseEnterList(isHover: boolean) {
    setIsHoverInList(isHover);
  }

  function handleMouseEnterItem(itemLabel: string | null) {
    setIsItemHover(itemLabel);
  }

  return (
    <Styles.CertificateModalContainer>
      <div className="certificateModalContent">
        <Styles.Header>
          <span onClick={toggleModal}>
            <Close titleAccess="Close" fontSize="large" />
          </span>
        </Styles.Header>

        <Styles.Body>
          <Styles.ImageContainer $background={certificate.image} />

          <Styles.DataTable
            onMouseEnter={() => handleMouseEnterList(true)}
            onMouseLeave={() => handleMouseEnterList(false)}
          >
            <tbody>
              <Styles.Row
                $isListInHover={isListInHover}
                $isItemInHover={isItemHover === 'name'}
                onMouseEnter={() => handleMouseEnterItem('name')}
                onMouseLeave={() => handleMouseEnterItem(null)}
              >
                <th>Name</th>
                <td>{certificate.name}</td>
              </Styles.Row>

              {certificate.workload && (
                <Styles.Row
                  $isListInHover={isListInHover}
                  $isItemInHover={isItemHover === 'workload'}
                  onMouseEnter={() => handleMouseEnterItem('workload')}
                  onMouseLeave={() => handleMouseEnterItem(null)}
                >
                  <th>Workload</th>
                  <td>{certificate.workload}</td>
                </Styles.Row>
              )}

              {certificate.instructor && (
                <Styles.Row
                  $isListInHover={isListInHover}
                  $isItemInHover={isItemHover === 'instructor'}
                  onMouseEnter={() => handleMouseEnterItem('instructor')}
                  onMouseLeave={() => handleMouseEnterItem(null)}
                >
                  <th>Instructor</th>
                  <td>{certificate.instructor}</td>
                </Styles.Row>
              )}

              {certificate.institution && (
                <Styles.Row
                  $isListInHover={isListInHover}
                  $isItemInHover={isItemHover === 'institution'}
                  onMouseEnter={() => handleMouseEnterItem('institution')}
                  onMouseLeave={() => handleMouseEnterItem(null)}
                >
                  <th>Institution</th>
                  <td>{certificate.institution}</td>
                </Styles.Row>
              )}

              <Styles.Row
                $isListInHover={isListInHover}
                $isItemInHover={isItemHover === 'conclusion'}
                onMouseEnter={() => handleMouseEnterItem('conclusion')}
                onMouseLeave={() => handleMouseEnterItem(null)}
              >
                <th>Conclusion</th>
                <td>{certificate.conclusion}</td>
              </Styles.Row>

              {certificate.score && (
                <Styles.Row
                  $isListInHover={isListInHover}
                  $isItemInHover={isItemHover === 'score'}
                  onMouseEnter={() => handleMouseEnterItem('score')}
                  onMouseLeave={() => handleMouseEnterItem(null)}
                >
                  <th>Score</th>
                  <td>{certificate.score}</td>
                </Styles.Row>
              )}

              {certificate.sharingLink && (
                <Styles.Row
                  $isListInHover={isListInHover}
                  $isItemInHover={isItemHover === 'sharingLink'}
                  onMouseEnter={() => handleMouseEnterItem('sharingLink')}
                  onMouseLeave={() => handleMouseEnterItem(null)}
                >
                  <th>Link</th>
                  <td>
                    <a
                      href={certificate.sharingLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check here
                    </a>
                  </td>
                </Styles.Row>
              )}
            </tbody>
          </Styles.DataTable>
        </Styles.Body>
      </div>
    </Styles.CertificateModalContainer>
  );
}
