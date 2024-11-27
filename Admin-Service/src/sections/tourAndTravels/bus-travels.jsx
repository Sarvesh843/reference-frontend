import React,{useState,useCallback} from 'react'

import { Box } from '@mui/system';
import {Container } from '@mui/material';

import { useAuthContext } from 'src/auth/hooks';

import SvgColor from 'src/components/svg-color';

import TourTravelsCard from './tour_travels-card';
import BookingTab from './booking-tab';


const central = [
  {
    title: "Inadequate natural lighting",
    description: "अपर्याप्त प्राकृतिक प्रकाश व्यवस्था",
    navigate: "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/",
    path: "/assets/images/complainSection/lightProblem/Inadequate natural lighting.png"
  },
  {
    title: "Light pollution",
    description: "प्रकाश प्रदूषण",
    navigate: "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution",
    path: "/assets/images/complainSection/lightProblem/Light pollution.png"
  },
  {
    title: "Safety and security concerns",
    description: "सुरक्षा एवं संरक्षा संबंधी चिंताएँ",
    navigate: "https://www.trade.gov/country-commercial-guides/india-safety-and-security",
    path: "/assets/images/complainSection/lightProblem/Safety and security concerns.png"
  },
  {
    title: "Health impacts of artificial lighting",
    description: "कृत्रिम प्रकाश का स्वास्थ्य पर प्रभाव",
    navigate: "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083",
    path: "/assets/images/complainSection/lightProblem/Health impacts of artificial lighting.png"
  },
  {
    title: "Environmental sustainability",
    description: "पर्यावरणीय स्थिरता",
    navigate: "https://www.india.gov.in/official-website-ministry-environment-and-forests-0",
    path: "/assets/images/complainSection/lightProblem/Environmental sustainability.png"
  },
  {
    title: "New Late Line Connection Setup Process",
    description: "नई लेट लाइन कनेक्शन सेटअप प्रक्रिया",
    navigate: "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/",
    path: "/assets/images/complainSection/lightProblem/New Late Line Connection Setup Process.png"
  },
  {
    title: "Poor lighting conditions",
    description: "खराब रोशनी की स्थिति",
    navigate: "https://powermin.gov.in/en/content/saubhagya",
    path: "/assets/images/complainSection/lightProblem/Poor lighting conditions.png"
  },
  {
    title: "Glare",
    description: "चमक",
    navigate: "http://www.glare.co.in/webdevelopment.html",
    path: "/assets/images/complainSection/lightProblem/Access and affordability.png"
  },
  {
    title: "Flicker",
    description: "झिलमिलाहट",
    navigate: "https://www.flickr.com/photos/indiawaterportal/",
    path: "/assets/images/complainSection/lightProblem/Light Flicker.png"
  },
  {
    title: "Color temperature mismatch",
    description: "रंग तापमान बेमेल",
    navigate: "https://www.nature.com/articles/s41598-022-21755-7",
    path: "/assets/images/complainSection/lightProblem/Color temperature mismatch.png"
  }
];


