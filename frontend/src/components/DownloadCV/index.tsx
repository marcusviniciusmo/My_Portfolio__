import { Download } from '@mui/icons-material';

import { DownloadCVContainer } from './styles';

export function DownloadCV() {
  function handleDownload() {
    const tagLink = 'a';
    const link = document.createElement(tagLink);

    link.href = '/curriculum/CV_Marcus_Oliveira.pdf';
    link.download = 'CV_Marcus_Oliveira.pdf';

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
