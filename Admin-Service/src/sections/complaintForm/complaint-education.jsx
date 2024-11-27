import React,{useState,useCallback} from 'react'

import { Box } from '@mui/system';
import {Container } from '@mui/material';

import { useAuthContext } from 'src/auth/hooks';

import SvgColor from 'src/components/svg-color';

import ComplaintCard from './complaint-card';
import ComplaintTabs from './complaint-tabs';

const central = [
  {
      title: "Mental health issues",
      description: "मानसिक स्वास्थ्य के मुद्दों",
      navigate: "https://services.india.gov.in/service/listing?cat_id=50&ln=en",
      path: "/assets/images/complainSection/schoolProblem/Mental health issues.png"
  },
  {
      title: "Technology integration",
      description: "मानसिक स्वास्थ्य के मुद्दों",
      navigate: "https://www.meity.gov.in/",
      path: "/assets/images/complainSection/schoolProblem/Technology integration.png"
  },
  {
      title: "Assessment and accountability",
      description: "मूल्यांकन एवं जवाबदेही",
      navigate: "https://link.springer.com/journal/11092",
      path: "/assets/images/complainSection/schoolProblem/Assessment and accountability.png"
  },
  {
      title: "College affordability and student debt",
      description: "",
      navigate: "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme",
      path: "/assets/images/complainSection/schoolProblem/Assessment and accountability.png"
  },
  {
      title: "Underfunding",
      description: "अल्प वित्त पोषण",
      navigate: "https://www.startupindia.gov.in/",
      path: "/assets/images/complainSection/schoolProblem/Underfunding.png"
  },
  {
      title: "Student engagement and motivation",
      description: "छात्र जुड़ाव और प्रेरणा",
      navigate: "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323",
      path: "/assets/images/complainSection/schoolProblem/Student engagement and motivation.png"
  },
  {
      title: "Bullying and harassment",
      description: "बदमाशी और उत्पीड़न",
      navigate: "https://cybercrime.gov.in/Webform/FAQ.aspx",
      path: "/assets/images/complainSection/schoolProblem/Bullying and harassment.png"
  },
  {
      title: "Teacher shortages",
      description: "शिक्षकों की कमी",
      navigate: "https://www.chea.org/teacher-shortages-india",
      path: "/assets/images/complainSection/schoolProblem/Teacher shortages.png"
  },
  {
      title: "Transition and retention",
      description: "संक्रमण और प्रतिधारण",
      navigate: "https://educationforallinindia.com/retention-rate-in-school-education-in-india/",
      path: "/assets/images/complainSection/schoolProblem/Transition and retention.png"
  },
  {
      title: "Equity and Access",
      description: "इक्विटी और पहुंच",
      navigate: "https://dsel.education.gov.in/inclusive-education",
      path: "/assets/images/complainSection/schoolProblem/Equity and Access.png"
  }
];



export default function ComplaintEducation() {

  const [currentTab, setCurrentTab] = useState('central');

  
  const { user:{UserAddressesses} } = useAuthContext();
  const {userState} = UserAddressesses && UserAddressesses[0];
  
  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);


  const state = [
    {
      title: "Underfunding",
      description: "अल्प वित्त पोषण",
      navigate: getlightURL(userState,"Underfunding"),
      path: "/assets/images/complainSection/schoolProblem/Underfunding.png"
    },
    {
      title: "Teacher shortages",
      description: "शिक्षकों की कमी",
      navigate: getlightURL(userState,"Teacher shortages"),
      path: "/assets/images/complainSection/schoolProblem/Teacher shortages.png"
    },
    {
      title: "Equity and Access",
      description: "इक्विटी और पहुंच",
      navigate: getlightURL(userState,"Equity and Access"),
      path: "/assets/images/complainSection/schoolProblem/Equity and Access.png"
    },
    {
      title: "Student engagement and motivation",
      description: "छात्र जुड़ाव और प्रेरणा",
      navigate: getlightURL(userState,"Student engagement and motivation"),
      path: "/assets/images/complainSection/schoolProblem/Student engagement and motivation.png"
    },
    {
      title: "Bullying and harassment",
      description: "बदमाशी और उत्पीड़न",
      navigate: getlightURL(userState,"Bullying and harassment"),
      path: "/assets/images/complainSection/schoolProblem/Bullying and harassment.png"
    },
    {
      title: "Mental health issues",
      description: "मानसिक स्वास्थ्य के मुद्दों",
      navigate: getlightURL(userState,"Mental health issues"),
      path: "/assets/images/complainSection/schoolProblem/Mental health issues.png"
    },
    {
      title: "Technology integration",
      description: "प्रौद्योगिकी एकीकरण",
      navigate: getlightURL(userState,"Technology integration"),
      path: "/assets/images/complainSection/schoolProblem/Technology integration.png"
    },
    {
      title: "Assessment and accountability",
      description: "मूल्यांकन एवं जवाबदेही",
      navigate: getlightURL(userState,"Assessment and accountability"),
      path: "/assets/images/complainSection/schoolProblem/Assessment and accountability.png"
    },
    {
      title: "College affordability and student debt",
      description: "कॉलेज की सामर्थ्य और छात्र ऋण",
      navigate: getlightURL(userState,"College affordability and student debt"),
      path: "/assets/images/complainSection/schoolProblem/Assessment and accountability.png"
    },
    {
      title: "Transition and retention",
      description: "संक्रमण और प्रतिधारण",
      navigate: getlightURL(userState,"Transition and retention"),
      path: "/assets/images/complainSection/schoolProblem/Transition and retention.png"
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
       
       <ComplaintTabs activeTab={currentTab} handleChangeTab={handleChangeTab} tabs={TABS}/>

          {currentTab === "state" && <ComplaintCard cards={state}/>}

          {currentTab === "central" && <ComplaintCard cards={central}/>}     

        </Box>
      </Container>
  );
};


