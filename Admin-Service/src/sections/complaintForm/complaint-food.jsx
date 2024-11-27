import React, { useState, useCallback } from 'react';

import { Box } from '@mui/system';
import { Container } from '@mui/material';

import { useAuthContext } from 'src/auth/hooks';

import SvgColor from 'src/components/svg-color';

import ComplaintCard from './complaint-card';
import ComplaintTabs from './complaint-tabs';

const central = [
  {
    title: 'Food insecurity',
    description: 'भोजन की असुरक्षा',
    navigate: 'https://services.india.gov.in/service/detail/national-food-security-portal-1',
    path: '/assets/images/complainSection/foodProblem/Food insecurity.png',
  },
  {
    title: 'Malnutrition food distribution',
    description: 'कुपोषित भोजन सामग्री वितरण',
    navigate: 'https://www.feedingindia.org/',
    path: '/assets/images/complainSection/foodProblem/Malnutrition food distribution.png',
  },
  {
    title: 'Food waste',
    description: 'खाना बर्बाद',
    navigate: 'https://www.nofoodwaste.org/',
    path: '/assets/images/complainSection/foodProblem/Food waste.png',
  },
  {
    title: 'Food safety',
    description: 'खाद्य सुरक्षा',
    navigate: 'https://fssai.gov.in/cms/food-safety-connect.php',
    path: '/assets/images/complainSection/foodProblem/Food safety.png',
  },
  {
    title: 'Unsustainable agriculture',
    description: 'अस्थिर कृषि',
    navigate: 'https://nmsa.dac.gov.in/',
    path: '/assets/images/complainSection/foodProblem/Unsustainable agriculture.png',
  },
  {
    title: 'Water scarcity and irrigation challenges',
    description: 'जल की कमी और सिंचाई चुनौतियाँ',
    navigate:
      'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
    path: '/assets/images/complainSection/foodProblem/Water scarcity and irrigation challenges.png',
  },
  {
    title: 'Climate change impacts on food production',
    description: 'जलवायु परिवर्तन का प्रभाव खाद्य उत्पादन पर पड़ता है',
    navigate: 'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
    path: '/assets/images/complainSection/foodProblem/Climate change impacts on food production.png',
  },
  {
    title: 'Loss of agricultural biodiversity',
    description: 'कृषि जैव विविधता का नुकसान',
    navigate: 'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
    path: '/assets/images/complainSection/foodProblem/Loss of agricultural biodiversity.png',
  },
  {
    title: 'Global food trade and market volatility',
    description: 'वैश्विक खाद्य व्यापार और बाजार में अस्थिरता',
    navigate: 'https://www.indiantradeportal.in/',
    path: '/assets/images/complainSection/foodProblem/Climate change impacts on food production-1.png',
  },
  {
    title: 'Diet-related health issues',
    description: 'आहार संबंधी स्वास्थ्य समस्याएं',
    navigate: 'https://www.nin.res.in/',
    path: '/assets/images/complainSection/foodProblem/Diet-related health issues.png',
  },
  {
    title: 'Everyday food problems',
    description: 'रोजमर्रा की भोजन संबंधी समस्याएँ',
    navigate:
      'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
    path: '/assets/images/complainSection/foodProblem/everyday food problems.png',
  },
  {
    title: 'Food wastage in schools',
    description: 'स्कूलों में भोजन की बर्बादी',
    navigate:
      'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
    path: '/assets/images/complainSection/foodProblem/food wastage in schools.png',
  },
];

