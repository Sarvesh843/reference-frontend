import { useCallback, useState } from 'react';

import { Container } from '@mui/material';
import { Box } from '@mui/system';

import { useAuthContext } from 'src/auth/hooks';

import SvgColor from 'src/components/svg-color';

import ComplaintCard from './complaint-card';
import ComplaintTabs from './complaint-tabs';

const subProblems = [
  { title: 'Staffing shortages', navigate: 'https://dge.gov.in/dge/LMIS_Dashboard' },
  {
    title: 'Financial constraints',
    navigate:
      'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
  },
  {
    title: 'Patient overcrowding',
    navigate: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/',
  },
  {
    title: 'Medical errors and patient safety',
    navigate: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/',
  },
  {
    title: 'Technology integration and interoperability',
    navigate: 'https://indiaai.gov.in/ai-standards/interoperability',
  },
  { title: 'Regulatory compliance', navigate: 'https://eodbrcp.dpiit.gov.in/' },
  {
    title: 'Patient satisfaction and experience',
    navigate: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/',
  },
  {
    title: 'Resource allocation',
    navigate: 'https://www.shiksha.com/online-courses/resource-allocation-certification',
  },
  {
    title: 'Emergency preparedness and disaster response',
    navigate: 'https://sachet.ndma.gov.in/',
  },
  {
    title: 'Ethical dilemmas',
    navigate: 'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
  },
];

const central = [
  {
    title: 'Staffing shortages',
    description: 'स्टाफ की कमी',
    path: '/assets/images/complainSection/hospitalProblem/Staffing shortages.png',
  },
  {
    title: 'Financial constraints',
    description: 'वित्तीय बाधाएँ',
    path: '/assets/images/complainSection/hospitalProblem/Financial constraints.png',
  },
  {
    title: 'Patient overcrowding',
    description: 'मरीज़ों की भीड़भाड़',
    path: '/assets/images/complainSection/hospitalProblem/Patient overcrowding.png',
  },
  {
    title: 'Medical errors and patient safety',
    description: 'चिकित्सीय त्रुटियाँ और रोगी सुरक्षा',
    path: '/assets/images/complainSection/hospitalProblem/Medical errors and patient safety.png',
  },
  {
    title: 'Technology integration and interoperability',
    description: 'प्रौद्योगिकी एकीकरण और अंतरसंचालनीयता',
    path: '/assets/images/complainSection/hospitalProblem/Patient overcrowding-1.png',
  },
  {
    title: 'Regulatory compliance',
    description: 'विनियामक अनुपालन',
    path: '/assets/images/complainSection/hospitalProblem/Medical errors and patient safety-1.png',
  },
  {
    title: 'Patient satisfaction and experience',
    description: 'रोगी की संतुष्टि और अनुभव',
    path: '/assets/images/complainSection/hospitalProblem/Patient overcrowding-2.png',
  },
  {
    title: 'Resource allocation',
    description: 'संसाधन आवंटन',
    path: '/assets/images/complainSection/hospitalProblem/Medical errors and patient safety-3.png',
  },
  {
    title: 'Emergency preparedness and disaster response',
    description: 'आपातकालीन तैयारी और आपदा प्रतिक्रिया',
    path: '/assets/images/complainSection/hospitalProblem/Patient overcrowding-3.png',
  },
  {
    title: 'Ethical dilemmas',
    description: 'नैतिक दुविधाएँ',
    path: '/assets/images/complainSection/hospitalProblem/Medical errors and patient safety-3.png',
  },
];

// Update the navigate property in central array using subProblems array
central.forEach((problem) => {
  const matchedProblem = subProblems.find((subProblem) => subProblem.title === problem.title);
  if (matchedProblem) {
    problem.navigate = matchedProblem.navigate;
  }
});

