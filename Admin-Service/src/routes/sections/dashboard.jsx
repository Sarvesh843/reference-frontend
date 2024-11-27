import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// OVERVIEW
const IndexPage = lazy(() => import('src/pages/dashboard/app'));
const OverviewEcommercePage = lazy(() => import('src/pages/dashboard/ecommerce'));
const OverviewAnalyticsPage = lazy(() => import('src/pages/dashboard/analytics'));
const OverviewBankingPage = lazy(() => import('src/pages/dashboard/banking'));
const OverviewBookingPage = lazy(() => import('src/pages/dashboard/booking'));
const OverviewFilePage = lazy(() => import('src/pages/dashboard/file'));

//  VOTER VIEW
const VoterViewPage = lazy(() => import('src/pages/dashboard/voter_user'));
const VoterUserInfo = lazy(() => import('src/pages/dashboard/voter_info'));

// USER
const UserProfilePage = lazy(() => import('src/pages/dashboard/user/profile'));
const UserCardsPage = lazy(() => import('src/pages/dashboard/user/cards'));
const UserListPage = lazy(() => import('src/pages/dashboard/user/list'));
const UserAccountPage = lazy(() => import('src/pages/dashboard/user/account'));
const UserCreatePage = lazy(() => import('src/pages/dashboard/user/new'));
const UserEditPage = lazy(() => import('src/pages/dashboard/user/edit'));

// APP
const ChatPage = lazy(() => import('src/pages/dashboard/chat'));

// ADMIN CONTACT

const ContactListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/adminContact/list')
);
const ContactDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/adminContact/details')
);
const ContactEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/adminContact/edit')
);

// VOTER
const Addvoter = lazy(
  () => import('src/pages/dashboard/election-managment-services/VoterManagment/AddVoter')
);
const ShowvoterList = lazy(
  () => import('src/pages/dashboard/election-managment-services/VoterManagment/ShowVoterList')
);
const ShowVoterDetail = lazy(
  () => import('src/pages/dashboard/election-managment-services/VoterManagment/VoterDetail')
);
const VoterEditDetail = lazy(
  () => import('src/pages/dashboard/election-managment-services/VoterManagment/EditVoter')
);

// VOTE_PREDICTION
const VotePredictionListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/Voter_predictionManagement/ShowVoterList')
);
const VotePredictionDetailPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/Voter_predictionManagement/VoterDetail')
);
const VotePredictionEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/Voter_predictionManagement/EditVoter')
);


// EXPENSES MANAGEMENT

// CLAIM MANAGEMENT
const ClaimListPage = lazy(() => import('src/pages/dashboard/expenses-management-services/claim-management/list'));

const ClaimDetailsPage = lazy(() => import('src/pages/dashboard/expenses-management-services/claim-management/details'));

const ClaimEditPage = lazy(() => import('src/pages/dashboard/expenses-management-services/claim-management/edit'));

const ClaimCreatePage = lazy(() => import('src/pages/dashboard/expenses-management-services/claim-management/new'));

// CATEGORY MANAGEMENT
const CategoryListPage = lazy(() => import('src/pages/dashboard/expenses-management-services/category-management/list'));

const CategoryDetailsPage = lazy(() => import('src/pages/dashboard/expenses-management-services/category-management/details'));

const CategoryEditPage = lazy(() => import('src/pages/dashboard/expenses-management-services/category-management/edit'));

const CategoryCreatePage = lazy(() => import('src/pages/dashboard/expenses-management-services/category-management/new'));

// INVOICE MANAGEMENT

const ExpensesListPage = lazy(() => import('src/pages/dashboard/expenses-management-services/invoice-management/list'));

const ExpensesDetailsPage = lazy(() => import('src/pages/dashboard/expenses-management-services/invoice-management/details'));

const ExpensesEditPage = lazy(() => import('src/pages/dashboard/expenses-management-services/invoice-management/edit'));

const ExpensesCreatePage = lazy(() => import('src/pages/dashboard/expenses-management-services/invoice-management/new'));



// CANDIDATE BY DEEPAK

const CandidateListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/candidate/list')
);
const CandidateCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/candidate/new')
);
const CandidateDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/candidate/details')
);
const CandidateEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/candidate/edit')
);

// BOOTH BY AVNISH
const BoothListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/boothmanagement/list')
);
const BoothDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/boothmanagement/details')
);
const BoothEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/boothmanagement/edit')
);
const BoothCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/boothmanagement/new')
);

// Ward By Shubranshu

const WardListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/wardmanagement/list')
);
const WardCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/wardmanagement/new')
);
const WardDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/wardmanagement/details')
);
const WardEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/wardmanagement/edit')
);


// Service version by Ayaz

const ServiceVersionListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/serviceversion/list')
);
const ServiceVersionCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/serviceversion/new')
);
const ServiceVersionDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/serviceversion/details')
);
const ServiceVersionEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/serviceversion/edit')
);

