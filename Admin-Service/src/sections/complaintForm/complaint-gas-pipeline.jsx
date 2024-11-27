import React, { useState, useCallback } from 'react'

import { Box } from '@mui/system';
import { Container } from '@mui/material';

import { useAuthContext } from 'src/auth/hooks';

import SvgColor from 'src/components/svg-color';

import ComplaintCard from './complaint-card';
import ComplaintTabs from './complaint-tabs';

const central =[ 
    {
        title: "Pipeline integrity management",
        description: " पाइपलाइन अखंडता प्रबंधन",
        navigate: "https://www.pngrb.gov.in/OurRegulation/CGD-Network-S-Admn12-07-2013.html",
        path: "/assets/images/complainSection/gasProblem/Pipeline integrity management.png"
    },
    {
        title: "Pipeline age and condition",
        description: "पाइपलाइन की आयु और स्थिति",
        navigate: "https://punegas.com/pune-gas-knowledge-center/all-you-need-to-know-about-gas-pipeline-testing/",
        path: "/assets/images/complainSection/gasProblem/Pipeline age and condition.png"
    },
    {
        title: "Material defects",
        description: "भौतिक दोष",
        navigate: "https://link.springer.com/article/10.1007/s10443-022-10066-9",
        path: "/assets/images/complainSection/gasProblem/Material defects.png"
    },
    {
        title: "Regulatory compliance",
        description: "विनियामक अनुपालन",
        navigate: "https://www.gemsons.com/managing-safety-and-compliance-challenges-in-the-oil-and-gas-industry/",
        path: "/assets/images/complainSection/gasProblem/Regulatory compliance.png"
    },
    {
        title: "Public awareness and engagement",
        description: "जन जागरूकता एवं सहभागिता",
        navigate: "https://link.springer.com/article/10.1007/s43621-021-00024-z",
        path: "/assets/images/complainSection/gasProblem/Public awareness and engagement.png"
    },
    {
        title: "Leaks",
        description: "लीक",
        navigate: "https://services.india.gov.in/service/detail/indane-bharatgas-hp-gas-lpg-emergency-leakage-complaint-number-1906",
        path: "/assets/images/complainSection/gasProblem/Leaks.png"
    },
    {
        title: "Corrosion",
        description: "जंग",
        navigate: "https://www.zavenir.com/insight/corrosion-protection-oil-gas-industry",
        path: "/assets/images/complainSection/gasProblem/Corrosion.png"
    },
    {
        title: "Mechanical damage",
        description: "यांत्रिक क्षति",
        navigate: "https://www.bankbazaar.com/gas-connection/indane-gas-complaint.html",
        path: "/assets/images/complainSection/gasProblem/Mechanical damage.png"
    },
    {
        title: "Third-party interference",
        description: "तीसरे पक्ष का हस्तक्षेप",
        navigate: "https://www.sciencedirect.com/science/article/abs/pii/S0950423017310719",
        path: "/assets/images/complainSection/gasProblem/Third-party interference.png"
    },
    {
        title: "Natural hazards",
        description: "प्राकृतिक खतरे",
        navigate: "https://ndma.gov.in/",
        path: "/assets/images/complainSection/gasProblem/Natural hazards.png"
    },

];


