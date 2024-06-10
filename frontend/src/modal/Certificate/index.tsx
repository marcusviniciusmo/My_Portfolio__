import { Close } from '@mui/icons-material';
import {
  CertificateModalContainer,
  Content,
  Header,
  Body,
  ImageContainer,
  Data,
} from './styles';

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
  };
  toggleModal: () => void;
}

export function CertificateModal({
  certificate,
  toggleModal,
}: CertificateModalProps) {
  return (
    <CertificateModalContainer>
      <Content>
        <Header>
          <span onClick={toggleModal}>
            <Close titleAccess="Close" fontSize="large" />
          </span>
        </Header>

        <Body>
          <ImageContainer background={certificate.image} />

          <Data>
            <tr>
              <th>Name</th>
              <td>{certificate.name}</td>
            </tr>

            {certificate.workload && (
              <tr>
                <th>Workload</th>
                <td>{certificate.workload}</td>
              </tr>
            )}

            {certificate.instructor && (
              <tr>
                <th>Instructor</th>
                <td>{certificate.instructor}</td>
              </tr>
            )}

            {certificate.institution && (
              <tr>
                <th>Institution</th>
                <td>{certificate.institution}</td>
              </tr>
            )}

            <tr>
              <th>Conclusion</th>
              <td>{certificate.conclusion}</td>
            </tr>

            {certificate.score && (
              <tr>
                <th>Score</th>
                <td>{certificate.score}</td>
              </tr>
            )}

            {certificate.sharingLink && (
              <tr>
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
              </tr>
            )}
          </Data>
        </Body>
      </Content>
    </CertificateModalContainer>
  );
}