function getlightURL(stateName, issue) {

  const educationIssue = [
    {
      "Andhra Pradesh": [
          { "Underfunding": "https://www.startupindia.gov.in/" },
          { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
          { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
          { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
          { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
          { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
          { "Technology integration": "https://www.meity.gov.in/" },
          { "Assessment and accountability": "https://link.springer.com/journal/11092" },
          { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
          { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
      ]
  },

  {
    "Arunachal Pradesh": [
      { "Underfunding": "https://www.startupindia.gov.in/" },
      { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
      { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
      { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
      { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
      { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
      { "Technology integration": "https://www.meity.gov.in/" },
      { "Assessment and accountability": "https://link.springer.com/journal/11092" },
      { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
      { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
    ]
},

{
  "Assam": [
    { "Underfunding": "https://www.startupindia.gov.in/" },
    { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
    { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
    { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
    { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
    { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
    { "Technology integration": "https://www.meity.gov.in/" },
    { "Assessment and accountability": "https://link.springer.com/journal/11092" },
    { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
    { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
  ]
},

{
"Bihar": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},
{
"Chhattisgarh": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Goa": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Gujarat": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Haryana": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Himachal Pradesh": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Jharkhand": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Karnataka": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Kerala": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Madhya Pradesh": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Maharashtra": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Manipur": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Meghalaya": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
" Mizoram ": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Nagaland": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Odisha": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Punjab": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Rajasthan": [
    { "problem of potholes in the road": "https://sampark.rajasthan.gov.in/" },
    { "repair cracks in the road": "https://unesdoc.unesco.org/ark:/48223/pf0000379171" },
    { "The trouble with uneven pavement": "https://sje.rajasthan.gov.in/" },
    { "lack of road maintenance": "https://www.erekrut.com/jobs/" },
    { "traffic congestion problem": "https://rscw.rajasthan.gov.in/OnlineComplaints.aspx?menu_id=10035" },
    { "Problem of poor signage and road signs": "https://home.rajasthan.gov.in/content/homeportal/en/jail/staffcorner/trainingmaterial/drugsmentalhealthandsuicide.html" },
    { "Problem of adequate lighting on the road": "https://home.rajasthan.gov.in/content/homeportal/en/rpaportal/aboutrpa/infrastructure/it.html" },
    { "Lack of infrastructure for pedestrians and cyclists on the road": "https://rti.rajasthan.gov.in/" },
    { "College affordability and student debt": "https://sje.rajasthan.gov.in/Default.aspx?PageID=346" },
    { "Drainage problem on the road": "https://raj.nic.in/" },
]
},

{
"Sikkim": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
          { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
          { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
          { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
          { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
          { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
          { "Technology integration": "https://www.meity.gov.in/" },
          { "Assessment and accountability": "https://link.springer.com/journal/11092" },
          { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
          { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Tamil Nadu": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
"Telangana": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},



{
"Tripura": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
" Uttar Pradesh": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
" Uttarakhand": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},

{
" West Bengal": [
  { "Underfunding": "https://www.startupindia.gov.in/" },
  { "Teacher shortages": "https://www.chea.org/teacher-shortages-india" },
  { "Equity and Access": "https://dsel.education.gov.in/inclusive-education" },
  { "Student engagement and motivation": "https://www.inderscienceonline.com/doi/10.1504/IJSSE.2022.123323" },
  { "Bullying and harassment": "https://cybercrime.gov.in/Webform/FAQ.aspx" },
  { "Mental health issues": "https://services.india.gov.in/service/listing?cat_id=50&ln=en" },
  { "Technology integration": "https://www.meity.gov.in/" },
  { "Assessment and accountability": "https://link.springer.com/journal/11092" },
  { "College affordability and student debt": "https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" },
  { "Transition and retention": "https://educationforallinindia.com/retention-rate-in-school-education-in-india/" },
]
},
  ];

  const stateObj = educationIssue.find((obj) => stateName in obj);

  if (stateObj && stateName in stateObj) {
    // Find the issue in the state object
    const userStateData = stateObj[stateName];

    if (userStateData && issue in userStateData) {
      // Return the URL corresponding to the issue in the state
      return userStateData[issue];
    }
  }

  // const stateData = roadIssue.find(item => item[issue]);
  // const url = stateData[issue]?.find(stateUrls => stateUrls[stateName] ? stateUrls[stateName] : {});

  // // dummy data url return
  // if (url[stateName]) {
  //     return url[stateName];
  // }

  return "https://education.rajasthan.gov.in/home";
}