export default function ComplaintHospital() {
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
      title: 'Staffing shortages',
      description: 'स्टाफ की कमी',
      navigate: gethospitalURL(userState, 'Staffing shortages'),
      path: '/assets/images/complainSection/hospitalProblem/Staffing shortages.png',
    },
    {
      title: 'Financial constraints',
      description: 'वित्तीय बाधाएँ',
      navigate: gethospitalURL(userState, 'Financial constraints'),
      path: '/assets/images/complainSection/hospitalProblem/Financial constraints.png',
    },
    {
      title: 'Patient overcrowding',
      description: 'मरीज़ों की भीड़भाड़',
      navigate: gethospitalURL(userState, 'Patient overcrowding'),
      path: '/assets/images/complainSection/hospitalProblem/Patient overcrowding.png',
    },
    {
      title: 'Medical errors and patient safety',
      description: 'चिकित्सीय त्रुटियाँ और रोगी सुरक्षा',
      navigate: gethospitalURL(userState, 'Medical errors and patient safety'),
      path: '/assets/images/complainSection/hospitalProblem/Medical errors and patient safety.png',
    },
    {
      title: 'Technology integration and interoperability',
      description: 'प्रौद्योगिकी एकीकरण और अंतरसंचालनीयता',
      navigate: gethospitalURL(userState, 'Technology integration and interoperability'),
      path: '/assets/images/complainSection/hospitalProblem/Patient overcrowding-1.png',
    },
    {
      title: 'Regulatory compliance',
      description: 'विनियामक अनुपालन',
      navigate: gethospitalURL(userState, 'Regulatory compliance'),
      path: '/assets/images/complainSection/hospitalProblem/Medical errors and patient safety-1.png',
    },
    {
      title: 'Patient satisfaction and experience',
      description: 'रोगी की संतुष्टि और अनुभव',
      navigate: gethospitalURL(userState, 'Patient satisfaction and experience'),
      path: '/assets/images/complainSection/hospitalProblem/Patient overcrowding-2.png',
    },
    {
      title: 'Resource allocation',
      description: 'संसाधन आवंटन',
      navigate: gethospitalURL(userState, 'Resource allocation'),
      path: '/assets/images/complainSection/hospitalProblem/Medical errors and patient safety-3.png',
    },
    {
      title: 'Emergency preparedness and disaster response',
      description: 'आपातकालीन तैयारी और आपदा प्रतिक्रिया',
      navigate: gethospitalURL(userState, 'Emergency preparedness and disaster response'),
      path: '/assets/images/complainSection/hospitalProblem/Patient overcrowding-3.png',
    },
    {
      title: 'Ethical dilemmas',
      description: 'नैतिक दुविधाएँ',
      navigate: gethospitalURL(userState, 'Ethical dilemmas'),
      path: '/assets/images/complainSection/hospitalProblem/Medical errors and patient safety-3.png',
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

function gethospitalURL(stateName, issue) {
  const hospitalIssues = [
    {
      'Staffing shortages': [
        { 'Andhra Pradesh': 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { 'Arunachal Pradesh': 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Assam: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Bihar: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Chhattisgarh: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Goa: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Gujarat: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Haryana: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { 'Himachal Pradesh': 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Jharkhand: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Karnataka: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Kerala: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { 'Madhya Pradesh': 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Maharashtra: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Manipur: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Meghalaya: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Mizoram: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Nagaland: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Odisha: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Punjab: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Rajasthan: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Sikkim: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { 'Tamil Nadu': 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Telangana: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Tripura: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { 'Uttar Pradesh': 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { Uttarakhand: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        { 'West Bengal': 'https://dge.gov.in/dge/LMIS_Dashboard' },
        // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-water-scarcity" },
        { Chandigarh: 'https://dge.gov.in/dge/LMIS_Dashboard' },
        // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-water-scarcity" },
        // { "Delhi": "https://example.com/delhi-water-scarcity" },
        // { "Lakshadweep": "https://example.com/lakshadweep-water-scarcity" },
        // { "Puducherry": "https://example.com/puducherry-water-scarcity" }
      ],
    },
    {
      'Financial constraints': [
        {
          'Andhra Pradesh':
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          'Arunachal Pradesh':
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Assam:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Bihar:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Chhattisgarh:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Goa: 'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Gujarat:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Haryana:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          'Himachal Pradesh':
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Jharkhand:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Karnataka:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Kerala:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          'Madhya Pradesh':
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Maharashtra:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Manipur:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Meghalaya:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Mizoram:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Nagaland:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Odisha:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Punjab:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Rajasthan:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Sikkim:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          'Tamil Nadu':
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Telangana:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Tripura:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          'Uttar Pradesh':
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          Uttarakhand:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        {
          'West Bengal':
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-water-pollution" },
        {
          Chandigarh:
            'https://journals.sagepub.com/doi/10.1177/0972262920988390?icid=int.sj-full-text.similar-articles.9',
        },
        // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-water-pollution" },
        // { "Delhi": "https://example.com/delhi-water-pollution" },
        // { "Lakshadweep": "https://example.com/lakshadweep-water-pollution" },
        // { "Puducherry": "https://example.com/puducherry-water-pollution" }
      ],
    },
    {
      'Patient overcrowding': [
        { 'Andhra Pradesh': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { 'Arunachal Pradesh': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Assam: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Bihar: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Chhattisgarh: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Goa: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Gujarat: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Haryana: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { 'Himachal Pradesh': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Jharkhand: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Karnataka: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Kerala: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { 'Madhya Pradesh': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Maharashtra: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Manipur: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Meghalaya: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Mizoram: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Nagaland: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Odisha: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Punjab: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Rajasthan: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Sikkim: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { 'Tamil Nadu': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Telangana: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Tripura: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { 'Uttar Pradesh': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { Uttarakhand: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        { 'West Bengal': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-groundwater-depletio" },
        { Chandigarh: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498666/' },
        // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-groundwater-depletion" },
        // { "Delhi": "https://example.com/delhi-groundwater-depletion" },
        // { "Lakshadweep": "https://example.com/lakshadweep-groundwater-depletion" },
        // { "Puducherry": "https://example.com/puducherry-groundwater-depletion" }
      ],
    },
    {
      'Medical errors and patient safety': [
        { 'Andhra Pradesh': 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { 'Arunachal Pradesh': 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Assam: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Bihar: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Chhattisgarh: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Goa: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Gujarat: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Haryana: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { 'Himachal Pradesh': 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Jharkhand: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Karnataka: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Kerala: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { 'Madhya Pradesh': 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Maharashtra: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Manipur: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Meghalaya: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Mizoram: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Nagaland: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Odisha: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Punjab: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Rajasthan: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Sikkim: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { 'Tamil Nadu': 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Telangana: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Tripura: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { 'Uttar Pradesh': 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { Uttarakhand: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        { 'West Bengal': 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-flooding" },
        { Chandigarh: 'https://www.ncbi.nlm.nih.gov/books/NBK2652/' },
        // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-flooding" },
        // { "Delhi": "https://example.com/delhi-flooding" },
        // { "Lakshadweep": "https://example.com/lakshadweep-flooding" },
        // { "Puducherry": "https://example.com/puducherry-flooding" }
      ],
    },
    {
      'Technology integration and interoperability': [
        { 'Andhra Pradesh': 'https://indiaai.gov.in/ai-standards/interoperability' },
        { 'Arunachal Pradesh': 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Assam: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Bihar: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Chhattisgarh: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Goa: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Gujarat: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Haryana: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { 'Himachal Pradesh': 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Jharkhand: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Karnataka: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Kerala: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { 'Madhya Pradesh': 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Maharashtra: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Manipur: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Meghalaya: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Mizoram: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Nagaland: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Odisha: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Punjab: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Rajasthan: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Sikkim: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { 'Tamil Nadu': 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Telangana: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Tripura: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { 'Uttar Pradesh': 'https://indiaai.gov.in/ai-standards/interoperability' },
        { Uttarakhand: 'https://indiaai.gov.in/ai-standards/interoperability' },
        { 'West Bengal': 'https://indiaai.gov.in/ai-standards/interoperability' },
        // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-drought" },
        { Chandigarh: 'https://indiaai.gov.in/ai-standards/interoperability' },
        // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-drought" },
        // { "Delhi": "https://example.com/delhi-drought" },
        // { "Lakshadweep": "https://example.com/lakshadweep-drought" },
        // { "Puducherry": "https://example.com/puducherry-drought" }
      ],
    },
    {
      'Regulatory compliance': [
        { 'Andhra Pradesh': 'https://eodbrcp.dpiit.gov.in/' },
        { 'Arunachal Pradesh': 'https://eodbrcp.dpiit.gov.in/' },
        { Assam: 'https://eodbrcp.dpiit.gov.in/' },
        { Bihar: 'https://eodbrcp.dpiit.gov.in/' },
        { Chhattisgarh: 'https://eodbrcp.dpiit.gov.in/' },
        { Goa: 'https://eodbrcp.dpiit.gov.in/' },
        { Gujarat: 'https://eodbrcp.dpiit.gov.in/' },
        { Haryana: 'https://eodbrcp.dpiit.gov.in/' },
        { 'Himachal Pradesh': 'https://eodbrcp.dpiit.gov.in/' },
        { Jharkhand: 'https://eodbrcp.dpiit.gov.in/' },
        { Karnataka: 'https://eodbrcp.dpiit.gov.in/' },
        { Kerala: 'https://eodbrcp.dpiit.gov.in/' },
        { 'Madhya Pradesh': 'https://eodbrcp.dpiit.gov.in/' },
        { Maharashtra: 'https://eodbrcp.dpiit.gov.in/' },
        { Manipur: 'https://eodbrcp.dpiit.gov.in/' },
        { Meghalaya: 'https://eodbrcp.dpiit.gov.in/' },
        { Mizoram: 'https://eodbrcp.dpiit.gov.in/' },
        { Nagaland: 'https://eodbrcp.dpiit.gov.in/' },
        { Odisha: 'https://eodbrcp.dpiit.gov.in/' },
        { Punjab: 'https://eodbrcp.dpiit.gov.in/' },
        { Rajasthan: 'https://eodbrcp.dpiit.gov.in/' },
        { Sikkim: 'https://eodbrcp.dpiit.gov.in/' },
        { 'Tamil Nadu': 'https://eodbrcp.dpiit.gov.in/' },
        { Telangana: 'https://eodbrcp.dpiit.gov.in/' },
        { Tripura: 'https://eodbrcp.dpiit.gov.in/' },
        { 'Uttar Pradesh': 'https://eodbrcp.dpiit.gov.in/' },
        { Uttarakhand: 'https://eodbrcp.dpiit.gov.in/' },
        { 'West Bengal': 'https://eodbrcp.dpiit.gov.in/' },
        // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-water-conflicts" },
        { Chandigarh: 'https://eodbrcp.dpiit.gov.in/' },
        // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-water-conflicts" },
        // { "Delhi": "https://example.com/delhi-water-conflicts" },
        // { "Lakshadweep": "https://example.com/lakshadweep-water-conflicts" },
        // { "Puducherry": "https://example.com/puducherry-water-conflicts" }
      ],
    },
    {
      'Patient satisfaction and experience': [
        { 'Andhra Pradesh': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { 'Arunachal Pradesh': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Assam: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Bihar: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Chhattisgarh: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Goa: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Gujarat: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Haryana: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { 'Himachal Pradesh': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Jharkhand: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Karnataka: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Kerala: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { 'Madhya Pradesh': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Maharashtra: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Manipur: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Meghalaya: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Mizoram: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Nagaland: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Odisha: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Punjab: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Rajasthan: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Sikkim: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { 'Tamil Nadu': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Telangana: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Tripura: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { 'Uttar Pradesh': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { Uttarakhand: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        { 'West Bengal': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-infrastructure-deficiencies" },
        { Chandigarh: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8433860/' },
        // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-infrastructure-deficiencies" },
        // { "Delhi": "https://example.com/delhi-infrastructure-deficiencies" },
        // { "Lakshadweep": "https://example.com/lakshadweep-infrastructure-deficiencies" },
        // { "Puducherry": "https://example.com/puducherry-infrastructure-deficiencies" }
      ],
    },
    {
      'Resource allocation': [
        {
          'Andhra Pradesh':
            'https://www.shiksha.com/online-courses/resource-allocation-certification',
        },
        {
          'Arunachal Pradesh':
            'https://www.shiksha.com/online-courses/resource-allocation-certification',
        },
        { Assam: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Bihar: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        {
          Chhattisgarh: 'https://www.shiksha.com/online-courses/resource-allocation-certification',
        },
        { Goa: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Gujarat: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Haryana: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        {
          'Himachal Pradesh':
            'https://www.shiksha.com/online-courses/resource-allocation-certification',
        },
        { Jharkhand: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Karnataka: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Kerala: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        {
          'Madhya Pradesh':
            'https://www.shiksha.com/online-courses/resource-allocation-certification',
        },
        { Maharashtra: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Manipur: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Meghalaya: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Mizoram: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Nagaland: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Odisha: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Punjab: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Rajasthan: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Sikkim: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        {
          'Tamil Nadu': 'https://www.shiksha.com/online-courses/resource-allocation-certification',
        },
        { Telangana: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        { Tripura: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        {
          'Uttar Pradesh':
            'https://www.shiksha.com/online-courses/resource-allocation-certification',
        },
        { Uttarakhand: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        {
          'West Bengal': 'https://www.shiksha.com/online-courses/resource-allocation-certification',
        },
        // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-climate-change-impacts" },
        { Chandigarh: 'https://www.shiksha.com/online-courses/resource-allocation-certification' },
        // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-climate-change-impacts" },
        // { "Delhi": "https://example.com/delhi-climate-change-impacts" },
        // { "Lakshadweep": "https://example.com/lakshadweep-climate-change-impacts" },
        // { "Puducherry": "https://example.com/puducherry-climate-change-impacts" }
      ],
    },
    {
      'Emergency preparedness and disaster response': [
        { 'Andhra Pradesh': 'https://sachet.ndma.gov.in/' },
        { 'Arunachal Pradesh': 'https://sachet.ndma.gov.in/' },
        { Assam: 'https://sachet.ndma.gov.in/' },
        { Bihar: 'https://sachet.ndma.gov.in/' },
        { Chhattisgarh: 'https://sachet.ndma.gov.in/' },
        { Goa: 'https://sachet.ndma.gov.in/' },
        { Gujarat: 'https://sachet.ndma.gov.in/' },
        { Haryana: 'https://sachet.ndma.gov.in/' },
        { 'Himachal Pradesh': 'https://sachet.ndma.gov.in/' },
        { Jharkhand: 'https://sachet.ndma.gov.in/' },
        { Karnataka: 'https://sachet.ndma.gov.in/' },
        { Kerala: 'https://sachet.ndma.gov.in/' },
        { 'Madhya Pradesh': 'https://sachet.ndma.gov.in/' },
        { Maharashtra: 'https://sachet.ndma.gov.in/' },
        { Manipur: 'https://sachet.ndma.gov.in/' },
        { Meghalaya: 'https://sachet.ndma.gov.in/' },
        { Mizoram: 'https://sachet.ndma.gov.in/' },
        { Nagaland: 'https://sachet.ndma.gov.in/' },
        { Odisha: 'https://sachet.ndma.gov.in/' },
        { Punjab: 'https://sachet.ndma.gov.in/' },
        { Rajasthan: 'https://sachet.ndma.gov.in/' },
        { Sikkim: 'https://sachet.ndma.gov.in/' },
        { 'Tamil Nadu': 'https://sachet.ndma.gov.in/' },
        { Telangana: 'https://sachet.ndma.gov.in/' },
        { Tripura: 'https://sachet.ndma.gov.in/' },
        { 'Uttar Pradesh': 'https://sachet.ndma.gov.in/' },
        { Uttarakhand: 'https://sachet.ndma.gov.in/' },
        { 'West Bengal': 'https://sachet.ndma.gov.in/' },
        // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-safe-drinking-water" },
        { Chandigarh: 'https://sachet.ndma.gov.in/' },
        // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-safe-drinking-water" },
        // { "Delhi": "https://example.com/delhi-safe-drinking-water" },
        // { "Lakshadweep": "https://example.com/lakshadweep-safe-drinking-water" },
        // { "Puducherry": "https://example.com/puducherry-safe-drinking-water" }
      ],
    },
    {
      'Ethical dilemmas': [
        {
          'Andhra Pradesh':
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          'Arunachal Pradesh':
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Assam:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Bihar:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Chhattisgarh:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Goa: 'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Gujarat:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Haryana:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          'Himachal Pradesh':
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Jharkhand:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Karnataka:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Kerala:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          'Madhya Pradesh':
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Maharashtra:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Manipur:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Meghalaya:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Mizoram:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Nagaland:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Odisha:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Punjab:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Rajasthan:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Sikkim:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          'Tamil Nadu':
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Telangana:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Tripura:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          'Uttar Pradesh':
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          Uttarakhand:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        {
          'West Bengal':
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-new-water-pipeline" },
        {
          Chandigarh:
            'https://www.clearias.com/ethical-concerns-dilemmas-government-private-institutions/',
        },
        // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-new-water-pipeline" },
        // { "Delhi": "https://example.com/delhi-new-water-pipeline" },
        // { "Lakshadweep": "https://example.com/lakshadweep-new-water-pipeline" },
        // { "Puducherry": "https://example.com/puducherry-new-water-pipeline" }
      ],
    },
  ];

  const stateData = hospitalIssues.find(item => item[issue]);
  const url = stateData[issue]?.find(stateUrls => stateUrls[stateName]);

  // dummy data url return
  if (url[stateName]) {
    
      return url[stateName];
  }
  console.log(url[stateName]);

  return 'https://rajswasthya.nic.in/';
}
