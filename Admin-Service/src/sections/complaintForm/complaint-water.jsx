import React,{useState,useCallback} from 'react'

import { Box } from '@mui/system';
import {Container } from '@mui/material';

import { useAuthContext } from 'src/auth/hooks';

import SvgColor from 'src/components/svg-color';

import ComplaintCard from './complaint-card';
import ComplaintTabs from './complaint-tabs';

 

const waterIssuesUrls = [
  { title: "Water scarcity", navigate: "https://www.circleofblue.org/indiawater/" },
  { title: "Water pollution", navigate: "https://environment.delhi.gov.in/environment/water-pollution" },
  { title: "Groundwater depletion", navigate: "https://www.nature.com/articles/s41467-022-31122-9" },
  { title: "Flooding", navigate: "https://ndma.gov.in/Natural-Hazards/Floods" },
  { title: "Drought", navigate: "https://agriwelfare.gov.in/en/Drought" },
  { title: "Water conflicts", navigate: "https://www.expresscomputer.in/guest-blogs/how-technology-can-help-india-overcome-its-water-crisis/110155/" },
  { title: "Infrastructure deficiencies", navigate: "https://www.orfonline.org/expert-speak/indian-infrastructure" },
  { title: "Climate change impacts", navigate: "https://moef.gov.in/moef/service/environment/climate-change-2/index.html" },
  { title: "Access to safe drinking water and sanitation", navigate: "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1985135" },
  { title: "Need for new water pipeline", navigate: "https://www.thehindu.com/news/national/the-missing-link-in-the-jal-jeevan-scheme-water/article67311157.ece" }
];

const central = [
  {
      title: "Water scarcity",
      description: "पानी की कमी",
      navigate: "https://www.circleofblue.org/indiawater/",
      path: "/assets/images/complainSection/Water scarcity.png"
  },
  {
      title: "Water pollution",
      description: "जल प्रदूषण",
      navigate: "https://environment.delhi.gov.in/environment/water-pollution",
      path: "/assets/images/complainSection/Water pollution.png"
  },
  {
      title: "Groundwater depletion",
      description: "भूजल की कमी",
      navigate: "https://www.nature.com/articles/s41467-022-31122-9",
      path: "/assets/images/complainSection/Groundwater depletion.png"
  },
  {
      title: "Flooding",
      description: "बाढ़",
      navigate: "https://ndma.gov.in/Natural-Hazards/Floods",
      path: "/assets/images/complainSection/Flooding.png"
  },
  {
      title: "Drought",
      description: "सूखा",
      navigate: "https://agriwelfare.gov.in/en/Drought",
      path: "/assets/images/complainSection/Drought.png"
  },
  {
      title: "Water conflicts",
      description: "जल संघर्ष",
      navigate: "https://www.expresscomputer.in/guest-blogs/how-technology-can-help-india-overcome-its-water-crisis/110155/",
      path: "/assets/images/complainSection/Water conflicts.png"
  },
  {
      title: "Infrastructure deficiencies",
      description: "बुनियादी ढांचे की कमी",
      navigate: "https://www.orfonline.org/expert-speak/indian-infrastructure",
      path: "/assets/images/complainSection/Infrastructure deficiencies.png"
  },
  {
      title: "Climate change impacts",
      description: "जलवायु परिवर्तन का प्रभाव",
      navigate: "https://moef.gov.in/moef/service/environment/climate-change-2/index.html",
      path: "/assets/images/complainSection/Climate change impacts.png"
  },
  {
      title: "Access to safe drinking water and sanitation",
      description: "सुरक्षित पेयजल और स्वच्छता तक पहुंच",
      navigate: "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1985135",
      path: "/assets/images/complainSection/Access to safe drinking water and sanitation.png"
  },
  {
      title: "Need for new water pipeline",
      description: "नई जल पाइपलाइन की आवश्यकता",
      navigate: "https://www.thehindu.com/news/national/the-missing-link-in-the-jal-jeevan-scheme-water/article67311157.ece",
      path: "/assets/images/complainSection/Need for new water pipeline.png"
  }
];

// Updating navigate URLs in the central array with the URLs from waterIssues array based on titles
central.forEach(issue => {
  const correspondingIssue = waterIssuesUrls.find(waterIssue => waterIssue.title === issue.title);
  if (correspondingIssue) {
      issue.navigate = correspondingIssue.navigate;
  }
});