export default function BusTravels() {

  const [currentTab, setCurrentTab] = useState('central');

  
  const { user:{UserAddressesses} } = useAuthContext();
  const {userState} = UserAddressesses && UserAddressesses[0];
  
  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);


  const state = [
    {
      title: "Access and affordability",
      description: "पहुंच और सामर्थ्य",
      navigate: getlightURL(userState,"Access and affordability"),
      path: "/assets/images/complainSection/lightProblem/Access and affordability.png"
    },
    {
      title: "New Late Line Connection Setup Process",
      description: "नई लेट लाइन कनेक्शन सेटअप प्रक्रिया",
      navigate: getlightURL(userState,"New Late Line Connection Setup Process"),
      path: "/assets/images/complainSection/lightProblem/New Late Line Connection Setup Process.png"
    },
    {
      title: "Flicker",
      description: "झिलमिलाहट",
      navigate: getlightURL(userState,"Flicker"),
      path: "/assets/images/complainSection/lightProblem/Light Flicker.png"
    },
    {
      title: "Color temperature mismatch",
      description: "रंग तापमान बेमेल",
      navigate: getlightURL(userState,"Color temperature mismatch"),
      path: "/assets/images/complainSection/lightProblem/Color temperature mismatch.png"
    },
    {
      title: "Poor lighting conditions",
      description: "खराब रोशनी की स्थिति",
      navigate: getlightURL(userState,"Poor lighting conditions"),
      path: "/assets/images/complainSection/lightProblem/Poor lighting conditions.png"
    },
    {
      title: "Glare",
      description: "चमक",
      navigate: getlightURL(userState,"Glare"),
      path: "/assets/images/complainSection/lightProblem/Light Glare.png"
    },
    {
      title: "Inadequate natural lighting",
      description: "अपर्याप्त प्राकृतिक प्रकाश व्यवस्था",
      navigate: getlightURL(userState,"Inadequate natural lighting"),
      path: "/assets/images/complainSection/lightProblem/Inadequate natural lighting.png"
    },
    {
      title: "Light pollution",
      description: "प्रकाश प्रदूषण",
      navigate: getlightURL(userState,"Light pollution"),
      path: "/assets/images/complainSection/lightProblem/Light pollution.png"
    },
    {
      title: "Safety and security concerns",
      description: "सुरक्षा एवं संरक्षा संबंधी चिंताएँ",
      navigate: getlightURL(userState,"Safety and security concerns"),
      path: "/assets/images/complainSection/lightProblem/Safety and security concerns.png"
    },
    {
      title: "Health impacts of artificial lighting",
      description: "कृत्रिम प्रकाश का स्वास्थ्य पर प्रभाव",
      navigate: getlightURL(userState,"Health impacts of artificial lighting"),
      path: "/assets/images/complainSection/lightProblem/Health impacts of artificial lighting.png"
    },
    {
      title: "Environmental sustainability",
      description: "पर्यावरणीय स्थिरता",
      navigate: getlightURL(userState,"Environmental sustainability"),
      path: "/assets/images/complainSection/lightProblem/Environmental sustainability.png"
    }
  ];


  const icon = (name) => (
    <SvgColor src={`/assets/icons/menuicons/${name}.svg`}/>
  );

const TABS = [
    {
        value: 'central',
        label: 'Central Complaint',
        icon:icon('Profile')
      },
    {
      value: 'state',
      label: 'State Complaint',
      icon:icon('Profile')
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
       
       <BookingTab activeTab={currentTab} handleChangeTab={handleChangeTab} tabs={TABS}/>

          {currentTab === "state" && <TourTravelsCard cards={state}/>}

          {currentTab === "central" && <TourTravelsCard cards={central}/>}     

        </Box>
      </Container>
  );
};


