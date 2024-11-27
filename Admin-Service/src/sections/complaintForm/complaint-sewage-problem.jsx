import React, { useState, useCallback } from 'react'

import { Box } from '@mui/system';
import { Container } from '@mui/material';

import { useAuthContext } from 'src/auth/hooks';

import SvgColor from 'src/components/svg-color';

import ComplaintCard from './complaint-card';
import ComplaintTabs from './complaint-tabs';

const central = [
    {
        title: "Sanitary sewer overflows (SSOs)",
        description: "स्वच्छता सीवर ओवरफ्लो (एसएसओ)",
        navigate: "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
        path: "/assets/images/complainSection/sewageProblem/Sanitary sewer overflows (SSOs).png"
    },
    {
        title: "Combined sewer overflows (CSOs)",
        description: "Inadequate sewage treatment",
        navigate: "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
        path: "/assets/images/complainSection/sewageProblem/Combined sewer overflows (CSOs).png"
    },
    {
        title: "Aging infrastructure",
        description: "उम्र बढ़ने का बुनियादी ढांचा",
        navigate: "https://indianinfrastructure.com/",
        path: "/assets/images/complainSection/sewageProblem/Aging infrastructure.png"
    },
    {
        title: "Inadequate sewage treatment",
        description: "अपर्याप्त सीवेज उपचार",
        navigate: "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
        path: "/assets/images/complainSection/sewageProblem/Inadequate sewage treatment.png"
    },
    {
        title: "Pollution and environmental degradation",
        description: "प्रदूषण और पर्यावरण का क्षरण",
        navigate: "https://cpcb.nic.in/",
        path: "/assets/images/complainSection/sewageProblem/Pollution and environmental degradation.png"
    },
    {
        title: "Septic system failures",
        description: "सेप्टिक प्रणाली की विफलता",
        navigate: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
        path: "/assets/images/complainSection/sewageProblem/Septic system failures.png"
    },
    {
        title: "Sewage odors and nuisances",
        description: "सीवेज की दुर्गंध और उपद्रव",
        navigate: "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
        path: "/assets/images/complainSection/sewageProblem/Sewage odors and nuisances.png"
    },
    {
        title: "Sewage spills and leaks",
        description: "सीवेज फैल जाता है और लीक हो जाता है",
        navigate: "https://services.india.gov.in/service/detail/waste-water-analysis-1",
        path: "/assets/images/complainSection/sewageProblem/Sewage spills and leaks.png"
    },
    {
        title: "Illegal sewage discharges",
        description: "अवैध सीवेज निर्वहन",
        navigate: "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
        path: "/assets/images/complainSection/sewageProblem/Illegal sewage discharges.png"
    },
    {
        title: "Public health risks",
        description: "सार्वजनिक स्वास्थ्य जोखिम",
        navigate: "https://phfi.org/",
        path: "/assets/images/complainSection/sewageProblem/Public health risks.png"
    },
    {
        title: "Need for new sewage pipeline",
        description: "नई सीवेज पाइपलाइन की आवश्यकता",
        navigate: "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km",
        path: "/assets/images/complainSection/sewageProblem/Need for new sewage pipeline.png"
    }
];