// User Profile Management By Thomas Talukdar

const UserProfileList = lazy(
  () => import('src/pages/dashboard/user-profile-management/list')
);
const UserProfileCreatePage = lazy(
  () => import('src/pages/dashboard/user-profile-management/new')
);
const UserProfileDetailsPage = lazy(
  () => import('src/pages/dashboard/user-profile-management/details')
);
const UserProfileEditPage = lazy(
  () => import('src/pages/dashboard/user-profile-management/edit')
);
const UserProfileRoleEditPage = lazy(
  () => import('src/pages/dashboard/user-profile-management/profileEdit')
);

const UserProfileOwnerEditPage = lazy(
  () => import('src/pages/dashboard/user-profile-management/ownerEdit')
);

// User Role Management By Thomas Talukdar

const UserRoleListPage = lazy(
  () => import('src/pages/dashboard/user-role-management/list')
);
const UserRoleCreatePage = lazy(
  () => import('src/pages/dashboard/user-role-management/new')
);
const UserRoleDetailsPage = lazy(
  () => import('src/pages/dashboard/user-role-management/details')
);
const UserRoleEditPage = lazy(
  () => import('src/pages/dashboard/user-role-management/edit')
);

// Election By Saurab

const ElectionListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/electionmanagement/list')
);
const ElectionCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/electionmanagement/new')
);
const ElectionDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/electionmanagement/details')
);
const ElectionEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/electionmanagement/edit')
);

// Transport Management (Driver)By Ankit

const DriverListPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/driver/list')
);
const DriverCreatePage = lazy(
  () => import('src/pages/dashboard/transport-management-services/driver/new')
);
const DriverDetailsPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/driver/details')
);
const DriverEditPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/driver/edit')
);


// Transport Managment (Vehicle) By Ankit
const VehicleListPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/vehicle/list')
);
const VehicleCreatePage = lazy(
  () => import('src/pages/dashboard/transport-management-services/vehicle/new')
);
const VehicleDetailsPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/vehicle/details')
);
const VehicleEditPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/vehicle/edit')
);

// Transport Managment (Trip) By Ankit Sharma 
const TripListPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/trip/list')
);
const TripCreatePage = lazy(
  () => import('src/pages/dashboard/transport-management-services/trip/new')
);
const TripDetailsPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/trip/details')
);
const TripEditPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/trip/edit')
);
const TripManagedListPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/trip/managedlist')
);
const TripManagedDetailsView = lazy(
  () => import('src/pages/dashboard/transport-management-services/trip/manageddetailsview')
);
// Transport Management (Ambulance) By Ankit Sharma 
const AmbulanceListPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/trip/list')
);
const AmbulanceCreatePage = lazy(
  () => import('src/pages/dashboard/transport-management-services/ambulance/new')
);
const AmbulanceDetailsPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/ambulance/details')
);
const AmbulanceEditPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/ambulance/edit')
);
const AmbulanceManagedListPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/ambulance/managedlist')
);
const AmbulanceManagedDetailsView = lazy(
  () => import('src/pages/dashboard/transport-management-services/ambulance/manageddetailsview')
);
// OurWork Management By saurabh
const WorkListPage = lazy(
  () => import('src/pages/dashboard/our-work/list')
);
const WorkCreatePage = lazy(
  () => import('src/pages/dashboard/our-work/new')
);
const WorkDetailsPage = lazy(
  () => import('src/pages/dashboard/our-work/details')
);
const WorkEditPage = lazy(
  () => import('src/pages/dashboard/our-work/edit')
);

// work Management By avanish

const ModelListPage = lazy(
  () => import('src/pages/dashboard/model_pop/list')
);
const ModelCreatePage = lazy(
  () => import('src/pages/dashboard/model_pop/new')
);
const ModelDetailsPage = lazy(
  () => import('src/pages/dashboard/model_pop/details')
);
const ModelEditPage = lazy(
  () => import('src/pages/dashboard/model_pop/edit')
);


// Pooling Management By Thomas
const PoolListPage = lazy(
  () => import('src/pages/dashboard/pooling-Management/list')
);
const PoolCreatePage = lazy(
  () => import('src/pages/dashboard/pooling-Management/new')
);
const PoolDetailsPage = lazy(
  () => import('src/pages/dashboard/pooling-Management/details')
);
const PoolEditPage = lazy(
  () => import('src/pages/dashboard/pooling-Management/edit')
);

const TripDriverListPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/trip_driver/list')
);
const TripDriverCreatePage = lazy(
  () => import('src/pages/dashboard/transport-management-services/trip_driver/new')
);
const TripDriverEditPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/trip_driver/edit')
);
// TMS User interface WardVol By Ankit
const WardvolListPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/wardvol/list')
);
const WardvolCreatePage = lazy(
  () => import('src/pages/dashboard/transport-management-services/wardvol/new')
);
const WardvolDetailsPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/wardvol/details')
);
// const WardvolEditPage = lazy(
//   () => import('src/pages/dashboard/transport-management-services/wardvol/edit')
// );