function getlightURL(stateName, issue) {

  const lightIssues = [
      {
          "Poor lighting conditions": [
              { "Andhra Pradesh": "https://powermin.gov.in/en/content/saubhagya" },
              { "Arunachal Pradesh": "https://powermin.gov.in/en/content/saubhagya" },
              { "Assam": "https://powermin.gov.in/en/content/saubhagya" },
              { "Bihar": "https://powermin.gov.in/en/content/saubhagya" },
              { "Chhattisgarh": "https://powermin.gov.in/en/content/saubhagya" },
              { "Goa": "https://powermin.gov.in/en/content/saubhagya" },
              { "Gujarat": "https://powermin.gov.in/en/content/saubhagya" },
              { "Haryana": "https://powermin.gov.in/en/content/saubhagya" },
              { "Himachal Pradesh": "https://powermin.gov.in/en/content/saubhagya" },
              { "Jharkhand": "https://powermin.gov.in/en/content/saubhagya" },
              { "Karnataka": "https://powermin.gov.in/en/content/saubhagya" },
              { "Kerala": "https://powermin.gov.in/en/content/saubhagya" },
              { "Madhya Pradesh": "https://powermin.gov.in/en/content/saubhagya" },
              { "Maharashtra": "https://powermin.gov.in/en/content/saubhagya" },
              { "Manipur": "https://powermin.gov.in/en/content/saubhagya" },
              { "Meghalaya": "https://powermin.gov.in/en/content/saubhagya" },
              { "Mizoram": "https://powermin.gov.in/en/content/saubhagya" },
              { "Nagaland": "https://powermin.gov.in/en/content/saubhagya" },
              { "Odisha": "https://powermin.gov.in/en/content/saubhagya" },
              { "Punjab": "https://powermin.gov.in/en/content/saubhagya" },
              { "Rajasthan": "https://powermin.gov.in/en/content/saubhagya" },
              { "Sikkim": "https://powermin.gov.in/en/content/saubhagya" },
              { "Tamil Nadu": "https://powermin.gov.in/en/content/saubhagya" },
              { "Telangana": "https://powermin.gov.in/en/content/saubhagya" },
              { "Tripura": "https://powermin.gov.in/en/content/saubhagya" },
              { "Uttar Pradesh": "https://powermin.gov.in/en/content/saubhagya" },
              { "Uttarakhand": "https://powermin.gov.in/en/content/saubhagya" },
              { "West Bengal": "https://powermin.gov.in/en/content/saubhagya" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-water-scarcity" },
              { "Chandigarh": "https://powermin.gov.in/en/content/saubhagya" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-water-scarcity" },
              // { "Delhi": "https://example.com/delhi-water-scarcity" },
              // { "Lakshadweep": "https://example.com/lakshadweep-water-scarcity" },
              // { "Puducherry": "https://example.com/puducherry-water-scarcity" }
          ]
      },
      {
          "Glare": [
              { "Andhra Pradesh": "http://www.glare.co.in/webdevelopment.html" },
              { "Arunachal Pradesh": "http://www.glare.co.in/webdevelopment.html" },
              { "Assam": "http://www.glare.co.in/webdevelopment.html" },
              { "Bihar": "http://www.glare.co.in/webdevelopment.html" },
              { "Chhattisgarh": "http://www.glare.co.in/webdevelopment.html" },
              { "Goa": "http://www.glare.co.in/webdevelopment.html" },
              { "Gujarat": "http://www.glare.co.in/webdevelopment.html" },
              { "Haryana": "http://www.glare.co.in/webdevelopment.html" },
              { "Himachal Pradesh": "http://www.glare.co.in/webdevelopment.html" },
              { "Jharkhand": "http://www.glare.co.in/webdevelopment.html" },
              { "Karnataka": "http://www.glare.co.in/webdevelopment.html" },
              { "Kerala": "http://www.glare.co.in/webdevelopment.html" },
              { "Madhya Pradesh": "http://www.glare.co.in/webdevelopment.html" },
              { "Maharashtra": "http://www.glare.co.in/webdevelopment.html" },
              { "Manipur": "http://www.glare.co.in/webdevelopment.html" },
              { "Meghalaya": "http://www.glare.co.in/webdevelopment.html" },
              { "Mizoram": "http://www.glare.co.in/webdevelopment.html" },
              { "Nagaland": "http://www.glare.co.in/webdevelopment.html" },
              { "Odisha": "http://www.glare.co.in/webdevelopment.html" },
              { "Punjab": "http://www.glare.co.in/webdevelopment.html" },
              { "Rajasthan": "http://www.glare.co.in/webdevelopment.html" },
              { "Sikkim": "http://www.glare.co.in/webdevelopment.html" },
              { "Tamil Nadu": "http://www.glare.co.in/webdevelopment.html" },
              { "Telangana": "http://www.glare.co.in/webdevelopment.html" },
              { "Tripura": "http://www.glare.co.in/webdevelopment.html" },
              { "Uttar Pradesh": "http://www.glare.co.in/webdevelopment.html" },
              { "Uttarakhand": "http://www.glare.co.in/webdevelopment.html" },
              { "West Bengal": "http://www.glare.co.in/webdevelopment.html" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-water-pollution" },
              { "Chandigarh": "http://www.glare.co.in/webdevelopment.html" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-water-pollution" },
              // { "Delhi": "https://example.com/delhi-water-pollution" },
              // { "Lakshadweep": "https://example.com/lakshadweep-water-pollution" },
              // { "Puducherry": "https://example.com/puducherry-water-pollution" }
          ]
      },
      {
          "Flicker": [
              { "Andhra Pradesh": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Arunachal Pradesh": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Assam": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Bihar": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Chhattisgarh": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Goa": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Gujarat": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Haryana": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Himachal Pradesh": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Jharkhand": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Karnataka": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Kerala": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Madhya Pradesh": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Maharashtra": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Manipur": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Meghalaya": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Mizoram": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Nagaland": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Odisha": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Punjab": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Rajasthan": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Sikkim": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Tamil Nadu": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Telangana": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Tripura": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Uttar Pradesh": "https://www.flickr.com/photos/indiawaterportal/" },
              { "Uttarakhand": "https://www.flickr.com/photos/indiawaterportal/" },
              { "West Bengal": "https://www.flickr.com/photos/indiawaterportal/" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-groundwater-depletion" },
              { "Chandigarh": "https://www.flickr.com/photos/indiawaterportal/" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-groundwater-depletion" },
              // { "Delhi": "https://example.com/delhi-groundwater-depletion" },
              // { "Lakshadweep": "https://example.com/lakshadweep-groundwater-depletion" },
              // { "Puducherry": "https://example.com/puducherry-groundwater-depletion" }
          ]
      },
      {
          "Color temperature mismatch": [
              { "Andhra Pradesh": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Arunachal Pradesh": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Assam": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Bihar": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Chhattisgarh": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Goa": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Gujarat": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Haryana": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Himachal Pradesh": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Jharkhand": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Karnataka": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Kerala": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Madhya Pradesh": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Maharashtra": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Manipur": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Meghalaya": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Mizoram": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Nagaland": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Odisha": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Punjab": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Rajasthan": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Sikkim": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Tamil Nadu": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Telangana": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Tripura": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Uttar Pradesh": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "Uttarakhand": "https://www.nature.com/articles/s41598-022-21755-7" },
              { "West Bengal": "https://www.nature.com/articles/s41598-022-21755-7" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-flooding" },
              { "Chandigarh": "https://www.nature.com/articles/s41598-022-21755-7" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-flooding" },
              // { "Delhi": "https://example.com/delhi-flooding" },
              // { "Lakshadweep": "https://example.com/lakshadweep-flooding" },
              // { "Puducherry": "https://example.com/puducherry-flooding" }
          ]
      },
      {
          "Inadequate natural lighting": [
              { "Andhra Pradesh": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Arunachal Pradesh": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Assam": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Bihar": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Chhattisgarh": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Goa": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Gujarat": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Haryana": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Himachal Pradesh": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Jharkhand": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Karnataka": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Kerala": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Madhya Pradesh": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Maharashtra": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Manipur": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Meghalaya": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Mizoram": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Nagaland": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Odisha": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Punjab": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Rajasthan": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Sikkim": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Tamil Nadu": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Telangana": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Tripura": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Uttar Pradesh": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Uttarakhand": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "West Bengal": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              // { "Andaman and Nicobar Islands": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              { "Chandigarh": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://connect.buildnext.in/how-can-you-improve-natural-lighting-for-your-home/" },
              // { "Delhi": "https://example.com/delhi-drought" },
              // { "Lakshadweep": "https://example.com/lakshadweep-drought" },
              // { "Puducherry": "https://example.com/puducherry-drought" }
          ]
      },
      {
          "Light pollution": [
              { "Andhra Pradesh": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Arunachal Pradesh": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Assam": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Bihar": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Chhattisgarh": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Goa": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Gujarat": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Haryana": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Himachal Pradesh": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Jharkhand": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Karnataka": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Kerala": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Madhya Pradesh": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Maharashtra": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Manipur": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Meghalaya": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Mizoram": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Nagaland": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Odisha": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Punjab": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Rajasthan": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Sikkim": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Tamil Nadu": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Telangana": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Tripura": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollutions" },
              { "Uttar Pradesh": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Uttarakhand": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "West Bengal": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              // { "Andaman and Nicobar Islands": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              { "Chandigarh": "https://vikaspedia.in/energy/environment/know-your-environment/pollution/light-pollution" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-water-conflicts" },
              // { "Delhi": "https://example.com/delhi-water-conflicts" },
              // { "Lakshadweep": "https://example.com/lakshadweep-water-conflicts" },
              // { "Puducherry": "https://example.com/puducherry-water-conflicts" }
          ]
      },
      {
          "Safety and security concerns": [
              { "Andhra Pradesh": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Arunachal Pradesh": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Assam": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Bihar": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Chhattisgarh": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Goa": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Gujarat": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Haryana": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Himachal Pradesh": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Jharkhand": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Karnataka": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Kerala": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Madhya Pradesh": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Maharashtra": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Manipur": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Meghalaya": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Mizoram": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Nagaland": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Odisha": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Punjab": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Rajasthan": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Sikkim": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Tamil Nadu": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Telangana": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Tripura": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Uttar Pradesh": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "Uttarakhand": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              { "West Bengal": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-infrastructure-deficiencies" },
              { "Chandigarh": "https://www.trade.gov/country-commercial-guides/india-safety-and-security" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-infrastructure-deficiencies" },
              // { "Delhi": "https://example.com/delhi-infrastructure-deficiencies" },
              // { "Lakshadweep": "https://example.com/lakshadweep-infrastructure-deficiencies" },
              // { "Puducherry": "https://example.com/puducherry-infrastructure-deficiencies" }
          ]
      },
      {
          "Health impacts of artificial lighting": [
              { "Andhra Pradesh": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Arunachal Pradesh": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Assam": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Bihar": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Chhattisgarh": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Goa": "https://example.com/goa-climate-change-impactshttps://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Gujarat": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Haryana": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Himachal Pradesh": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Jharkhand": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Karnataka": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Kerala": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Madhya Pradesh": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Maharashtra": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Manipur": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Meghalaya": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Mizoram": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Nagaland": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Odisha": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Punjab": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Rajasthan": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Sikkim": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Tamil Nadu": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Telangana": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Tripura": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Uttar Pradesh": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "Uttarakhand": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              { "West Bengal": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-climate-change-impacts" },
              { "Chandigarh": "https://realty.economictimes.indiatimes.com/news/lighting/indoor-lighting/harmful-impacts-of-artificial-light-on-your-health/71884083" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-climate-change-impacts" },
              // { "Delhi": "https://example.com/delhi-climate-change-impacts" },
              // { "Lakshadweep": "https://example.com/lakshadweep-climate-change-impacts" },
              // { "Puducherry": "https://example.com/puducherry-climate-change-impacts" }
          ]
      },
      {
          "Environmental sustainability": [
              { "Andhra Pradesh": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Arunachal Pradesh": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Assam": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Bihar": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Chhattisgarh": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Goa": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Gujarat": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Haryana": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Himachal Pradesh": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Jharkhand": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Karnataka": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Kerala": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Madhya Pradesh": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Maharashtra": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Manipur": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Meghalaya": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Mizoram": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Nagaland": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Odisha": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Punjab": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Rajasthan": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Sikkim": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Tamil Nadu": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Telangana": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Tripura": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Uttar Pradesh": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "Uttarakhand": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              { "West Bengal": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-safe-drinking-water" },
              { "Chandigarh": "https://www.india.gov.in/official-website-ministry-environment-and-forests-0" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-safe-drinking-water" },
              // { "Delhi": "https://example.com/delhi-safe-drinking-water" },
              // { "Lakshadweep": "https://example.com/lakshadweep-safe-drinking-water" },
              // { "Puducherry": "https://example.com/puducherry-safe-drinking-water" }
          ]
      },
      {
          "Access and affordability": [
              { "Andhra Pradesh": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Arunachal Pradesh": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Assam": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Bihar": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Chhattisgarh": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Goa": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Gujarat": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Haryana": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Himachal Pradesh": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Jharkhand": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Karnataka": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Kerala": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Madhya Pradesh": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Maharashtra": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Manipur": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Meghalaya": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Mizoram": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Nagaland": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Odisha": "hhttps://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Punjab": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Rajasthan": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Sikkim": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Tamil Nadu": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Telangana": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Tripura": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Uttar Pradesh": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "Uttarakhand": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              { "West Bengal": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-new-water-pipeline" },
              { "Chandigarh": "https://www.nin.res.in/https:/www.researchgate.net/publication/348189865_Accessibility_and_Affordability_of_Health_Services_in_India_A_Study_of_Selected_States" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-new-water-pipeline" },
              // { "Delhi": "https://example.com/delhi-new-water-pipeline" },
              // { "Lakshadweep": "https://example.com/lakshadweep-new-water-pipeline" },
              // { "Puducherry": "https://example.com/puducherry-new-water-pipeline" }
          ]
      },
      {
          "New Late Line Connection Setup Process": [
              { "Andhra Pradesh": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Arunachal Pradesh": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Assam": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Bihar": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Chhattisgarh": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Goa": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Gujarat": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Haryana": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Himachal Pradesh": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Jharkhand": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Karnataka": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Kerala": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Madhya Pradesh": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Maharashtra": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Manipur": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Meghalaya": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Mizoram": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Nagaland": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Odisha": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Punjab": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Rajasthan": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Sikkim": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Tamil Nadu": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Telangana": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Tripura": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Uttar Pradesh": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "Uttarakhand": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              { "West Bengal": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-new-water-pipeline" },
              { "Chandigarh": "https://www.tangedco.org/en/tangedco/consumer-info/consumer-guidance/procedure/" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-new-water-pipeline" },
              // { "Delhi": "https://example.com/delhi-new-water-pipeline" },
              // { "Lakshadweep": "https://example.com/lakshadweep-new-water-pipeline" },
              // { "Puducherry": "https://example.com/puducherry-new-water-pipeline" }
          ]
      }
  ];

  const stateData = lightIssues.find(item => item[issue]);
  const url = stateData[issue]?.find(stateUrls => stateUrls[stateName] ? stateUrls[stateName] : {});

  // dummy data url return
  if (url[stateName]) {
      return url[stateName];
  }

  return "https://energy.rajasthan.gov.in/";
}