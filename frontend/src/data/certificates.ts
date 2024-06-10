import AdministrativeDevelopment from '../assets/certificates/_AdministrativeDevelopment.png';
import AlgorithmsAndProgrammingLogic from '../assets/certificates/_AlgorithmsAndProgrammingLogic.jpg';
import AnIntroductionToChildrenFirst from '../assets/certificates/_AnIntroductionToChildrenFirst.png';
import BasicsOfInfectionPreventionAndControl from '../assets/certificates/_BasicsOfInfectionPreventionAndControl.png';
import CSharpComplete2020OrientedObjectProgramming from '../assets/certificates/_CSharpComplete2020OrientedObjectProgramming.jpg';
import DignityAtWork from '../assets/certificates/_DignityAtWork.png';
import HandHygiene from '../assets/certificates/_HandHygiene.jpg';
import HardwareComputerAssemblyAndMaintenance from '../assets/certificates/_HardwareComputerAssemblyAndMaintenance.png';
import Html5AndCss3 from '../assets/certificates/_Html5AndCss3.jpg';
import HumanRightsBasedApproachInHealthAndSocialCareModule1 from '../assets/certificates/_HumanRightsBasedApproachInHealthAndSocialCareModule1.jpg';
import HumanRightsBasedApproachInHealthAndSocialCareModule2 from '../assets/certificates/_HumanRightsBasedApproachInHealthAndSocialCareModule2.jpg';
import HumanRightsBasedApproachInHealthAndSocialCareModule3 from '../assets/certificates/_HumanRightsBasedApproachInHealthAndSocialCareModule3.jpg';
import HumanRightsBasedApproachInHealthAndSocialCareModule4 from '../assets/certificates/_HumanRightsBasedApproachInHealthAndSocialCareModule4.jpg';
import IntroductionToFrontEndDevelopment from '../assets/certificates/_IntroductionToFrontEndDevelopment.jpg';
import Java from '../assets/certificates/_Java.jpg';
import JavaScript from '../assets/certificates/_JavaScript.jpg';
import ManualHandlingAndPeopleHandlingELearningTheoryModule from '../assets/certificates/_ManualHandlingAndPeopleHandlingELearningTheoryModule.jpg';
import MindMapping from '../assets/certificates/_MindMapping.png';
import NlwUniteReactjs2024 from '../assets/certificates/_NlwUniteReactjs2024_1.png';
import PersonalDevelopment from '../assets/certificates/_PersonalDevelopment.png';
import PuttingOnAndTakingOffPpeInCommunityHealthcareSettings from '../assets/certificates/_PuttingOnAndTakingOffPpeInCommunityHealthcareSettings.jpg';
import ReactFundamentals from '../assets/certificates/_ReactFundamentals.png';
import SafeguardingAdultsAtRiskOfAbuse from '../assets/certificates/_SafeguardingAdultsAtRiskOfAbuse.jpg';
import SapErpIntelligence from '../assets/certificates/_SapErpIntelligence.jpg';
import SoftwareTesting from '../assets/certificates/_SoftwareTesting.jpg';
import SpringReactWeekDsMovie from '../assets/certificates/_SpringReactWeek_DSMovie.jpg';
import SpringReactWeeKDsVendas from '../assets/certificates/_SpringReactWeek_DSVendas.png';
import TechnologicalDevelopment from '../assets/certificates/_TechnologicalDevelopment.png';
import Word2016 from '../assets/certificates/_Word2016.jpeg';

export interface CertificatesListType {
  id: string;
  name: string;
  image: string;
  workload?: string;
  instructor?: string;
  institution?: string;
  conclusion: string;
  type: 'graduation' | 'certification' | 'certificate';
  score?: string;
  sharingLink?: string;
  area: string;
}

