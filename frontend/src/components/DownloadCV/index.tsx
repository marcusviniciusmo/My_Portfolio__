import { Download } from '@mui/icons-material';
import { DownloadCVContainer } from './styles';

export function DownloadCV() {
  return (
    <DownloadCVContainer
      className="backgroundGradientToRight gradientHover gradientHoverToLeft"
      title="Download CV"
    >
      <Download className="downloadIcon" fontSize="large" />
      Download CV
    </DownloadCVContainer>
  );
}
