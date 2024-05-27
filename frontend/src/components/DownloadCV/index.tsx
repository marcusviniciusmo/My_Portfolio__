import { Download } from '@mui/icons-material';
import { DownloadCVContainer } from './styles';

export function DownloadCV() {
  function handleDownload() {
    const link = document.createElement('a');

    link.href = '/curriculum/CV_Marcus_Oliveira.pdf';
    link.download = 'CV_Marcus_Oliveira.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <DownloadCVContainer
      className="backgroundGradientToRight gradientHover gradientHoverToLeft"
      title="Download CV"
      onClick={handleDownload}
    >
      <Download className="downloadIcon" fontSize="large" />
      Download CV
    </DownloadCVContainer>
  );
}