export default function ComplaintSewageProblem() {

    const [currentTab, setCurrentTab] = useState('central');
    
    const { user:{UserAddressesses} } = useAuthContext();
    const {userState} = UserAddressesses && UserAddressesses[0];

    const handleChangeTab = useCallback((event, newValue) => {
        setCurrentTab(newValue);
    }, []);

    const state = [
        {
            title: "Illegal sewage discharges",
            description: "अवैध सीवेज निर्वहन",
            navigate: getSwageURL(userState, "Illegal sewage discharges"),
            path: "/assets/images/complainSection/sewageProblem/Illegal sewage discharges.png"
        },
        {
            title: "Public health risks",
            description: "सार्वजनिक स्वास्थ्य जोखिम",
            navigate: getSwageURL(userState, "Public health risks"),
            path: "/assets/images/complainSection/sewageProblem/Public health risks.png"
        },
        {
            title: "Need for new sewage pipeline",
            description: "",
            navigate: getSwageURL(userState, "Need for new sewage pipeline"),
            path: "/assets/images/complainSection/sewageProblem/Need for new sewage pipeline.png"
        },
        {
            title: "Inadequate sewage treatment",
            description: "अपर्याप्त सीवेज उपचार",
            navigate: getSwageURL(userState, "Inadequate sewage treatment"),
            path: "/assets/images/complainSection/sewageProblem/Inadequate sewage treatment.png"
        },
        {
            title: "Pollution and environmental degradation",
            description: "प्रदूषण और पर्यावरण का क्षरण",
            navigate: getSwageURL(userState, "Pollution and environmental degradation"),
            path: "/assets/images/complainSection/sewageProblem/Pollution and environmental degradation.png"
        },
        {
            title: "Septic system failures",
            description: "सेप्टिक प्रणाली की विफलता",
            navigate: getSwageURL(userState, "Septic system failures"),
            path: "/assets/images/complainSection/sewageProblem/Septic system failures.png"
        },
        {
            title: "Sewage odors and nuisances",
            description: "सीवेज की दुर्गंध और उपद्रव",
            navigate: getSwageURL(userState, "Sewage odors and nuisances"),
            path: "/assets/images/complainSection/sewageProblem/Sewage odors and nuisances.png"
        },
        {
            title: "Sewage spills and leaks",
            description: "सीवेज फैल जाता है और लीक हो जाता है",
            navigate: getSwageURL(userState, "Sewage spills and leaks"),
            path: "/assets/images/complainSection/sewageProblem/Sewage spills and leaks.png"
        },
        {
            title: "Sanitary sewer overflows (SSOs)",
            description: "स्वच्छता सीवर ओवरफ्लो (एसएसओ)",
            navigate: getSwageURL(userState, "Sanitary sewer overflows (SSOs)"),
            path: "/assets/images/complainSection/sewageProblem/Sanitary sewer overflows (SSOs).png"
        },
        {
            title: "Combined sewer overflows (CSOs)",
            description: "Inadequate sewage treatment",
            navigate: getSwageURL(userState, "Combined sewer overflows (CSOs)"),
            path: "/assets/images/complainSection/sewageProblem/Combined sewer overflows (CSOs).png"
        },
        {
            title: "Aging infrastructure",
            description: "उम्र बढ़ने का बुनियादी ढांचा",
            navigate: getSwageURL(userState, "Aging infrastructure"),
            path: "/assets/images/complainSection/sewageProblem/Aging infrastructure.png"
        }
        
    ];
    

    const icon = (name) => (
        <SvgColor src={`/assets/icons/menuicons/${name}.svg`} />
    );

    const TABS = [
        {
            value: 'central',
            label: 'Central Complaint',
            icon: icon('Profile')
        },
        {
            value: 'state',
            label: 'State Complaint',
            icon: icon('Profile')
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

                {currentTab === "state" && <ComplaintCard cards={state} />}

                {currentTab === "central" && <ComplaintCard cards={central} />}

            </Box>
        </Container>
    );
};

function getSwageURL(stateName, issue) {

    const sewageProblem = [
        {
          Rajasthan: {
            "Sanitary sewer overflows (SSOs)": "https://lsgonline.rajasthan.gov.in/sewercon_service.aspx",
            "Combined sewer overflows (CSOs)": "https://www.epa.gov/npdes/combined-sewer-overflows-csos",
            "Aging infrastructure": "https://rajasthan.gov.in/",
            "Inadequate sewage treatment": "https://rhb.rajasthan.gov.in/content/dam/raj/udh/organizations/ruidp/SafeguardPolicies/Safeguard-IEEPhaseIII/IEE-PhaseIV/Rajasthan%20Secondary%20Towns%20Development%20Sector%20Project%20Water%20Supply%20and%20Sewerage%20Project%20in%20Banswara%20Town%20(Banswarai%20District)%20IEE.pdf",
            "Pollution and environmental degradation": "https://environment.rajasthan.gov.in/content/environment/en/rajasthan-state-pollution-control-board.html",
            "Septic system failures": "https://lsgonline.rajasthan.gov.in/sewercon_service.aspx",
            "Sewage odors and nuisances": "https://www.adb.org/sites/default/files/project-documents/42267/42267-031-iee-en_12.pdf",
            "Sewage spills and leaks": "https://www.betterhealth.vic.gov.au/health/healthyliving/sewage-overflows-at-home",
            "Illegal sewage discharges": "https://lsg.urban.rajasthan.gov.in/content/raj/udh/lsg-jaipur/en/home.html",
            "Need for new sewage pipeline": "https://lsgonline.rajasthan.gov.in/sewercon_service.aspx"
        }
        },
        {
          'Andhra Pradesh':  {
            "Sanitary sewer overflows (SSOs)": "https://apwrims.ap.gov.in/",
            "Combined sewer overflows (CSOs)": "https://portal.ct.gov/deep/municipal-wastewater/combined-sewer-overflows-frequently-asked-questions",
            "Aging infrastructure": "https://www.aptidco.com/",
            "Inadequate sewage treatment": "https://cdma.ap.gov.in/",
            "Pollution and environmental degradation": "https://services.india.gov.in/service/state_services?sd_id=39&ln=en",
            "Septic system failures": "https://apemcl.ap.gov.in/",
            "Sewage odors and nuisances": "https://apocmms.nic.in/APPCB/",
            "Sewage spills and leaks": "https://www.cityofpowdersprings.org/696/Sewer-Spill",
            "Illegal sewage discharges": "https://apemcl.ap.gov.in/",
            "Need for new sewage pipeline": "https://cdma.ap.gov.in/en/newseweragecon"
        }  
        },
        {
          'Arunachal Pradesh': {
            "Sanitary sewer overflows (SSOs)": "https://arunachalpradesh.gov.in/",
            "Combined sewer overflows (CSOs)": "https://www.epa.gov/npdes/combined-sewer-overflows-csos",
            "Aging infrastructure": "https://www.arunachalplan.gov.in/",
            "Inadequate sewage treatment": "https://www.udarunachal.gov.in/",
            "Pollution and environmental degradation": "https://arunachalforests.gov.in/website-policy",
            "Septic system failures": "https://arunachaltp.nic.in/sites/default/files/APBuildingByelaws2019.pdf",
            "Sewage odors and nuisances": "https://blog.mygov.in/arunachal-pradesh-develops-cleanliness-protocol/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/state_services?sd_id=230&ln=en&page_no=12",
            "Illegal sewage discharges": "https://blog.mygov.in/arunachal-pradesh-develops-cleanliness-protocol/",
            "Need for new sewage pipeline": "https://services.india.gov.in/service/detail/apply-for-new-commercial-water-connection-sewer-connection-arunachal-pradesh-1"
        }        
        },
        {
          Assam: {
            "Sanitary sewer overflows (SSOs)": "https://phesanitation.assam.gov.in/",
            "Combined sewer overflows (CSOs)": "https://phesanitation.assam.gov.in/",
            "Aging infrastructure": "https://aifa.assam.gov.in/",
            "Inadequate sewage treatment": "https://pcb.assam.gov.in/portlets/waste-management",
            "Pollution and environmental degradation": "https://pcb.assam.gov.in/",
            "Septic system failures": "https://sewasetu.assam.gov.in/site/service-apply/cess-pool-service",
            "Sewage odors and nuisances": "https://sewasetu.assam.gov.in/site/service-apply/cess-pool-service",
            "Sewage spills and leaks": "https://auwssb.assam.gov.in/",
            "Illegal sewage discharges": "https://auwssb.assam.gov.in/",
            "Need for new sewage pipeline": "https://auwssb.assam.gov.in/"
        }        
        },
        {
          Bihar: {
            "Sanitary sewer overflows (SSOs)": "https://state.bihar.gov.in/main/CitizenHome.html",
            "Combined sewer overflows (CSOs)": "https://19january2017snapshot.epa.gov/npdes/combined-sewer-overflows-csos_.html",
            "Aging infrastructure": "https://state.bihar.gov.in/urban/CitizenHome.html",
            "Inadequate sewage treatment": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://sewasetu.assam.gov.in/site/service-apply/cess-pool-service",
            "Sewage odors and nuisances": "https://sewasetu.assam.gov.in/site/service-apply/cess-pool-service",
            "Sewage spills and leaks": "https://auwssb.assam.gov.in/",
            "Illegal sewage discharges": "https://auwssb.assam.gov.in/",
            "Need for new sewage pipeline": "https://auwssb.assam.gov.in/"
        }        
        },
        {
          Chhattisgarh: {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }
        },
        {
          Goa: {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }
        },
        {
          Gujarat: {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }       
        },
        {
          Haryana: {
            "Sanitary sewer overflows (SSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Combined sewer overflows (CSOs)": "https://indianinfrastructure.com/",
            "Aging infrastructure": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Inadequate sewage treatment": "https://cpcb.nic.in/",
            "Pollution and environmental degradation": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Septic system failures": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage odors and nuisances": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Sewage spills and leaks": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Illegal sewage discharges": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km",
            "Need for new sewage pipeline": "https://hid.gov.in/"
        }         
        },
        {
          'Himachal Pradesh': {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }    
        },
        {
          "Jharkhand": {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }        
        },
        {
          "Karnataka": {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }         
        },
        {
          Kerala: {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }        
        },
        {
          'Madhya Pradesh': {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }      
        },
        {
          Maharashtra: {
            "Sanitary sewer overflows (SSOs)": "https://www.downtoearth.org.in/news/water/scarcity-to-abundance-how-a-maharashtra-village-came-together-to-address-water-crisis-81611",
            "Combined sewer overflows (CSOs)": "https://mpcb.gov.in/node",
            "Aging infrastructure": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Inadequate sewage treatment": "https://mahafireservice.gov.in/floods.php",
            "Pollution and environmental degradation": "https://maharashtra.mygov.in/en/group-issue/drought-free-maharashtra/?page=1%2C19",
            "Septic system failures": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage odors and nuisances": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Sewage spills and leaks": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Illegal sewage discharges": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km",
            "Need for new sewage pipeline": "https://morth.gov.in/proposal-permission-laying-underground-water-pipeline-400-mm-300mm-200mm-along-morshi-chandur-bazar"
        }      
        },
        {
          Manipur: {
            "Sanitary sewer overflows (SSOs)": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Combined sewer overflows (CSOs)": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Aging infrastructure": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Inadequate sewage treatment": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km",
            "Pollution and environmental degradation": "https://agriwelfare.gov.in/en/Drought",
            "Septic system failures": "https://e-pao.net/epSubPageExtractor.asp?src=news_section.editorial.editorial_2023.Manipur_and_water_crisis_TSE_20230321",
            "Sewage odors and nuisances": "https://e-pao.net/GP.asp?src=21..200912.sep12",
            "Sewage spills and leaks": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Illegal sewage discharges": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Need for new sewage pipeline": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/"
        }        
        },
        {
          Meghalaya: {
            "Sanitary sewer overflows (SSOs)": "https://www.downtoearth.org.in/news/water/meghalaya-how-the-abode-of-clouds-ran-out-of-water-89932",
            "Combined sewer overflows (CSOs)": "https://megspcb.gov.in/",
            "Aging infrastructure": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Inadequate sewage treatment": "https://www.nesdr.gov.in/dataset/meghalaya-flood-map",
            "Pollution and environmental degradation": "https://agriwelfare.gov.in/en/Drought",
            "Septic system failures": "https://link.springer.com/article/10.1007/s40899-023-00823-4",
            "Sewage odors and nuisances": "https://www.meghalayatourism.in/scheme-for-community-led-tourism-infrastructure/",
            "Sewage spills and leaks": "https://www.theclimategroup.org/our-work/news/spotlighting-meghalayas-climate-action",
            "Illegal sewage discharges": "https://services.india.gov.in/service/ministry_services?ln=en&cmd_id=984",
            "Need for new sewage pipeline": "https://services.india.gov.in/service/detail/apply-for-water-connection-for-the-municipal-area-meghalaya-1"
        }        
        },
        {
          Mizoram: {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }       
        },
        {
          Nagaland: {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }                 
        },
    
        {
          Odisha: {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }               
        },
        {
          Punjab:{
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }              
        },
        {
          Sikkim: {
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }               
        },
        {
          'Tamil Nadu':{
            "Sanitary sewer overflows (SSOs)": "https://www.xylem.com/en-in/support/lets-solve-water-blog/the-underlying-reasons-behind-sanitary-sewer-overflows/",
            "Combined sewer overflows (CSOs)": "https://vancouver.ca/home-property-development/combined-sewer-overflows.aspx",
            "Aging infrastructure": "https://indianinfrastructure.com/",
            "Inadequate sewage treatment": "https://www.downtoearth.org.in/blog/pollution/behind-polluted-indian-river-stretches-inadequate-sewage-treatment-77957",
            "Pollution and environmental degradation": "https://cpcb.nic.in/",
            "Septic system failures": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7816121/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }        
        },
        {
          Telangana: {
            "Sanitary sewer overflows (SSOs)": "https://www.tgnns.com/telangana/telanganas-successful-summer-action-plan-and-appeal-for-more-water-from-krishna-river/2024/04/10/",
            "Combined sewer overflows (CSOs)": "https://tspcb.cgg.gov.in/default.aspx",
            "Aging infrastructure": "https://gwrms.telangana.gov.in/",
            "Inadequate sewage treatment": "https://atari-hyderabad.icar.gov.in/atarihyderabad/sstory_6?lang=en",
            "Pollution and environmental degradation": "https://www.telangana.gov.in/government-initiatives/mission-kakatiya/",
            "Septic system failures": "https://www.thehindu.com/news/national/telangana/explained-the-telangana-andhra-pradesh-water-dispute/article66880971.ece",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }        
        },
        {
          Tripura:{
            "Sanitary sewer overflows (SSOs)": "https://tjb.tripura.gov.in/",
            "Combined sewer overflows (CSOs)": "https://tspcb.tripura.gov.in/",
            "Aging infrastructure": "https://www.cgwb.gov.in/old_website/District_Profile/Tripura_districtprofile.html",
            "Inadequate sewage treatment": "https://tripura.gov.in/site-link?page=8",
            "Pollution and environmental degradation": "https://www.indiastattripura.com/Tripura-state/data/social-and-welfare-schemes/drought-prone-areas-programme-dpap",
            "Septic system failures": "https://tripuratimes.com/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }               
        },
        {
          'Uttar Pradesh':{
            "Sanitary sewer overflows (SSOs)": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Combined sewer overflows (CSOs)": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Aging infrastructure": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Inadequate sewage treatment": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km",
            "Pollution and environmental degradation": "https://www.ncfc.gov.in/",
            "Septic system failures": "https://www.worldwater.org/conflict/map/",
            "Sewage odors and nuisances": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage spills and leaks": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Illegal sewage discharges": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Need for new sewage pipeline": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km"
        }            
        },
        {
          Uttarakhand: {
            "Sanitary sewer overflows (SSOs)": "https://ujs.uk.gov.in/",
            "Combined sewer overflows (CSOs)": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Aging infrastructure": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Inadequate sewage treatment": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Pollution and environmental degradation": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km",
            "Septic system failures": "https://hindi.indiawaterportal.org/articles/water-crisis-uttarakhand",
            "Sewage odors and nuisances": "https://uk.nic.in/en/infrastructure/",
            "Sewage spills and leaks": "https://forest.uk.gov.in/climate-change",
            "Illegal sewage discharges": "https://swsm.uk.gov.in/",
            "Need for new sewage pipeline": "https://ujs.uk.gov.in/"
        }                
        },
        {
          'West Bengal': {
            "Sanitary sewer overflows (SSOs)": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Combined sewer overflows (CSOs)": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Aging infrastructure": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Inadequate sewage treatment": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km",
            "Pollution and environmental degradation": "http://wbdmd.gov.in/pages/drought_mapping.aspx",
            "Septic system failures": "https://www.aaf-india.com/industries/wastewater-treatment-facilities/",
            "Sewage odors and nuisances": "https://services.india.gov.in/service/detail/waste-water-analysis-1",
            "Sewage spills and leaks": "https://dialogue.earth/en/pollution/sewage-pollution-drives-deterioration-brahmaputra/",
            "Illegal sewage discharges": "https://morth.nic.in/permission-proposal-laying-underground-pipe-line-sewage-and-pipeline-dispose-strom-water-along-nh-km",
            "Need for new sewage pipeline": "https://www.wburbanservices.gov.in/page/cms/water_connection_procedure_665bb1"
        }        
        },
      ];
    
        // Find the object corresponding to the given state
        const stateObj = sewageProblem.find((obj) => stateName in obj);
        
        if (stateObj && stateName in stateObj) {
            // Find the issue in the state object
            const userStateData = stateObj[stateName];
            
          if (userStateData && issue in userStateData) {
            // Return the URL corresponding to the issue in the state
            return userStateData[issue];
          } 
        } 

    return "https://ssir.org/articles/entry/fixing_indias_sewage_problem#";
}