// TMS Ambulance Booking By Ankit Sharma
const AmbulanceTripListPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/ambulance-trip/list')
);
const AmbulanceTripCreatePage = lazy(
  () => import('src/pages/dashboard/transport-management-services/ambulance-trip/new')
);
const AmbulanceTripDetailsPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/ambulance-trip/details')
);
const AmbulanceTripEditPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/ambulance-trip/edit')
);


// TMS User interface WardLeader By Ankit
const WardLeaderListPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/wardleader/list')
);
const WardLeaderCreatePage = lazy(
  () => import('src/pages/dashboard/transport-management-services/wardleader/new')
);
const WardLeaderDetailsPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/wardleader/details')
);
const WardLeaderEditPage = lazy(
  () => import('src/pages/dashboard/transport-management-services/wardleader/edit')
);

// SMS MANAGEMENT BY Saurabh

const SmsListPage = lazy(() => import('src/pages/dashboard/support-managment-services/list'));

const SmsDetailsPage = lazy(() => import('src/pages/dashboard/support-managment-services/details'));

const SmsEditPage = lazy(() => import('src/pages/dashboard/support-managment-services/edit'));

const SmsCreatePage = lazy(() => import('src/pages/dashboard/support-managment-services/new'));



// PARTY MANAGEMENT

const PartyListPage = lazy(() => import('src/pages/dashboard/election-managment-services/party_management/list'));

const PartyDetailsPage = lazy(() => import('src/pages/dashboard/election-managment-services/party_management/details'));

const PartyEditPage = lazy(() => import('src/pages/dashboard/election-managment-services/party_management/edit'));

const PartyCreatePage = lazy(() => import('src/pages/dashboard/election-managment-services/party_management/new'));



// APPOINTMENT MANAGEMENT by Abhishek, Saurabh , Avanish 

const AppointmentListPage = lazy(() => import('src/pages/dashboard/appointment_managment/list'));

const AppointmentCardPage = lazy(() => import('src/pages/dashboard/appointment_managment/card'));

const AppointmentDetailsPage = lazy(() => import('src/pages/dashboard/appointment_managment/details'));

const AppointmentEditPage = lazy(() => import('src/pages/dashboard/appointment_managment/edit'));

const AppointmentCreatePage = lazy(() => import('src/pages/dashboard/appointment_managment/new'));
  
const AppointmentvoterTrackListPage=lazy(() => import('src/pages/dashboard/appointment_managment/usertrack'));
// PARTY ALLIANCE MANAGEMENT

const PartyAllianceListPage = lazy(() => import('src/pages/dashboard/election-managment-services/party_alliance_management/list'));

const PartyAllianceDetailsPage = lazy(() => import('src/pages/dashboard/election-managment-services/party_alliance_management/details'));

const PartyAllianceEditPage = lazy(() => import('src/pages/dashboard/election-managment-services/party_alliance_management/edit'));

const PartyAllianceCreatePage = lazy(() => import('src/pages/dashboard/election-managment-services/party_alliance_management/new'));

const KanbanPage = lazy(() => import('src/pages/dashboard/kanban'));

const KanbanProjectPage = lazy(() => import('src/pages/dashboard/kanban-project-list'));

// Kanban MANAGEMENT DEEPAK

const UserKanbanPage = lazy(() => import('src/pages/dashboard/user-kanban'));

const UserKanbanProjectPage = lazy(() => import('src/pages/dashboard/user-kanban-project-list'));
// Blog MANAGEMENT by Deepak

const PostCreatePage = lazy(() => import('src/pages/dashboard/post/new'));
const PostListPage = lazy(() => import('src/pages/dashboard/post/list'));
const PostDetailsPage = lazy(() => import('src/pages/dashboard/post/details'));
const PostEditPage = lazy(() => import('src/pages/dashboard/post/edit'));

// Survey MANAGEMENT DEEPAK

const SurveyCreatePage = lazy(() => import('src/pages/dashboard/survey/new'));
const SurveyListPage = lazy(() => import('src/pages/dashboard/survey/list'));
const SurveyDetailsPage = lazy(() => import('src/pages/dashboard/survey/details'));
const SurveyEditPage = lazy(() => import('src/pages/dashboard/survey/edit'));

// FILL SURVEY FORM MANAGEMENT DEEPAK

const FillSurveyCreatePage = lazy(() => import('src/pages/dashboard/fill_survey/new'));
const FillSurveyListPage = lazy(() => import('src/pages/dashboard/fill_survey/list'));
const FillSurveyDetailsPage = lazy(() => import('src/pages/dashboard/fill_survey/details'));
const FillSurveyEditPage = lazy(() => import('src/pages/dashboard/fill_survey/edit'));