export default function ComplaintWater() {

  const { user:{UserAddressesses} } = useAuthContext();
  const {userState} = UserAddressesses && UserAddressesses[0];

  const state = [

    {
      title: "Climate change impacts",
      description: "जलवायु परिवर्तन का प्रभाव",
      navigate:getWaterURL(userState,"Climate change impacts"),
      path: "/assets/images/complainSection/Climate change impacts.png"
    }, 
    {
      title: "Access to safe drinking water and sanitation",
      description: "सुरक्षित पेयजल और स्वच्छता तक पहुंच",
      navigate:getWaterURL(userState,"Access to safe drinking water and sanitation"),
      path: "/assets/images/complainSection/Access to safe drinking water and sanitation.png"
    }, 
    {
      title: "Need for new water pipeline",
      description: "नई जल पाइपलाइन की आवश्यकता",
      navigate:getWaterURL(userState,"Need for new water pipeline"),
      path: "/assets/images/complainSection/Need for new water pipeline.png"
    },
    {
      title: "Drought",
      description: "सूखा",
      navigate:getWaterURL(userState,"Drought"),
      path: "/assets/images/complainSection/Drought.png"
    }, 
    {
      title: "Water conflicts",
      description: "जल संघर्ष",
      navigate:getWaterURL(userState,"Water conflicts"),
      path: "/assets/images/complainSection/Water conflicts.png"
    }, 
    {
      title: "Groundwater depletion",
      description: "भूजल की कमी",
      navigate:getWaterURL(userState,"Groundwater depletion"),
      path: "/assets/images/complainSection/Groundwater depletion.png"
    }, 
    {
      title: "Flooding",
      description: "बाढ़",
      navigate:getWaterURL(userState,"Flooding"),
      path: "/assets/images/complainSection/Flooding.png"
    }, 
    {
      title: "Infrastructure deficiencies",
      description: "बुनियादी ढांचे की कमी",
      navigate:getWaterURL(userState,"Infrastructure deficiencies"),
      path: "/assets/images/complainSection/Infrastructure deficiencies.png"
    }, 
    {
      title: "Water scarcity",
      description: "पानी की कमी",
      // navigate:getWaterURL(userState,"Water scarcity"),
      navigate: getWaterURL(userState,"Water scarcity"),
      path: "/assets/images/complainSection/Water scarcity.png"
    },
    {
      title: "Water pollution",
      description: "जल प्रदूषण",
      navigate: getWaterURL(userState,"Water scarcity"),
      path: "/assets/images/complainSection/Water pollution.png"
    },  
    {
      title: "Groundwater depletion",
      description: "भूजल की कमी",
      navigate:getWaterURL(userState,"Groundwater depletion"),
      path: "/assets/images/complainSection/Groundwater depletion.png"
    }, 
    {
      title: "Flooding",
      description: "बाढ़",
      navigate:getWaterURL(userState,"Flooding"),
      path: "/assets/images/complainSection/Flooding.png"
    }, 
   
  
  ];

  const [currentTab, setCurrentTab] = useState('central');
  
  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);


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


 function getWaterURL(stateName,issue){

  const waterIssues = [
      {
          "Water scarcity": [
              { "Andhra Pradesh": "https://naturalfarming.niti.gov.in/andhra-pradesh/" },
              { "Arunachal Pradesh": "https://thinkhazard.org/en/report/70072-india-arunachal-pradesh/DG" },
              { "Assam": "https://waterresources.assam.gov.in/" },
              { "Bihar": "https://wrd.bihar.gov.in/" },
              { "Chhattisgarh": "https://services.india.gov.in/service/detail/chhattisgarh-application-for-water-tap-connection-1" },
              { "Goa": "https://goawrd.gov.in/" },
              { "Gujarat": "https://www.gidb.org/water-supply-scenario-in-gujarat" },
              { "Haryana": "https://services.india.gov.in/service/detail/haryanarestoration-of-water-supply-due-to-major-problems-ie-shortage-of-raw-waterburning-of-transformer-other-major-electric-fault-in-ltht-lines-etc-1" },
              { "Himachal Pradesh": "https://thinkhazard.org/en/report/1493-india-himachal-pradesh/DG" },
              { "Jharkhand": "https://thinkhazard.org/en/report/70078-india-jharkhand/DG" },
              { "Karnataka": "https://www.worldbank.org/en/country/india/brief/world-water-day-2022-how-india-is-addressing-its-water-needs" },
              { "Kerala": "https://kwa.kerala.gov.in/en/services-dashboard/" },
              { "Madhya Pradesh": "https://thinkhazard.org/en/report/70079-india-madhya-pradesh/DG" },
              { "Maharashtra": "https://www.downtoearth.org.in/news/water/scarcity-to-abundance-how-a-maharashtra-village-came-together-to-address-water-crisis-81611" },
              { "Manipur": "https://www.ifp.co.in/opinion/why-water-scarcity-in-manipur#google_vignette" },
              { "Meghalaya": "https://www.downtoearth.org.in/news/water/meghalaya-how-the-abode-of-clouds-ran-out-of-water-89932" },
              { "Mizoram": "https://thinkhazard.org/en/report/1502-india-mizoram/DG" },
              { "Nagaland": "https://nagalandpage.com/water-conservation/" },
              { "Odisha": "https://www.downtoearth.org.in/blog/climate-change/catch-the-rain-fix-water-crisis-how-odisha-leads-by-example-78583" },
              { "Punjab": "https://pwrmdc.punjab.gov.in/" },
              { "Rajasthan": "https://thinkhazard.org/en/report/1506-india-rajasthan/DG" },
              { "Sikkim": "https://sikkim.gov.in/departments/water-resource-river-development-department" },
              { "Tamil Nadu": "http://tnenvis.nic.in/Database/TN-ENVIS_791.aspx" },
              { "Telangana": "https://www.tgnns.com/telangana/telanganas-successful-summer-action-plan-and-appeal-for-more-water-from-krishna-river/2024/04/10/" },
              { "Tripura": "https://tjb.tripura.gov.in/" },
              { "Uttar Pradesh": "http://upgwdonline.in/" },
              { "Uttarakhand": "https://ujs.uk.gov.in/" },
              { "West Bengal": "https://www.wbphed.gov.in/en/pages/disaster-management" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-water-scarcity" },
              // { "Chandigarh": "https://example.com/chandigarh-water-scarcity" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-water-scarcity" },
              // { "Delhi": "https://example.com/delhi-water-scarcity" },
              // { "Lakshadweep": "https://example.com/lakshadweep-water-scarcity" },
              // { "Puducherry": "https://example.com/puducherry-water-scarcity" }
          ]
      },
      {
          "Water pollution": [
              { "Andhra Pradesh": "https://pcb.ap.gov.in/UI/Home.aspx" },
              { "Arunachal Pradesh": "https://arocmms.nic.in/OCMMS/" },
              { "Assam": "https://pcb.assam.gov.in/" },
              { "Bihar": "https://bhocmms.nic.in/" },
              { "Chhattisgarh": "https://cpcb.nic.in/other-useful-information/" },
              { "Goa": "https://www.goa.gov.in/department/goa-state-pollution-control-board/" },
              { "Gujarat": "https://gpcb.gujarat.gov.in/" },
              { "Haryana": "https://www.hspcb.org.in/" },
              { "Himachal Pradesh": "https://hppcb.nic.in/" },
              { "Jharkhand": "https://www.jspcb.nic.in/" },
              { "Karnataka": "https://kspcb.karnataka.gov.in/" },
              { "Kerala": "https://kspcb.kerala.gov.in/activities/waste-management/water-pollution" },
              { "Madhya Pradesh": "https://mppcb.mp.gov.in/" },
              { "Maharashtra": "https://mpcb.gov.in/node" },
              { "Manipur": "http://manipcb.nic.in/" },
              { "Meghalaya": "https://megspcb.gov.in/" },
              { "Mizoram": "https://eodbmizoram.gov.in/mizoram-pollution-control-board/online-services" },
              { "Nagaland": "https://npcb.nagaland.gov.in/" },
              { "Odisha": "https://odocmms.nic.in/OCMMS/" },
              { "Punjab": "https://pbocmms.nic.in/OCMMS-0.1/" },
              { "Rajasthan": "https://environment.rajasthan.gov.in/content/environment/en/rajasthan-state-pollution-control-board.html" },
              { "Sikkim": "https://spcb.sikkim.gov.in/Water.html" },
              { "Tamil Nadu": "https://tnpcb.gov.in/" },
              { "Telangana": "https://tspcb.cgg.gov.in/default.aspx" },
              { "Tripura": "https://tspcb.tripura.gov.in/" },
              { "Uttar Pradesh": "http://www.uppcb.com/" },
              { "Uttarakhand": "https://ueppcb.uk.gov.in/" },
              { "West Bengal": "https://www.wbpcb.gov.in/" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-water-pollution" },
              // { "Chandigarh": "https://example.com/chandigarh-water-pollution" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-water-pollution" },
              // { "Delhi": "https://example.com/delhi-water-pollution" },
              // { "Lakshadweep": "https://example.com/lakshadweep-water-pollution" },
              // { "Puducherry": "https://example.com/puducherry-water-pollution" }
          ]
      },
      {
          "Groundwater depletion": [
              { "Andhra Pradesh": "https://www.fao.org/land-water/overview/projects/previous-projects/andhra-pradesh-farmer-managed-groundwater-systems/en/" },
              { "Arunachal Pradesh": "https://wrdarunachal.nic.in/" },
              { "Assam": "https://dgm.assam.gov.in/portlets/status-of-ground-water" },
              { "Bihar": "https://nhrc.nic.in/media/press-release/nhrc-takes-serious-view-groundwater-contamination-31-38-districts-bihar-issues#:~:text=The%20National%20Human%20Rights%20Commission,Arsenic%2C%20Fluoride%20and%20excessive%20Iron" },
              { "Chhattisgarh": "https://cgwrd.in/docs-industry/cat_view/3-policy-a-circulars/40-cg-ground-water-management-a-regulation-act-2022.html" },
              { "Goa": "https://goawrd.gov.in/" },
              { "Gujarat": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790" },
              { "Haryana": "https://india.mongabay.com/2021/07/groundwater-depletion-in-haryana-a-cause-of-serious-concern/" },
              { "Himachal Pradesh": "https://link.springer.com/article/10.1007/s13201-018-0668-z" },
              { "Jharkhand": "https://www.telegraphindia.com/jharkhand/groundwater-depletion-worry-for-jharkhand/cid/1930156" },
              { "Karnataka": "https://nammakpsc.com/affairs/groundwater-in-karnataka/" },
              { "Kerala": "https://groundwater.kerala.gov.in/" },
              { "Madhya Pradesh": "https://www.mppcb.mp.gov.in/RWH.aspx" },
              { "Maharashtra": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790" },
              { "Manipur": "https://www.imphaltimes.com/articles/impacts-of-ground-water-depletion/" },
              { "Meghalaya": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790" },
              { "Mizoram": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790" },
              { "Nagaland": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790" },
              { "Odisha": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790" },
              { "Punjab": "https://www.indiawaterportal.org/articles/groundwater-depletion-punjab-time-major-policy-overhaul-0" },
              { "Rajasthan": "https://example.com/rajasthan-groundwater-depletion" },
              { "Sikkim": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790" },
              { "Tamil Nadu": "https://link.springer.com/article/10.1007/s11269-015-0932-z" },
              { "Telangana": "https://gwrms.telangana.gov.in/" },
              { "Tripura": "https://www.cgwb.gov.in/old_website/District_Profile/Tripura_districtprofile.html" },
              { "Uttar Pradesh": "http://upgwdonline.in/" },
              { "Uttarakhand": "https://ueppcb.uk.gov.in/pages/display/100-ground-water" },
              { "West Bengal": "https://www.wbwridd.gov.in/swid/" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-groundwater-depletion" },
              // { "Chandigarh": "https://example.com/chandigarh-groundwater-depletion" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-groundwater-depletion" },
              // { "Delhi": "https://example.com/delhi-groundwater-depletion" },
              // { "Lakshadweep": "https://example.com/lakshadweep-groundwater-depletion" },
              // { "Puducherry": "https://example.com/puducherry-groundwater-depletion" }
          ]
      },
      {
          "Flooding": [
              { "Andhra Pradesh": "https://irrigationap.cgg.gov.in/wrd/home" },
              { "Arunachal Pradesh": "https://wrdarunachal.nic.in/" },
              { "Assam": "https://waterresources.assam.gov.in/portlets/flood-management" },
              { "Bihar": "https://state.bihar.gov.in/wrd/CitizenHome.html" },
              { "Chhattisgarh": "https://www.thinkhazard.org/en/report/70116-india-chhattisgarh-raipur/FL" },
              { "Goa": "https://www.goa.gov.in/department/water-resources/" },
              { "Gujarat": "http://www.gsdma.org/Content/flood-4220" },
              { "Haryana": "http://hdma.gov.in/en/citizen-corner/flood" },
              { "Himachal Pradesh": "https://www.thehindu.com/news/national/other-states/explained-himachal-floods-a-man-made-disaster/article67121119.ece" },
              { "Jharkhand": "https://testbook.com/jharkhand-gk/floods-in-jharkhand" },
              { "Karnataka": "https://ksdma.karnataka.gov.in/english" },
              { "Kerala": "https://sdma.kerala.gov.in/" },
              { "Madhya Pradesh": "http://mpwrd.gov.in/" },
              { "Maharashtra": "https://mahafireservice.gov.in/floods.php" },
              { "Manipur": "https://www.skymetweather.com/content/weather-news-and-analysis/floods-landslides-in-imphal-parts-of-manipur-wreak-havoc-rains-to-continue/" },
              { "Meghalaya": "https://www.nesdr.gov.in/dataset/meghalaya-flood-map" },
              { "Mizoram": "https://thinkhazard.org/en/report/1502-india-mizoram/FL" },
              { "Nagaland": "https://nlsic.nagaland.gov.in/index.php/2020/02/26/irrigation-and-flood-control/" },
              { "Odisha": "https://www.osdma.org/preparedness/one-stop-risk-management-system/flood/" },
              { "Punjab": "https://revenue.punjab.gov.in/?q=floodsnatural-calamities" },
              { "Rajasthan": "https://thinkhazard.org/en/report/1506-india-rajasthan/UF" },
              { "Sikkim": "https://sikkim.gov.in/departments/water-resource-river-development-department/flood-management-program-fmp" },
              { "Tamil Nadu": "https://tnsdma.tn.gov.in/" },
              { "Telangana": "https://atari-hyderabad.icar.gov.in/atarihyderabad/sstory_6?lang=en" },
              { "Tripura": "https://tripura.gov.in/site-link?page=8" },
              { "Uttar Pradesh": "https://fmisc.up.gov.in/" },
              { "Uttarakhand": "https://usdma.uk.gov.in/" },
              { "West Bengal": "https://wbiwd.gov.in/index.php/applications/dailyreport" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-flooding" },
              // { "Chandigarh": "https://example.com/chandigarh-flooding" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-flooding" },
              // { "Delhi": "https://example.com/delhi-flooding" },
              // { "Lakshadweep": "https://example.com/lakshadweep-flooding" },
              // { "Puducherry": "https://example.com/puducherry-flooding" }
          ]
      },
      {
          "Drought": [
              { "Andhra Pradesh": "https://apmas.org/apdmp.php" },
              { "Arunachal Pradesh": "hhttps://agriwelfare.gov.in/en/Drought" },
              { "Assam": "https://agriwelfare.gov.in/en/Drought" },
              { "Bihar": "https://bwds.bihar.gov.in/" },
              { "Chhattisgarh": "http://sdma.cg.gov.in/" },
              { "Goa": "https://web.umang.gov.in/landing/department/e-krishi-goa.html" },
              { "Gujarat": "https://gidm.gujarat.gov.in/" },
              { "Haryana": "https://revenueharyana.gov.in/drought-management-manual/" },
              { "Himachal Pradesh": "https://agriwelfare.gov.in/en/Drought" },
              { "Jharkhand": "https://www.gktoday.in/17-districts-in-jharkhand-witness-drought/" },
              { "Karnataka": "https://www.deccanchronicle.com/nation/in-other-news/karnataka-ministers-welcome-supreme-court-directive-on-drought-relief-funds-890716" },
              { "Kerala": "https://sdma.kerala.gov.in/drought/" },
              { "Madhya Pradesh": "https://link.springer.com/chapter/10.1007/978-981-99-2605-3_16" },
              { "Maharashtra": "https://maharashtra.mygov.in/en/group-issue/drought-free-maharashtra/?page=1%2C19" },
              { "Manipur": "https://agriwelfare.gov.in/en/Drought" },
              { "Meghalaya": "https://agriwelfare.gov.in/en/Drought" },
              { "Mizoram": "https://link.springer.com/chapter/10.1007/978-981-19-9147-9_29" },
              { "Nagaland": "https://agriwelfare.gov.in/en/Drought" },
              { "Odisha": "https://www.osdma.org/preparedness/state-drought-monitoring-cell/" },
              { "Punjab": "https://www.arcgis.com/home/item.html?id=a0bbca4094614fbe9a2868ebd3474eda" },
              { "Rajasthan": "https://rajras.in/famines-and-droughts-in-rajasthan/" },
              { "Sikkim": "https://agriwelfare.gov.in/en/Drought" },
              { "Tamil Nadu": "https://journal.agrimetassociation.org/index.php/jam/article/view/445" },
              { "Telangana": "https://www.telangana.gov.in/government-initiatives/mission-kakatiya/" },
              { "Tripura": "https://www.indiastattripura.com/Tripura-state/data/social-and-welfare-schemes/drought-prone-areas-programme-dpap" },
              { "Uttar Pradesh": "https://www.ncfc.gov.in/" },
              { "Uttarakhand": "https://uttarakhandirrigation.com/" },
              { "West Bengal": "http://wbdmd.gov.in/pages/drought_mapping.aspx" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-drought" },
              // { "Chandigarh": "https://example.com/chandigarh-drought" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-drought" },
              // { "Delhi": "https://example.com/delhi-drought" },
              // { "Lakshadweep": "https://example.com/lakshadweep-drought" },
              // { "Puducherry": "https://example.com/puducherry-drought" }
          ]
      },
      {
          "Water conflicts": [
              { "Andhra Pradesh": "https://irrigationap.cgg.gov.in/wrd/home" },
              { "Arunachal Pradesh": "https://wrdarunachal.nic.in/website_policy.html" },
              { "Assam": "https://waterresources.assam.gov.in/portlets/flood-erosion-problems" },
              { "Bihar": "https://www.indiawaterportal.org/articles/qualitative-and-quantitative-water-scarcity-issues-bihar-presentation" },
              { "Chhattisgarh": "https://www.taylorfrancis.com/books/edit/10.4324/9780367817671/water-conflicts-india-joy-suhas-paranjape-biksham-gujja-vinod-goud-shruti-vispute" },
              { "Goa": "https://india.mongabay.com/2023/07/inside-goa-and-karnatakas-conflict-on-mhadei-river-water/" },
              { "Gujarat": "https://www.epw.in/index.php/water-conflicts-india" },
              { "Haryana": "https://www.epw.in/water-conflicts-india" },
              { "Himachal Pradesh": "https://theprint.in/politics/united-against-himachals-water-cess-punjab-haryana-still-slugging-it-out-over-sutlej-yamuna-link/1471458/" },
              { "Jharkhand": "https://wrdjharkhand.nic.in/" },
              { "Karnataka": "https://www.epw.in/water-conflicts-india" },
              { "Kerala": "https://waterconflictforum.org/kerala-state-centre" },
              { "Madhya Pradesh": "http://mpwrd.gov.in/" },
              { "Maharashtra": "https://www.thehindu.com/news/national/other-states/maharashtra-stares-at-water-conflicts/article7905865.ece" },
              { "Manipur": "https://e-pao.net/epSubPageExtractor.asp?src=news_section.editorial.editorial_2023.Manipur_and_water_crisis_TSE_20230321" },
              { "Meghalaya": "https://link.springer.com/article/10.1007/s40899-023-00823-4" },
              { "Mizoram": "https://www.thesangaiexpress.com/Encyc/2019/8/23/Newmai-News-NetworkAIZAWL-Aug-22-Mizoram-Chief-Minister-Zoramthanga-on-Thursday-sought-the-Centre-s-help-to-solve-the-water-crisis-in-the-State-an-official-statement-said-Zoramthanga-who-is-no.html#/google_vignette" },
              { "Nagaland": "https://www.downtoearth.org.in/news/water/-drought-like-nagaland-stares-at-water-scarcity-low-harvest-78594" },
              { "Odisha": "https://dowr.odisha.gov.in/website-policy" },
              { "Punjab": "https://journals.sagepub.com/doi/10.1177/0019556119873442?icid=int.sj-full-text.similar-articles.3" },
              { "Rajasthan": "https://hindi.indiawaterportal.org/articles/water-crisis-rajasthan" },
              { "Sikkim": "https://sikkim.gov.in/departments/water-resource-river-development-department/flood-management-program-fmp" },
              { "Tamil Nadu": "https://jalshakti-dowr.gov.in/cauvery-water-dispute/" },
              { "Telangana": "https://www.thehindu.com/news/national/telangana/explained-the-telangana-andhra-pradesh-water-dispute/article66880971.ece" },
              { "Tripura": "https://tripuratimes.com/" },
              { "Uttar Pradesh": "https://www.worldwater.org/conflict/map/" },
              { "Uttarakhand": "https://hindi.indiawaterportal.org/articles/water-crisis-uttarakhand" },
              { "West Bengal": "https://www.wbwridd.gov.in/wuas" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-water-conflicts" },
              // { "Chandigarh": "https://example.com/chandigarh-water-conflicts" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-water-conflicts" },
              // { "Delhi": "https://example.com/delhi-water-conflicts" },
              // { "Lakshadweep": "https://example.com/lakshadweep-water-conflicts" },
              // { "Puducherry": "https://example.com/puducherry-water-conflicts" }
          ]
      },
      {
          "Infrastructure deficiencies": [
              { "Andhra Pradesh": "https://copenhagenconsensus.com/publication/andhra-pradesh-priorities-urban-infrastructure-ilfs" },
              { "Arunachal Pradesh": "https://nhidcl.com/arunachal-pradesh/" },
              { "Assam": "https://aifa.assam.gov.in/policy/website-information-manager" },
              { "Bihar": "https://state.bihar.gov.in/urban/CitizenHome.html" },
              { "Chhattisgarh": "https://chhattisgarh.nic.in/infrastructure/" },
              { "Goa": "https://india.mongabay.com/2018/09/goas-environment-faces-problems-from-infrastructure-boom/" },
              { "Gujarat": "https://guj.nic.in/infrastructure/" },
              { "Haryana": "https://tcpharyana.gov.in/" },
              { "Himachal Pradesh": "https://journals.sagepub.com/doi/10.1177/09749306231163959?icid=int.sj-abstract.citing-articles.3" },
              { "Jharkhand": "https://cag.gov.in/ag/jharkhand/en/audit-report/details/115562" },
              { "Karnataka": "https://ksiidc.karnataka.gov.in/info-1/Key+Officers/en" },
              { "Kerala": "https://www.adb.org/news/urban-infrastructure-project-improve-life-kerala-urban-areas" },
              { "Madhya Pradesh": "https://geoportal.mp.gov.in/geoportal/Road_Infrastructure.aspx" },
              { "Maharashtra": "https://mmrda.maharashtra.gov.in/projects/development-finance/megacity-scheme/overview" },
              { "Manipur": "https://e-pao.net/GP.asp?src=21..200912.sep12" },
              { "Meghalaya": "https://www.meghalayatourism.in/scheme-for-community-led-tourism-infrastructure/" },
              { "Mizoram": "https://mizo.nic.in/infrastructure/" },
              { "Nagaland": "https://www.adb.org/projects/54166-001/main" },
              { "Odisha": "https://odisha.nic.in/infrastructure/" },
              { "Punjab": "https://pbsc.nic.in/infrastructure/" },
              { "Rajasthan": "https://jda.rajasthan.gov.in/content/raj/udh/jda---jaipur/en/home.html" },
              { "Sikkim": "https://sikkim.gov.in/DepartmentsMenu/urban-dev-housing-department/Schemes%20and%20Reports/environmental-infrastructure" },
              { "Tamil Nadu": "https://www.adb.org/projects/51002-001/main" },
              { "Telangana": "https://www.telangana.gov.in/Government-Initiatives/" },
              { "Tripura": "https://tripura.nic.in/infrastructure/" },
              { "Uttar Pradesh": "https://invest.up.gov.in/infrastructure/" },
              { "Uttarakhand": "https://uk.nic.in/en/infrastructure/" },
              { "West Bengal": "https://wb.gov.in/departments-details.aspx?id=D190305165850306&page=Land-and-Land-Reforms--Refugee-Relief-and-Rehabilitation" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-infrastructure-deficiencies" },
              // { "Chandigarh": "https://example.com/chandigarh-infrastructure-deficiencies" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-infrastructure-deficiencies" },
              // { "Delhi": "https://example.com/delhi-infrastructure-deficiencies" },
              // { "Lakshadweep": "https://example.com/lakshadweep-infrastructure-deficiencies" },
              // { "Puducherry": "https://example.com/puducherry-infrastructure-deficiencies" }
          ]
      },
      {
          "Climate change impacts": [
              { "Andhra Pradesh": "https://www.preventionweb.net/publication/climate-change-vulnerability-and-adaptation-experiences-rajasthan-and-andhra-pradesh" },
              { "Arunachal Pradesh": "https://apclimatechange.in/index" },
              { "Assam": "https://assamtribune.com/assam/climate-change-and-its-impact-on-assam-1476570" },
              { "Bihar": "https://www.preventionweb.net/news/india-climate-change-hits-bihar-farmers-twice-year" },
              { "Chhattisgarh": "https://cgclimatechange.com/" },
              { "Goa": "https://gsbb.goa.gov.in/goa-state-climate-change-cell-gsccc/" },
              { "Gujarat": "https://link.springer.com/chapter/10.1007/978-3-031-15501-7_8" },
              { "Haryana": "https://hrccc.harenvironment.gov.in/" },
              { "Himachal Pradesh": "https://abhipedia.abhimanu.com/Article/State/NDQ5NwEEQQVVEEQQVV/Climate-change-in-Himachal-Pradesh-Himachal-Pradesh-State" },
              { "Jharkhand": "https://testbook.com/jharkhand-gk/climate-of-jharkhand" },
              { "Karnataka": "https://empri.karnataka.gov.in/103/department-for-climate-change/en" },
              { "Kerala": "https://envt.kerala.gov.in/" },
              { "Madhya Pradesh": "https://ideas.repec.org/p/iim/iimawp/14543.html" },
              { "Maharashtra": "https://mpcb.gov.in/awareness/climate-change" },
              { "Manipur": "https://ccmanipur.mn.gov.in/en/about/cccell/" },
              { "Meghalaya": "https://www.theclimategroup.org/our-work/news/spotlighting-meghalayas-climate-action" },
              { "Mizoram": "https://mistic.mizoram.gov.in/page/state-level-workshop-on-impact-of-climate-change-in-mizoram" },
              { "Nagaland": "https://www.downtoearth.org.in/news/climate-change/faced-with-climate-change-nagaland-to-revive-traditional-rice-varieties-59331" },
              { "Odisha": "https://climatechangecellodisha.org/" },
              { "Punjab": "https://pscst.punjab.gov.in/en/recent-reports-on-climate-change" },
              { "Rajasthan": "https://www.nitiforstates.gov.in/policy-viewer?id=GSSNAD000285" },
              { "Sikkim": "https://sikkim.gov.in/DepartmentsMenu/urban-dev-housing-department/Schemes%20and%20Reports/environmental-infrastructure" },
              { "Tamil Nadu": "https://www.wri.org/insights/tamil-nadu-india-takes-innovative-approach-climate-adaptation" },
              { "Telangana": "https://eptri.telangana.gov.in/climate" },
              { "Tripura": "https://dst.gov.in/climate-change-programme" },
              { "Uttar Pradesh": "http://upccce.org/" },
              { "Uttarakhand": "https://forest.uk.gov.in/climate-change" },
              { "West Bengal": "http://www.environmentwb.gov.in/Introduction.php" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-climate-change-impacts" },
              // { "Chandigarh": "https://example.com/chandigarh-climate-change-impacts" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-climate-change-impacts" },
              // { "Delhi": "https://example.com/delhi-climate-change-impacts" },
              // { "Lakshadweep": "https://example.com/lakshadweep-climate-change-impacts" },
              // { "Puducherry": "https://example.com/puducherry-climate-change-impacts" }
          ]
      },
     {
          "Access to safe drinking water and sanitation": [
              { "Andhra Pradesh": "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/656921468035341827/india-andhra-pradesh-rural-water-supply-sanitation-project" },
              { "Arunachal Pradesh": "https://ulb.arunachal.gov.in/schemes.html" },
              { "Assam": "https://phewater.assam.gov.in/portlets/rural-water-supply-0" },
              { "Bihar": "https://www.bswsmpatna.org/" },
              { "Chhattisgarh": "https://reliefweb.int/report/india/access-health-care-and-safe-drinking-water-people-chhattisgarh" },
              { "Goa": "https://www.researchgate.net/publication/331584510_Water_Sanitation_and_Hygiene_Practices_in_Rural_Area_of_Goa_A_Cross-sectional_Study" },
              { "Gujarat": "https://utthangujarat.org/access-to-safe-drinking-water-sanitation-and-hygiene.php" },
              { "Haryana": "https://phedharyana.gov.in/" },
              { "Himachal Pradesh": "https://www.adb.org/projects/53067-005/main" },
              { "Jharkhand": "https://www.jharkhand.gov.in/drinking-water" },
              { "Karnataka": "https://english.swachhamevajayate.org/" },
              { "Kerala": "https://spb.kerala.gov.in/economic-review/ER2013/Chapter9/chapter09.html" },
              { "Madhya Pradesh": "http://mpwrd.gov.in/" },
              { "Maharashtra": "https://wsso.in/" },
              { "Manipur": "https://ccmanipur.mn.gov.in/en/water-resources/" },
              { "Meghalaya": "https://services.india.gov.in/service/ministry_services?ln=en&cmd_id=984" },
              { "Mizoram": "https://sdg.mizoram.gov.in/page/goal-6-clean-water-and-sanitation" },
              { "Nagaland": "https://phed.nagaland.gov.in/" },
              { "Odisha": "https://www.osvswa.org/nirmal.php" },
              { "Punjab": "https://dwss.punjab.gov.in/" },
              { "Rajasthan": "https://csrbox.org/India_organization_project_Rajasthan-Water-&-Sanitation_8084" },
              { "Sikkim": "https://sikkim.gov.in/departments/water-security-phe-department" },
              { "Tamil Nadu": "https://tnsdg.tn.gov.in/sustainable-development-goals/goal-6/clean-water-and-sanitation" },
              { "Telangana": "https://services.india.gov.in/service/detail/telangana-rural-water-supply-and-sanitation-department-information-1" },
              { "Tripura": "https://dws.tripura.gov.in/" },
              { "Uttar Pradesh": "https://jjmup.org/" },
              { "Uttarakhand": "https://swsm.uk.gov.in/" },
              { "West Bengal": "https://wbphed.gov.in/en/home" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-safe-drinking-water" },
              // { "Chandigarh": "https://example.com/chandigarh-safe-drinking-water" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-safe-drinking-water" },
              // { "Delhi": "https://example.com/delhi-safe-drinking-water" },
              // { "Lakshadweep": "https://example.com/lakshadweep-safe-drinking-water" },
              // { "Puducherry": "https://example.com/puducherry-safe-drinking-water" }
          ]
      },
      {
          "Need for new water pipeline": [
              { "Andhra Pradesh": "https://services.india.gov.in/service/detail/new-water-connection-in-andhra-pradesh-1" },
              { "Arunachal Pradesh": "https://www.india.gov.in/application-form-new-water-connection-arunachal-pradesh" },
              { "Assam": "https://gmdwsb.assam.gov.in/how-to/apply-for-a-new-water-connection" },
              { "Bihar": "https://wrd.bihar.gov.in/" },
              { "Chhattisgarh": "https://morth.nic.in/permission-lay-water-pipeline-nh-06-new-nh-53-km28510-28682-near-kumhari-state-chhattisgarh" },
              { "Goa": "https://www.gomantaktimes.com/opinion/preserving-paradise-goas-urgent-call-for-water-conservation#:~:text=Despite%20an%20average%20annual%20rainfall,and%20inefficiencies%20in%20water%20usage" },
              { "Gujarat": "https://services.india.gov.in/service/detail/application-for-water-connection-in-gujarat" },
              { "Haryana": "https://hid.gov.in/" },
              { "Himachal Pradesh": "https://shimlamc.hp.gov.in/Department/Index/9-shimla-jal-prabandhan-nigam" },
              { "Jharkhand": "https://www.thehindu.com/news/cities/chennai/water-pipeline-burst-floods-road-in-perungudi-leads-to-power-outage/article67782466.ece" },
              { "Karnataka": "https://services.india.gov.in/service/detail/apply-for-new-water-connection-in-karnataka" },
              { "Kerala": "https://services.india.gov.in/service/detail/apply-for-new-water-connection-kerala" },
              { "Madhya Pradesh": "https://www.mpenagarpalika.gov.in/irj/portal/anonymous/CitizenServices/WaterConnection/qlWaterConnection" },
              { "Maharashtra": "https://morth.gov.in/proposal-permission-laying-underground-water-pipeline-400-mm-300mm-200mm-along-morshi-chandur-bazar" },
              { "Manipur": "https://morth.nic.in/permission-proposal-laying-drinking-water-pipe-line-along-road-km-175080-km-177800-length-2720" },
              { "Meghalaya": "https://services.india.gov.in/service/detail/apply-for-water-connection-for-the-municipal-area-meghalaya-1" },
              { "Mizoram": "https://phedmizoram.in/faqfornewater.php" },
              { "Nagaland": "https://phed.nagaland.gov.in/2022/05/25/application-form-for-new-water-connection/" },
              { "Odisha": "https://www.pheoodisha.gov.in/node/821" },
              { "Punjab": "https://pwrmdc.punjab.gov.in/lining-projects/projects-in-pipeline" },
              { "Rajasthan": "https://example.com/rajasthan-new-water-pipeline" },
              { "Sikkim": "https://sikkim.gov.in/departments/water-security-phe-department/customer-service" },
              { "Tamil Nadu": "https://services.india.gov.in/service/detail/application-form-for-water-or-sewer-connection-in-tamil-nadu-1" },
              { "Telangana": "https://emunicipal.telangana.gov.in/Website/WaterTapConnections" },
              { "Tripura": "https://services.india.gov.in/service/detail/application-form-for-house-connection-for-water-supply-in-tripura-1" },
              { "Uttar Pradesh": "https://jklmc.gov.in/" },
              { "Uttarakhand": "https://ujs.uk.gov.in/" },
              { "West Bengal": "https://www.wburbanservices.gov.in/page/cms/water_connection_procedure_665bb1" },
              // { "Andaman and Nicobar Islands": "https://example.com/andaman-nicobar-new-water-pipeline" },
              // { "Chandigarh": "https://example.com/chandigarh-new-water-pipeline" },
              // { "Dadra and Nagar Haveli and Daman and Diu": "https://example.com/dadra-nagarhaveli-daman-diu-new-water-pipeline" },
              // { "Delhi": "https://example.com/delhi-new-water-pipeline" },
              // { "Lakshadweep": "https://example.com/lakshadweep-new-water-pipeline" },
              // { "Puducherry": "https://example.com/puducherry-new-water-pipeline" }
          ]
      }
  ];
  
  const stateData = waterIssues.find(item => item[issue]);
  const url = stateData[issue]?.find(stateUrls => stateUrls[stateName]? stateUrls[stateName] : {} ) ;

  // dummy data url
  if(url[stateName]){
    return url[stateName];
  }

  return "https://jaljeevanmission.gov.in/";
}