import React, { useState, useCallback } from 'react';

import { Box } from '@mui/system';
import { Container } from '@mui/material';

import { useAuthContext } from 'src/auth/hooks';

import SvgColor from 'src/components/svg-color';

import ComplaintCard from './complaint-card';
import ComplaintTabs from './complaint-tabs';

const central = [
  {
    title: 'Booth Capturing',
    description: 'बूथ कैप्चरिंग',
    navigate:
      'https://www.thehindu.com/news/national/tamil-nadu/ec-must-curb-booth-capturing-tampering-with-evms-hc/article61922129.ece',
    path: '/assets/images/complainSection/boothProblem/Booth Capturing.png',
  },
  {
    title: 'Voter impersonation',
    description: 'मतदाता प्रतिरूपण',
    navigate: 'https://www.in.gov/sos/elections/voter-information/register-to-vote/',
    path: '/assets/images/complainSection/boothProblem/Voter impersonation.png',
  },
  {
    title: 'Voter registration fraud',
    description: 'मतदाता पंजीकरण धोखाधड़ी',
    navigate: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2016941',
    path: '/assets/images/complainSection/boothProblem/Voter registration fraud.png',
  },
  {
    title: 'Vote buying',
    description: 'वोट खरीदो',
    navigate:
      'https://voxdev.org/topic/institutions-political-economy/persuading-voters-india-punish-vote-buying-candidates',
    path: '/assets/images/complainSection/boothProblem/Vote buying.png',
  },
  {
    title: 'Ballot tampering',
    description: 'मतपत्र से छेड़छाड़',
    navigate: 'https://www.duvalelections.com/Vote-By-Mail/Check-Your-Absentee-Voter-Status',
    path: '/assets/images/complainSection/boothProblem/Ballot tampering.png',
  },
  {
    title: 'Absentee ballot fraud',
    description: 'अनुपस्थित मतपत्र धोखाधड़ी',
    navigate: 'https://www.duvalelections.com/Vote-By-Mail/Check-Your-Absentee-Voter-Status',
    path: '/assets/images/complainSection/boothProblem/Absentee ballot fraud.png',
  },
  {
    title: 'Illegal electioneering',
    description: 'अवैध चुनाव प्रचार',
    navigate: 'https://www.ncsl.org/elections-and-campaigns/electioneering-prohibitions',
    path: '/assets/images/complainSection/boothProblem/Illegal electioneering.png',
  },
  {
    title: 'Voter intimidation',
    description: 'मतदाता को डराना',
    navigate: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2013417',
    path: '/assets/images/complainSection/boothProblem/Voter intimidation.png',
  },
  {
    title: 'Election fraud by officials',
    description: 'अधिकारियों द्वारा चुनाव में धोखाधड़ी',
    navigate: 'https://sfio.gov.in/en/',
    path: '/assets/images/complainSection/boothProblem/Election fraud by officials.png',
  },
  {
    title: 'Inaccurate voter rolls',
    description: 'ग़लत मतदाता सूचियाँ',
    navigate: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2016941',
    path: '/assets/images/complainSection/boothProblem/Inaccurate voter rolls.png',
  },
  {
    title: 'Cybersecurity threats',
    description: 'साइबर सुरक्षा खतरे',
    navigate: 'https://cybercrime.gov.in/',
    path: '/assets/images/complainSection/boothProblem/Cybersecurity threats.png',
  },
];