// Voter Referal by Ankit Kumar

const VoterCreatePage = lazy(() => import('src/pages/dashboard/Voter-Referal/create'))
const VoterReferalPage = lazy(() => import('src/pages/dashboard/Voter-Referal/view'))
const VoterEditPage = lazy(() => import('src/pages/dashboard/Voter-Referal/new'))

// CreateCompaint by Gurpreet

const CreateComplaint = lazy(() => import('src/pages/dashboard/complaint-form/create'))

// CreateTourAndTravels by Avanish

const CreateTourAndTravels = lazy(() => import('src/pages/dashboard/tour-and-travels/create'))

// VotingSlip by Gurpreet

const VotingSlip = lazy(() => import('src/pages/dashboard/voting-slip/create'))



const AssignedVehicle = lazy(() => import('src/pages/dashboard/assignedVehicle/create'))




// studentcareer by Avinash

const StudentCareer = lazy(() => import('src/pages/dashboard/studentCareer/create'))

// farmerservices by Avinash

const FarmerService = lazy(() => import('src/pages/dashboard/farmerService/create'))

// labourservices by Avinash

const LabourService = lazy(() => import('src/pages/dashboard/LabourService/create'))

// Government Scheme by Ankit Kumar

const GovtScheme = lazy(() => import('src/pages/dashboard/govtScheme/create'))

// Government Scheme by Pankaj

const WomanEmpourment = lazy(() => import('src/pages/dashboard/womanEmpourment/details'))
// ----------------------------------------------------------------------


// Bussiness roadmap Scheme 

const BussinessRoadmap = lazy(() => import('src/pages/dashboard/bussinessRoadmap/create'))
// ----------------------------------------------------------------------

// Govt Services Scheme By Ankit  Sharma
const GovtService = lazy(() => import('src/pages/dashboard/govtService/create'))

// Suggestion Box by Ankit kumar

const FeedbackPage = lazy(()=> import('src/pages/dashboard/feedback/create'))
const FeedbackListPage = lazy(()=> import('src/pages/dashboard/feedback/list'))
const FeedbackDetailsPage = lazy(()=> import('src/pages/dashboard/feedback/details'))

// added by Pankaj
const ElectionTemplateCreate = lazy(()=> import('src/pages/dashboard/electionTemplateManagement/create'))
const ElectionTemplateList = lazy(()=> import('src/pages/dashboard/electionTemplateManagement/list'))

// added by Pankaj
const TemplateLibraryList = lazy(()=> import('src/pages/dashboard/electionTemplateLibrary/list'))
const TemplateLibraryProject = lazy(()=> import('src/pages/dashboard/electionTemplateLibrary/project'))

// Ambulance Form BY Ankit Sharma
// const AmbulanceCreatePage = lazy(
//   () => import('src/pages/dashboard/transport-management-services/ambulance/new')
// );
const AmbulanceTrack = lazy(() => import('src/pages/dashboard/transport-management-services/ambulance/details'))

// const AmbulanceListPage = lazy(
//   () => import('src/pages/dashboard/transport-management-services/ambulance/ambulancelist')
// );

