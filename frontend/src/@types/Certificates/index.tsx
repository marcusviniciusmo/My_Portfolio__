import AdministrativeDevelopment from '../../assets/certificates/_AdministrativeDevelopment.png';
import AlgorithmsAndProgrammingLogic from '../../assets/certificates/_AlgorithmsAndProgrammingLogic.jpg';
import AnIntroductionToChildrenFirst from '../../assets/certificates/_AnIntroductionToChildrenFirst.png';
import BasicsOfInfectionPreventionAndControl from '../../assets/certificates/_BasicsOfInfectionPreventionAndControl.png';
import CSharpComplete2020OrientedObjectProgramming from '../../assets/certificates/_CSharpComplete2020OrientedObjectProgramming.jpg';
import DignityAtWork from '../../assets/certificates/_DignityAtWork.png';
import HandHygiene from '../../assets/certificates/_HandHygiene.jpg';
import HardwareComputerAssemblyAndMaintenance from '../../assets/certificates/_HardwareComputerAssemblyAndMaintenance.png';
import Html5AndCss3 from '../../assets/certificates/_Html5AndCss3.jpg';
import HumanRightsBasedApproachInHealthAndSocialCareModule1 from '../../assets/certificates/_HumanRightsBasedApproachInHealthAndSocialCareModule1.jpg';
import HumanRightsBasedApproachInHealthAndSocialCareModule2 from '../../assets/certificates/_HumanRightsBasedApproachInHealthAndSocialCareModule2.jpg';
import HumanRightsBasedApproachInHealthAndSocialCareModule3 from '../../assets/certificates/_HumanRightsBasedApproachInHealthAndSocialCareModule3.jpg';
import HumanRightsBasedApproachInHealthAndSocialCareModule4 from '../../assets/certificates/_HumanRightsBasedApproachInHealthAndSocialCareModule4.jpg';
import IntroductionToFrontEndDevelopment from '../../assets/certificates/_IntroductionToFrontEndDevelopment.jpg';
import Java from '../../assets/certificates/_Java.jpg';
import JavaScript from '../../assets/certificates/_JavaScript.jpg';
import ManualHandlingAndPeopleHandlingELearningTheoryModule from '../../assets/certificates/_ManualHandlingAndPeopleHandlingELearningTheoryModule.jpg';
import MindMapping from '../../assets/certificates/_MindMapping.png';
import NlwUniteReactjs2024 from '../../assets/certificates/_NlwUniteReactjs2024_1.png';
import PersonalDevelopment from '../../assets/certificates/_PersonalDevelopment.png';
import PuttingOnAndTakingOffPpeInCommunityHealthcareSettings from '../../assets/certificates/_PuttingOnAndTakingOffPpeInCommunityHealthcareSettings.jpg';
import ReactFundamentals from '../../assets/certificates/_ReactFundamentals.png';
import SafeguardingAdultsAtRiskOfAbuse from '../../assets/certificates/_SafeguardingAdultsAtRiskOfAbuse.jpg';
import SapErpIntelligence from '../../assets/certificates/_SapErpIntelligence.jpg';
import SoftwareTesting from '../../assets/certificates/_SoftwareTesting.jpg';
import SpringReactWeekDsMovie from '../../assets/certificates/_SpringReactWeek_DSMovie.jpg';
import SpringReactWeeKDsVendas from '../../assets/certificates/_SpringReactWeek_DSVendas.png';
import TechnologicalDevelopment from '../../assets/certificates/_TechnologicalDevelopment.png';
import Word2016 from '../../assets/certificates/_Word2016.jpeg';

export const CertificatesImagesMap = {
  AdministrativeDevelopment,
  AlgorithmsAndProgrammingLogic,
  AnIntroductionToChildrenFirst,
  BasicsOfInfectionPreventionAndControl,
  CSharpComplete2020OrientedObjectProgramming,
  DignityAtWork,
  HandHygiene,
  HardwareComputerAssemblyAndMaintenance,
  Html5AndCss3,
  HumanRightsBasedApproachInHealthAndSocialCareModule1,
  HumanRightsBasedApproachInHealthAndSocialCareModule2,
  HumanRightsBasedApproachInHealthAndSocialCareModule3,
  HumanRightsBasedApproachInHealthAndSocialCareModule4,
  IntroductionToFrontEndDevelopment,
  Java,
  JavaScript,
  ManualHandlingAndPeopleHandlingELearningTheoryModule,
  MindMapping,
  NlwUniteReactjs2024,
  PersonalDevelopment,
  PuttingOnAndTakingOffPpeInCommunityHealthcareSettings,
  ReactFundamentals,
  SafeguardingAdultsAtRiskOfAbuse,
  SapErpIntelligence,
  SoftwareTesting,
  SpringReactWeekDsMovie,
  SpringReactWeeKDsVendas,
  TechnologicalDevelopment,
  Word2016,
};

export interface CertificateType {
  id: string;
  name: string;
  image: keyof typeof CertificatesImagesMap;
  workload?: string;
  instructor?: string;
  institution?: string;
  conclusion: string;
  type: 'graduation' | 'certification' | 'certificate';
  score?: string;
  sharingLink?: string;
  area: string;
}

export interface CertificateProps {
  $borderColor: string;
  $isListInHover: boolean;
  $isItemInHover: boolean;
}

export interface CertificateModalProps {
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
}

export interface ImageModalProps {
  $background: string;
}

export interface RowTableModalProps {
  $isListInHover: boolean;
  $isItemInHover: boolean;
}
