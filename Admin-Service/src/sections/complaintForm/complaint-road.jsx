import React,{useState,useCallback} from 'react'

import { Box } from '@mui/system';
import {Container } from '@mui/material';

import { useAuthContext } from 'src/auth/hooks';

import SvgColor from 'src/components/svg-color';

import ComplaintCard from './complaint-card';
import ComplaintTabs from './complaint-tabs';


const central = [
  {
    title: "Problem of adequate lighting on the road",
    description: "सड़क पर पर्याप्त रोशनी की समस्या",
    navigate: "https://blog.ipleaders.in/street-lights-not-working-locality/",
    path: "/assets/images/complainSection/roadProblem/Problem of adequate lighting on the road.png"
  },
  {
    title: "Lack of infrastructure for pedestrians and cyclists on the road",
    description: "सड़क पर पैदल यात्रियों और साइकिल चालकों के लिए बुनियादी ढांचे का अभाव",
    navigate: "https://questionofcities.org/cycling-in-mumbai-frail-and-failed-transit-plans-for-the-masses/",
    path: "/assets/images/complainSection/roadProblem/Lack of infrastructure for pedestrians and cyclists on the road.png"
  },
  {
    title: "Drainage problem on the road",
    description: "सड़क पर जल निकासी की समस्या",
    navigate: "https://www.pmc.gov.in/en/information-related-drainage-connection-and-repair-works",
    path: "/assets/images/complainSection/roadProblem/Drainage problem on the road.png"
  },
  {
    title: "Roadside hazards",
    description: "सड़क किनारे के खतरे",
    navigate: "https://morth.nic.in/",
    path: "/assets/images/complainSection/roadProblem/Roadside hazards.png"
  },
  {
    title: "Repair cracks in the road",
    description: "रोड में दरार की ख़राबी ठीक करे",
    navigate: "https://righttorepairindia.gov.in/",
    path: "/assets/images/complainSection/roadProblem/repair cracks in the road.png"
  },
  {
    title: "Traffic congestion problem",
    description: "यातायात भीड़ की समस्या",
    navigate: "https://www.totalassignmenthelp.com/free-sample/research-essay-traffic-congestion-india",
    path: "/assets/images/complainSection/roadProblem/traffic congestion problem.png"
  },
  {
    title: "Problem of poor signage and road signs",
    description: "खराब संकेत और सड़क चिन्हों की समस्या",
    navigate: "https://jhpolice.gov.in/road-safety/mandatory-road-signs",
    path: "/assets/images/complainSection/roadProblem/Problem of poor signage and road signs.png"
  },
  {
    title: "The trouble with uneven pavement",
    description: "असमान फुटपाथ की समस्या",
    navigate: "https://pavementinteractive.org/reference-desk/pavement-management/pavement-distresses/",
    path: "/assets/images/complainSection/roadProblem/The trouble with uneven pavement.png"
  },
  {
    title: "Lack of road maintenance",
    description: "सड़क रखरखाव का अभाव",
    navigate: "https://pmgsy.nic.in/maintenance-rural-roads-problems-and-prospects",
    path: "/assets/images/complainSection/roadProblem/lack of road maintenance.png"
  }
];



