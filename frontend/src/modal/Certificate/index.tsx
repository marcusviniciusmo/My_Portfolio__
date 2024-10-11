import { useState } from 'react';

import {
  CertificateModalProps as ModalProps,
  CertificatesImagesMap,
} from '../../@types/Certificates';

import { Body, ImageContainer, Table, Row } from './styles';

export function CertificateModal({ certificate }: ModalProps) {
  const [isListInHover, setIsHoverInList] = useState<boolean>(false);
  const [isItemHover, setIsItemHover] = useState<string | null>(null);

  function handleMouseEnterList(isHover: boolean) {
    setIsHoverInList(isHover);
  }

  function handleMouseEnterItem(itemLabel: string | null) {
    setIsItemHover(itemLabel);
  }

  return (
    <Body>
      <ImageContainer $background={CertificatesImagesMap[certificate.image]} />

      <Table
        onMouseEnter={() => handleMouseEnterList(true)}
        onMouseLeave={() => handleMouseEnterList(false)}
      >
        <tbody>
          <Row
            $isListInHover={isListInHover}
            $isItemInHover={isItemHover === 'name'}
            onMouseEnter={() => handleMouseEnterItem('name')}
            onMouseLeave={() => handleMouseEnterItem(null)}
          >
            <th>Name</th>
            <td>{certificate.name}</td>
          </Row>

          {certificate.workload && (
            <Row
              $isListInHover={isListInHover}
              $isItemInHover={isItemHover === 'workload'}
              onMouseEnter={() => handleMouseEnterItem('workload')}
              onMouseLeave={() => handleMouseEnterItem(null)}
            >
              <th>Workload</th>
              <td>{certificate.workload}</td>
            </Row>
          )}

          {certificate.instructor && (
            <Row
              $isListInHover={isListInHover}
              $isItemInHover={isItemHover === 'instructor'}
              onMouseEnter={() => handleMouseEnterItem('instructor')}
              onMouseLeave={() => handleMouseEnterItem(null)}
            >
              <th>Instructor</th>
              <td>{certificate.instructor}</td>
            </Row>
          )}

          {certificate.institution && (
            <Row
              $isListInHover={isListInHover}
              $isItemInHover={isItemHover === 'institution'}
              onMouseEnter={() => handleMouseEnterItem('institution')}
              onMouseLeave={() => handleMouseEnterItem(null)}
            >
              <th>Institution</th>
              <td>{certificate.institution}</td>
            </Row>
          )}

          <Row
            $isListInHover={isListInHover}
            $isItemInHover={isItemHover === 'conclusion'}
            onMouseEnter={() => handleMouseEnterItem('conclusion')}
            onMouseLeave={() => handleMouseEnterItem(null)}
          >
            <th>Conclusion</th>
            <td>{certificate.conclusion}</td>
          </Row>

          {certificate.score && (
            <Row
              $isListInHover={isListInHover}
              $isItemInHover={isItemHover === 'score'}
              onMouseEnter={() => handleMouseEnterItem('score')}
              onMouseLeave={() => handleMouseEnterItem(null)}
            >
              <th>Score</th>
              <td>{certificate.score}</td>
            </Row>
          )}

          {certificate.sharingLink && (
            <Row
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
            </Row>
          )}
        </tbody>
      </Table>
    </Body>
  );
}
