import { paramCase } from 'src/utils/change-case';

import { _id, _postTitles } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------
// this using for main deashboard for all navigate options
export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
  docs: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
  zoneUI: 'https://mui.com/store/items/zone-landing-page/',
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  freeUI: 'https://mui.com/store/items/minimal-dashboard-free/',
  figma:
    'https://www.figma.com/file/hjxMnGUJCjY7pX8lQbS7kn/%5BPreview%5D-Minimal-Web.v5.4.0?type=design&node-id=0-1&mode=design&t=2fxnS70DuiTLGzND-0',
  product: {
    root: `/product`,
    checkout: `/product/checkout`,
    details: (id) => `/product/${id}`,
    demo: {
      details: `/product/${MOCK_ID}`,
    },
  },
  post: {
    root: `/post`,
    details: (title) => `/post/${paramCase(title)}`,
    demo: {
      details: `/post/${paramCase(MOCK_TITLE)}`,
    },
  },
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
      forgotpassword: `${ROOTS.AUTH}/jwt/forgotpassword`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    chat: `${ROOTS.DASHBOARD}/chat`,
    // kanban: `${ROOTS.DASHBOARD}/kanban`,
    // kanban_project: `${ROOTS.DASHBOARD}/kanban-project`,
    // user_kanban: `${ROOTS.DASHBOARD}/user-kanban`,
    general: {
      // Overview sidebar Nevigate
      app: `${ROOTS.DASHBOARD}/app`,
    },

    project: {
      details: (id) => `${ROOTS.DASHBOARD}/project/${id}`,
      list: `${ROOTS.DASHBOARD}/project`,
    },

    user_project: {
      details: (id) => `${ROOTS.DASHBOARD}/user-project/${id}`,
      list: `${ROOTS.DASHBOARD}/user-project`,
    },

    voterview: {
      root: `${ROOTS.DASHBOARD}/voterview`,
      details: `${ROOTS.DASHBOARD}/voterview/details`,
      info: (item) => `${ROOTS.DASHBOARD}/voterview/details/info/${item}`,
    },

    user: {
      // Managment Sidebar Nevigate
      root: `${ROOTS.DASHBOARD}/user`,
      new: `${ROOTS.DASHBOARD}/user/new`,
      list: `${ROOTS.DASHBOARD}/user/list`,
      cards: `${ROOTS.DASHBOARD}/user/cards`,
      profile: `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
      edit: (id) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
      demo: {
        edit: `${ROOTS.DASHBOARD}/user/${MOCK_ID}/edit`,
      },
    },
    // Admin Contact
    contact: {
      root: `${ROOTS.DASHBOARD}/contact`,
      details: (id) => `${ROOTS.DASHBOARD}/contact/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/contact/${id}/edit`,
    },

    electionManagment: {
      // Election Managment Sidebar Nevigate
      root: `${ROOTS.DASHBOARD}/candidate-management`,
      new: `${ROOTS.DASHBOARD}/candidate-management/add-candidate`,
      list: `${ROOTS.DASHBOARD}/user/list`,
      cards: `${ROOTS.DASHBOARD}/user/cards`,
      profile: `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
      edit: (id) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
      demo: {
        edit: `${ROOTS.DASHBOARD}/user/${MOCK_ID}/edit`,
      },
    },
    // Voter Path by Thomas
    voter: {
      root: `${ROOTS.DASHBOARD}/voter`,
      new: `${ROOTS.DASHBOARD}/voter/new`,
      list: `${ROOTS.DASHBOARD}/voter/list`,
      details: (id) => `${ROOTS.DASHBOARD}/voter/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/voter/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/voter/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/voter/${MOCK_ID}/edit`,
      },
    },

    vote_prediction: {
      root: `${ROOTS.DASHBOARD}/vote_prediction`,
      list: `${ROOTS.DASHBOARD}/vote_prediction/list`,
      details: (id) => `${ROOTS.DASHBOARD}/vote_prediction/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/vote_prediction/${id}/edit`,
    },

    // expenses Path by Abhiskek
    expenses: {
      root: `${ROOTS.DASHBOARD}/expenses`,
      new: `${ROOTS.DASHBOARD}/expenses/new`,
      details: (id) => `${ROOTS.DASHBOARD}/expenses/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/expenses/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/expenses/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/expenses/${MOCK_ID}/edit`,
      },
    },

    // party Path by Ankit kumar, ayaz, shubhranshu( 9 april )

    party: {
      root: `${ROOTS.DASHBOARD}/party`,
      new: `${ROOTS.DASHBOARD}/party/new`,
      details: (id) => `${ROOTS.DASHBOARD}/party/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/party/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/party/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/party/${MOCK_ID}/edit`,
      },
    },

    // Appointment Path by Abhishek , Saurabh, Avanish( 9 april )

    Appointment: {
      root: `${ROOTS.DASHBOARD}/Appointment`,
      new: `${ROOTS.DASHBOARD}/Appointment/new`,
      card: `${ROOTS.DASHBOARD}/Appointment/card`,
      details: (id) => `${ROOTS.DASHBOARD}/Appointment/${id}`,
      tracklist:(id)=>`${ROOTS.DASHBOARD}/Appointment/list/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/Appointment/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/Appointment/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/Appointment/${MOCK_ID}/edit`,
      },
    },

    // party Path by Ankit kumar, ayaz, shubhranshu( 10 april )

    party_alliance: {
      root: `${ROOTS.DASHBOARD}/party_alliance`,
      new: `${ROOTS.DASHBOARD}/party_alliance/new`,
      details: (id) => `${ROOTS.DASHBOARD}/party_alliance/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/party_alliance/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/party_alliance/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/party_alliance/${MOCK_ID}/edit`,
      },
    },

    // Category Path (28 march Shubhranshu)
    category: {
      root: `${ROOTS.DASHBOARD}/category`,
      new: `${ROOTS.DASHBOARD}/category/new`,
      details: (id) => `${ROOTS.DASHBOARD}/category/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/category/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/category/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/category/${MOCK_ID}/edit`,
      },
    },

    // Claim Path (29 march Shubhranshu)
    claim: {
      root: `${ROOTS.DASHBOARD}/claim`,
      new: `${ROOTS.DASHBOARD}/claim/new`,
      details: (id) => `${ROOTS.DASHBOARD}/claim/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/claim/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/claim/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/claim/${MOCK_ID}/edit`,
      },
    },

    // Invoice Path by Abhiskek
    invoice: {
      root: `${ROOTS.DASHBOARD}/invoice`,
      new: `${ROOTS.DASHBOARD}/invoice/new`,
      details: (id) => `${ROOTS.DASHBOARD}/invoice/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/invoice/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}/edit`,
      },
    },

    // Candidate Path By Deepak
    candidate: {
      root: `${ROOTS.DASHBOARD}/candidate`,
      new: `${ROOTS.DASHBOARD}/candidate/new`,
      list: `${ROOTS.DASHBOARD}/candidate/list`,
      details: (id) => `${ROOTS.DASHBOARD}/candidate/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/candidate/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/candidate/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/candidate/${MOCK_ID}/edit`,
      },
    },

    // Booth Path by Avanish
    boothmanagement: {
      root: `${ROOTS.DASHBOARD}/boothmanagement`,
      new: `${ROOTS.DASHBOARD}/boothmanagement/new`,
      list: `${ROOTS.DASHBOARD}/boothmanagement/list`,
      details: (id) => `${ROOTS.DASHBOARD}/boothmanagement/${id}`,
      mockdetails: `${ROOTS.DASHBOARD}/boothmanagement/2`,
      edit: (id) => `${ROOTS.DASHBOARD}/boothmanagement/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/boothmanagement/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/boothmanagement/${MOCK_ID}/edit`,
      },
    },
    // sms managment by Saurabh (12 april saurabh)
    sms: {
      root: `${ROOTS.DASHBOARD}/sms`,
      new: `${ROOTS.DASHBOARD}/sms/new`,
      list: `${ROOTS.DASHBOARD}/sms/list`,
      details: (id) => `${ROOTS.DASHBOARD}/sms/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/sms/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/sms/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/sms/${MOCK_ID}/edit`,
      },
    },

    // Booth Path By Subranshu
    wardmanagement: {
      root: `${ROOTS.DASHBOARD}/wardmanagement`,
      new: `${ROOTS.DASHBOARD}/wardmanagement/new`,
      details: (id) => `${ROOTS.DASHBOARD}/wardmanagement/${id}`,
      mockdetails: `${ROOTS.DASHBOARD}/wardmanagement/1`,
      edit: (id) => `${ROOTS.DASHBOARD}/wardmanagement/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/wardmanagement/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/wardmanagement/${MOCK_ID}/edit`,
      },
    },

    // Service version Path By Ayaz
    serviceversion: {
      root: `${ROOTS.DASHBOARD}/serviceversion`,
      new: `${ROOTS.DASHBOARD}/serviceversion/new`,
      list: `${ROOTS.DASHBOARD}/serviceversion/list`,
      details: (id) => `${ROOTS.DASHBOARD}/serviceversion/${id}`,
      // mockdetails:`${ROOTS.DASHBOARD}/serviceversion/1`,
      edit: (id) => `${ROOTS.DASHBOARD}/serviceversion/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/serviceversion/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/serviceversion/${MOCK_ID}/edit`,
      },
    },

    // Role Path By Thomas
    userRoleManagement: {
      root: `${ROOTS.DASHBOARD}/userRoleManagement`,
      new: `${ROOTS.DASHBOARD}/userRoleManagement/new`,
      list: `${ROOTS.DASHBOARD}/userRoleManagement/list`,
      details: (id) => `${ROOTS.DASHBOARD}/userRoleManagement/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/userRoleManagement/${id}/edit`,
    },

    userProfileManagement: {
      root: `${ROOTS.DASHBOARD}/userProfileManagement`,
      new: `${ROOTS.DASHBOARD}/userProfileManagement/new`,
      list: `${ROOTS.DASHBOARD}/userProfileManagement/list`,
      details: (id) => `${ROOTS.DASHBOARD}/userProfileManagement/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/userProfileManagement/${id}/edit`,
      userEdit: (id) => `${ROOTS.DASHBOARD}/userProfileManagement/${id}/userEdit`,
      userOwnerEdit: (id) => `${ROOTS.DASHBOARD}/userProfileManagement/${id}/userOwnerEdit`,
    },

    // Election Path By Saurab
    electionmanagement: {
      root: `${ROOTS.DASHBOARD}/electionmanagement`,
      new: `${ROOTS.DASHBOARD}/electionmanagement/new`,
      details: (id) => `${ROOTS.DASHBOARD}/electionmanagement/${id}`,
      mockdetails: `${ROOTS.DASHBOARD}/electionmanagement/1`,
      edit: (id) => `${ROOTS.DASHBOARD}/electionmanagement/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/electionmanagement/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/electionmanagement/${MOCK_ID}/edit`,
      },
    },

    poolmanagement: {
      root: `${ROOTS.DASHBOARD}/poolmanagement`,
      new: `${ROOTS.DASHBOARD}/poolmanagement/new`,
      list: `${ROOTS.DASHBOARD}/poolmanagement/list`,
      details: (id) => `${ROOTS.DASHBOARD}/poolmanagement/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/poolmanagement/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/poolmanagement/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/poolmanagement/${MOCK_ID}/edit`,
      },
    },
    // our-work  By saurabh
    work: {
      root: `${ROOTS.DASHBOARD}/work`,
      new: `${ROOTS.DASHBOARD}/work/new`,
      list: `${ROOTS.DASHBOARD}/work/list`,
      details: (id) => `${ROOTS.DASHBOARD}/work/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/work/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/work/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/work/${MOCK_ID}/edit`,
      },
    },

    model: {
      root: `${ROOTS.DASHBOARD}/model`,
      new: `${ROOTS.DASHBOARD}/model/new`,
      list: `${ROOTS.DASHBOARD}/model/list`,
      details: (id) => `${ROOTS.DASHBOARD}/model/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/model/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/model/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/model/${MOCK_ID}/edit`,
      },
    },

    // Transport Management By Ankit
    driver: {
      root: `${ROOTS.DASHBOARD}/driver`,
      new: `${ROOTS.DASHBOARD}/driver/new`,
      details: (id) => `${ROOTS.DASHBOARD}/driver/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/driver/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/driver/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/driver/${MOCK_ID}/edit`,
      },
    },

    wardleader: {
      root: `${ROOTS.DASHBOARD}/wardleader`,
      list: `${ROOTS.DASHBOARD}/wardleader/list`,
      new: `${ROOTS.DASHBOARD}/wardleader/new`,
      details: (id) => `${ROOTS.DASHBOARD}/wardleader/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/wardleader/${id}/edit`,
    },
    wardvol: {
      root: `${ROOTS.DASHBOARD}/wardvol`,
      list: `${ROOTS.DASHBOARD}/wardvol/list`,
      new: `${ROOTS.DASHBOARD}/wardvol/new`,
      details: (id) => `${ROOTS.DASHBOARD}/wardvol/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/wardvol/${id}/edit`,
    },
    ambulancetrip: {
      root: `${ROOTS.DASHBOARD}/ambulancetrip`,
      list: `${ROOTS.DASHBOARD}/ambulancetrip/list`,
      new: `${ROOTS.DASHBOARD}/ambulancetrip/new`,
      details: (id) => `${ROOTS.DASHBOARD}/ambulancetrip/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/ambulancetrip/${id}/edit`,
    },
    createtrip: {
      root: `${ROOTS.DASHBOARD}/createtrip`,
      list: `${ROOTS.DASHBOARD}/createtrip/list`,
      new: `${ROOTS.DASHBOARD}/createtrip/new`,
      details: (id) => `${ROOTS.DASHBOARD}/createtrip/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/createtrip/${id}/edit`,
    },
    assigndriver: {
      root: `${ROOTS.DASHBOARD}/assigndriver`,
      list: `${ROOTS.DASHBOARD}/assigndriver/list`,
      new: `${ROOTS.DASHBOARD}/assigndriver/new`,
      details: (id) => `${ROOTS.DASHBOARD}/assigndriver/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/assigndriver/${id}/edit`,
    },
    tripdriver: {
      root: `${ROOTS.DASHBOARD}/tripdriver`,
      list: `${ROOTS.DASHBOARD}/tripdriver/list`,
      new: `${ROOTS.DASHBOARD}/tripdriver/new`,
      edit: (id) => `${ROOTS.DASHBOARD}/tripdriver/${id}/edit`,
    },

    vehicle: {
      root: `${ROOTS.DASHBOARD}/vehicle`,
      new: `${ROOTS.DASHBOARD}/vehicle/new`,
      details: (id) => `${ROOTS.DASHBOARD}/vehicle/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/vehicle/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/vehicle/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/vehicle/${MOCK_ID}/edit`,
      },
    },

    trip: {
      root: `${ROOTS.DASHBOARD}/trip`,
      requestedList: `${ROOTS.DASHBOARD}/trip/requestedtrip`,
      managedList: `${ROOTS.DASHBOARD}/trip/managedtrip/list`,
      new: `${ROOTS.DASHBOARD}/trip/new`,
      details: (id) => `${ROOTS.DASHBOARD}/trip/${id}`,
      tripManagement: (id) => `${ROOTS.DASHBOARD}/trip/${id}/details`,
      edit: (id) => `${ROOTS.DASHBOARD}/trip/${id}/edit`,
    },
    callAmbulance:{
      root: `${ROOTS.DASHBOARD}/callAmbulance`,
      requestedList: `${ROOTS.DASHBOARD}/callAmbulance/requestedtrip`,
      managedList: `${ROOTS.DASHBOARD}/callAmbulance/managedtrip/list`,
      new: `${ROOTS.DASHBOARD}/callAmbulance/new`,
      details: (id) => `${ROOTS.DASHBOARD}/callAmbulance/${id}`,
      tripManagement: (id) => `${ROOTS.DASHBOARD}/callAmbulance/${id}/details`,
      edit: (id) => `${ROOTS.DASHBOARD}/callAmbulance/${id}/edit`,
    },
    blog: {
      root: `${ROOTS.DASHBOARD}/blog`,
      list: `${ROOTS.DASHBOARD}/blog/list`,
      new: `${ROOTS.DASHBOARD}/blog/new`,
      edit: (id) => `${ROOTS.DASHBOARD}/blog/${id}/edit`,
      details: (id) => `${ROOTS.DASHBOARD}/blog/${id}`,
    },

    voterReferal: {
      root: `${ROOTS.DASHBOARD}`,
      // list: `${ROOTS.DASHBOARD}/voterReferal/list`,
      new: `${ROOTS.DASHBOARD}/voterReferal/new`,
      // edit: (id) => `${ROOTS.DASHBOARD}/blog/${id}/edit`,
      // details: (id) => `${ROOTS.DASHBOARD}/blog/${id}`,
    },

    votingSlip: {
      root: `${ROOTS.DASHBOARD}/votingSlip`,
      // list: `${ROOTS.DASHBOARD}/voterReferal/list`,
      new: `${ROOTS.DASHBOARD}/votingSlip/new`,
      // edit: (id) => `${ROOTS.DASHBOARD}/blog/${id}/edit`,
      // details: (id) => `${ROOTS.DASHBOARD}/blog/${id}`,
    },

    ComplaintForm: {
      root: `${ROOTS.DASHBOARD}/complaintForm`,
      // list: `${ROOTS.DASHBOARD}/voterReferal/list`,
      new: `${ROOTS.DASHBOARD}/complaintForm/new`,
      // edit: (id) => `${ROOTS.DASHBOARD}/blog/${id}/edit`,
      // details: (id) => `${ROOTS.DASHBOARD}/blog/${id}`,
    },

    TourAndTravels: {
      root: `${ROOTS.DASHBOARD}/tourAndTravels`,
      // list: `${ROOTS.DASHBOARD}/voterReferal/list`,
      new: `${ROOTS.DASHBOARD}/tourAndTravels/new`,
      // edit: (id) => `${ROOTS.DASHBOARD}/blog/${id}/edit`,
      // details: (id) => `${ROOTS.DASHBOARD}/blog/${id}`,
    },

    candidateLibrary: {
      root: `${ROOTS.DASHBOARD}/candidateLibrary`,
      list: `https://affidavit.eci.gov.in/`,
      // new: `${ROOTS.DASHBOARD}/candidateLibrary/new`,
      // edit: (id) => `${ROOTS.DASHBOARD}/blog/${id}/edit`,
      // details: (id) => `${ROOTS.DASHBOARD}/blog/${id}`,
    },
    AssignedVehicle: {
      root: `${ROOTS.DASHBOARD}/AssignedVehicle`,
      // list: `${ROOTS.DASHBOARD}/voterReferal/list`,
      new: `${ROOTS.DASHBOARD}/AssignedVehicle/new`,
      // edit: (id) => `${ROOTS.DASHBOARD}/blog/${id}/edit`,
      // details: (id) => `${ROOTS.DASHBOARD}/blog/${id}`,
    },

    
    
    StudentCareer: {
      root: `${ROOTS.DASHBOARD}/StudentCareer`,
      new: `${ROOTS.DASHBOARD}/StudentCareer/new`,
    },

    FarmerService: {
      root: `${ROOTS.DASHBOARD}/FarmerService`,
      new: `${ROOTS.DASHBOARD}/FarmerService/new`,
    },
    GovtService: {
      root: `${ROOTS.DASHBOARD}/GovtService`,
      new: `${ROOTS.DASHBOARD}/GovtService/new`,
    },
    LabourService: {
      root: `${ROOTS.DASHBOARD}/LabourService`,
      new: `${ROOTS.DASHBOARD}/LabourService/new`,
    },

    WomanEmpourment: {
      root: `${ROOTS.DASHBOARD}/WomanEmpourment`,
      new: `${ROOTS.DASHBOARD}/WomanEmpourment/new`,
    },

    GovtScheme: {
      root: `${ROOTS.DASHBOARD}/GovtScheme`,
      new: `${ROOTS.DASHBOARD}/GovtScheme/new`,
    },

    BussinessRoadmap: {
      root: `${ROOTS.DASHBOARD}/BussinessRoadmap`,
      new: `${ROOTS.DASHBOARD}/BussinessRoadmap/new`,
    },

    FeedbackPage: {
      root: `${ROOTS.DASHBOARD}/FeedbackPage`,
      new: `${ROOTS.DASHBOARD}/FeedbackPage/new`,
      list: `${ROOTS.DASHBOARD}/FeedbackPage/list`,
      details: (id) => `${ROOTS.DASHBOARD}/FeedbackPage/${id}`,
    },

    // added by Pankaj 09 May
    templateManagement: {
      root: `${ROOTS.DASHBOARD}/template`,
      new: `${ROOTS.DASHBOARD}/template/new`,
      list: `${ROOTS.DASHBOARD}/template/list`,
    },

     // added by Pankaj 00 May
     templateLibrary: {
      root: `${ROOTS.DASHBOARD}/template-library`,
      project: `${ROOTS.DASHBOARD}/template-library/project`,
      list: `${ROOTS.DASHBOARD}/template-library/list`,
    },
    survey: {
      root: `${ROOTS.DASHBOARD}/survey`,
      list: `${ROOTS.DASHBOARD}/survey/list`,
      new: `${ROOTS.DASHBOARD}/survey/new`,
      edit: (id) => `${ROOTS.DASHBOARD}/survey/${id}/edit`,
      details: (id) => `${ROOTS.DASHBOARD}/survey/${id}`,
    },
    fill_survey: {
      root: `${ROOTS.DASHBOARD}/fill_survey`,
      list: `${ROOTS.DASHBOARD}/fill_survey/list`,
      new: `${ROOTS.DASHBOARD}/fill_survey/new`,
      edit: (id) => `${ROOTS.DASHBOARD}/fill_survey/${id}/edit`,
      details: (id) => `${ROOTS.DASHBOARD}/fill_survey/${id}`,
    },
  },
};