// -------------------------------------------------------
export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: 'ecommerce', element: <OverviewEcommercePage /> },
      { path: 'analytics', element: <OverviewAnalyticsPage /> },
      { path: 'banking', element: <OverviewBankingPage /> },
      { path: 'booking', element: <OverviewBookingPage /> },
      { path: 'file', element: <OverviewFilePage /> },
      {
        path: 'user',
        children: [
          { element: <UserProfilePage />, index: true },
          { path: 'profile', element: <UserProfilePage /> },
          { path: 'cards', element: <UserCardsPage /> },
          { path: 'list', element: <UserListPage /> },
          { path: 'new', element: <UserCreatePage /> },
          { path: ':id/edit', element: <UserEditPage /> },
          { path: 'account', element: <UserAccountPage /> },
        ],
      },
      // Voter View
      {
        path: 'voterview',
        children: [
          { element: <VoterViewPage />, index: true },
          { path: 'details', element: <VoterViewPage /> },
          { path: 'details/info/:item', element: <VoterUserInfo /> },
        ]
      },

      // Admin Contact
      {
        path: 'contact',
        children: [
          { element: <ContactListPage />, index: true },
          { path: 'list', element: <ContactListPage /> },
          { path: ':id', element: <ContactDetailsPage /> },
          { path: ':id/edit', element: <ContactEditPage /> },
        ],
      },

      // party Route by Ankit kumar, ayaz , shubhranshu ( 9 april )
      {
        path: 'party',
        children: [
          { element: <PartyListPage />, index: true },
          { path: 'list', element: <PartyListPage /> },
          { path: ':id', element: <PartyDetailsPage /> },
          { path: ':id/edit', element: <PartyEditPage /> },
          { path: 'new', element: <PartyCreatePage /> },
        ],
      },

      // party Route by Ankit kumar, ayaz , shubhranshu ( 10 april )
      {
        path: 'party_alliance',
        children: [
          { element: <PartyAllianceListPage />, index: true },
          { path: 'list', element: <PartyAllianceListPage /> },
          { path: ':id', element: <PartyAllianceDetailsPage /> },
          { path: ':id/edit', element: <PartyAllianceEditPage /> },
          { path: 'new', element: <PartyAllianceCreatePage /> },
        ],
      },


      // Appointment Route by Abhishek, saurabh , avanish ( 9 may )
      {
        path: 'Appointment',
        children: [
          { element: <AppointmentListPage />, index: true },
          { path: 'card', element: <AppointmentCardPage />},
          { path: 'list', element: <AppointmentListPage /> },
          { path: ':id', element: <AppointmentDetailsPage /> },
          { path: 'list:id', element:<AppointmentvoterTrackListPage /> },
          { path: ':id/edit', element: <AppointmentEditPage /> },
          { path: 'new', element: <AppointmentCreatePage /> },
        ],
      },


      // voter Route
      {
        path: 'voter',
        children: [
          { element: <ShowvoterList />, index: true },
          { path: 'list', element: <ShowvoterList /> },
          { path: 'new', element: <Addvoter /> },
          { path: ':id', element: <ShowVoterDetail /> },
          { path: ':id/edit', element: <VoterEditDetail /> },
        ],
      },

      {
        path: 'vote_prediction',
        children: [
          { element: <VotePredictionListPage />, index: true },
          { path: 'list', element: <VotePredictionListPage /> },
          { path: ':id', element: <VotePredictionDetailPage /> },
          { path: ':id/edit', element: <VotePredictionEditPage /> },
        ],
      },

      // invoice Route By Abhishek
      {
        path: 'expenses',
        children: [
          { element: <ExpensesListPage />, index: true },
          { path: 'list', element: <ExpensesListPage /> },
          { path: ':id', element: <ExpensesDetailsPage /> },
          { path: ':id/edit', element: <ExpensesEditPage /> },
          { path: 'new', element: <ExpensesCreatePage /> },
        ],
      },

      // Invoice Route (29 march Shubhranshu)
      {
        path: 'invoice',
        children: [
          { element: <ExpensesListPage />, index: true },
          { path: 'list', element: <ExpensesListPage /> },
          { path: ':id', element: <ExpensesDetailsPage /> },
          { path: ':id/edit', element: <ExpensesEditPage /> },
          { path: 'new', element: <ExpensesCreatePage /> },
        ],
      },

      // Category Route (28 march Shubhranshu)

      {
        path: 'category',
        children: [
          { element: <CategoryListPage />, index: true },
          { path: 'list', element: <CategoryListPage /> },
          { path: ':id', element: <CategoryDetailsPage /> },
          { path: ':id/edit', element: <CategoryEditPage /> },
          { path: 'new', element: <CategoryCreatePage /> },
        ],
      },

      //  Claim Route (29 march Shubhranshu)
      {
        path: 'claim',
        children: [
          { element: <ClaimListPage />, index: true },
          { path: 'list', element: <ClaimListPage /> },
          { path: ':id', element: <ClaimDetailsPage /> },
          { path: ':id/edit', element: <ClaimEditPage /> },
          { path: 'new', element: <ClaimCreatePage /> },
        ],
      },

      // Candidate Route By Deepak
      {
        path: 'candidate',
        children: [
          { element: <CandidateListPage />, index: true },
          { path: 'list', element: <CandidateListPage /> },
          { path: 'new', element: <CandidateCreatePage /> },
          { path: ':id', element: <CandidateDetailsPage /> },
          { path: ':id/edit', element: <CandidateEditPage /> },
        ],
      },

      // Service version Route By Ayaz
      {
        path: 'serviceversion',
        children: [
          { element: <ServiceVersionListPage />, index: true },
          { path: 'list', element: <ServiceVersionListPage /> },
          { path: 'new', element: <ServiceVersionCreatePage /> },
          { path: ':id', element: <ServiceVersionDetailsPage /> },
          { path: ':id/edit', element: <ServiceVersionEditPage /> },
        ],
      },

      // Booth Route By Avnish
      {
        path: 'boothmanagement',
        children: [
          { element: <BoothListPage />, index: true },
          { path: 'list', element: <BoothListPage /> },
          { path: 'new', element: <BoothCreatePage /> },
          { path: ':id', element: <BoothDetailsPage /> },
          { path: ':id/edit', element: <BoothEditPage /> },
        ],
      },

      // WardManagement Route By Subranshu
      {
        path: 'wardmanagement',
        children: [
          { element: <WardListPage />, index: true },
          { path: 'list', element: <WardListPage /> },
          { path: 'new', element: <WardCreatePage /> },
          { path: ':id', element: <WardDetailsPage /> },
          { path: ':id/edit', element: <WardEditPage /> },
        ],
      },

      // RoleManagement Route By Ankit

      {
        path: 'userRoleManagement',
        children: [
          { element: <UserRoleListPage />, index: true },
          { path: 'list', element: <UserRoleListPage /> },
          { path: 'new', element: <UserRoleCreatePage /> },
          { path: ':id', element: <UserRoleDetailsPage /> },
          { path: ':id/edit', element: <UserRoleEditPage /> },
        ],
      },

      {
        path: 'userProfileManagement',
        children: [
          { element: <UserProfileList />, index: true },
          { path: 'list', element: <UserProfileList /> },
          { path: 'new', element: <UserProfileCreatePage /> },
          { path: ':id', element: <UserProfileDetailsPage /> },
          { path: ':id/edit', element: <UserProfileEditPage /> },
          { path: ':id/userEdit', element: <UserProfileRoleEditPage /> },
          { path: ':id/userOwnerEdit', element: <UserProfileOwnerEditPage /> },
        ],
      },

      //  Election Route By Saurab

      {
        path: 'electionmanagement',
        children: [
          { element: <ElectionListPage />, index: true },
          { path: 'list', element: <ElectionListPage /> },
          { path: 'new', element: <ElectionCreatePage /> },
          { path: ':id', element: <ElectionDetailsPage /> },
          { path: ':id/edit', element: <ElectionEditPage /> },
          
        ],
      },

      {
        path: 'poolmanagement',
        children: [
          { element: <PoolListPage />, index: true },
          { path: 'list', element: <PoolListPage /> },
          { path: 'new', element: <PoolCreatePage /> },
          { path: ':id', element: <PoolDetailsPage /> },
          { path: ':id/edit', element: <PoolEditPage /> },
        ],
      },
      // ourwork Management By Saurabh
      {
        path: 'work',
        children: [
          { element: <WorkListPage />, index: true },
          { path: 'list', element: <WorkListPage /> },
          { path: 'new', element: <WorkCreatePage /> },
          { path: ':id', element: <WorkDetailsPage /> },
          { path: ':id/edit', element: <WorkEditPage /> },
        ],
      },
      // {
      //   path: 'chat',
      //   children: [
      //     { element: <ChatPage />, index: true },
      //     { path: ':id', element: <ChatPage /> },
      //   ],
      // },
      { path: 'chat', element: <ChatPage /> },

      // { path: 'chat', element: <ChatPage />},
      // { path: 'chat/:id/p', element: <WorkListPage /> },
    //   { path: 'chat', element: <ChatPage />},
    //  { path:'chatt/:id', element: <ChatPage />},
     
      // {
      //   path: 'chat',
      //   children: [
      //     { element: <ChatPage />, index: true },
      //     { path: ':id', element: <ChatPage /> },
          
      //   ],
      // },
    

      // ourwork Management By Avanish
      {
        path: 'model',
        children: [
          { element: <ModelListPage />, index: true },
          { path: 'list', element: <ModelListPage /> },
          { path: 'new', element: <ModelCreatePage /> },
          { path: ':id', element: <ModelDetailsPage /> },
          { path: ':id/edit', element: <ModelEditPage /> },
        ],
      },

      // Transport Management By Ankit

      {
        path: 'driver',
        children: [
          { element: <DriverListPage />, index: true },
          { path: 'list', element: <DriverListPage /> },
          { path: 'new', element: <DriverCreatePage /> },
          { path: ':id', element: <DriverDetailsPage /> },
          { path: ':id/edit', element: <DriverEditPage /> },
        ],
      },
      // Tranport Managment By Ankit
      {
        path: 'vehicle',
        children: [
          { element: <VehicleListPage />, index: true },
          { path: 'list', element: <VehicleListPage /> },
          { path: 'new', element: <VehicleCreatePage /> },
          { path: ':id', element: <VehicleDetailsPage /> },
          { path: ':id/edit', element: <VehicleEditPage /> },
        ],
      },
      // Support Managment By Saurabh
      {
        path: 'sms',
        children: [
          { element: <SmsListPage />, index: true },
          { path: 'list', element: <SmsListPage /> },
          { path: 'new', element: <SmsCreatePage /> },
          { path: ':id', element: <SmsDetailsPage /> },
          { path: ':id/edit', element: <SmsEditPage /> },
        ],
      },

      // Transport Managment By Ankit
      {
        path: 'trip',
        children: [
          { element: <TripListPage />, index: true },
          // { path: 'list', element: <TripListPage /> },
          { path: 'new', element: <TripCreatePage /> },
          { path: ':id', element: <TripDetailsPage /> },
          { path: ':id/edit', element: <TripEditPage /> },
          {path: 'requestedtrip',element:<TripListPage/>},
          {path:'managedtrip/list',element:<TripManagedListPage/>},
          {path:':id/details',element:<TripManagedDetailsView />}
        ],
      },
      {
        path: 'callAmbulance',
        children: [
          { element: <AmbulanceListPage />, index: true },
          { path: 'list', element: < AmbulanceTrack/> },
          { path: 'new', element: <AmbulanceCreatePage /> },
          { path: ':id', element: <AmbulanceDetailsPage /> },
          { path: ':id/edit', element: <AmbulanceEditPage /> },
          {path: 'requestedtrip',element:<AmbulanceListPage/>},
          {path:'managedtrip/list',element:<AmbulanceManagedListPage/>},
          {path:':id/details',element:<AmbulanceManagedDetailsView />}
        ],
      },

      // Transport Managment TripDriver By Ankit
      {
        path: 'tripdriver',
        children: [
          { element: <TripDriverListPage />, index: true },
          { path: 'list', element: <TripDriverListPage /> },
          { path: 'new', element: <TripDriverCreatePage /> },
          { path: ':id/edit', element: <TripDriverEditPage /> },
        ],
      },
      

       // Transport Managment WardVol By Ankit
      {
        path: 'wardvol',
        children: [
          { element: <WardvolListPage />, index: true },
          { path: 'list', element: <WardvolListPage /> },
          { path: 'new', element: <WardvolCreatePage /> },
          { path: ':id', element: <WardvolDetailsPage /> },
          { path: ':id/edit', element: <WardEditPage /> },
        ],
      },
      {
        path: 'ambulancetrip',
        children: [
          { element: <AmbulanceTripListPage />, index: true },
          { path: 'list', element: <AmbulanceTripListPage /> },
          { path: 'new', element: <AmbulanceTripCreatePage /> },
          { path: ':id', element: <AmbulanceTripDetailsPage /> },
          { path: ':id/edit', element: <AmbulanceTripEditPage /> },
        ],
      },
      // Transport Managment WardlEader By Ankit
      {
        path: 'wardleader',
        children: [
          { element: <WardLeaderListPage />, index: true },
          { path: 'list', element: <WardLeaderListPage /> },
          { path: 'new', element: <WardLeaderCreatePage /> },
          { path: ':id', element: <WardLeaderDetailsPage /> },
          { path: ':id/edit', element: <WardLeaderEditPage /> },
        ],
      },

      {
        path: 'project',
        children: [
          { element: < KanbanProjectPage />, index: true },
          { path: ':id', element: <KanbanPage /> },
          { path: 'list', element: < KanbanProjectPage /> },
          // { path: 'user-kanban', element: <UserKanbanPage /> },
        ],
      },
      {
        path: 'user-project',
        children: [
          { element: < UserKanbanProjectPage />, index: true },
          { path: ':id', element: <UserKanbanPage /> },
          { path: 'list', element: < UserKanbanProjectPage /> },
          // { path: 'user-kanban', element: <UserKanbanPage /> },
        ],
      },

      // TMS User Assigned driver
      {
        path: 'assigndriver',
        children: [
          { element: <WardLeaderListPage />, index: true },
          { path: 'list', element: <WardLeaderListPage /> },
          { path: 'new', element: <WardLeaderCreatePage /> },
          { path: ':id', element: <WardLeaderDetailsPage /> },
          { path: ':id/edit', element: <WardLeaderEditPage /> },
        ],
      },
      // TMS Create Trip In User 
      {
        path: 'createtrip',
        children: [
          { element: <WardvolListPage />, index: true },
          { path: 'list', element: <WardvolListPage /> },
          { path: 'new', element: <WardvolCreatePage /> },
          { path: ':id', element: <WardvolDetailsPage /> },
          { path: ':id/edit', element: <WardEditPage /> },
        ],
      },
      // BLOG  Management Deepak
      {
        path: 'blog',
        children: [
          { element: <PostListPage />, index: true },
          { path: 'list', element: <PostListPage /> },
          { path: 'new', element: <PostCreatePage /> },
          { path: ':id', element: <PostDetailsPage /> },
          { path: ':id/edit', element: <PostEditPage /> },
        ],
      },

      // Survey Management Deepak
      {
        path: 'survey',
        children: [
          { element: <SurveyListPage />, index: true },
          { path: 'list', element: <SurveyListPage /> },
          { path: 'new', element: <SurveyCreatePage /> },
          { path: ':id', element: <SurveyDetailsPage /> },
          { path: ':id/edit', element: <SurveyEditPage /> },
        ],
      },

      // fill_Survey Management Deepak
      {
        path: 'fill_survey',
        children: [
          { element: <FillSurveyListPage />, index: true },
          { path: 'list', element: <FillSurveyListPage /> },
          { path: 'new', element: <FillSurveyCreatePage /> },
          { path: ':id', element: <FillSurveyDetailsPage /> },
          { path: ':id/edit', element: <FillSurveyEditPage /> },
        ],
      },

      // Voter Referal by ankit kumar
      {
        path: 'voterReferal',
        children: [
          { element: <VoterReferalPage />, index: true },
          { path: 'list', element: <VoterCreatePage /> },
          { path: 'new', element: < VoterEditPage/> },
          // { path: ':id', element: <PostDetailsPage /> },
          // { path: ':id/edit', element: <PostEditPage /> },
        ],
      },
      // compaintForm by Gurpreet
      {
        path: 'votingSlip',
        children: [
          { element: <VotingSlip />, index: true },
          // { path: 'list', element: <VoterCreatePage /> },
          { path: 'new', element: < VotingSlip/> },
          // { path: ':id', element: <PostDetailsPage /> },
          // { path: ':id/edit', element: <PostEditPage /> },
        ],
      },
      // compaintForm by Gurpreet
      {
        path: 'complaintForm',
        children: [
          { element: <CreateComplaint />, index: true },
          // { path: 'list', element: <VoterCreatePage /> },
          { path: 'new', element: < CreateComplaint/> },
          // { path: ':id', element: <PostDetailsPage /> },
          // { path: ':id/edit', element: <PostEditPage /> },
        ],
      },