export const CertificatesList: CertificatesListType[] = [
  {
    id: '1',
    name: 'NLW Unite, Reactjs - 2024',
    image: NlwUniteReactjs2024,
    workload: '5h',
    instructor: 'Diego Fernandes',
    institution: 'Rocketseat',
    conclusion: 'June 2024',
    type: 'certificate',
    score: '',
    sharingLink:
      'https://app.rocketseat.com.br/certificates/d77ade0c-29de-4395-b23a-878c7a3f150d',
    area: 'IT',
  },
  {
    id: '2',
    name: 'Human Rights-based Approach in Health and Social Care - Module 1',
    image: HumanRightsBasedApproachInHealthAndSocialCareModule1,
    instructor: `Dr. Niamh O'Rourke`,
    institution: 'HSE',
    conclusion: 'May 2024',
    type: 'certificate',
    sharingLink:
      'https://www.hseland.ie/ekp/servlet/ekp/PRINTCERT?PX=N&USERID=ekp000521117&SK=0&AWARDID=EKP-3317-0400-1812-5215&ACTION=PRINTCERT',
    area: 'Healthcare',
  },
  {
    id: '3',
    name: 'Human Rights-based Approach in Health and Social Care - Module 2',
    image: HumanRightsBasedApproachInHealthAndSocialCareModule2,
    instructor: `Dr. Niamh O'Rourke`,
    institution: 'HSE',
    conclusion: 'May 2024',
    type: 'certificate',
    sharingLink:
      'https://www.hseland.ie/ekp/servlet/ekp/PRINTCERT?PX=N&USERID=ekp000521117&SK=0&AWARDID=EKP-3395-2226-5332-1723&ACTION=PRINTCERTCTION=PRINTCERT',
    area: 'Healthcare',
  },
  {
    id: '4',
    name: 'Human Rights-based Approach in Health and Social Care - Module 3',
    image: HumanRightsBasedApproachInHealthAndSocialCareModule3,
    instructor: `Dr. Niamh O'Rourke`,
    institution: 'HSE',
    conclusion: 'May 2024',
    type: 'certificate',
    sharingLink:
      'https://www.hseland.ie/ekp/servlet/ekp/PRINTCERT?PX=N&USERID=ekp000521117&SK=0&AWARDID=EKP-3395-8784-7595-7832&ACTION=PRINTCERT',
    area: 'Healthcare',
  },
  {
    id: '5',
    name: 'Human Rights-based Approach in Health and Social Care - Module 4',
    image: HumanRightsBasedApproachInHealthAndSocialCareModule4,
    instructor: `Dr. Niamh O'Rourke`,
    institution: 'HSE',
    conclusion: 'April 2024',
    type: 'certificate',
    sharingLink:
      'https://www.hseland.ie/ekp/servlet/ekp/PRINTCERT?PX=N&USERID=ekp000521117&SK=0&AWARDID=EKP-2250-7305-7656-8374&ACTION=PRINTCERT',
    area: 'Healthcare',
  },
  {
    id: '6',
    name: 'React Fundamentals',
    image: ReactFundamentals,
    workload: '6h',
    instructor: 'Diego Fernandes',
    institution: 'Rocketseat',
    conclusion: 'April 2024',
    type: 'certificate',
    sharingLink:
      'https://app.rocketseat.com.br/certificates/dd33bbf9-1660-4986-a339-1e042564f8d2',
    area: 'IT',
  },
  {
    id: '7',
    name: 'DignityAtWork',
    image: DignityAtWork,
    institution: 'HSE',
    conclusion: 'February 2023',
    type: 'certificate',
    sharingLink:
      'https://www.hseland.ie/ekp/servlet/ekp/PRINTCERT?PX=N&USERID=ekp000521117&SK=0&AWARDID=EKP-1194-8775-1671-1133&ACTION=PRINTCERT',
    area: 'Healthcare',
  },
  {
    id: '8',
    name: 'Manual Handling and People Handling e-Learning Theory Module',
    image: ManualHandlingAndPeopleHandlingELearningTheoryModule,
    institution: 'HSE',
    conclusion: 'February 2023',
    type: 'certificate',
    sharingLink:
      'https://www.hseland.ie/ekp/servlet/ekp/PRINTCERT?PX=N&USERID=ekp000521117&SK=0&AWARDID=EKP-1137-9016-7422-5685&ACTION=PRINTCERT',
    area: 'Healthcare',
  },
  {
    id: '9',
    name: 'Safeguarding adults at risk of abuse',
    image: SafeguardingAdultsAtRiskOfAbuse,
    institution: 'HSE',
    conclusion: 'February 2023',
    type: 'certificate',
    sharingLink:
      'https://www.hseland.ie/ekp/servlet/ekp/PRINTCERT?PX=N&USERID=ekp000521117&SK=0&AWARDID=EKP-1155-8571-5825-6061&ACTION=PRINTCERT',
    area: 'Healthcare',
  },
  {
    id: '10',
    name: 'Hand Hygiene',
    image: HandHygiene,
    institution: 'HSE',
    conclusion: 'February 2023',
    type: 'certificate',
    sharingLink:
      'https://www.hseland.ie/ekp/servlet/ekp/PRINTCERT?PX=N&USERID=ekp000521117&SK=0&AWARDID=EKP-1159-1469-6557-8057&ACTION=PRINTCERT',
    area: 'Healthcare',
  },
  {
    id: '11',
    name: 'Basics Of Infection Prevention And Control',
    image: BasicsOfInfectionPreventionAndControl,
    institution: 'HSE',
    conclusion: 'February 2023',
    type: 'certificate',
    sharingLink:
      'https://www.hseland.ie/ekp/servlet/ekp/PRINTCERT?PX=N&USERID=ekp000521117&SK=0&AWARDID=EKP-1225-2798-9735-9142&ACTION=PRINTCERT',
    area: 'Healthcare',
  },
  {
    id: '12',
    name: 'Putting on and Taking off PPE in Community Healthcare Settings',
    image: PuttingOnAndTakingOffPpeInCommunityHealthcareSettings,
    institution: 'HSE',
    conclusion: 'February 2023',
    type: 'certificate',
    sharingLink:
      'https://www.hseland.ie/ekp/servlet/ekp/PRINTCERT?PX=N&USERID=ekp000521117&SK=0&AWARDID=EKP-1240-4239-2313-3558&ACTION=PRINTCERT',
    area: 'Healhcare',
  },
  {
    id: '13',
    name: 'Introduction to Front-End Development',
    image: IntroductionToFrontEndDevelopment,
    institution: 'Meta',
    conclusion: 'November 2022',
    type: 'certificate',
    sharingLink: 'https://coursera.org/verify/GNDUR679YQ8F',
    area: 'IT',
  },
  {
    id: '14',
    name: 'An Introduction To Children First',
    image: AnIntroductionToChildrenFirst,
    institution: 'HSE',
    conclusion: 'May 2022',
    type: 'certificate',
    area: 'Healthcare',
  },
  {
    id: '15',
    name: 'JavaScript',
    image: JavaScript,
    workload: '40h',
    instructor: 'Gustavo Guanabara',
    institution: 'Curso em Video',
    conclusion: 'March 2022',
    type: 'certificate',
    score: '70%',
    sharingLink:
      'https://www.cursoemvideo.com/certificates/certificado/?course_id=27745&cert-nonce=da8ab5799e',
    area: 'IT',
  },
  {
    id: '16',
    name: 'Spring React Week - DSMovie',
    image: SpringReactWeekDsMovie,
    workload: '16h',
    instructor: 'Nelio Alves',
    institution: 'DevSuperior',
    conclusion: 'January 2022',
    type: 'certificate',
    area: 'IT',
  },
  {
    id: '17',
    name: 'HTML 5 and CSS 3',
    image: Html5AndCss3,
    workload: '40h',
    instructor: 'Gustavo Guanabara',
    institution: 'Curso em Video',
    conclusion: 'January 2022',
    type: 'certificate',
    score: '70%',
    sharingLink:
      'https://www.cursoemvideo.com/certificates/certificado/?course_id=25557&cert-nonce=0af0966458',
    area: 'IT',
  },
  {
    id: '18',
    name: 'Spring React Week - DS Vendas',
    image: SpringReactWeeKDsVendas,
    workload: '16h',
    instructor: 'Nelio Alves',
    institution: 'DevSuperior',
    conclusion: 'November 2021',
    type: 'certificate',
    area: 'IT',
  },
  {
    id: '19',
    name: 'C# Complete 2020 Oriented Object Programming',
    image: CSharpComplete2020OrientedObjectProgramming,
    workload: '35h',
    instructor: 'Nelio Alves',
    institution: 'Udemy',
    conclusion: 'April 2020',
    type: 'certificate',
    sharingLink:
      'https://www.udemy.com/certificate/UC-f2c12ab7-2d3e-40be-8d6b-3cfb142bdc0b/',
    area: 'IT',
  },
  {
    id: '20',
    name: 'Algorithms and Programming Logic',
    image: AlgorithmsAndProgrammingLogic,
    workload: '40h',
    instructor: 'Gustavo Guanabara',
    institution: 'Curso em Video',
    conclusion: 'March 2020',
    type: 'certificate',
    score: '80%',
    area: 'IT',
  },
  {
    id: '21',
    name: 'Automatic Tests + Complete Software Testing Course',
    image: SoftwareTesting,
    workload: '5h',
    instructor: 'Gustavo Farias',
    institution: 'Udemy',
    conclusion: 'July 2019',
    type: 'certificate',
    sharingLink: 'https://www.udemy.com/certificate/UC-VCENBNNY/',
    area: 'IT',
  },
  {
    id: '22',
    name: 'Word 2016',
    image: Word2016,
    workload: '40h',
    instructor: 'Gustavo Guanabara',
    institution: 'Curso em video',
    conclusion: 'July 2019',
    type: 'certificate',
    score: '80%',
    area: 'Administrative',
  },
  {
    id: '23',
    name: 'Java',
    image: Java,
    workload: '40h',
    instructor: 'Gustavo Guanabara',
    institution: 'Curso em Video',
    conclusion: 'January 2019',
    type: 'certificate',
    score: '100%',
    area: 'IT',
  },
  {
    id: '24',
    name: 'SAP ERP Intelligence',
    image: SapErpIntelligence,
    workload: '20h',
    instructor: 'Roberto Evison',
    institution: 'MDL Consulting',
    conclusion: 'August 2018',
    type: 'certificate',
    area: 'IT',
  },
  {
    id: '25',
    name: 'Mind Mapping',
    image: MindMapping,
    workload: '8h',
    instructor: 'Dr. Tadeo Feijao',
    conclusion: 'September 2016',
    type: 'certificate',
    area: 'Personal',
  },
  {
    id: '26',
    name: 'Hardware - Computer Assembly And Maintenance',
    image: HardwareComputerAssemblyAndMaintenance,
    workload: '57h',
    instructor: '',
    institution: 'CEBRAC',
    conclusion: 'April 2009',
    type: 'certificate',
    score: '10.0',
    area: 'IT',
  },
  {
    id: '27',
    name: 'Administrative Development',
    image: AdministrativeDevelopment,
    workload: '50h',
    institution: 'CEBRAC',
    conclusion: 'July 2008',
    type: 'certificate',
    score: '10.0',
    area: 'Administrative',
  },
  {
    id: '28',
    name: 'Personal Development',
    image: PersonalDevelopment,
    workload: '50h',
    institution: 'CEBRAC',
    conclusion: 'July 2008',
    type: 'certificate',
    score: '10.0',
    area: 'Personal',
  },
  {
    id: '29',
    name: 'Technological Development',
    image: TechnologicalDevelopment,
    workload: '47h',
    institution: 'CEBRAC',
    conclusion: 'July 2008',
    type: 'certificate',
    score: '9.5',
    area: 'IT',
  },
];
