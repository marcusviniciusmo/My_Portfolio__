import { Download } from '@mui/icons-material';

import { DownloadCVProps } from '../../@types/DownloadCV';

import { DownloadCVContainer } from './styles';

export function DownloadCV({ curriculum }: DownloadCVProps) {
  function handleDownload() {
    const tagLink = 'a';
    const link = document.createElement(tagLink);

    link.href = `/curriculum/${curriculum}`;
    link.download = curriculum;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <DownloadCVContainer title="Download CV" onClick={handleDownload}>
      <Download fontSize="large" />
      Download CV
    </DownloadCVContainer>
  );
}