export default function ComplaintGasPipeline() {

    const { user:{UserAddressesses} } = useAuthContext();
    const {userState} = UserAddressesses && UserAddressesses[0];

    const state = [
        {
            title: "Leaks",
            description: "लीक",
            navigate:getGasURL(userState,"Leaks") ,
            path: "/assets/images/complainSection/gasProblem/Leaks.png"
        },
        {
            title: "Corrosion",
            description: "जंग",
            navigate: getGasURL(userState,"Corrosion") ,
            path: "/assets/images/complainSection/gasProblem/Corrosion.png"
        },
        {
            title: "Mechanical damage",
            description: "यांत्रिक क्षति",
            navigate: getGasURL(userState,"Mechanical damage") ,
            path: "/assets/images/complainSection/gasProblem/Mechanical damage.png"
        },
        {
            title: "Third-party interference",
            description: "तीसरे पक्ष का हस्तक्षेप",
            navigate: getGasURL(userState,"Third-party interference") ,
            path: "/assets/images/complainSection/gasProblem/Third-party interference.png"
        },
        {
            title: "Natural hazards",
            description: "प्राकृतिक खतरे",
            navigate: getGasURL(userState,"Natural hazards") ,
            path: "/assets/images/complainSection/gasProblem/Natural hazards.png"
        },
        {
            title: "Material defects",
            description: "भौतिक दोष",
            navigate: getGasURL(userState,"Material defects") ,
            path: "/assets/images/complainSection/gasProblem/Material defects.png"
        },
        {
            title: "Pipeline integrity management",
            description: " पाइपलाइन अखंडता प्रबंधन",
            navigate: getGasURL(userState,"Pipeline integrity management") ,
            path: "/assets/images/complainSection/gasProblem/Pipeline integrity management.png"
        },
        {
            title: "Pipeline age and condition",
            description: "पाइपलाइन की आयु और स्थिति",
            navigate: getGasURL(userState,"Pipeline age and condition") ,
            path: "/assets/images/complainSection/gasProblem/Pipeline age and condition.png"
        },
        {
            title: "Regulatory compliance",
            description: "विनियामक अनुपालन",
            navigate: getGasURL(userState,"Regulatory compliance") ,
            path: "/assets/images/complainSection/gasProblem/Regulatory compliance.png"
        },
        {
            title: "Public awareness and engagement",
            description: "जन जागरूकता एवं सहभागिता",
            navigate: getGasURL(userState,"Public awareness and engagement") ,
            path: "/assets/images/complainSection/gasProblem/Public awareness and engagement.png"
        }
    ];

    const [currentTab, setCurrentTab] = useState('central');

    const handleChangeTab = useCallback((event, newValue) => {
        setCurrentTab(newValue);
    }, []);


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



function getGasURL(stateName,issue){

    const gasPRoblemURLS = [
        {
          Rajasthan: {
            "Leaks": "https://eproc.rajasthan.gov.in/nicgep/app",
            "Corrosion": "https://www.mnit.ac.in/",
            "Mechanical damage": "https://iocl.com/apprenticeships",
            "Third-party interference": "https://www.assocham.org/privacy-policy.php",
            "Natural hazards": "https://thinkhazard.org/en/report/1506-india-rajasthan/CY",
            "Material defects": "https://services.india.gov.in/service/detail/defect-status-defect-in-newly-filed-cases-can-be-viewed-in-rajasthan-1",
            "Pipeline age and condition": "https://www.myscheme.gov.in/schemes/spk",
            "Regulatory compliance": "https://www.trai.gov.in/",
            "Public awareness and engagement": "https://jansoochna.rajasthan.gov.in/",
            "Pipeline integrity management": "https://iocl.com/our-upcoming-projects"
          }
        },
        {
          'Andhra Pradesh': {
            "Leaks": "https://services.india.gov.in/service/detail/indane-bharatgas-hp-gas-lpg-emergency-leakage-complaint-number-1906",
            "Corrosion": "https://pcb.ap.gov.in/UI/Home.aspx",
            "Mechanical damage": "https://scr.indianrailways.gov.in/view_section.jsp?lang=0&id=0,1,383,545&cssType=1",
            "Third-party interference": "https://msidc.ap.nic.in/wingshtml/ftp/T%20No%209%201%20A%20IPM%20Food%20Safety%20Lab.pdf",
            "Natural hazards": "https://apsdma.ap.gov.in/",
            "Material defects": "https://www.airproducts.com/",
            "Pipeline integrity management": "https://www.hindustanpetroleum.com/hp-pipeline-projects-and-operations",
            "Pipeline age and condition": "https://www.pipelineinfra.com/",
            "Regulatory compliance": "https://www.apcpdcl.in/",
            "Public awareness and engagement": "https://mopng.gov.in/en/exp-and-prod/production"
          }          
        },
        {
          'Arunachal Pradesh': {
            "Leaks": "https://services.india.gov.in/service/detail/apply-for-license-for-purchase-storage-and-sale-of-cooking-gas-lpg-arunachal-pradesh-1",
            "Corrosion": "https://arunachalpradesh.gov.in/",
            "Mechanical damage": "https://www.arunachalpwd.org/pdf/AP%20BUILDING%20AND%20OTHER%20CONSTRUCTION%20WORKERS%20welfare%20board.pdf",
            "Third-party interference": "https://arunachalpradesh.gov.in/webpolicy.html",
            "Natural hazards": "https://sdma-arunachal.in/",
            "Material defects": "https://www.arunachalpwd.org/pdf/AP%20BUILDING%20AND%20OTHER%20CONSTRUCTION%20WORKERS%20welfare%20board.pdf",
            "Pipeline integrity management": "https://mopng.gov.in/files/TableManagements/APR_E_1718.pdf",
            "Pipeline age and condition": "https://www.mygov.in/simple-page/terms-conditions/",
            "Regulatory compliance": "https://apserc.nic.in/pdf/Draft%20APSERC%20-%20GEOAC.pdf",
            "Public awareness and engagement": "https://apeda.nic.in/biomass.html"
          }          
        },
        {
          Assam: {
            "Leaks": "https://en.wikipedia.org/wiki/2020_Assam_gas_and_oil_leak",
            "Corrosion": "https://www.pbgpl.com/index.html",
            "Mechanical damage": "https://asdma.assam.gov.in/sites/default/files/swf_utility_folder/departments/asdma_revenue_uneecopscloud_com_oid_70/this_comm/asdmp_vol-_i.pdf",
            "Third-party interference": "https://labour.assam.gov.in/documents-detail/third-party-inspection-notification",
            "Natural hazards": "https://asdma.assam.gov.in/",
            "Material defects": "https://assamgas.org/tenders/pdf/25052023/nit_diesel-genretor-set.pdf",
            "Pipeline integrity management": "https://assamgas.org/md.html",
            "Pipeline age and condition": "https://industries.assam.gov.in/frontimpotentdata/pipe-gas-connection-under-assam-gas-company-ltd",
            "Regulatory compliance": "https://industriescom.assam.gov.in/documents-detail/notification-on-regulatory-compliance-burden",
            "Public awareness and engagement": "https://assamgas.org/png_drive.php"
          }          
        },
        {
          Bihar: {
            "Leaks": "https://www.creditmantri.com/bharatgas-complaint-registration/",
            "Corrosion": "https://www.magadhtmt.com/product/magadh-link/",
            "Mechanical damage": "https://state.bihar.gov.in/main/CitizenHome.html",
            "Third-party interference": "https://consumeraffairs.nic.in/sites/default/files/file-uploads/latestnews/Landmark_Judgements.pdf",
            "Natural hazards": "http://www.bsdma.org/",
            "Material defects": "https://bhocmms.nic.in/",
            "Pipeline integrity management": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Pipeline age and condition": "https://serviceonline.bihar.gov.in/",
            "Regulatory compliance": "https://www.financialexpress.com/business/industry-dpiit-launches-regulatory-compliance-portal-2175123/",
            "Public awareness and engagement": "https://state.bihar.gov.in/main/CitizenHome.html"
          }          
        },
        {
          Chhattisgarh: {
            "Leaks": "https://www.bankbazaar.com/gas-connection/lpg-emergency-helpline-number-for-all-lpg-leakage-complaints.html",
            "Corrosion": "https://www.researchgate.net/publication/318732253_Corrosion_problems_and_solutions_in_oil_gas_refining_and_petrochemical_industry",
            "Mechanical damage": "https://janshikayat.cg.nic.in/",
            "Third-party interference": "https://cea.nic.in/wp-content/uploads/irp/2023/05/NEP_2022_32_FINAL_GAZETTE-1.pdf",
            "Natural hazards": "http://sdma.cg.gov.in/SDMP%20English.pdf",
            "Material defects": "https://www.justdial.com/jdmart/Bilaspur-Chhattisgarh/Nitrogen-Gas-Wholesalers/jdm-1075707-ent-2-17689508?btype=Wholesalers",
            "Pipeline integrity management": "https://iocl.com/pages/cgd",
            "Pipeline age and condition": "https://www.tendersontime.com/india/chhattisgarh-tenders/pipeline-tenders/",
            "Regulatory compliance": "https://industries.cg.gov.in/",
            "Public awareness and engagement": "https://cgpolicehelp.cgstate.gov.in/public-awareness"
          }
          
        },
        {
          Goa: {
            "Leaks": "https://www.bajajfinserv.in/hp-gas-customer-care-number",
            "Corrosion": "https://geda.goa.gov.in/",
            "Mechanical damage": "https://www.goanaturalgas.com/wp-content/uploads/2018/05/Vol.-I-Web-min.pdf",
            "Third-party interference": "https://www.goanaturalgas.com/wp-content/uploads/2023/12/TenderT63.pdf",
            "Natural hazards": "https://www.goanaturalgas.com/privacy-policy/",
            "Material defects": "https://goaonline.gov.in/",
            "Pipeline integrity management": "https://www.goanaturalgas.com/#:~:text=Goa%20Natural%20Gas%20Private%20Limited%20has%20been%20supplying%20domestic%20PNG,and%20Kundaim%20for%20industrial%20supplies.",
            "Pipeline age and condition": "https://www.goanaturalgas.com/connection-basics/#:~:text=Customer%20can%20visit%20to%20our,the%20Printed%20forms%20for%20applying.&text=The%20DMA%2F%20company%20representative%20visits,be%20provided%20to%20that%20representative.",
            "Regulatory compliance": "https://www.teamleaseregtech.com/legalupdates/?cat=&Industries=&Regulators=&Departments=&Ministries=&state=Goa&notifications=&page=1&start=20240101&end=20240513",
            "Public awareness and engagement": "https://wcd.nic.in/sites/default/files/GUIDELINES%20OF%20MISSION%20VATSALYA%20DATED%2005%20JULY%202022_1.pdf"
          }
          
        },
        {
          Gujarat: {
            "Leaks": "https://economictimes.indiatimes.com/industry/energy/oil-gas/gujarat-gas-leaks-from-ongc-well-in-mehsana-people-complain-of-irritation-in-eyes-throat/articleshow/94562822.cms?from=mdr",
            "Corrosion": "https://www.tendersontime.com/india/details/corrosion-inhibitor-gas-line--ongc-quantity-required-15000-45712d7/",
            "Mechanical damage": "https://www.gujaratgas.com/",
            "Third-party interference": "https://www.gujaratgas.com/geteoifile.php?id=65d30fdaf02ea",
            "Natural hazards": "https://www.gujaratgas.com/hse/natural-gas-safety/",
            "Material defects": "https://iconnect.gujaratgas.com/Portal/contact-us-connect-me_template.aspx",
            "Pipeline integrity management": "https://www.hindustanpetroleum.com/pages/City-Gas-Distribution-Networks",
            "Pipeline age and condition": "https://morth.gov.in/sites/default/files/90.%20IPC_D-2503%20dt.%2020.12.2021_GGL_Laying%20NGP_Km%20241+500%20to%20Km%20244+815_PD-Rajkot%20eoffice-117642(1).pdf",
            "Regulatory compliance": "https://ongcindia.com/web/eng/sustainability/environment/compliancestatus",
            "Public awareness and engagement": "http://www.gsdma.org/"
          }          
        },
        {
          Haryana: {
            "Leaks": "http://hdma.gov.in/en/citizen-corner/chemical-and-industries",
            "Corrosion": "https://www.tenderdetail.com/State-tenders/haryana-tenders/corrosion-tenders",
            "Mechanical damage": "https://saralharyana.gov.in/",
            "Third-party interference": "http://hrocmms.nic.in/OCMMS/",
            "Natural hazards": "https://haryanacitygas.com/",
            "Material defects": "https://saralharyana.gov.in/",
            "Pipeline integrity management": "https://haryanacitygas.com/",
            "Pipeline age and condition": "https://in.favoes.com/ws?q=haryana%20gas%20pipeline&asid=fv_camp_2048&nw=g&de=c&locale=en_IN&ac=37562&cid=20843441247&aid=160270685247&kid=kwd-390188510151&vclid=CjwKCAjwupGyBhBBEiwA0UcqaHrHropWXCbZ7mKmVWJBd_xHIh3DBMDDgv6-zRb5m4iP3PXQqLjPPBoC_o8QAvD_BwE&antcl=792&gad_source=1&gclid=CjwKCAjwupGyBhBBEiwA0UcqaHrHropWXCbZ7mKmVWJBd_xHIh3DBMDDgv6-zRb5m4iP3PXQqLjPPBoC_o8QAvD_BwE",
            "Regulatory compliance": "https://haryana.gov.in/gigw-compliance-and-wcag-2-0-guidelines-based-websites/",
            "Public awareness and engagement": "https://www.mha.gov.in/sites/default/files/AnnualReport202122_24112022%5B1%5D.pdf"
          }          
        },
        {
          'Himachal Pradesh': {
            "Leaks": "https://dbtbharat.gov.in/central-scheme/list",
            "Corrosion": "https://www.tenderdetail.com/State-tenders/himachal-pradesh-tenders/corrosion-tenders",
            "Mechanical damage": "https://cmsankalp.hp.gov.in/Public/OnlineComplaint.aspx",
            "Third-party interference": "https://www.india.gov.in/official-website-himachal-pradesh-power-corporation-limited",
            "Natural hazards": "https://hpsdma.nic.in/",
            "Material defects": "https://hptenders.gov.in/nicgep/app?component=%24DirectLink&page=FrontEndTendersByOrganisation&service=direct",
            "Pipeline integrity management": "https://www.gailonline.com/pdf/Sustainability/GAILSustainabilityReport202223new.pdf",
            "Pipeline age and condition": "https://hppwd.hp.gov.in/sites/default/files/circular-documents/Polcy%20gas%20pipe%20line-letter%20%20(2).pdf",
            "Regulatory compliance": "https://hpsldc.com/regulatorycompCategory/complianceregulatory/",
            "Public awareness and engagement": "https://himachalservices.nic.in/en-IN/"
          }          
        },
        {
          "Jharkhand": {
            "Leaks": "https://byjus.com/free-ias-prep/this-day-in-history-dec02/",
            "Corrosion": "https://in.kompass.com/r/jharkand/in_injh/",
            "Mechanical damage": "https://nsdcindia.org/find-nsdc-training-centre",
            "Third-party interference": "https://spermit.jharkhand.gov.in/THIRD-PARTY-VIEW.aspx",
            "Natural hazards": "https://www.investindia.gov.in/state/jharkhand",
            "Material defects": "https://www.nsws.gov.in/s3fs/2022-10/Jharkhand%20Industrial%20and%20Investment%20Policy%202021.pdf",
            "Pipeline integrity management": "https://www.pngrb.gov.in/eng-web/ng-bid-17.html",
            "Pipeline age and condition": "https://gailcgd.gail.co.in/cgd/entry",
            "Regulatory compliance": "https://www.jbvnl.co.in/upload/0IOKV9.jbvnl%20tariff%20order%202020-2021.pdf",
            "Public awareness and engagement": "https://www.jreda.com/"
          }          
        },
        {
          "Karnataka": {
            "Leaks": "https://ebiz.karnataka.gov.in/ebiz/Public/InformationWizard",
            "Corrosion": "https://www.emeraldgrouppublishing.com/journal/acmm",
            "Mechanical damage": "https://engineering.careers360.com/articles/kcet-application-form",
            "Third-party interference": "https://www.karnatakaone.gov.in/",
            "Natural hazards": "https://ksdma.karnataka.gov.in/english",
            "Material defects": "https://www.metaljunction.com/show/content/auction",
            "Pipeline integrity management": "https://www.bharatpetroleum.in/our-businesses/Pipelines.aspx",
            "Pipeline age and condition": "https://ksiidc.karnataka.gov.in/new-page/Natural%20Gas%20Pipeline/en",
            "Regulatory compliance": "https://kerc.karnataka.gov.in/27/regulations/en",
            "Public awareness and engagement": "https://dsc.smartcities.gov.in/uploads/resource/resourceDoc/Resource_Doc_1708413627_Belagavi.pdf"
          }          
        },
        {
          Kerala: {
            "Leaks": "https://ecitizen.civilsupplieskerala.gov.in/index.php/c_login",
            "Corrosion": "https://www.hindustantimes.com/education/competitive-exams/keam-2024-syllabus-revised-check-subjects-and-topics-for-preparation-and-other-details-101715002645295.html",
            "Mechanical damage": "https://lc.kerala.gov.in/sites/default/files/inline-files/OSH-code.pdf",
            "Third-party interference": "https://industry.kerala.gov.in/images/pdf/2023/IND_POLICY_ENG.pdf",
            "Natural hazards": "https://sdma.kerala.gov.in/hazard-maps/",
            "Material defects": "https://lc.kerala.gov.in/sites/default/files/inline-files/OSH-code.pdf",
            "Pipeline integrity management": "https://prd.kerala.gov.in/en/node/136",
            "Pipeline age and condition": "https://www.gem.wiki/Kochi-Koottanad-Bangalore-Mangalore_Gas_Pipeline",
            "Regulatory compliance": "https://pib.gov.in/PressReleasePage.aspx?PRID=1690454",
            "Public awareness and engagement": "https://www.kerala.gov.in/"
          }          
        },
        {
          'Madhya Pradesh': {
            "Leaks": "https://chemicals.gov.in/bhopal-gas-leak",
            "Corrosion": "https://mining.mp.gov.in/VerifyEtp",
            "Mechanical damage": "https://mp.gov.in/",
            "Third-party interference": "https://mp.gov.in/Egovernacemp",
            "Natural hazards": "https://aapdasuraksha.mp.gov.in/",
            "Material defects": "http://mpwrd.gov.in/",
            "Pipeline integrity management": "https://www.marutisuzuki.com/more-from-us/finance",
            "Pipeline age and condition": "https://mptenders.gov.in/nicgep/app?component=view&page=WebTenderStatusLists&service=direct&sp=Sd9DJxNYeNZXpPfzb2eIdLQ%3D%3D",
            "Regulatory compliance": "https://www.india.gov.in/annual-regulatory-compliance-report-madhya-pradesh-poorv-kshetra-vidyut-vitaran-company-limited?page=13",
            "Public awareness and engagement": "https://www.niti.gov.in/sites/default/files/2023-02/Annual-Report-2022-2023-English_1.pdf"
          }          
        },
        {
          Maharashtra: {
            "Leaks": "https://mngl.in/",
            "Corrosion": "https://environmentclearance.nic.in/Staterecord.aspx?State_Name=Maharashtra",
            "Mechanical damage": "https://wrd.maharashtra.gov.in/Upload/PDF/Bugetory%20Offer.pdf",
            "Third-party interference": "https://www.sih.gov.in/sih2023PS",
            "Natural hazards": "https://www.naturalhazardsportal.govt.nz/s/about/overview",
            "Material defects": "https://idt.taxsutra.com/analysis/1955/Mumbai-Police-deployment-for-events-prima-facie-not-Security-Agency-services-Waives-pre-deposit?q=user",
            "Pipeline integrity management": "https://mngl.in/",
            "Pipeline age and condition": "https://mngl.in/",
            "Regulatory compliance": "https://aaplesarkar.mahaonline.gov.in/en",
            "Public awareness and engagement": "https://www.india.gov.in/"
          }          
        },
        {
          Manipur: {
            "Leaks": "https://economictimes.indiatimes.com/industry/energy/oil-gas/manipur-fuel-leaking-from-power-station-spills-over-to-streams-villages-affected/articleshow/106737579.cms?from=mdr",
            "Corrosion": "https://manipur.gov.in/wp-content/uploads/2012/10/ManipurSDCRFPVolume2.pdf",
            "Mechanical damage": "https://manipur.gov.in/wp-content/uploads/2013/11/draft-revised-state-transport-policy.pdf",
            "Third-party interference": "https://manipurtenders.gov.in/nicgep/app?page=Disclaimer&service=page",
            "Natural hazards": "https://www.mha.gov.in/sites/default/files/2022-08/National%2520Disaster%2520Management%2520Plan%2520May%25202016%5B1%5D.pdf",
            "Material defects": "https://morth.nic.in/2015-manipur",
            "Pipeline integrity management": "https://e-pao.net/GP.asp?src=21..200912.sep12",
            "Pipeline age and condition": "https://pngrb.gov.in/eng-web/",
            "Regulatory compliance": "https://eodbrcp.dpiit.gov.in/",
            "Public awareness and engagement": "https://manipur.nic.in/"
          }          
        },
        {
          Meghalaya: {
            "Leaks": "https://meghalaya.gov.in/forms/content/37677",
            "Corrosion": "https://mserc.gov.in/orders/2024-27/MePGCL_BusinessPlan_2024-27.pdf",
            "Mechanical damage": "https://meghalaya.gov.in/forms/content/37677",
            "Third-party interference": "https://megpgrams.gov.in/index.htm",
            "Natural hazards": "https://msdma.gov.in/",
            "Material defects": "https://megdmg.gov.in/",
            "Pipeline integrity management": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Pipeline age and condition": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Regulatory compliance": "https://eodbrcp.dpiit.gov.in/",
            "Public awareness and engagement": "http://megplanning.gov.in/"
          }          
        },
        {
          Mizoram: {
            "Leaks": "https://www.bankbazaar.com/gas-connection/indane-gas-complaint.html#:~:text=You%20can%20call%20the%20toll,This%20number%20is%20available%2024x7.",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pwd.mizoram.gov.in/page/aizawl-mechanical-division-ofice",
            "Third-party interference": "https://cea.nic.in/old/reports/annual/annualreports/annual_report-2018.pdf",
            "Natural hazards": "https://dmr.mizoram.gov.in/uploads/attachments/2022/03/353f4dfd194ec41b10171dafa25a1d7e/sdmp-2021-final.pdf",
            "Material defects": "https://fcsca.mizoram.gov.in/page/state-level-committee-for-city-gas-distribution-development",
            "Pipeline integrity management": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Pipeline age and condition": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Regulatory compliance": "https://eodbrcp.dpiit.gov.in/",
            "Public awareness and engagement": "http://megplanning.gov.in/"
          }          
        },
        {
          Nagaland: {
            "Leaks": "https://www.india.gov.in/official-website-nagaland",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Third-party interference": "https://en.wikipedia.org/wiki/Nagaland",
            "Natural hazards": "https://nsdma.nagaland.gov.in/home",
            "Material defects": "https://nagaland.gov.in/",
            "Pipeline integrity management": "https://www.adb.org/projects/54166-001/main",
            "Pipeline age and condition": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Regulatory compliance": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Public awareness and engagement": "http://megplanning.gov.in/"
          }          
        },
    
        {
          Odisha: {
            "Leaks": "https://odisha.gov.in/",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Third-party interference": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Natural hazards": "https://revenue.odisha.gov.in/",
            "Material defects": "https://www.odishaminerals.gov.in/",
            "Pipeline integrity management": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Pipeline age and condition": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Regulatory compliance": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Public awareness and engagement": "http://megplanning.gov.in/"
          }          
        },
        {
          Punjab: {
            "Leaks": "https://connect.punjab.gov.in/",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Third-party interference": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Natural hazards": "https://revenue.punjab.gov.in/sites/default/files/pbsdmp_0.pdf",
            "Material defects": "https://journals.sagepub.com/doi/10.1177/0019556119873442?icid=int.sj-full-text.similar-articles.3",
            "Pipeline integrity management": "https://punjab.gov.in/",
            "Pipeline age and condition": "https://mcjalandhar.in/wp-content/uploads/2018/09/Notification-of-Policy-Guidelines-the-work-of-laying-of-GAS-Pipelines.pdf",
            "Regulatory compliance": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Public awareness and engagement": "https://pwrmdc.punjab.gov.in/lining-projects/projects-in-pipeline"
          }          
        },
        {
          Sikkim: {
            "Leaks": "https://sikkim.gov.in/",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Third-party interference": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Natural hazards": "https://sikkim.gov.in/departments/land-revenue-disaster-management/natural-calamity",
            "Material defects": "https://sikkim.gov.in/",
            "Pipeline integrity management": "https://sikkimtender.gov.in/nicgep/app?page=Disclaimer&service=page",
            "Pipeline age and condition": "https://sikkimtender.gov.in/nicgep/app?page=Disclaimer&service=page",
            "Regulatory compliance": "https://sikkim.gov.in/departments/water-security-phe-department",
            "Public awareness and engagement": "https://sikkim.gov.in/departments/water-security-phe-department/customer-service"
          }          
        },
        {
          'Tamil Nadu':{
            "Leaks": "https://tnpcb.gov.in/",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Third-party interference": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Natural hazards": "https://tnsdma.tn.gov.in/",
            "Material defects": "https://tnsdma.tn.gov.in/",
            "Pipeline integrity management": "https://pngrb.gov.in/eng-web/",
            "Pipeline age and condition": "https://pngrb.gov.in/eng-web/",
            "Regulatory compliance": "https://sikkim.gov.in/departments/water-security-phe-department",
            "Public awareness and engagement": "https://sikkim.gov.in/departments/water-security-phe-department/customer-service"
          }          
        },
        {
          Telangana: {
            "Leaks": "https://tnpcb.gov.in/",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Third-party interference": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Natural hazards": "https://fire.telangana.gov.in/",
            "Material defects": "https://emunicipal.telangana.gov.in/Website/Circulars",
            "Pipeline integrity management": "https://tsboilers.cgg.gov.in/home.do;jsessionid=DA3CA4431E83629C89464E60F4143B2D",
            "Pipeline age and condition": "https://tsboilers.cgg.gov.in/home.do;jsessionid=DA3CA4431E83629C89464E60F4143B2D",
            "Regulatory compliance": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Public awareness and engagement": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html"
          }
          
        },
        {
          Tripura: {
            "Leaks": "https://industries.tripura.gov.in/natural-gas",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Third-party interference": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Natural hazards": "https://tdma.tripura.gov.in/",
            "Material defects": "https://tdma.tripura.gov.in/",
            "Pipeline integrity management": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Pipeline age and condition": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Regulatory compliance": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Public awareness and engagement": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html"
          }          
        },
        {
          'Uttar Pradesh': {
            "Leaks": "https://jansunwai.up.nic.in/",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Third-party interference": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Natural hazards": "https://upsdma.up.nic.in/",
            "Material defects": "https://upsdma.up.nic.in/",
            "Pipeline integrity management": "https://www.oisd.gov.in/oisd-standards-list",
            "Pipeline age and condition": "https://www.oisd.gov.in/oisd-standards-list",
            "Regulatory compliance": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Public awareness and engagement": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html"
          }          
        },
        {
          Uttarakhand: {
            "Leaks": "https://hngpl.in/",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Third-party interference": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Natural hazards": "https://usdma.uk.gov.in/",
            "Material defects": "https://usdma.uk.gov.in/",
            "Pipeline integrity management": "https://www.hindustanpetroleum.com/",
            "Pipeline age and condition": "https://www.hindustanpetroleum.com/",
            "Regulatory compliance": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Public awareness and engagement": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html"
          }          
        },
        {
          'West Bengal': {
            "Leaks": "https://cx.indianoil.in/webcenter/portal/Customer/pages_pages_initiatives/emergencyhelpline1906",
            "Corrosion": "https://cx.indianoil.in/webcenter/portal/Customer/pages_faq",
            "Mechanical damage": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Third-party interference": "https://pib.gov.in/Pressreleaseshare.aspx?PRID=1807790",
            "Natural hazards": "http://wbdmd.gov.in/Pages/Default.aspx",
            "Material defects": "http://wbdmd.gov.in/Pages/Default.aspx",
            "Pipeline integrity management": "https://energy.economictimes.indiatimes.com/news/oil-and-gas/clean-fuel-boost-to-kolkata-with-gail-pipeline-ready-in-3-months-official/107677905#:~:text=The%20pipeline%20is%20part%20of,gas%20stations%20in%20the%20state.",
            "Pipeline age and condition": "https://energy.economictimes.indiatimes.com/news/oil-and-gas/clean-fuel-boost-to-kolkata-with-gail-pipeline-ready-in-3-months-official/107677905#:~:text=The%20pipeline%20is%20part%20of,gas%20stations%20in%20the%20state.",
            "Regulatory compliance": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html",
            "Public awareness and engagement": "https://www.pngrb.gov.in/OurRegulation/NGP-F-No-Infra-IM-NGPL-1-2010.html"
          }
          
        },
      ];
    
        // Find the object corresponding to the given state
        const stateObj = gasPRoblemURLS.find((obj) => stateName in obj);
        
        if (stateObj && stateName in stateObj) {
            // Find the issue in the state object
            const userStateData = stateObj[stateName];
            
          if (userStateData && issue in userStateData) {
            // Return the URL corresponding to the issue in the state
            return userStateData[issue];
          } 
        } 
    return "https://rsgl.rajasthan.gov.in/";
  }