// tourAndTravels by Avanish
      {
        path: 'tourAndTravels',
        children: [
          { element: <CreateTourAndTravels />, index: true },
          // { path: 'list', element: <VoterCreatePage /> },
          { path: 'new', element: < CreateTourAndTravels/> },
          // { path: ':id', element: <PostDetailsPage /> },
          // { path: ':id/edit', element: <PostEditPage /> },
        ],
      },

      // candidate Library
      {
        path: 'candidateLibrary',
        children: [
          // { element: <CreateComplaint />, index: true },
          // { path: 'list', element: <VoterCreatePage /> },
          // { path: 'new', element: < CreateComplaint/> },
          // { path: ':id', element: <PostDetailsPage /> },
          // { path: ':id/edit', element: <PostEditPage /> },
        ],
      },
      // compaintForm by Gurpreet
      {
        path: 'AssignedVehicle',
        children: [
          { element: <AssignedVehicle />, index: true },
          // { path: 'list', element: <VoterCreatePage /> },
          { path: 'new', element: < AssignedVehicle/> },
          // { path: ':id', element: <PostDetailsPage /> },
          // { path: ':id/edit', element: <PostEditPage /> },
        ],
      },

      // compaintForm by Avanish
      {
        path: 'StudentCareer',
        children: [
          { element: <StudentCareer />, index: true },
          { path: 'new', element: < StudentCareer/> },
        ]
      },

      {
        path: 'FarmerService',
        children: [
          { element: <FarmerService />, index: true },
          { path: 'new', element: < FarmerService/> },
        ]
      },
      {
        path:'GovtService',
        children:[
          {element: <GovtService/>,index:true},
          { path: 'new', element: < GovtService/> },
        ]
      },
      {
        path: 'LabourService',
        children: [
          { element: <LabourService/>, index: true },
          { path: 'new', element: < LabourService/> },
        ]
      },

      {
        path: 'GovtScheme',
        children: [
          { element: <GovtScheme/>, index: true },
          { path: 'new', element: < GovtScheme/> },
        ]
      },


      {
        path: 'WomanEmpourment',
        children: [
          { element: <WomanEmpourment/>, index: true },
          { path: 'new', element: < WomanEmpourment/> },
        ]
      },
      // {
      //   path: 'BuisnessRodmapCareer',
      //   children: [
      //     { element: <WomanEmpourment/>, index: true },
      //     { path: 'new', element: < WomanEmpourment/> },
      //   ]
      // },
      

      {
        path: 'BussinessRoadmap',
        children: [
          { element: <BussinessRoadmap />, index: true },
          { path: 'new', element: < BussinessRoadmap /> },
        ]
      },

      {
        path: 'FeedbackPage',
        children: [
          { element: <FeedbackPage />, index: true },
          { path: 'new', element: < FeedbackPage /> },
          { path: 'list', element: <FeedbackListPage /> },
          { path: ':id', element: <FeedbackDetailsPage /> },
          
        ]
      },

      // added by Pankaj Election emplate Library
      {
        path: 'template',
        children: [
          { element: <ElectionTemplateList />, index: true },
          { path: 'new', element: < ElectionTemplateCreate /> },
          { path: 'list', element: <ElectionTemplateList /> },

        ]
      },

        // added by Pankaj  Template Library
        {
          path: 'template-library',
          children: [
            { element: <TemplateLibraryList />, index: true },
            { path: 'project', element: < TemplateLibraryProject /> },
            { path: 'list', element: <TemplateLibraryList /> },
  
          ]
        },
    ],
  },
];