export default function ComplaintFakeVoting() {
  const [currentTab, setCurrentTab] = useState('central');

  const {
    user: { UserAddressesses },
  } = useAuthContext();
  const { userState } = UserAddressesses && UserAddressesses[0];

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const state = [
    {
      title: 'Election fraud by officials',
      description: 'अधिकारियों द्वारा चुनाव में धोखाधड़ी',
      navigate: getfakeVotingURL(userState, 'Election fraud by officials'),
      path: '/assets/images/complainSection/boothProblem/Election fraud by officials.png',
    },
    {
      title: 'Inaccurate voter rolls',
      description: 'ग़लत मतदाता सूचियाँ',
      navigate: getfakeVotingURL(userState, 'Inaccurate voter rolls'),
      path: '/assets/images/complainSection/boothProblem/Inaccurate voter rolls.png',
    },
    {
      title: 'Cybersecurity threats',
      description: 'साइबर सुरक्षा खतरे',
      navigate: getfakeVotingURL(userState, 'Cybersecurity threats'),
      path: '/assets/images/complainSection/boothProblem/Cybersecurity threats.png',
    },
    {
      title: 'Vote buying',
      description: 'वोट खरीदो',
      navigate: getfakeVotingURL(userState, 'Vote buying'),
      path: '/assets/images/complainSection/boothProblem/Vote buying.png',
    },
    {
      title: 'Ballot tampering',
      description: 'मतपत्र से छेड़छाड़',
      navigate: getfakeVotingURL(userState, 'Ballot tampering'),
      path: '/assets/images/complainSection/boothProblem/Ballot tampering.png',
    },
    {
      title: 'Absentee ballot fraud',
      description: 'अनुपस्थित मतपत्र धोखाधड़ी',
      navigate: getfakeVotingURL(userState, 'Absentee ballot fraud'),
      path: '/assets/images/complainSection/boothProblem/Absentee ballot fraud.png',
    },
    {
      title: 'Illegal electioneering',
      description: 'अवैध चुनाव प्रचार',
      navigate: getfakeVotingURL(userState, 'Illegal electioneering'),
      path: '/assets/images/complainSection/boothProblem/Illegal electioneering.png',
    },
    {
      title: 'Voter intimidation',
      description: 'मतदाता को डराना',
      navigate: getfakeVotingURL(userState, 'Voter intimidation'),
      path: '/assets/images/complainSection/boothProblem/Voter intimidation.png',
    },

    {
      title: 'Booth Capturing',
      description: 'बूथ कैप्चरिंग',
      navigate: getfakeVotingURL(userState, 'Booth Capturing'),
      path: '/assets/images/complainSection/boothProblem/Booth Capturing.png',
    },
    {
      title: 'Voter impersonation',
      description: 'मतदाता प्रतिरूपण',
      navigate: getfakeVotingURL(userState, 'Voter impersonation'),
      path: '/assets/images/complainSection/boothProblem/Voter impersonation.png',
    },
    {
      title: 'Voter registration fraud',
      description: 'मतदाता पंजीकरण धोखाधड़ी',
      navigate: getfakeVotingURL(userState, 'Voter registration fraud'),
      path: '/assets/images/complainSection/boothProblem/Voter registration fraud.png',
    },
  ];


  const icon = (name) => <SvgColor src={`/assets/icons/menuicons/${name}.svg`} />;

  const TABS = [
    {
      value: 'central',
      label: 'Central Complaint',
      icon: icon('Profile'),
    },
    {
      value: 'state',
      label: 'State Complaint',
      icon: icon('Profile'),
    },
  ];

  return (
    <Container
      sx={{
        pl: 2,
        pb: 10,
        pt: { xs: 1, md: 2 },
        position: 'relative',
      }}
    >
      <Box
        gap={2}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
        }}
      >
        <ComplaintTabs activeTab={currentTab} handleChangeTab={handleChangeTab} tabs={TABS} />

        {currentTab === 'state' && <ComplaintCard cards={state} />}

        {currentTab === 'central' && <ComplaintCard cards={central} />}
      </Box>
    </Container>
  );
}