export default function ComplaintFood() {
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
      title: 'Water scarcity and irrigation challenges',
      description: 'जलवायु परिवर्तन का प्रभाव खाद्य उत्पादन पर पड़ता है',
      navigate: getFoodURL(userState, 'Climate change impacts on food production'),
      path: '/assets/images/complainSection/foodProblem/Water scarcity and irrigation challenges.png',
    },
    {
      title: 'Loss of agricultural biodiversity',
      description: 'कृषि जैव विविधता का नुकसान',
      navigate: getFoodURL(userState, 'Loss of agricultural biodiversity'),
      path: '/assets/images/complainSection/foodProblem/Loss of agricultural biodiversity.png',
    },
    {
      title: 'Food insecurity',
      description: 'भोजन की असुरक्षा',
      navigate: getFoodURL(userState, 'Food insecurity'),
      path: '/assets/images/complainSection/foodProblem/Food insecurity.png',
    },
    {
      title: 'Malnutrition food distribution',
      description: 'कुपोषित भोजन सामग्री वितरण',
      navigate: getFoodURL(userState, 'Malnutrition food distribution'),
      path: '/assets/images/complainSection/foodProblem/Malnutrition food distribution.png',
    },
    {
      title: 'Food waste',
      description: 'खाना बर्बाद',
      navigate: getFoodURL(userState, 'Food waste'),
      path: '/assets/images/complainSection/foodProblem/Food waste.png',
    },
    {
      title: 'Global food trade and market volatility',
      description: 'वैश्विक खाद्य व्यापार और बाजार में अस्थिरता',
      navigate: getFoodURL(userState, 'Global food trade and market volatility'),
      path: '/assets/images/complainSection/foodProblem/Climate change impacts on food production-1.png',
    },
    {
      title: 'Diet-related health issues',
      description: 'आहार संबंधी स्वास्थ्य समस्याएं',
      navigate: getFoodURL(userState, 'Diet-related health issues'),
      path: '/assets/images/complainSection/foodProblem/Diet-related health issues.png',
    },
    {
      title: 'everyday food problems',
      description: 'रोजमर्रा की भोजन संबंधी समस्याएँ',
      navigate: getFoodURL(userState, 'everyday food problems'),
      path: '/assets/images/complainSection/foodProblem/everyday food problems.png',
    },
    {
      title: 'food wastage in schools',
      description: 'स्कूलों में भोजन की बर्बादी',
      navigate: getFoodURL(userState, 'food wastage in schools'),
      path: '/assets/images/complainSection/foodProblem/food wastage in schools.png',
    },
    {
      title: 'Food safety',
      description: 'खाद्य सुरक्षा',
      navigate: getFoodURL(userState, 'Food safety'),
      path: '/assets/images/complainSection/foodProblem/Food safety.png',
    },
    {
      title: 'Unsustainable agriculture',
      description: 'अस्थिर कृषि',
      navigate: getFoodURL(userState, 'Unsustainable agriculture'),
      path: '/assets/images/complainSection/foodProblem/Unsustainable agriculture.png',
    },
    {
      title: 'Water scarcity and irrigation challenges',
      description: 'जल की कमी और सिंचाई चुनौतियाँ',
      navigate: getFoodURL(userState, 'Water scarcity and irrigation challenges'),
      path: '/assets/images/complainSection/foodProblem/Water scarcity and irrigation challenges.png',
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

function getFoodURL(stateName, issue) {
  const foodProblem = [
    {
      Rajasthan: {
        'Food insecurity': 'https://food.rajasthan.gov.in/',
        'Malnutrition food distribution': 'https://health.rajasthan.gov.in/home',
        'Food waste':
          'https://environment.rajasthan.gov.in/content/environment/en/rajasthan-state-pollution-control-board/information/WasteManagement.html',
        'Food safety':
          'https://nfsa.gov.in/State/RJ#:~:text=State%20Food%20Department%20Website%20http,.raj.nic.in%2F',
        'Unsustainable agriculture': 'https://water.rajasthan.gov.in/home',
        'Water scarcity and irrigation challenges':
          'https://lsgonline.rajasthan.gov.in/sewercon_service.aspx',
        'Climate change impacts on food production':
          'https://environment.rajasthan.gov.in/content/dam/environment/Env/Pdf_Files/Draft%20of%20State%20Action%20Plan%20on%20Climate%20Change%202022.pdf',
        'Loss of agricultural biodiversity':
          'https://environment.rajasthan.gov.in/content/environment/en/rajasthan-state-biodiversity-board/about-rajasthan/biodiversity-of-rajasthan.html',
        'Global food trade and market volatility': 'https://agriculture.rajasthan.gov.in/rsamb/',
        'Diet-related health issues': 'https://health.rajasthan.gov.in/home',
        'Everyday food problems': 'https://nfsa.gov.in/State/RJ',
        'Food wastage in schools': 'https://education.rajasthan.gov.in/home',
      },
    },
    {
      'Andhra Pradesh': {
        'Food insecurity':
          'https://www.swaniti.com/research-analysis/food-security-and-pds-in-andhra-pradesh/',
        'Malnutrition food distribution': 'https://civilsupplies.ap.gov.in/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://civilsupplies.ap.gov.in/',
        'Unsustainable agriculture': 'https://www.apagrisnet.gov.in/',
        'Water scarcity and irrigation challenges': 'https://apsgwd.ap.gov.in/home',
        'Climate change impacts on food production': 'https://apcnf.in/',
        'Loss of agricultural biodiversity': 'https://karshak.ap.gov.in/ekarshak/',
        'Global food trade and market volatility': 'https://apemcl.ap.gov.in/',
        'Diet-related health issues': 'https://www.ysraarogyasri.ap.gov.in/',
        'Everyday food problems': 'https://www.fssai.gov.in/',
        'Food wastage in schools': 'https://www.nofoodwaste.org/',
      },
    },
    {
      'Arunachal Pradesh': {
        'Food insecurity': 'https://fcsca.assam.gov.in/',
        'Malnutrition food distribution': 'https://fcsca.assam.gov.in/',
        'Food waste': 'https://assam.mygov.in/en/group-issue/how-reduce-food-waste/',
        'Food safety': 'https://assam.mygov.in/en/group-issue/how-reduce-food-waste/',
        'Unsustainable agriculture': 'https://diragri.assam.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://sewasetu.assam.gov.in/site/service-apply/cess-pool-service',
        'Climate change impacts on food production':
          'https://dirhorti.assam.gov.in/portlets/weather-forecast',
        'Loss of agricultural biodiversity': 'https://auwssb.assam.gov.in/',
        'Global food trade and market volatility': 'https://www.mofpi.gov.in/',
        'Diet-related health issues': 'https://hfw.assam.gov.in/',
        'Everyday food problems': 'https://www.fssai.gov.in/',
        'Food wastage in schools': 'https://www.nofoodwaste.org/',
      },
    },
    {
      Assam: {
        'Food insecurity': 'https://fcsca.assam.gov.in/',
        'Malnutrition food distribution': 'https://fcsca.assam.gov.in/',
        'Food waste': 'https://assam.mygov.in/en/group-issue/how-reduce-food-waste/',
        'Food safety': 'https://assam.mygov.in/en/group-issue/how-reduce-food-waste/',
        'Unsustainable agriculture': 'https://diragri.assam.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://sewasetu.assam.gov.in/site/service-apply/cess-pool-service',
        'Climate change impacts on food production':
          'https://dirhorti.assam.gov.in/portlets/weather-forecast',
        'Loss of agricultural biodiversity': 'https://auwssb.assam.gov.in/',
        'Global food trade and market volatility': 'https://www.mofpi.gov.in/',
        'Diet-related health issues': 'https://hfw.assam.gov.in/',
        'Everyday food problems': 'https://www.fssai.gov.in/',
        'Food wastage in schools': 'https://www.nofoodwaste.org/',
      },
    },
    {
      Bihar: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      Chhattisgarh: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      Goa: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      Gujarat: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      Haryana: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      'Himachal Pradesh': {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      Jharkhand: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      Karnataka: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      Kerala: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      'Madhya Pradesh': {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      Maharashtra: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      Manipur: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },

    {
      Meghalaya: {
        'Food insecurity':
          'https://services.india.gov.in/service/detail/national-food-security-portal-1',
        'Malnutrition food distribution': 'https://www.feedingindia.org/',
        'Food waste': 'https://www.nofoodwaste.org/',
        'Food safety': 'https://fssai.gov.in/cms/food-safety-connect.php',
        'Unsustainable agriculture': 'https://nmsa.dac.gov.in/',
        'Water scarcity and irrigation challenges':
          'https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india',
        'Climate change impacts on food production':
          'https://www.orfonline.org/research/climate-change-and-food-security-in-india',
        'Loss of agricultural biodiversity':
          'https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/',
        'Global food trade and market volatility': 'https://www.indiantradeportal.in/',
        'Diet-related health issues': 'https://www.nin.res.in/',
        'Everyday food problems':
          'https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems',
        'Food wastage in schools':
          'https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school',
      },
    },
    {
      Mizoram:{
        "Food insecurity": "https://services.india.gov.in/service/detail/national-food-security-portal-1",
        "Malnutrition food distribution": "https://www.feedingindia.org/",
        "Food waste": "https://www.nofoodwaste.org/",
        "Food safety": "https://fssai.gov.in/cms/food-safety-connect.php",
        "Unsustainable agriculture": "https://nmsa.dac.gov.in/",
        "Water scarcity and irrigation challenges": "https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india",
        "Climate change impacts on food production": "https://www.orfonline.org/research/climate-change-and-food-security-in-india",
        "Loss of agricultural biodiversity": "https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/",
        "Global food trade and market volatility": "https://www.indiantradeportal.in/",
        "Diet-related health issues": "https://www.nin.res.in/",
        "Everyday food problems": "https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems",
        "Food wastage in schools": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school"
    }
    
    },
    {
      Nagaland: {
        "Food insecurity": "https://services.india.gov.in/service/detail/national-food-security-portal-1",
        "Malnutrition food distribution": "https://www.feedingindia.org/",
        "Food waste": "https://www.nofoodwaste.org/",
        "Food safety": "https://fssai.gov.in/cms/food-safety-connect.php",
        "Unsustainable agriculture": "https://nmsa.dac.gov.in/",
        "Water scarcity and irrigation challenges": "https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india",
        "Climate change impacts on food production": "https://www.orfonline.org/research/climate-change-and-food-security-in-india",
        "Loss of agricultural biodiversity": "https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/",
        "Global food trade and market volatility": "https://www.indiantradeportal.in/",
        "Diet-related health issues": "https://www.nin.res.in/",
        "Everyday food problems": "https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems",
        "Food wastage in schools": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school"
    }    
    },

    {
      Odisha: {
        "Food insecurity": "https://services.india.gov.in/service/detail/national-food-security-portal-1",
        "Malnutrition food distribution": "https://www.feedingindia.org/",
        "Food waste": "https://www.nofoodwaste.org/",
        "Food safety": "https://fssai.gov.in/cms/food-safety-connect.php",
        "Unsustainable agriculture": "https://nmsa.dac.gov.in/",
        "Water scarcity and irrigation challenges": "https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india",
        "Climate change impacts on food production": "https://www.orfonline.org/research/climate-change-and-food-security-in-india",
        "Loss of agricultural biodiversity": "https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/",
        "Global food trade and market volatility": "https://www.indiantradeportal.in/",
        "Diet-related health issues": "https://www.nin.res.in/",
        "Everyday food problems": "https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems",
        "Food wastage in schools": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school"
    }    
    },
    {
      Punjab: {
        "Food insecurity": "https://services.india.gov.in/service/detail/national-food-security-portal-1",
        "Malnutrition food distribution": "https://www.feedingindia.org/",
        "Food waste": "https://www.nofoodwaste.org/",
        "Food safety": "https://fssai.gov.in/cms/food-safety-connect.php",
        "Unsustainable agriculture": "https://nmsa.dac.gov.in/",
        "Water scarcity and irrigation challenges": "https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india",
        "Climate change impacts on food production": "https://www.orfonline.org/research/climate-change-and-food-security-in-india",
        "Loss of agricultural biodiversity": "https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/",
        "Global food trade and market volatility": "https://www.indiantradeportal.in/",
        "Diet-related health issues": "https://www.nin.res.in/",
        "Everyday food problems": "https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems",
        "Food wastage in schools": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school"
    }    
    },
    {
      Sikkim: {
        "Food insecurity": "https://services.india.gov.in/service/detail/national-food-security-portal-1",
        "Malnutrition food distribution": "https://www.feedingindia.org/",
        "Food waste": "https://www.nofoodwaste.org/",
        "Food safety": "https://fssai.gov.in/cms/food-safety-connect.php",
        "Unsustainable agriculture": "https://nmsa.dac.gov.in/",
        "Water scarcity and irrigation challenges": "https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india",
        "Climate change impacts on food production": "https://www.orfonline.org/research/climate-change-and-food-security-in-india",
        "Loss of agricultural biodiversity": "https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/",
        "Global food trade and market volatility": "https://www.indiantradeportal.in/",
        "Diet-related health issues": "https://www.nin.res.in/",
        "Everyday food problems": "https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems",
        "Food wastage in schools": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school"
    }
    
    },
    {
      'Tamil Nadu': {
        "Food insecurity": "https://services.india.gov.in/service/detail/national-food-security-portal-1",
        "Malnutrition food distribution": "https://www.feedingindia.org/",
        "Food waste": "https://www.nofoodwaste.org/",
        "Food safety": "https://fssai.gov.in/cms/food-safety-connect.php",
        "Unsustainable agriculture": "https://nmsa.dac.gov.in/",
        "Water scarcity and irrigation challenges": "https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india",
        "Climate change impacts on food production": "https://www.orfonline.org/research/climate-change-and-food-security-in-india",
        "Loss of agricultural biodiversity": "https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/",
        "Global food trade and market volatility": "https://www.indiantradeportal.in/",
        "Diet-related health issues": "https://www.nin.res.in/",
        "Everyday food problems": "https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems",
        "Food wastage in schools": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school"
    }    
    },
    {
      Telangana: {
        "Food insecurity": "https://services.india.gov.in/service/detail/national-food-security-portal-1",
        "Malnutrition food distribution": "https://www.feedingindia.org/",
        "Food waste": "https://www.nofoodwaste.org/",
        "Food safety": "https://fssai.gov.in/cms/food-safety-connect.php",
        "Unsustainable agriculture": "https://nmsa.dac.gov.in/",
        "Water scarcity and irrigation challenges": "https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india",
        "Climate change impacts on food production": "https://www.orfonline.org/research/climate-change-and-food-security-in-india",
        "Loss of agricultural biodiversity": "https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/",
        "Global food trade and market volatility": "https://www.indiantradeportal.in/",
        "Diet-related health issues": "https://www.nin.res.in/",
        "Everyday food problems": "https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems",
        "Food wastage in schools": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school"
    }    
    },
    {
      Tripura: {
        "Food insecurity": "https://services.india.gov.in/service/detail/national-food-security-portal-1",
        "Malnutrition food distribution": "https://www.feedingindia.org/",
        "Food waste": "https://www.nofoodwaste.org/",
        "Food safety": "https://fssai.gov.in/cms/food-safety-connect.php",
        "Unsustainable agriculture": "https://nmsa.dac.gov.in/",
        "Water scarcity and irrigation challenges": "https://www.waterdiplomat.org/story/2023/02/water-security-issues-and-challenges-india",
        "Climate change impacts on food production": "https://www.orfonline.org/research/climate-change-and-food-security-in-india",
        "Loss of agricultural biodiversity": "https://pbfia.org/2022/01/31/agriculture-and-loss-of-biodiversity/",
        "Global food trade and market volatility": "https://www.indiantradeportal.in/",
        "Diet-related health issues": "https://www.nin.res.in/",
        "Everyday food problems": "https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems",
        "Food wastage in schools": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school"
    }    
    },
    {
      'Uttar Pradesh': {
        "Food insecurity": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
        "Malnutrition food distribution": "http://upgwdonline.in/",
        "Food waste": "http://www.uppcb.com/",
        "Food safety": "http://upgwdonline.in/",
        "Unsustainable agriculture": "https://fmisc.up.gov.in/",
        "Water scarcity and irrigation challenges": "https://www.ncfc.gov.in/",
        "Climate change impacts on food production": "https://www.worldwater.org/conflict/map/",
        "Loss of agricultural biodiversity": "https://invest.up.gov.in/infrastructure/",
        "Global food trade and market volatility": "http://upccce.org/",
        "Diet-related health issues": "https://jjmup.org/",
        "Everyday food problems": "https://jklmc.gov.in/",
        "Food wastage in schools": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school"
    }    
    },
    {
      Uttarakhand: {
        "Food insecurity": "https://ujs.uk.gov.in/",
        "Malnutrition food distribution": "https://ujs.uk.gov.in/",
        "Food waste": "https://ueppcb.uk.gov.in/",
        "Food safety": "https://ueppcb.uk.gov.in/pages/display/100-ground-water",
        "Unsustainable agriculture": "https://usdma.uk.gov.in/",
        "Water scarcity and irrigation challenges": "https://uttarakhandirrigation.com/",
        "Climate change impacts on food production": "https://hindi.indiawaterportal.org/articles/water-crisis-uttarakhand",
        "Loss of agricultural biodiversity": "https://uk.nic.in/en/infrastructure/",
        "Global food trade and market volatility": "https://forest.uk.gov.in/climate-change",
        "Diet-related health issues": "https://swsm.uk.gov.in/",
        "Everyday food problems": "https://ujs.uk.gov.in/"
    }    
    },
    {
      'West Bengal':{
        "Food insecurity": "https://www.wbphed.gov.in/en/pages/disaster-management",
        "Malnutrition food distribution": "https://www.wbpcb.gov.in/",
        "Food waste": "https://www.wbwridd.gov.in/swid/",
        "Food safety": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
        "Unsustainable agriculture": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
        "Water scarcity and irrigation challenges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
        "Climate change impacts on food production": "https://www.indiantradeportal.in/",
        "Loss of agricultural biodiversity": "https://www.nin.res.in/",
        "Global food trade and market volatility": "https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems",
        "Diet-related health issues": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school",
        "Everyday food problems": "https://www.careinsurance.com/blog/health-insurance-articles/what-are-the-factors-affecting-the-nutritional-problems",
        "Food wastage in schools": "https://www.worldwildlife.org/magazine/issues/spring-2018/articles/students-step-up-to-tackle-food-waste-at-school"
    }
    
    },
  ];

  // Find the object corresponding to the given state
  const stateObj = foodProblem.find((obj) => stateName in obj);

  if (stateObj && stateName in stateObj) {
    // Find the issue in the state object
    const userStateData = stateObj[stateName];

    if (userStateData && issue in userStateData) {
      // Return the URL corresponding to the issue in the state
      return userStateData[issue];
    }
  }

  return 'https://food.rajasthan.gov.in/';
}