export default function ComplaintLight() {

  const [currentTab, setCurrentTab] = useState('central');

  
  const { user:{UserAddressesses} } = useAuthContext();
  const {userState} = UserAddressesses && UserAddressesses[0];
  
  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);


  const state = [
    {
      title: "problem of potholes in the road",
      description: "सड़क में गड्ढों की समस्या",
      navigate: getlightURL(userState,"problem of potholes in the road"),
      path: "/assets/images/complainSection/roadProblem/problem of potholes in the road.png"
    },
    {
      title: "repair cracks in the road",
      description: "रोड में दरार की ख़राबी ठीक करे",
      navigate: getlightURL(userState,"repair cracks in the road"),
      path: "/assets/images/complainSection/roadProblem/repair cracks in the road.png"
    },
    {
      title: "The trouble with uneven pavement",
      description: "असमान फुटपाथ की समस्या",
      navigate: getlightURL(userState,"The trouble with uneven pavement"),
      path: "/assets/images/complainSection/roadProblem/The trouble with uneven pavement.png"
    },
    {
      title: "lack of road maintenance",
      description: "सड़क रखरखाव का अभाव",
      navigate: getlightURL(userState,"lack of road maintenance"),
      path: "/assets/images/complainSection/roadProblem/lack of road maintenance.png"
    },
    {
      title: "traffic congestion problem",
      description: "यातायात भीड़ की समस्या",
      navigate: getlightURL(userState,"traffic congestion problem"),
      path: "/assets/images/complainSection/roadProblem/traffic congestion problem.png"
    },
    {
      title: "Problem of poor signage and road signs",
      description: "खराब संकेत और सड़क चिन्हों की समस्या",
      navigate: getlightURL(userState,"Problem of poor signage and road signs"),
      path: "/assets/images/complainSection/roadProblem/Problem of poor signage and road signs.png"
    },
    {
      title: "Problem of adequate lighting on the road",
      description: "सड़क पर पर्याप्त रोशनी की समस्या",
      navigate: getlightURL(userState,"Problem of adequate lighting on the road"),
      path: "/assets/images/complainSection/roadProblem/Problem of adequate lighting on the road.png"
    },
    {
      title: "Lack of infrastructure for pedestrians and cyclists on the road",
      description: "सड़क पर पैदल यात्रियों और साइकिल चालकों के लिए बुनियादी ढांचे का अभाव",
      navigate: getlightURL(userState,"Lack of infrastructure for pedestrians and cyclists on the road"),
      path: "/assets/images/complainSection/roadProblem/Lack of infrastructure for pedestrians and cyclists on the road.png"
    },
    {
      title: "Drainage problem on the road",
      description: "सड़क पर जल निकासी की समस्या",
      navigate: getlightURL(userState,"Drainage problem on the road"),
      path: "/assets/images/complainSection/roadProblem/Drainage problem on the road.png"
    },
    {
      title: "Roadside hazards",
      description: "सड़क किनारे के खतरे",
      navigate: getlightURL(userState,"Roadside hazards"),
      path: "/assets/images/complainSection/roadProblem/Roadside hazards.png"
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

 

    const roadIssue = [
      {
        "Andhra Pradesh": [
            { "problem of potholes in the road": "https://services.india.gov.in/service/detail/register-online-complaints-with-andhra-pradesh-roads-and-buildings-department" },
            { "repair cracks in the road": "https://aprbdrow.ap.gov.in/" },
            { "The trouble with uneven pavement": "https://services.india.gov.in/service/detail/register-online-complaints-with-andhra-pradesh-roads-and-buildings-department" },
            { "lack of road maintenance": "https://pmgsy.nic.in/planning-rural-roads" },
            { "traffic congestion problem": "https://www.thehindu.com/news/national/andhra-pradesh/traffic-jams-a-regular-feature-at-manapuram-railway-gate-in-vizianagaram-district-of-andhra-pradesh/article67695248.ece" },
            { "Problem of poor signage and road signs": "https://www.aptransport.org/html/roadsigns.html" },
            { "Problem of adequate lighting on the road": "https://aprbdrow.ap.gov.in/" },
            { "Lack of infrastructure for pedestrians and cyclists on the road": "https://www.preventionweb.net/publication/climate-change-vulnerability-and-adaptation-experiences-rajasthan-and-andhra-pradesh" },
            { "College affordability and student debt": "https://jnanabhumi.ap.gov.in/" },
            { "Drainage problem on the road": "https://cdma.ap.gov.in/en/complaintregistration" },
        ]
    },

    {
      "Arunachal Pradesh": [
          { "problem of potholes in the road": "https://arunachaltimes.in/index.php/2023/08/02/constant-traffic-jams-along-with-poor-road-condition-angers-naharlagun-residents/" },
          { "repair cracks in the road": "https://arunachalpradesh.gov.in/" },
          { "The trouble with uneven pavement": "https://arunachalpradesh.gov.in/" },
          { "lack of road maintenance": "https://arunachal.mygov.in/group-issue/road-maintenance-and-traffic-management-responsibility/" },
          { "traffic congestion problem": "https://arunachal.mygov.in/group-issue/road-maintenance-and-traffic-management-responsibility/?page=0%2C3" },
          { "Problem of poor signage and road signs": "https://www.nikhilinfra.com/arunachal-pradesh/road-sign-board" },
          { "Problem of adequate lighting on the road": "https://arunachal.mygov.in/group-issue/growing-road-connectivity-remote-locations-arunachal-pradesh/" },
          { "Lack of infrastructure for pedestrians and cyclists on the road": "https://eservice.arunachal.gov.in/" },
          { "College affordability and student debt": "https://arunachaltimes.in/index.php/2019/06/18/no-space-for-pedestrians-in-capital/" },
          { "Drainage problem on the road": "Drainage problem on the road" },
      ]
  },

  {
    "Assam": [
        { "problem of potholes in the road": "https://www.indiatodayne.in/assam/story/assam-government-to-launch-portal-for-village-road-construction-complaints-931346-2024-03-14" },
        { "repair cracks in the road": "https://pwdroads.assam.gov.in/faq" },
        { "The trouble with uneven pavement": "https://assamtenders.gov.in/nicgep/app?page=Disclaimer&service=page" },
        { "lack of road maintenance": "https://pwdroads.assam.gov.in/resource/citizen-charter" },
        { "traffic congestion problem": "https://police.assam.gov.in/portlet-innerpage/traffic-rules-and-info" },
        { "Problem of poor signage and road signs": "https://comtransport.assam.gov.in/frontimpotentdata/traffic-signs-and-warning-signs" },
        { "Problem of adequate lighting on the road": "https://dma.assam.gov.in/schemes/street-light" },
        { "Lack of infrastructure for pedestrians and cyclists on the road": "https://comtransport.assam.gov.in/portlets/be-road-smart" },
        { "College affordability and student debt": "https://assam.gov.in/assam-abhinandan-education-loan-subsidy-scheme" },
        { "Drainage problem on the road": "https://tcp.assam.gov.in/portlets/drainage-master-plan" },
    ]
},

{
  "Bihar": [
      { "problem of potholes in the road": "https://state.bihar.gov.in/rcd/CitizenHome.html" },
      { "repair cracks in the road": "https://state.bihar.gov.in/rcd/CitizenHome.html" },
      { "The trouble with uneven pavement": "https://parimarjan.bihar.gov.in/" },
      { "lack of road maintenance": "https://state.bihar.gov.in/rwdbihar/CitizenHome.html" },
      { "traffic congestion problem": "https://a-pag.org/projects/bihar-alleviating-traffic-congestion-in-patna-2022/" },
      { "Problem of poor signage and road signs": "https://forumias.com/post/detail/Why-are-roads-in-Bihar-in-a-poor-condition-1587978731" },
      { "Problem of adequate lighting on the road": "https://blog.ipleaders.in/street-lights-not-working-locality/" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://state.bihar.gov.in/urban/CitizenHome.html" },
      { "College affordability and student debt": "https://www.bsefcl.bihar.gov.in/#/loginpage" },
      { "Drainage problem on the road": "https://services.india.gov.in/service/detail/register-your-grievances-with-patna-municipal-corporation-1" },
  ]
},
{
  "Chhattisgarh": [
      { "problem of potholes in the road": "https://apps.mgov.gov.in/details;jsessionid=6788E85FA77AE095CC7120FA00427852?appid=1847" },
      { "repair cracks in the road": "https://www.chhattisgarhtenders.com/quicksearch.aspx?st=qs&o=2&si=2&tt=&SerCat=38&SerText=Road+Repair&tenders=Road+Repair+tenders" },
      { "The trouble with uneven pavement": "https://cgstate.gov.in/en/home" },
      { "lack of road maintenance": "https://cgstate.gov.in/en/disclaimer-policies" },
      { "traffic congestion problem": "https://cgpolicehelp.cgstate.gov.in/en/traffics" },
      { "Problem of poor signage and road signs": "https://cgpolicehelp.cgstate.gov.in/en/traffics?page=1" },
      { "Problem of adequate lighting on the road": "https://services.india.gov.in/service/detail/apply-for-changing-street-light-bulbs-in-chhattisgarh" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://cgtransport.gov.in/" },
      { "College affordability and student debt": "http://highereducation.cg.gov.in/" },
      { "Drainage problem on the road": "https://navaraipuratalnagar.com/wps/portal/nrda/city-information/drainage/!ut/p/z1/pZBNC4JAEIZ_jVdntE2km5gfeQiFTNtLaNgqqCvrln8_sZNgFjS3GZ4H3nmBQgq0zZ4Vy2TF26we9ws1rr6_RyREP-ImcDAyLds9nFzNtg1I5oCpeRpGXhienTjUib8F-oePDvnNxw9j4XefzpGFD9aAKeIErGQIgLKa5-8-rTbfmAyoKO6FKIT6EOO5lLLrdwoqOAyDyjhndaHeeKPgklLyXkI6J6Fr4jjFKmwSs38Bwkt5CQ!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/" },
  ]
},

{
  "Goa": [
      { "problem of potholes in the road": "https://apps.mgov.gov.in/details;jsessionid=6788E85FA77AE095CC7120FA00427852?appid=1847" },
      { "repair cracks in the road": "https://www.justdial.com/Goa/Crack-Filler-Repair-Services/nct-11145005" },
      { "The trouble with uneven pavement": "https://goaonline.gov.in/" },
      { "lack of road maintenance": "https://goatransport.gov.in/Default" },
      { "traffic congestion problem": "https://goatransport.gov.in/Default" },
      { "Problem of poor signage and road signs": "https://citizen.goapolice.gov.in/web/guest/traffic-signs" },
      { "Problem of adequate lighting on the road": "https://goatransport.gov.in/Default" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://www.heraldgoa.in/Goa/Bumps-pits-drains-and-dogs-Goa%E2%80%99s-cyclists-pedal-in-peril/210924" },
      { "College affordability and student debt": "https://goaonline.gov.in/Appln/Uil/DeptServices?__DocId=EDC&__ServiceId=EDC01" },
      { "Drainage problem on the road": "https://goawrd.gov.in/faq-page" },
  ]
},

{
  "Gujarat": [
      { "problem of potholes in the road": "https://blog.ipleaders.in/pothole-deaths-india/" },
      { "repair cracks in the road": "https://dir.indiamart.com/ahmedabad/road-repair-services.html" },
      { "The trouble with uneven pavement": "https://gujaratindia.gov.in/interactive/interact-with-gov.htm" },
      { "lack of road maintenance": "https://rnb.gujarat.gov.in/" },
      { "traffic congestion problem": "https://echallanpayment.gujarat.gov.in/sasguj/AccusedChallan/NewAccusedChallan" },
      { "Problem of poor signage and road signs": "https://cot.gujarat.gov.in/traffic-signs.htm" },
      { "Problem of adequate lighting on the road": "https://gercin.org/register-your-complaint-here/" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://www.india.gov.in/topics/infrastructure/roads?page=1" },
      { "College affordability and student debt": "https://www.buddy4study.com/article/gujarat-scholarship" },
      { "Drainage problem on the road": "https://enagar.gujarat.gov.in/DIGIGOV/" },
  ]
},

{
  "Haryana": [
      { "problem of potholes in the road": "https://morth.nic.in/public-grievances" },
      { "repair cracks in the road": "https://abhipedia.abhimanu.com/Res_page.aspx?ID=2845" },
      { "The trouble with uneven pavement": "https://haryanabpas.gov.in/BPASP/" },
      { "lack of road maintenance": "https://status.saralharyana.nic.in/" },
      { "traffic congestion problem": "https://gurgaon.haryanapolice.gov.in/accidents-and-first-aidy" },
      { "Problem of poor signage and road signs": "https://kaithal.haryanapolice.gov.in/traffic-signs-markings_htm" },
      { "Problem of adequate lighting on the road": "https://ulbharyana.gov.in/10955" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://tcpharyana.gov.in/" },
      { "College affordability and student debt": "https://erp.highereduhry.ac.in/" },
      { "Drainage problem on the road": "https://services.india.gov.in/service/detail/haryana-sewerage-blocked--over-flow-of-manholes-1" },
  ]
},

{
  "Himachal Pradesh": [
      { "problem of potholes in the road": "https://hppwd.hp.gov.in/roads" },
      { "repair cracks in the road": "https://hppwd.hp.gov.in/website-monitoring-plan" },
      { "The trouble with uneven pavement": "https://hppwd.hp.gov.in/" },
      { "lack of road maintenance": "https://indianexpress.com/article/india/manali-himachal-pradesh-high-footfall-traffic-christmas-9082285/" },
      { "traffic congestion problem": "https://himachal.nic.in/index1.php?lang=1&dpt_id=3&level=0&lid=3734&linkid=1157" },
      { "Problem of poor signage and road signs": "https://www.shaalaa.com/question-bank-solutions/the-street-lights-of-your-locality-are-not-functioning-properly-leaving-stretches-of-dark-blind-spots-at-night-due-to-this-problem-chain-and-mobile-snatching-incidents-have-increasedwrite-a-letter-writing_372961" },
      { "Problem of adequate lighting on the road": "https://himachal.nic.in/index1.php?lang=1&dpt_id=3&level=1&sublinkid=1213&lid=1484" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://education.hp.gov.in/" },
      { "College affordability and student debt": "https://hppwd.hp.gov.in/roads" },
      { "Drainage problem on the road": "https://hppwd.hp.gov.in/roads" },
  ]
},

{
  "Jharkhand": [
      { "problem of potholes in the road": "https://services.india.gov.in/service/detail/file-online-grievance-to-jharkhand-government" },
      { "repair cracks in the road": "https://www.jharkhand.gov.in/rcd" },
      { "The trouble with uneven pavement": "https://jharkhandtenders.gov.in/nicgep/app?page=Disclaimer&service=page" },
      { "lack of road maintenance": "https://rcdconreg.jharkhand.gov.in/Terms_Conditions.aspx" },
      { "traffic congestion problem": "https://jhpolice.gov.in/road-safety/common-causes-of-road-accidents" },
      { "Problem of poor signage and road signs": "https://jhpolice.gov.in/road-safety/about-road-signs" },
      { "Problem of adequate lighting on the road": "https://ranchi.nic.in/road-safety/" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://jhpolice.gov.in/road-safety/safety-tips-pedestrian" },
      { "College affordability and student debt": "https://jharkhanduniversities.nic.in/home" },
      { "Drainage problem on the road": "https://services.india.gov.in/service/detail/file-online-grievance-to-jharkhand-government" },
  ]
},

{
  "Karnataka": [
      { "problem of potholes in the road": "https://ksrsa.karnataka.gov.in/english" },
      { "repair cracks in the road": "https://kpwd.karnataka.gov.in/english" },
      { "The trouble with uneven pavement": "https://www.karnatakaone.gov.in/Info/Public/CommonError" },
      { "lack of road maintenance": "https://kpwd.karnataka.gov.in/page/Projects/Roads/en" },
      { "traffic congestion problem": "https://dult.karnataka.gov.in/86/traffic-management/en" },
      { "Problem of poor signage and road signs": "https://btp.gov.in/TrafficSigns.aspx" },
      { "Problem of adequate lighting on the road": "https://www.deccanherald.com/india/karnataka/bengaluru/safety-concerns-come-light-2236441" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://kpwd.karnataka.gov.in/page/Road+Safety/en" },
      { "College affordability and student debt": "https://kmdc.karnataka.gov.in/4/arivu-education-loan-scheme/en" },
      { "Drainage problem on the road": "https://kuwsdb.karnataka.gov.in/1/contact-us/en" },
  ]
},

{
  "Kerala": [
      { "problem of potholes in the road": "https://keralakaumudi.com/en/news/news.php?id=888747&u=app-for-potholes" },
      { "repair cracks in the road": "https://rowservices.kerala.gov.in/" },
      { "The trouble with uneven pavement": "https://www.thehindu.com/news/national/kerala/kerala-driving-aspirants-stuck-in-neutral/article68183084.ece" },
      { "lack of road maintenance": "https://rebuild.kerala.gov.in/roads-bridges/" },
      { "traffic congestion problem": "https://www.researchgate.net/publication/312262708_Solving_Traffic_Problems_in_the_State_of_Kerala_India_Forecasting_Regression_and_Simulation_Models" },
      { "Problem of poor signage and road signs": "https://mvd.kerala.gov.in/en/trafficsigns" },
      { "Problem of adequate lighting on the road": "https://www.reddit.com/r/Kerala/comments/rq8bg4/who_do_i_appeal_to_get_streetlights_installed_and/?rdt=44764" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://spb.kerala.gov.in/economic-review/ER2016/chapter05_03.php" },
      { "College affordability and student debt": "https://elrs.kerala.gov.in/" },
      { "Drainage problem on the road": "https://kwa.kerala.gov.in/en/consumer-grievances/" },
  ]
},

{
  "Madhya Pradesh": [
      { "problem of potholes in the road": "https://mprdc.gov.in/" },
      { "repair cracks in the road": "https://mptenders.gov.in/nicgep/app?component=view&page=WebTenderStatusLists&service=direct&sp=S8ShRmDo3iX6KIO09Zc%2B1wQ%3D%3D" },
      { "The trouble with uneven pavement": "https://mpbhulekh.gov.in/mpbhulekh.do" },
      { "lack of road maintenance": "https://prd.mp.gov.in/" },
      { "traffic congestion problem": "https://morena.mppolice.gov.in/how-mp-police-is-revolutionizing-traffic-management/" },
      { "Problem of poor signage and road signs": "https://www.mdpi.com/2076-3417/12/19/10163" },
      { "Problem of adequate lighting on the road": "https://www.mpenagarpalika.gov.in/irj/portal/anonymous/Grievance/qlNewGrievance" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://ul.org/news/making-roads-safer-pedestrians-and-cyclists-bhopal-india" },
      { "College affordability and student debt": "https://epravesh.mponline.gov.in/" },
      { "Drainage problem on the road": "http://mpwrd.gov.in/water-quality/" },
  ]
},

{
  "Maharashtra": [
      { "problem of potholes in the road": "https://msrdc.in/1256/Complaint" },
      { "repair cracks in the road": "https://msrdc.in/1319/complaint-portal?format=print" },
      { "The trouble with uneven pavement": "https://grievances.maharashtra.gov.in/en" },
      { "lack of road maintenance": "https://www.pmc.gov.in/en/road-maintenance-van" },
      { "traffic congestion problem": "https://highwaypolice.maharashtra.gov.in/en/" },
      { "Problem of poor signage and road signs": "https://highwaypolice.maharashtra.gov.in/en/road-signs-2/" },
      { "Problem of adequate lighting on the road": "https://www.pmc.gov.in/en/road-illumination" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://www.pmc.gov.in/en/pedestrian-policy" },
      { "College affordability and student debt": "https://mahadbt.maharashtra.gov.in/" },
      { "Drainage problem on the road": "https://www.pmc.gov.in/en/drainage" },
  ]
},

{
  "Manipur": [
      { "problem of potholes in the road": "https://www.imphaltimes.com/articles/villagers-decry-over-pathetic-road-condition/" },
      { "repair cracks in the road": "https://manipurtenders.gov.in/nicgep/app" },
      { "The trouble with uneven pavement": "https://manipurtenders.gov.in/nicgep/app" },
      { "lack of road maintenance": "https://rowmanipur.mn.gov.in/" },
      { "traffic congestion problem": "https://www.imphaltimes.com/editorial/on-step-taken-to-ease-traffic-congestion-in-imphal-but-will-it-be-the-solution/" },
      { "Problem of poor signage and road signs": "https://e-pao.net/epPageExtractor.asp?src=education.Know_Your_Traffic_Signs.html.." },
      { "Problem of adequate lighting on the road": "https://jerc.mizoram.gov.in/page/4th-sac-manipur" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://rowmanipur.mn.gov.in/" },
      { "College affordability and student debt": "http://www.iiitmanipur.ac.in/pages/center/scholarships/scholarships.php" },
      { "Drainage problem on the road": "https://pwdmanipur.mn.gov.in/posts/36" },
  ]
},

{
  "Meghalaya": [
      { "problem of potholes in the road": "https://theshillongtimes.com/2024/01/20/potholes-in-shillong-what-does-it-reveal-about-governance-in-meghalaya/" },
      { "repair cracks in the road": "https://meghalaya.gov.in/press/content/46663" },
      { "The trouble with uneven pavement": "https://meghalaya.gov.in/dept/38" },
      { "lack of road maintenance": "https://mbda.gov.in/roads" },
      { "traffic congestion problem": "https://ijtte.com/study/414/IMPACT_OF_INSTITUTIONAL_DISTRIBUTION_ON_TRAFFIC_CONGESTION__A_STATISTICAL_STUDY_OF_TRAFFIC_CONGESTION_IN_SHILLONG_CITY.html" },
      { "Problem of poor signage and road signs": "https://megtransport.gov.in/Road_Signs.html" },
      { "Problem of adequate lighting on the road": "https://megpolice.gov.in/road-safety-initiative" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://meghalaya.gov.in/dept/38" },
      { "College affordability and student debt": "https://www.primemeghalaya.com/cm-elevate/" },
      { "Drainage problem on the road": "https://services.india.gov.in/service/detail/sewerage-blocked--over-flow-of-manholes" },
  ]
},

{
  " Mizoram ": [
      { "problem of potholes in the road": "https://pwd.mizoram.gov.in/" },
      { "repair cracks in the road": "https://www.tenderdetail.com/State-tenders/mizoram-tenders/repair-road-tenders" },
      { "The trouble with uneven pavement": "https://pwd.mizoram.gov.in/" },
      { "lack of road maintenance": "https://www.india.gov.in/road-development-policy-mizoram?page=5" },
      { "traffic congestion problem": "https://dipr.mizoram.gov.in/post/mizoram-government-introduces-new-scheme-to-solve-traffic-jam-woes" },
      { "Problem of poor signage and road signs": "https://transport.mizoram.gov.in/page/road-signs" },
      { "Problem of adequate lighting on the road": "https://transport.mizoram.gov.in/post/guideline-for-issue-of-notification-for-vip-light" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://dipr.mizoram.gov.in/post/chief-minister-held-road-infrastructure-development-board-policy-briefing" },
      { "College affordability and student debt": "https://www.buddy4study.com/article/mizoram-scholarship" },
      { "Drainage problem on the road": "https://irrigation.mizoram.gov.in/page/programmes-schemes" },
  ]
},

{
  "Nagaland": [
      { "problem of potholes in the road": "https://nagalandpost.com/index.php/2022/07/12/roads-in-dimapur-city-deteriorating-due-to-lack-of-repair-and-maintenance/" },
      { "repair cracks in the road": "https://npwd.nagaland.gov.in/?page_id=253" },
      { "The trouble with uneven pavement": "https://npwd.nagaland.gov.in/" },
      { "lack of road maintenance": "https://ipr.nagaland.gov.in/kohima-regional-transport-authority-deliberates-traffic-congestion" },
      { "traffic congestion problem": "https://mvdnagaland.in/road-signs/" },
      { "Problem of poor signage and road signs": "https://idan.nagaland.gov.in/csrProjects/300" },
      { "Problem of adequate lighting on the road": "https://morungexpress.com/lack-infrastructure-state-nagaland" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://example.com/haryana-water-scarcity" },
      { "College affordability and student debt": "https://scholarship.nagaland.gov.in/" },
      { "Drainage problem on the road": "https://nlsic.nagaland.gov.in/index.php/2020/02/26/irrigation-and-flood-control/" },
  ]
},

{
  "Odisha": [
      { "problem of potholes in the road": "https://odisha.gov.in/" },
      { "repair cracks in the road": "https://spdp.odisha.gov.in/#/spdpwebsite/spdphome/homeCard" },
      { "The trouble with uneven pavement": "https://odisha.gov.in/" },
      { "lack of road maintenance": "https://rd.odisha.gov.in/" },
      { "traffic congestion problem": "https://odishatransport.gov.in/" },
      { "Problem of poor signage and road signs": "https://dowr.odisha.gov.in/website-policy" },
      { "Problem of adequate lighting on the road": "https://odishapolice.gov.in/?q=node/179" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://odishatransport.gov.in/content/About-Road-Safety/1" },
      { "College affordability and student debt": "https://dhe.odisha.gov.in/schemes-and-scholarship/online-application-module-for-scholarship-and-loan/kalinga-sikhya-sathi-yojna" },
      { "Drainage problem on the road": "https://janasunani.odisha.gov.in/eAbhijogdashboard/allPendingwithOfficerComplaints/1?page=4634" },
  ]
},

{
  "Punjab": [
      { "problem of potholes in the road": "https://www.pwdpunjab.gov.in/(S(f3bfwo45jjt4ra55vgu0llfm))/OtherDistrictRoads?languageid=1&pageid=1397&linkid=200" },
      { "repair cracks in the road": "https://ppsaanjh.in/" },
      { "The trouble with uneven pavement": "https://connect.punjab.gov.in/" },
      { "lack of road maintenance": "https://connect.punjab.gov.in/" },
      { "traffic congestion problem": "https://www.punjabpolice.gov.in/eGovernance.aspx" },
      { "Problem of poor signage and road signs": "https://connect.punjab.gov.in/service/grievance/GR1" },
      { "Problem of adequate lighting on the road": "https://www.tribuneindia.com/news/archive/jalandhar/lack-of-lights-on-busy-roads-troubles-commuters-764744" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "http://www.roadsafetyngos.org/events/advocating-on-behalf-of-pedestrians-in-punjab-india/" },
      { "College affordability and student debt": "https://connect.punjab.gov.in/" },
      { "Drainage problem on the road": "https://connect.punjab.gov.in/" },
  ]
},

{
  "Rajasthan": [
      { "problem of potholes in the road": "http://sikkim-roadsandbridges.gov.in/index.php/road-network" },
      { "repair cracks in the road": "http://sikkim-roadsandbridges.gov.in/" },
      { "The trouble with uneven pavement": "https://sikkim.gov.in/" },
      { "lack of road maintenance": "https://sikkim.gov.in/departments/transport-department/road-safetyy" },
      { "traffic congestion problem": "https://www.sikkim.gov.in/media/news-announcement/news-info?name=Co-ord+meet+regarding+traffic+situation+in+the+State+conducted+in+the+presence+of+Hon%E2%80%99ble+CM" },
      { "Problem of poor signage and road signs": "https://www.sikkim.gov.in/media/news-announcement/news-info?name=Co-ord+meet+regarding+traffic+situation+in+the+State+conducted+in+the+presence+of+Hon%E2%80%99ble+CM" },
      { "Problem of adequate lighting on the road": "http://sikkim-roadsandbridges.gov.in/" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "http://sikkim-roadsandbridges.gov.in/" },
      { "College affordability and student debt": "http://sikkim-roadsandbridges.gov.in/" },
      { "Drainage problem on the road": "http://sikkim-roadsandbridges.gov.in/index.php/road-network" },
  ]
},

{
  "Sikkim": [
    { "lack of road maintenance": "https://sikkim.gov.in/departments/transport-department/road-safetyy" },
    { "traffic congestion problem": "https://www.sikkim.gov.in/media/news-announcement/news-info?name=Co-ord+meet+regarding+traffic+situation+in+the+State+conducted+in+the+presence+of+Hon%E2%80%99ble+CM" },
    { "Problem of poor signage and road signs": "https://www.sikkim.gov.in/media/news-announcement/news-info?name=Co-ord+meet+regarding+traffic+situation+in+the+State+conducted+in+the+presence+of+Hon%E2%80%99ble+CM" },
    { "Problem of adequate lighting on the road": "http://sikkim-roadsandbridges.gov.in/" },
    { "Lack of infrastructure for pedestrians and cyclists on the road": "http://sikkim-roadsandbridges.gov.in/" },
    { "College affordability and student debt": "http://sikkim-roadsandbridges.gov.in/" },
    { "Drainage problem on the road": "http://sikkim-roadsandbridges.gov.in/index.php/road-network" },
  ]
},

{
  "Tamil Nadu": [
      { "problem of potholes in the road": "https://www.tn.gov/tdot/maintenance/potholes.html" },
      { "repair cracks in the road": "https://cmhelpline.tnega.org/portal/en/kb/articles/tamil-nadu-cm-helpline-faqs" },
      { "The trouble with uneven pavement": "https://www.tn.gov/tdot/maintenance/potholes.html" },
      { "lack of road maintenance": "https://cmhelpline.tnega.org/portal/en/kb/articles/tamil-nadu-cm-helpline-faqs" },
      { "traffic congestion problem": "https://www.tn.gov/tdot/maintenance/potholes.html" },
      { "Problem of poor signage and road signs": "https://cmhelpline.tnega.org/portal/en/kb/articles/tamil-nadu-cm-helpline-faqs" },
      { "Problem of adequate lighting on the road": "https://www.tn.gov/tdot/maintenance/potholes.html" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://cmhelpline.tnega.org/portal/en/kb/articles/tamil-nadu-cm-helpline-faqs" },
      { "College affordability and student debt": "https://www.tn.gov/tdot/maintenance/potholes.html" },
      { "Drainage problem on the road": "https://cmhelpline.tnega.org/portal/en/kb/articles/tamil-nadu-cm-helpline-faqs" },
  ]
},

{
  "Telangana": [
      { "problem of potholes in the road": "https://roadbuild.telangana.gov.in/home.do;jsessionid=B6F6B769001E9DEB987B6EED3E41F39D" },
      { "repair cracks in the road": "https://www.telangana.gov.in/departments/roads-and-buildings/" },
      { "The trouble with uneven pavement": "https://roadbuild.telangana.gov.in/home.do;jsessionid=B6F6B769001E9DEB987B6EED3E41F39D" },
      { "lack of road maintenance": "https://www.telangana.gov.in/departments/roads-and-buildings/" },
      { "traffic congestion problem": "https://roadbuild.telangana.gov.in/home.do;jsessionid=B6F6B769001E9DEB987B6EED3E41F39D" },
      { "Problem of poor signage and road signs": "https://www.telangana.gov.in/departments/roads-and-buildings/" },
      { "Problem of adequate lighting on the road": "https://roadbuild.telangana.gov.in/home.do;jsessionid=B6F6B769001E9DEB987B6EED3E41F39D" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://www.telangana.gov.in/departments/roads-and-buildings/" },
      { "College affordability and student debt": "https://roadbuild.telangana.gov.in/home.do;jsessionid=B6F6B769001E9DEB987B6EED3E41F39D" },
      { "Drainage problem on the road": "https://www.telangana.gov.in/departments/roads-and-buildings/" },
  ]
},



{
  "Tripura": [
      { "problem of potholes in the road": "https://www.tripurastarnews.com/road-woes-created-terrible-wrath-amidst-locals/" },
      { "repair cracks in the road": "https://tripura.gov.in/tender-regarding-ordinary-repair-various-road-under-pwd" },
      { "The trouble with uneven pavement": "https://www.tripurastarnews.com/road-woes-created-terrible-wrath-amidst-locals/" },
      { "lack of road maintenance": "https://tripura.gov.in/tender-regarding-ordinary-repair-various-road-under-pwd" },
      { "traffic congestion problem": "https://www.tripurastarnews.com/road-woes-created-terrible-wrath-amidst-locals/" },
      { "Problem of poor signage and road signs": "https://tripura.gov.in/tender-regarding-ordinary-repair-various-road-under-pwd" },
      { "Problem of adequate lighting on the road": "https://www.tripurastarnews.com/road-woes-created-terrible-wrath-amidst-locals/" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://tripura.gov.in/tender-regarding-ordinary-repair-various-road-under-pwd" },
      { "College affordability and student debt": "https://www.tripurastarnews.com/road-woes-created-terrible-wrath-amidst-locals/" },
      { "Drainage problem on the road": "https://tripura.gov.in/tender-regarding-ordinary-repair-various-road-under-pwd" },
  ]
},

{
  " Uttar Pradesh": [
      { "problem of potholes in the road": "hhttps://uppwd.gov.in/" },
      { "repair cracks in the road": "https://www.tenderdetail.com/State-tenders/uttar-pradesh-tenders/crack-sealing-tenders" },
      { "The trouble with uneven pavement": "https://up.gov.in/en" },
      { "lack of road maintenance": "https://www.tenderdetail.com/State-tenders/uttar-pradesh-tenders/crack-sealing-tenders" },
      { "traffic congestion problem": "https://up.gov.in/en" },
      { "Problem of poor signage and road signs": "https://www.tenderdetail.com/State-tenders/uttar-pradesh-tenders/crack-sealing-tenders" },
      { "Problem of adequate lighting on the road": "https://up.gov.in/en" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://www.tenderdetail.com/State-tenders/uttar-pradesh-tenders/crack-sealing-tenders" },
      { "College affordability and student debt": "https://up.gov.in/en" },
      { "Drainage problem on the road": "https://uppwd.gov.in/" },
  ]
},

{
  " Uttarakhand": [
      { "problem of potholes in the road": "https://cmhelpline.uk.gov.in/" },
      { "repair cracks in the road": "https://pwd.uk.gov.in/" },
      { "The trouble with uneven pavement": "https://uk.gov.in/" },
      { "lack of road maintenance": "https://pwd.uk.gov.in/" },
      { "traffic congestion problem": "https://cmhelpline.uk.gov.in/" },
      { "Problem of poor signage and road signs": "https://hindi.indiawaterportal.org/articles/water-crisis-uttarakhand" },
      { "Problem of adequate lighting on the road": "https://cmhelpline.uk.gov.in/" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "https://pwd.uk.gov.in/" },
      { "College affordability and student debt": "https://pwd.uk.gov.in/" },
      { "Drainage problem on the road": "https://ujs.uk.gov.in/" },
  ]
},

{
  " West Bengal": [
      { "problem of potholes in the road": "https://wbpwd.gov.in/home/contact_us" },
      { "repair cracks in the road": "https://wbpwd.gov.in/home/contact_us" },
      { "The trouble with uneven pavement": "https://www.wbwridd.gov.in/swid/" },
      { "lack of road maintenance": "https://obpsudma.wb.gov.in/" },
      { "traffic congestion problem": "https://obpsudma.wb.gov.in/" },
      { "Problem of poor signage and road signs": "https://www.wbwridd.gov.in/wuas" },
      { "Problem of adequate lighting on the road": "https://obpsudma.wb.gov.in/" },
      { "Lack of infrastructure for pedestrians and cyclists on the road": "http://www.environmentwb.gov.in/Introduction.php" },
      { "College affordability and student debt": "https://obpsudma.wb.gov.in/" },
      { "Drainage problem on the road": "https://wbpwd.gov.in/home/contact_us" },
  ]
},

      
]


  // const stateData = roadIssue.find(item => item[issue]);
  // const url = stateData[issue]?.find(stateUrls => stateUrls[stateName] ? stateUrls[stateName] : {});

  // dummy data url return
  // if (url[stateName]) {
  //     return url[stateName];
  // }

  return "https://transport.rajasthan.gov.in/content/transportportal/en.html";
}