function getfakeVotingURL(stateName, issue) {
 
  const fakeVotingIssue = [
    {
      Rajasthan: {
        'Booth Capturing': 'https://sec.rajasthan.gov.in/se_pdfdownload.aspx',
        'Voter impersonation': 'https://election.rajasthan.gov.in/',
        'Voter registration fraud':
          'https://economictimes.indiatimes.com/news/elections/lok-sabha/india/alert-voter-id-card-download-scam-on-rise-ahead-of-lok-sabha-polls-2024-what-you-need-to-know/articleshow/109218454.cms?from=mdr',
        'Vote buying': 'https://voters.eci.gov.in/',
        'Ballot tampering': 'https://rajasthan.gov.in/',
        'Absentee ballot fraud': 'https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx',
        'Illegal electioneering': 'https://ceorajasthan.nic.in/index_H.aspx',
        'Voter intimidation': 'https://electoralsearch.eci.gov.in/',
        'Election fraud by officials': 'https://www.eci.gov.in/ngsp',
        'Inaccurate voter rolls': 'https://www.epfindia.gov.in/site_en/index.php',
        'Cybersecurity threats':
          'https://home.rajasthan.gov.in/content/homeportal/en/sardarpateluniversityportal/academics/centers/cfcs.html',
      },
    },
    {
      'Andhra Pradesh': {
        'Booth Capturing': 'https://ceoandhra.nic.in/ceoap_new/ceo/index.html',
        'Voter impersonation': 'https://ceoaperolls.ap.gov.in/name_search/',
        'Voter registration fraud': 'https://www.bankbazaar.com/voter-id/ap-voter-list.html',
        'Vote buying': 'https://apegazette.cgg.gov.in/',
        'Ballot tampering': 'https://ceoandhra.nic.in/ceoap_new/ceo/index.html',
        'Absentee ballot fraud': 'https://www.eci.gov.in/ngsp',
        'Illegal electioneering': 'https://www.eci.gov.in/mcc/',
        'Voter intimidation': 'https://ceoandhra.nic.in/ceoap_new/ceo/index.html',
        'Election fraud by officials': 'https://acb.ap.gov.in/how.php',
        'Inaccurate voter rolls': 'https://ceoaperolls.ap.gov.in/AP_Eroll_2020/Rolls',
        'Cybersecurity threats': 'https://apit.ap.gov.in/',
      },
    },
    {
      'Arunachal Pradesh': {
        'Booth Capturing': 'https://ceoarunachal.nic.in/',
        'Voter impersonation': 'https://electoralsearch.eci.gov.in/',
        'Voter registration fraud': 'https://www.india.gov.in/official-website-arunachal-pradesh',
        'Vote buying': 'https://tawang.nic.in/deo-portal/',
        'Ballot tampering': 'https://arunachalpradesh.gov.in/',
        'Absentee ballot fraud': 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2015227',
        'Illegal electioneering': 'https://apsgwd.ap.gov.in/home',
        'Voter intimidation': 'https://ceoarunachal.nic.in/voter-helpline',
        'Election fraud by officials': 'https://arunachalpradesh.gov.in/',
        'Inaccurate voter rolls': 'https://electoralsearch.eci.gov.in/',
        'Cybersecurity threats': 'https://arunachal.nic.in/service/security/',
      },
    },
    {
      Assam: {
        'Booth Capturing': 'https://sec.assam.gov.in/',
        'Voter impersonation': 'https://personnel.assam.gov.in/resource/important-links',
        'Voter registration fraud': 'https://www.bankbazaar.com/voter-id.html',
        'Vote buying': 'https://assamegras.gov.in/',
        'Ballot tampering': 'https://ceoassam.nic.in/',
        'Absentee ballot fraud': 'https://ceoassam.nic.in/',
        'Illegal electioneering':
          'https://assamtenders.gov.in/nicgep/app?page=Disclaimer&service=page',
        'Voter intimidation': 'https://assamegras.gov.in/',
        'Election fraud by officials': 'https://www.bankbazaar.com/voter-id.html',
        'Inaccurate voter rolls': 'https://ermssec.assam.gov.in/',
        'Cybersecurity threats':
          'https://kokrajhar.assam.gov.in/sites/default/files/public_utility/Cybersecurity%20appropriate%20behaviour%20for%20Government%20Employees.pdf',
      },
    },
    {
      Bihar: {
        'Booth Capturing': 'https://patna.nic.in/booth-list-2/',
        'Voter impersonation': 'https://ceobihar.nic.in/searchinroll.html',
        'Voter registration fraud': 'https://state.bihar.gov.in/main/CitizenHome.html',
        'Vote buying': 'https://lokshikayat.bihar.gov.in/AboutUsEn.aspx',
        'Ballot tampering': 'https://nmsa.dac.gov.in/',
        'Absentee ballot fraud': 'https://nmsa.dac.gov.in/',
        'Illegal electioneering': 'https://nmsa.dac.gov.in/',
        'Voter intimidation': 'https://state.bihar.gov.in/main/CitizenHome.html',
        'Election fraud by officials': 'https://www.bankbazaar.com/voter-id.html',
        'Inaccurate voter rolls': 'https://patna.nic.in/booth-list-2/',
        'Cybersecurity threats':
          'https://sheikhpura.nic.in/service/national-cyber-crime-reporting-portal/',
      },
    },
    {
      Chhattisgarh: {
        'Booth Capturing': 'https://ceochhattisgarh.nic.in/',
        'Voter impersonation': 'https://www.eci.gov.in/mcc/',
        'Voter registration fraud':
          'https://services.india.gov.in/service/search?ln=en&kw=voter+id+name&sort=hit_count%40desc&page_no=8',
        'Vote buying': 'https://raipur.gov.in/en/',
        'Ballot tampering':
          'https://www.livelaw.in/high-court/punjab-and-haryana-high-court/punjab-haryana-high-court-aap-councillor-moves-high-court-challenging-chandigarh-mayoral-election-248032',
        'Absentee ballot fraud':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Illegal electioneering':
          'https://www.livelaw.in/high-court/punjab-and-haryana-high-court/punjab-haryana-high-court-aap-councillor-moves-high-court-challenging-chandigarh-mayoral-election-248032',
        'Voter intimidation': 'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Election fraud by officials': 'https://www.bankbazaar.com/voter-id.html',
        'Inaccurate voter rolls': 'https://mythvsreality.eci.gov.in/details/electoral_roll',
        'Cybersecurity threats': 'https://i4c.mha.gov.in/',
      },
    },
    {
      Goa: {
        'Booth Capturing': 'https://pib.gov.in/PressReleasePage.aspx?PRID=2015227',
        'Voter impersonation': 'https://www.eci.gov.in/mcc/',
        'Voter registration fraud':
          'https://services.india.gov.in/service/search?ln=en&kw=voter+id+name&sort=hit_count%40desc&page_no=8',
        'Vote buying': 'https://www.goa.gov.in/',
        'Ballot tampering': 'https://www.goavidhansabha.gov.in/session_information.php',
        'Absentee ballot fraud': 'https://www.goavidhansabha.gov.in/session_information.php',
        'Illegal electioneering': 'https://ceogoa.nic.in/pdf/Handbook%20for%20Candidate.pdf',
        'Voter intimidation': 'https://ceogoa.nic.in/pdf/Handbook%20for%20Candidate.pdf',
        'Election fraud by officials': 'https://www.bankbazaar.com/voter-id.html',
        'Inaccurate voter rolls': 'https://mythvsreality.eci.gov.in/details/electoral_roll',
        'Cybersecurity threats': 'https://nicgoa.nic.in/service/security/',
      },
    },
    {
      Gujarat: {
        'Booth Capturing':
          'https://chunavsetu-lms.gujarat.gov.in/PdfHandler.ashx?filename=Handbook%20for%20candidate%202023.pdf',
        'Voter impersonation': 'https://dst.gujarat.gov.in/Images/pdf/ctb-gil.pdf',
        'Voter registration fraud': 'https://www.bankbazaar.com/voter-id.html',
        'Vote buying': 'https://mythvsreality.eci.gov.in/details/electoral_roll',
        'Ballot tampering': 'https://nmsa.dac.gov.in/',
        'Absentee ballot fraud':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Illegal electioneering': 'https://ceo.gujarat.gov.in/Index',
        'Voter intimidation': 'https://ceo.gujarat.gov.in/Index',
        'Election fraud by officials': 'https://www.bankbazaar.com/voter-id.html',
        'Inaccurate voter rolls': 'https://mythvsreality.eci.gov.in/details/electoral_roll',
        'Cybersecurity threats': 'https://gujaratcybercrime.org/eng/',
      },
    },
    {
      Haryana: {
        'Booth Capturing': 'https://haryana.gov.in/',
        'Voter impersonation': 'https://ceoharyana.gov.in/WebCMS/Start/1805',
        'Voter registration fraud': 'https://sirsa.gov.in/',
        'Vote buying': 'https://haryanapolice.gov.in/login',
        'Ballot tampering': 'https://etenders.hry.nic.in/nicgep/app',
        'Absentee ballot fraud': 'https://ceoharyana.gov.in/WebCMS/Start/1805',
        'Illegal electioneering': 'https://cashless.haryana.gov.in/',
        'Voter intimidation': 'https://cashless.haryana.gov.in/',
        'Election fraud by officials': 'https://www.bankbazaar.com/voter-id.html',
        'Inaccurate voter rolls': 'https://cashless.haryana.gov.in/',
        'Cybersecurity threats': 'https://haryanaismo.gov.in/',
      },
    },
    {
      'Himachal Pradesh': {
        'Booth Capturing': 'https://ceohimachal.nic.in/',
        'Voter impersonation': 'https://ceohimachal.nic.in/',
        'Voter registration fraud': 'https://himachal.nic.in/en-IN/',
        'Vote buying': 'https://himachal.nic.in/en-IN/',
        'Ballot tampering': 'https://elections.tn.gov.in/Press_Clippings_2024/17-03-2024.pdf',
        'Absentee ballot fraud':
          'https://himachal.nic.in/WriteReadData/l892s/6_l892s/1656751354.pdf',
        'Illegal electioneering': 'https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx',
        'Voter intimidation': 'https://ceohimachal.nic.in/',
        'Election fraud by officials': 'https://ceohimachal.nic.in/',
        'Inaccurate voter rolls': 'https://www.india.gov.in/',
        'Cybersecurity threats': 'https://sechimachal.nic.in/erms/erollsearch.aspx',
      },
    },
    {
      "Jharkhand": {
        'Booth Capturing': 'https://www.jharkhand.gov.in/',
        'Voter impersonation': 'https://www.feedingindia.org/',
        'Voter registration fraud': 'https://ceo.jharkhand.gov.in/',
        'Vote buying': 'https://jhpolice.gov.in/node/32549',
        'Ballot tampering': 'https://ceo.jharkhand.gov.in/',
        'Absentee ballot fraud': 'https://ceo.jharkhand.gov.in/',
        'Illegal electioneering': 'https://ceo.jharkhand.gov.in/',
        'Voter intimidation': 'https://jhpolice.gov.in/node/32549',
        'Election fraud by officials': 'https://jhpolice.gov.in/node/32549',
        'Inaccurate voter rolls': 'https://jhpolice.gov.in/node/32549',
        'Cybersecurity threats': 'https://jhpolice.gov.in/node/32549',
      },
    },
    {
      "Karnataka": {
        'Booth Capturing': 'https://www.karnataka.gov.in/english',
        'Voter impersonation': 'https://www.karnataka.gov.in/english',
        'Voter registration fraud': 'https://kscdrc.karnataka.gov.in/english',
        'Vote buying': 'https://kscdrc.karnataka.gov.in/english',
        'Ballot tampering': 'https://www.karnataka.gov.in/gallery/Cyber%20Security/en',
        'Absentee ballot fraud': 'https://www.karnataka.gov.in/gallery/Cyber%20Security/en',
        'Illegal electioneering': 'https://www.karnataka.gov.in/gallery/Cyber%20Security/en',
        'Voter intimidation': 'https://kscdrc.karnataka.gov.in/english',
        'Election fraud by officials': 'https://kscdrc.karnataka.gov.in/english',
        'Inaccurate voter rolls': 'https://kscdrc.karnataka.gov.in/english',
        'Cybersecurity threats': 'https://www.karnataka.gov.in/gallery/Cyber%20Security/en',
      },
    },
    {
      Kerala: {
        'Booth Capturing': 'https://www.ceo.kerala.gov.in/',
        'Voter impersonation': 'https://eoffice.kerala.gov.in/EofficePortal/letterSearchRedirect',
        'Voter registration fraud': 'https://www.ceo.kerala.gov.in/',
        'Vote buying': 'https://www.ceo.kerala.gov.in/',
        'Ballot tampering': 'https://eoffice.kerala.gov.in/EofficePortal/letterSearchRedirect',
        'Absentee ballot fraud': 'https://eoffice.kerala.gov.in/EofficePortal/letterSearchRedirect',
        'Illegal electioneering': 'https://www.ceo.kerala.gov.in/',
        'Voter intimidation': 'https://eoffice.kerala.gov.in/EofficePortal/letterSearchRedirect',
        'Election fraud by officials': 'https://www.ceo.kerala.gov.in/',
        'Inaccurate voter rolls':
          'https://eoffice.kerala.gov.in/EofficePortal/letterSearchRedirect',
        'Cybersecurity threats': 'https://cyberdome.kerala.gov.in/',
      },
    },
    {
      'Madhya Pradesh': {
        'Booth Capturing': 'https://ceomadhyapradesh.nic.in/BLO_Details.aspx',
        'Voter impersonation': 'https://ceomadhyapradesh.nic.in/',
        'Voter registration fraud': 'https://ceomadhyapradesh.nic.in/',
        'Vote buying': 'https://ceomadhyapradesh.nic.in/BLO_Details.aspx',
        'Ballot tampering':
          'https://www.livemint.com/elections/madhya-pradesh-assembly-election-2023-heres-how-to-find-your-polling-booth-11700110841852.html',
        'Absentee ballot fraud':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Illegal electioneering': 'https://ceomadhyapradesh.nic.in/',
        'Voter intimidation': 'https://ceomadhyapradesh.nic.in/',
        'Election fraud by officials': 'https://ceomadhyapradesh.nic.in/',
        'Inaccurate voter rolls': 'https://www.mpsedc.mp.gov.in/securityaudit/',
        'Cybersecurity threats': 'https://www.mpsedc.mp.gov.in/securityaudit/',
      },
    },
    {
      Maharashtra: {
        'Booth Capturing': 'https://www.maharashtra.gov.in/',
        'Voter impersonation': 'https://www.maharashtra.gov.in/',
        'Voter registration fraud': 'https://ceoelection.maharashtra.gov.in/ceo/registration.aspx',
        'Vote buying': 'https://ceoelection.maharashtra.gov.in/ceo/registration.aspx',
        'Ballot tampering': 'https://ceoelection.maharashtra.gov.in/ceo/registration.aspx',
        'Absentee ballot fraud': 'https://ceoelection.maharashtra.gov.in/ceo/registration.aspx',
        'Illegal electioneering': 'https://www.maharashtra.gov.in/',
        'Voter intimidation': 'https://www.maharashtra.gov.in/',
        'Election fraud by officials':
          'https://aaplesarkar.maharashtra.gov.in/file/AapleSarkar-CyberSecurityAwarenessGuide.pdf',
        'Inaccurate voter rolls':
          'https://aaplesarkar.maharashtra.gov.in/file/AapleSarkar-CyberSecurityAwarenessGuide.pdf',
        'Cybersecurity threats':
          'https://aaplesarkar.maharashtra.gov.in/file/AapleSarkar-CyberSecurityAwarenessGuide.pdf',
      },
    },
    {
      Manipur: {
        'Booth Capturing': 'https://ceomanipur.nic.in/',
        'Voter impersonation': 'https://www.india.gov.in/official-website-manipur',
        'Voter registration fraud': 'https://www.india.gov.in/official-website-manipur',
        'Vote buying': 'https://www.india.gov.in/official-website-manipur',
        'Ballot tampering': 'https://ceomanipur.nic.in/',
        'Absentee ballot fraud': 'https://www.india.gov.in/official-website-manipur',
        'Illegal electioneering': 'https://ceomanipur.nic.in/',
        'Voter intimidation': 'https://ceomanipur.nic.in/',
        'Election fraud by officials': 'https://www.india.gov.in/official-website-manipur',
        'Inaccurate voter rolls': 'https://ceomanipur.nic.in/',
        'Cybersecurity threats': 'https://manipur.nic.in/service/security/',
      },
    },
    {
      Meghalaya: {
        'Booth Capturing': 'https://ceomeghalaya.nic.in/',
        'Voter impersonation': 'https://meghalaya.gov.in/press/content/46610',
        'Voter registration fraud': 'https://meghalaya.gov.in/press/content/46610',
        'Vote buying': 'https://meghalaya.gov.in/press/content/46610',
        'Ballot tampering': 'https://ceomeghalaya.nic.in/',
        'Absentee ballot fraud': 'https://ceomeghalaya.nic.in/',
        'Illegal electioneering': 'https://ceomeghalaya.nic.in/',
        'Voter intimidation': 'https://meghalaya.gov.in/press/content/46610',
        'Election fraud by officials': 'https://meghalaya.gov.in/csi',
        'Inaccurate voter rolls': 'https://meghalaya.gov.in/csi',
        'Cybersecurity threats': 'https://meghalaya.gov.in/csi',
      },
    },
    {
      Mizoram: {
        'Booth Capturing': 'https://www.thehindu.com/elections/mizoram-assembly/',
        'Voter impersonation': 'https://voters.eci.gov.in/',
        'Voter registration fraud': 'https://voters.eci.gov.in/',
        'Vote buying': 'https://www.thehindu.com/elections/mizoram-assembly/',
        'Ballot tampering': 'https://www.thehindu.com/elections/mizoram-assembly/',
        'Absentee ballot fraud': 'https://voters.eci.gov.in/',
        'Illegal electioneering': 'https://voters.eci.gov.in/',
        'Voter intimidation': 'https://www.thehindu.com/elections/mizoram-assembly/',
        'Election fraud by officials': 'https://voters.eci.gov.in/',
        'Inaccurate voter rolls': 'https://dict.mizoram.gov.in/page/douments-on-cyber-securities',
        'Cybersecurity threats': 'https://dict.mizoram.gov.in/page/douments-on-cyber-securities',
      },
    },
    {
      Nagaland: {
        'Booth Capturing': 'https://ceo.nagaland.gov.in/',
        'Voter impersonation': 'https://voters.eci.gov.in/',
        'Voter registration fraud': 'https://voters.eci.gov.in/',
        'Vote buying': 'https://voters.eci.gov.in/',
        'Ballot tampering': 'https://voters.eci.gov.in/',
        'Absentee ballot fraud': 'https://ceo.nagaland.gov.in/',
        'Illegal electioneering': 'https://ceo.nagaland.gov.in/',
        'Voter intimidation': 'https://nagaland.gov.in/pages/cyber-safety',
        'Election fraud by officials': 'https://nagaland.gov.in/pages/cyber-safety',
        'Inaccurate voter rolls': 'https://nagaland.gov.in/pages/cyber-safety',
        'Cybersecurity threats': 'https://nagaland.gov.in/pages/cyber-safety',
      },
    },

    {
      Odisha: {
        'Booth Capturing': 'https://mobooth.odisha.gov.in/',
        'Voter impersonation': 'https://sec.odisha.gov.in/',
        'Voter registration fraud': 'https://sec.odisha.gov.in/',
        'Vote buying': 'https://sec.odisha.gov.in/',
        'Ballot tampering': 'https://mobooth.odisha.gov.in/',
        'Absentee ballot fraud': 'https://sec.odisha.gov.in/',
        'Illegal electioneering':
          'https://odisha.gov.in/policies-it/odisha-cyber-security-policy/cyber-security-policy_odisha_v4.pdf',
        'Voter intimidation': 'https://mobooth.odisha.gov.in/',
        'Election fraud by officials': 'https://sec.odisha.gov.in/',
        'Inaccurate voter rolls': 'https://sec.odisha.gov.in/',
        'Cybersecurity threats':
          'https://odisha.gov.in/policies-it/odisha-cyber-security-policy/cyber-security-policy_odisha_v4.pdf',
      },
    },
    {
      Punjab: {
        'Booth Capturing': 'https://www.ceopunjab.gov.in/index',
        'Voter impersonation': 'https://www.ceopunjab.gov.in/index',
        'Voter registration fraud': 'https://voters.eci.gov.in/',
        'Vote buying': 'https://www.ceopunjab.gov.in/index',
        'Ballot tampering': 'https://dgrpg.punjab.gov.in/cybersecurity/',
        'Absentee ballot fraud': 'https://www.ceopunjab.gov.in/index',
        'Illegal electioneering': 'https://dgrpg.punjab.gov.in/cybersecurity/',
        'Voter intimidation': 'https://voters.eci.gov.in/',
        'Election fraud by officials': 'https://voters.eci.gov.in/',
        'Inaccurate voter rolls': 'https://dgrpg.punjab.gov.in/cybersecurity/',
        'Cybersecurity threats': 'https://dgrpg.punjab.gov.in/cybersecurity/',
      },
    },
    {
      Sikkim: {
        'Booth Capturing': 'https://sikkim.gov.in/',
        'Voter impersonation': 'https://sikkim.gov.in/aboutus/help',
        'Voter registration fraud': 'https://sikkim.gov.in/aboutus/help',
        'Vote buying': 'https://sikkim.gov.in/',
        'Ballot tampering': 'https://sikkim.gov.in/',
        'Absentee ballot fraud': 'https://sikkim.gov.in/',
        'Illegal electioneering': 'https://sikkim.gov.in/',
        'Voter intimidation': 'https://sikkim.gov.in/',
        'Election fraud by officials': 'https://sikkim.gov.in/aboutus/help',
        'Inaccurate voter rolls': 'https://sikkim.gov.in/',
        'Cybersecurity threats':
          'https://sikkim.gov.in/departments/information-technology-department/cyber-security-guidelines-for-government-employees',
      },
    },
    {
      'Tamil Nadu': {
        'Booth Capturing': 'https://www.elections.tn.gov.in/',
        'Voter impersonation': 'https://gdp.tn.gov.in/',
        'Voter registration fraud': 'https://www.elections.tn.gov.in/',
        'Vote buying': 'https://gdp.tn.gov.in/',
        'Ballot tampering': 'https://nmsa.dac.gov.in/',
        'Absentee ballot fraud': 'https://gdp.tn.gov.in/',
        'Illegal electioneering':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Voter intimidation': 'https://gdp.tn.gov.in/',
        'Election fraud by officials': 'https://nmsa.dac.gov.in/',
        'Inaccurate voter rolls': 'https://gdp.tn.gov.in/',
        'Cybersecurity threats': 'https://it.tn.gov.in/index.php/en/node/407',
      },
    },
    {
      Telangana: {
        'Booth Capturing': 'https://ceotelangana.nic.in/',
        'Voter impersonation': 'https://www.feedingindia.org/',
        'Voter registration fraud': 'https://ceotelangana.nic.in/',
        'Vote buying': 'https://mgov.telangana.gov.in/faqnew.html',
        'Ballot tampering': 'https://ceotelangana.nic.in/',
        'Absentee ballot fraud': 'https://ceotelangana.nic.in/',
        'Illegal electioneering': 'https://mgov.telangana.gov.in/faqnew.html',
        'Voter intimidation': 'https://mgov.telangana.gov.in/faqnew.html',
        'Election fraud by officials': 'https://mgov.telangana.gov.in/faqnew.html',
        'Inaccurate voter rolls': 'https://mgov.telangana.gov.in/faqnew.html',
        'Cybersecurity threats': 'https://www.telangana.gov.in/?',
      },
    },
    {
      Tripura: {
        'Booth Capturing':
          'https://ceotripura.nic.in/sites/default/files/2024-01/Vol_IV_Compendium_of_Instrcutions_2019.pdf',
        'Voter impersonation': 'https://tripura.gov.in/',
        'Voter registration fraud': 'https://tripura.gov.in/',
        'Vote buying': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Ballot tampering': 'https://tripura.gov.in/',
        'Absentee ballot fraud': 'https://tripura.gov.in/',
        'Illegal electioneering': 'https://tripura.gov.in/security-policy',
        'Voter intimidation': 'https://tripura.gov.in/',
        'Election fraud by officials': 'https://tripura.gov.in/',
        'Inaccurate voter rolls': 'https://tripura.gov.in/security-policy',
        'Cybersecurity threats': 'https://tripura.gov.in/security-policy',
      },
    },
    {
      'Uttar Pradesh': {
        'Booth Capturing': 'https://pib.gov.in/PressReleasePage.aspx?PRID=2015227',
        'Voter impersonation': 'https://pib.gov.in/PressReleasePage.aspx?PRID=2015227',
        'Voter registration fraud': 'https://ceouttarpradesh.nic.in/',
        'Vote buying': 'https://ceouttarpradesh.nic.in/',
        'Ballot tampering': 'https://ceouttarpradesh.nic.in/',
        'Absentee ballot fraud': 'https://pib.gov.in/PressReleasePage.aspx?PRID=2015227',
        'Illegal electioneering': 'https://ceouttarpradesh.nic.in/',
        'Voter intimidation': 'https://ceouttarpradesh.nic.in/',
        'Election fraud by officials': 'http://upccce.org/',
        'Inaccurate voter rolls': 'https://jjmup.org/',
        'Cybersecurity threats': 'https://jklmc.gov.in/',
      },
    },
    {
      Uttarakhand: {
        'Booth Capturing':
          'https://hindi.eci.gov.in/files/category/3-%E0%A4%B9%E0%A5%88%E0%A4%82%E0%A4%A1%E0%A4%AC%E0%A5%81%E0%A4%95/',
        'Voter impersonation': 'https://ceo.uk.gov.in/',
        'Voter registration fraud': 'https://ceo.uk.gov.in/',
        'Vote buying': 'https://ueppcb.uk.gov.in/pages/display/100-ground-water',
        'Ballot tampering':
          'https://hindi.eci.gov.in/files/category/3-%E0%A4%B9%E0%A5%88%E0%A4%82%E0%A4%A1%E0%A4%AC%E0%A5%81%E0%A4%95/',
        'Absentee ballot fraud': 'https://ceo.uk.gov.in/',
        'Illegal electioneering':
          'https://hindi.eci.gov.in/files/category/3-%E0%A4%B9%E0%A5%88%E0%A4%82%E0%A4%A1%E0%A4%AC%E0%A5%81%E0%A4%95/',
        'Voter intimidation': 'https://ceo.uk.gov.in/',
        'Election fraud by officials': 'https://ceo.uk.gov.in/',
        'Inaccurate voter rolls':
          'https://hindi.eci.gov.in/files/category/3-%E0%A4%B9%E0%A5%88%E0%A4%82%E0%A4%A1%E0%A4%AC%E0%A5%81%E0%A4%95/',
        'Cybersecurity threats': 'https://uk.nic.in/en/service/security/',
      },
    },
    {
      'West Bengal': {
        'Booth Capturing': 'https://wbsec.gov.in/',
        'Voter impersonation': 'https://wbsec.gov.in/',
        'Voter registration fraud': 'https://wbsec.gov.in/',
        'Vote buying': 'https://ceowestbengal.nic.in/',
        'Ballot tampering': 'https://ceowestbengal.nic.in/',
        'Absentee ballot fraud': 'https://wbsec.gov.in/',
        'Illegal electioneering': 'https://www.indiantradeportal.in/',
        'Voter intimidation': 'https://ceowestbengal.nic.in/',
        'Election fraud by officials': 'https://wbsec.gov.in/',
        'Inaccurate voter rolls': 'https://ceowestbengal.nic.in/',
        'Cybersecurity threats': 'https://wbpolice.gov.in/wbp/Common/WBP_Cyber_Crime.aspx',
      },
    },
  ];

    // Find the object corresponding to the given state
    const stateObj = fakeVotingIssue.find((obj) => stateName in obj);
    
    if (stateObj && stateName in stateObj) {
        // Find the issue in the state object
        const userStateData = stateObj[stateName];
        
      if (userStateData && issue in userStateData) {
        // Return the URL corresponding to the issue in the state
        return userStateData[issue];
      } 
    } 
    return 'https://www.eci.gov.in/';
  }


 

