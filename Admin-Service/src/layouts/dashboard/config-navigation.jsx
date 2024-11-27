import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';
import { useAuthContext } from 'src/auth/hooks';
import { useGetRolesList } from 'src/api/userRole';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  userRoleManagement: icon('ic_userRoleManagement'),
  pollingManagement: icon('ic_pollingManagement'),
  partyManagement: icon('ic_partyManagement'),
  partyAllianceManagement: icon('ic_partyAllianceManagement'),
  modalManagement: icon('ic_modalManagement'),
  featureManagement: icon('ic_featureManagement'),
  electionManagement: icon('ic_electionManagement'),
  candidate: icon('ic_candidate'),
  voter: icon('ic_voter'),
  expense: icon('ic_expense'),
  booth: icon('ic_booth'),
  ward: icon('ic_ward'),
  user: icon('ic_user'),
  election: icon('ic_election'),
  chat: icon('ic_chat'),
  admincontact: icon('ic_admincontact'),
  adminchat: icon('ic_adminchat'),
  driver: icon('ic_driver'),
  vehicle: icon('ic_vehicle'),
  trip: icon('ic_trip'),
  sms: icon('ic_sms'),
  bulk: icon('ic_bulk'),
  subscription: icon('ic_subscription'),
  services: icon('ic_services'),
  subservices: icon('ic_subservices'),
  kanban: icon('ic_kanban'),
  addNewUser: icon('ic_addnewuser'),
  farmer: icon('ic_farmer'),
  careers: icon('ic_careers'),
  complaintForm: icon('ic_complaintform'),
  TourAndTravels: icon('ic_Travel'),
  students: icon('ic_student'),
  voterSlip: icon('ic_voterslip'),
  electionDetails: icon('ic_electionDetails'),
  womanEmpowerment: icon('ic_WomanEmpowerment'),
  ambulance: icon('ic_ambulance'),
};

// ------------------------------------------------------------------

export function useNavData() {
  const { user } = useAuthContext();
  const { t } = useTranslate();

  const { users: roleList } = useGetRolesList(user?.accessToken);

  const roleListArr = roleList?.data || [];

  const getUserRole = (id) => {
    const roleId = roleListArr?.find((item) => item.userRoleId === id);
    return roleId ? roleId?.userRoleType : 'Role not found';
  };

  const userRoleType = getUserRole(user?.userRoleId);

  const data = useMemo(() => {
    const sections = [];

    switch (userRoleType) {
      case 'Admin':
        sections.push(
          {
            subheader: t('Election Management'),
            items: [
              {
                title: t('Election Management'),
                path: paths.dashboard.electionmanagement.root,
                icon: ICONS.electionManagement,
                children: [
                  { title: t('Add Election'), path: paths.dashboard.electionmanagement.new },
                  { title: t('Election List'), path: paths.dashboard.electionmanagement.root },
                ],
              },
              {
                title: t('Party Alliance Management'),
                path: paths.dashboard.party_alliance.root,
                icon: ICONS.partyAllianceManagement,
                children: [
                  { title: t('Add Party Alliance'), path: paths.dashboard.party_alliance.new },
                  { title: t('Party Alliance List'), path: paths.dashboard.party_alliance.root },
                ],
              },
              {
                title: t('Party Management'),
                path: paths.dashboard.party.root,
                icon: ICONS.partyManagement,
                children: [
                  { title: t('Add Party'), path: paths.dashboard.party.new },
                  { title: t('Party List'), path: paths.dashboard.party.root },
                ],
              },

              {
                title: t('Ward Management'),
                path: paths.dashboard.wardmanagement.root,
                icon: ICONS.ward,
                children: [
                  { title: t('Add Ward'), path: paths.dashboard.wardmanagement.new },
                  { title: t('Ward List'), path: paths.dashboard.wardmanagement.root },
                ],
              },
              {
                title: t('Candidate Management'),
                path: paths.dashboard.candidate.root,
                icon: ICONS.candidate,
                children: [
                  { title: t('Add Candidate'), path: paths.dashboard.candidate.new },
                  { title: t('Candidate List'), path: paths.dashboard.candidate.root },
                  // { title: t('Candidate Details'), path: paths.dashboard.candidate.demo.details },
                ],
              },
              {
                title: t('Booth Management'),
                path: paths.dashboard.boothmanagement.root,
                icon: ICONS.booth,
                children: [
                  { title: t('Add Booth'), path: paths.dashboard.boothmanagement.new },
                  { title: t('Booth List'), path: paths.dashboard.boothmanagement.root },
                ],
              },
              {
                title: t('Polling Management'),
                path: paths.dashboard.poolmanagement.root,
                icon: ICONS.pollingManagement,
                children: [
                  { title: t('Add Poll'), path: paths.dashboard.poolmanagement.new },
                  {
                    title: t('Poll List'),
                    path: paths.dashboard.poolmanagement.list,
                  },
                ],
              },
              {
                title: t('Voter Management'),
                path: paths.dashboard.voter.root,
                icon: ICONS.user,
                children: [
                  { title: t('Add Voter'), path: paths.dashboard.voter.new },
                  {
                    title: t('Voters List'),
                    path: paths.dashboard.voter.list,
                  },
                ],
              },

              {
                title: t('Vote Prediction Management'),
                path: paths.dashboard.vote_prediction.list,
                icon: ICONS.voter,
                // children: [
                //   {
                //     title: t('Voter List'),
                //     path: paths.dashboard.vote_prediction.list,
                //   },
                // ],
              },
            ],
          },
          {
            subheader: t('Transport Managment'),
            items: [
              {
                title: t('Driver Management'),
                path: paths.dashboard.driver.root,
                icon: ICONS.driver,
                children: [
                  { title: t('Add Driver'), path: paths.dashboard.driver.new },
                  { title: t('Driver List'), path: paths.dashboard.driver.root },
                ],
              },
              {
                title: t('Vehicle Management'),
                path: paths.dashboard.vehicle.root,
                icon: ICONS.vehicle,
                children: [
                  { title: t('Add Vehicle'), path: paths.dashboard.vehicle.new },
                  { title: t('Vehicle List'), path: paths.dashboard.vehicle.root },
                ],
              },
              {
                title: t('Trip Management'),
                path: paths.dashboard.trip.root,
                icon: ICONS.trip,
                children: [
                  // { title: t('Add Trip'), path: paths.dashboard.trip.new },
                  { title: t('Requested Trip List'), path: paths.dashboard.trip.requestedList },
                  { title: t('Managed Trip List'), path: paths.dashboard.trip.managedList },
                  // { title: t('Ambulance Trip List'), path: paths.dashboard.trip.ambulanceList },
                ],
              },
              {
                title: t('Ambulance Management'),
                path: paths.dashboard.callAmbulance.root,
                icon: ICONS.ambulance,
                children: [
                  // { title: t('Add Trip'), path: paths.dashboard.trip.new },
                  {
                    title: t('Requested Trip List'),
                    path: paths.dashboard.callAmbulance.requestedList,
                  },
                  {
                    title: t('Managed Trip List'),
                    path: paths.dashboard.callAmbulance.managedList,
                  },
                  // { title: t('Ambulance Trip List'), path: paths.dashboard.trip.ambulanceList },
                ],
              },

              // Tansport Managment wardleader By Ankit
              // {
              //   title: t('Ward Volunteer'),
              //   path: paths.dashboard.wardvol.root,
              //   icon: ICONS.voter,
              //   children: [
              //     { title: t('Add Trip '), path: paths.dashboard.wardvol.new },
              //     // { title: t('Ward Volunteer List'), path: paths.dashboard.wardvol.list },
              //   ],
              // },
              // // Tansport Managment wardleader By Ankit
              // {
              //   title: t('Ward Leader'),
              //   path: paths.dashboard.wardleader.root,
              //   icon: ICONS.voter,
              //   children: [
              //     { title: t('Assign Trip'), path: paths.dashboard.wardleader.new },
              //     { title: t('Assigned Trip List'), path: paths.dashboard.wardleader.list },
              //   ],
              // },

              // // Tansport Managment tripdriver By Ankit
              // {
              //   title: t('Driver Trips'),
              //   path: paths.dashboard.tripdriver.root,
              //   icon: ICONS.trip,
              //   children: [
              //     { title: t('Add Driver Trip'), path: paths.dashboard.tripdriver.new },
              //     { title: t('Trips List'), path: paths.dashboard.tripdriver.list },
              //   ],
              // },
            ],
          },
          {
            subheader: t('Expenses Management'),
            items: [
              {
                title: t('Category Management'),
                path: paths.dashboard.category.root,
                icon: ICONS.expense,
                children: [
                  { title: t('Add Category'), path: paths.dashboard.category.new },
                  { title: t('Category List'), path: paths.dashboard.category.root },
                ],
              },
              {
                title: t('Claim Management'),
                path: paths.dashboard.claim.root,
                icon: ICONS.candidate,
                children: [
                  { title: t('Add Claim'), path: paths.dashboard.claim.new },
                  { title: t('Claim List'), path: paths.dashboard.claim.root },
                ],
              },
              {
                title: t('Invoice Management'),
                path: paths.dashboard.invoice.root,
                icon: ICONS.expense,
                children: [
                  { title: t('Add Invoice'), path: paths.dashboard.invoice.new },
                  { title: t('Invoice List'), path: paths.dashboard.invoice.root },
                ],
              },
            ],
          },
          {
            subheader: t('User Managment'),
            items: [
              {
                title: t('User Role Management'),
                path: paths.dashboard.userRoleManagement.root,
                icon: ICONS.userRoleManagement,
                children: [
                  { title: t('Add User Role'), path: paths.dashboard.userRoleManagement.new },
                  { title: t('User Role List'), path: paths.dashboard.userRoleManagement.list },
                ],
              },
              {
                title: t('User Management'),
                path: paths.dashboard.userProfileManagement.root,
                icon: ICONS.user,
                children: [
                  { title: t('Add User'), path: paths.dashboard.userProfileManagement.new },
                  {
                    title: t('User List'),
                    path: paths.dashboard.userProfileManagement.list,
                  },
                ],
              },
              {
                title: t('Support Ticket List'),
                path: paths.dashboard.sms.root,
                icon: ICONS.sms,
                // children: [
                //   { title: t('Add User Role'), path: paths.dashboard.userRoleManagement.new },
                //   { title: t('User Role List'), path: paths.dashboard.userRoleManagement.list },
                // ],
              },
            ],
          },

          {
            subheader: t('Blog Management'),
            items: [
              {
                title: t('Blog Management'),
                path: paths.dashboard.blog.root,
                icon: ICONS.election,
                children: [
                  { title: t('Add Blog'), path: paths.dashboard.blog.new },
                  { title: t('Blog List'), path: paths.dashboard.blog.root },
                ],
              },
              {
                title: t('Modal Management'),
                path: paths.dashboard.model.root,
                icon: ICONS.modalManagement,
                children: [
                  { title: t('Add Modal'), path: paths.dashboard.model.new },
                  { title: t('Modal List'), path: paths.dashboard.model.root },
                ],
              },
              {
                title: t('Feature Management'),
                path: paths.dashboard.work.root,
                icon: ICONS.featureManagement,
                children: [
                  { title: t('Add Feature'), path: paths.dashboard.work.new },
                  { title: t('Feature List'), path: paths.dashboard.work.root },
                ],
              },
              {
                title: t('Service Version Management'),
                path: paths.dashboard.serviceversion.root,
                icon: ICONS.subservices,
                children: [
                  { title: t('Add Service Version'), path: paths.dashboard.serviceversion.new },
                  {
                    title: t('Service Version List'),
                    path: paths.dashboard.serviceversion.list,
                  },
                ],
              },

              {
                title: t('Feedback Form'),
                path: paths.dashboard.FeedbackPage.root,
                icon: ICONS.complaintForm,
                children: [
                  // {
                  //   title: t('Add Feedback'),
                  //   path: paths.dashboard.FeedbackPage.new,
                  //   icon: ICONS.complaintForm,
                  // },
                  {
                    title: t('Feedback List'),
                    path: paths.dashboard.FeedbackPage.list,
                    icon: ICONS.complaintForm,
                  },
                ],
              },
            ],
          },
          {
            subheader: t('Service Version Managment'),
            path: paths.dashboard.chat,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('Add Service Version'),
                path: paths.dashboard.candidate.new,
                icon: ICONS.adminchat,
              },
              {
                title: t('Service Version List'),
                path: paths.dashboard.candidate.root,
                icon: ICONS.adminchat,
              },
            ],
          },
          {
            // Contact Details Managment By Saurabh
            subheader: t('Contact Details Managment'),
            path: paths.dashboard.contact,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('Contact Details List'),
                path: paths.dashboard.contact.root,
                icon: ICONS.adminchat,
              },
            ],
          },
          {
            // Project Management
            subheader: t('Project Managment'),
            path: paths.dashboard.project.list,
            icon: ICONS.kanban,
            items: [
              {
                title: t('Project Managment'),
                path: paths.dashboard.project.list,
                icon: ICONS.kanban,
              },
            ],
          },
          {
            // Project Management Deepak
            subheader: t('Project Progress'),
            path: paths.dashboard.user_project.list,
            icon: ICONS.kanban,
            items: [
              {
                title: t('Project Progress'),
                path: paths.dashboard.user_project.list,
                icon: ICONS.kanban,
              },
            ],
          },

          // added by pankaj

          {
            subheader: t('Template Management'),
            items: [
              {
                title: t('Template Management'),
                path: paths.dashboard.templateManagement.root,
                icon: ICONS.electionManagement,
                children: [
                  { title: t('Add Template'), path: paths.dashboard.templateManagement.new },
                  // { title: t('Template List'), path: paths.dashboard.templateManagement.root },
                ],
              },
            ],
          },

          {
            subheader: t('Template Library'),
            items: [
              {
                title: t('Template Library'),
                path: paths.dashboard.templateLibrary.root,
                icon: ICONS.electionManagement,
                children: [
                  { title: t('All Templates'), path: paths.dashboard.templateLibrary.root },
                  { title: t('Your Project'), path: paths.dashboard.templateLibrary.project },
                ],
              },
            ],
          },

          // blog management ends
          // survey management start
          {
            subheader: t('Survey Management'),
            items: [
              {
                title: t('Survey Management'),
                path: paths.dashboard.survey.root,
                icon: ICONS.election,
                children: [
                  { title: t('Add Survey'), path: paths.dashboard.survey.new },
                  { title: t('Survey List'), path: paths.dashboard.survey.root },
                ],
              },
            ],
          },
          {
            subheader: t('Survey Form'),
            items: [
              {
                title: t('Survey Form'),
                path: paths.dashboard.fill_survey.root,
                icon: ICONS.userRoleManagement,
                children: [
                  { title: t('Available Survey'), path: paths.dashboard.fill_survey.new },
                  { title: t('Submitted Survey'), path: paths.dashboard.fill_survey.root },
                ],
              },
            ],
          }

          // blog management ends
        );
        break;
      case 'Candidate':
        sections.push({
          subheader: t('Election Management'),
          items: [
            {
              title: t('Party Member Management'),
              path: paths.dashboard.userRoleManagement.root,
              icon: ICONS.user,
              children: [
                {
                  title: t('Member Role Management'),
                  path: paths.dashboard.userRoleManagement.root,
                  // icon: ICONS.user,
                  children: [
                    { title: t('Add Member Role'), path: paths.dashboard.userRoleManagement.new },
                    {
                      title: t('Member Role List'),
                      path: paths.dashboard.userRoleManagement.list,
                    },
                  ],
                },
                {
                  title: t('Member Management'),
                  path: paths.dashboard.userProfileManagement.root,
                  // icon: ICONS.user,
                  children: [
                    { title: t('Add New Member'), path: paths.dashboard.userProfileManagement.new },
                    {
                      title: t('Member List'),
                      path: paths.dashboard.userProfileManagement.list,
                    },
                  ],
                },
              ],
            },

            // {
            //   title: t('Appointment'),
            //   path: paths.dashboard.Appointment.root,
            //   icon: ICONS.partyManagement,
            //   children: [
            //     // { title: t('Appointment'), path: paths.dashboard.Appointment.new },
            //     { title: t('AppointmentList'), path: paths.dashboard.Appointment.root },
            //   ],
            // },
            {
              // Project Management

              title: t('AppointmentList'),
              path: paths.dashboard.Appointment.root,
              icon: ICONS.partyManagement,
            },

            {
              title: t('Election Management'),
              path: paths.dashboard.electionmanagement.root,
              icon: ICONS.election,
              children: [
                {
                  title: t('Ward Management'),
                  path: paths.dashboard.wardmanagement.root,
                  icon: ICONS.ward,
                  children: [
                    { title: t('Add Ward'), path: paths.dashboard.wardmanagement.new },
                    { title: t('Ward List'), path: paths.dashboard.wardmanagement.root },
                  ],
                },

                {
                  title: t('Booth Management'),
                  path: paths.dashboard.boothmanagement.root,
                  icon: ICONS.booth,
                  children: [
                    { title: t('Add Booth'), path: paths.dashboard.boothmanagement.new },
                    { title: t('Booth List'), path: paths.dashboard.boothmanagement.root },
                  ],
                },

                {
                  title: t('Polling Management'),
                  path: paths.dashboard.poolmanagement.root,
                  icon: ICONS.user,
                  children: [
                    { title: t('Add Poll'), path: paths.dashboard.poolmanagement.new },
                    {
                      title: t('Poll List'),
                      path: paths.dashboard.poolmanagement.list,
                    },
                  ],
                },
              ],
            },
            {
              title: t('Expense Management'),
              path: paths.dashboard.category.root,
              icon: ICONS.expense,
              children: [
                {
                  title: t('Category Management'),
                  path: paths.dashboard.category.root,
                  children: [
                    { title: t('Add Category'), path: paths.dashboard.category.new },
                    { title: t('Category List'), path: paths.dashboard.category.root },
                  ],
                },
                {
                  title: t('Claim Management'),
                  path: paths.dashboard.claim.root,
                  children: [
                    { title: t('Add Claim'), path: paths.dashboard.claim.new },
                    { title: t('Claim List'), path: paths.dashboard.claim.root },
                  ],
                },
                {
                  title: t('Invoice Management'),
                  path: paths.dashboard.invoice.root,
                  children: [
                    { title: t('Add Invoice'), path: paths.dashboard.invoice.new },
                    { title: t('Invoice List'), path: paths.dashboard.invoice.root },
                  ],
                },
              ],
            },
            {
              title: t('Transport Management'),
              path: paths.dashboard.vehicle.root,
              icon: ICONS.vehicle,
              children: [
                {
                  title: t('Driver Management'),
                  path: paths.dashboard.driver.root,
                  icon: ICONS.driver,
                  children: [
                    { title: t('Add Driver'), path: paths.dashboard.driver.new },
                    { title: t('Driver List'), path: paths.dashboard.driver.root },
                  ],
                },

                {
                  title: t('Vehicle Management'),
                  path: paths.dashboard.vehicle.root,
                  icon: ICONS.vehicle,
                  children: [
                    { title: t('Add Vehicle'), path: paths.dashboard.vehicle.new },
                    { title: t('Vehicle List'), path: paths.dashboard.vehicle.root },
                  ],
                },

                {
                  title: t('Create Trip'),
                  path: paths.dashboard.createtrip.root,
                  icon: ICONS.trip,
                  children: [{ title: t('Add Trip '), path: paths.dashboard.createtrip.new }],
                },
                {
                  title: t('Ambulance Book'),
                  path: paths.dashboard.ambulancetrip.root,
                  icon: ICONS.ambulance,
                  children: [{ title: t('Add Trip '), path: paths.dashboard.ambulancetrip.new }],
                },
                {
                  title: t('Trip Management'),
                  path: paths.dashboard.trip.root,
                  icon: ICONS.services,
                  children: [
                    // { title: t('Add Trip'), path: paths.dashboard.trip.new },
                    { title: t('Requested Trip List'), path: paths.dashboard.trip.requestedList },
                    { title: t('Managed Trip List'), path: paths.dashboard.trip.managedList },
                  ],
                },
                {
                  title: t('Ambulance  Management'),
                  path: paths.dashboard.callAmbulance.root,
                  icon: ICONS.ambulance,
                  children: [
                    // { title: t('Add Trip'), path: paths.dashboard.trip.new },
                    {
                      title: t('Requested Trip List'),
                      path: paths.dashboard.callAmbulance.requestedList,
                    },
                    {
                      title: t('Managed Trip List'),
                      path: paths.dashboard.callAmbulance.managedList,
                    },
                    // { title: t('Ambulance Trip List'), path: paths.dashboard.trip.ambulanceList },
                  ],
                },
              ],
            },

            {
              title: t('Voter Management'),
              path: paths.dashboard.voter.root,
              icon: ICONS.voter,
              children: [
                { title: t('Add Voter'), path: paths.dashboard.voter.new },
                {
                  title: t('Vote Prediction'),
                  path: paths.dashboard.vote_prediction.list,
                },
              ],
            },

            {
              title: t('Template Library'),
              path: paths.dashboard.templateLibrary.root,
              icon: ICONS.electionManagement,
              children: [
                { title: t('All Templates'), path: paths.dashboard.templateLibrary.root },
                { title: t('Your Project'), path: paths.dashboard.templateLibrary.project },
              ],
            },

            //  Appointment
            // {
            //   subheader: t('Appointment Management'),
            //   items: [
            // {
            //   title: t('Appointment Management'),
            //   path: paths.dashboard.Appointment.root,
            //   icon: ICONS.partyManagement,
            //   children: [
            //     { title: t('Add Appointment '), path: paths.dashboard.Appointment.new },
            //     { title: t('Appointment  List'), path: paths.dashboard.Appointment.root },
            //   ],
            // },
            //   ],
            // },

            // {
            //   // Project Management

            //   title: t('Project Managment'),
            //   path: paths.dashboard.kanban,
            //   icon: ICONS.kanban,
            // },

            // Appointment

            // {
            //   title: t('Appointment Management'),
            //   path: paths.dashboard.Appointment,
            //   icon: ICONS.complaintForm,
            //   children: [
            //     // { title: t('Appointment '), path: paths.dashboard.Appointment.new },
            //     { title: t('Appointment List'), path: paths.dashboard.Appointment.root },
            //   ],
            // },

            {
              title: t('Feedback Form'),
              path: paths.dashboard.FeedbackPage.root,
              icon: ICONS.complaintForm,
              items: [
                {
                  title: t('Feedback Form'),
                  path: paths.dashboard.FeedbackPage.new,
                  icon: ICONS.complaintForm,
                },
              ],
            },
          ],
        });
        break;
      case 'Candidate Manager':
        sections.push({
          subheader: t('Election Management'),
          items: [
            {
              title: t('User Management'),
              path: paths.dashboard.userProfileManagement.root,
              icon: ICONS.user,
              children: [
                { title: t('Add User'), path: paths.dashboard.userProfileManagement.new },
                {
                  title: t('User List'),
                  path: paths.dashboard.userProfileManagement.list,
                },
              ],
            },
            {
              title: t('Voter Management'),
              path: paths.dashboard.voter.root,
              icon: ICONS.voter,
              children: [
                { title: t('Add Voter'), path: paths.dashboard.voter.new },
                {
                  title: t('Voters List'),
                  path: paths.dashboard.voter.list,
                },
              ],
            },
            {
              title: t('Category Management'),
              path: paths.dashboard.category.root,
              icon: ICONS.expense,
              children: [
                { title: t('Add Category'), path: paths.dashboard.category.new },
                { title: t('Category List'), path: paths.dashboard.category.root },
              ],
            },
            {
              title: t('Claim Management'),
              path: paths.dashboard.claim.root,
              icon: ICONS.candidate,
              children: [
                { title: t('Add Claim'), path: paths.dashboard.claim.new },
                { title: t('Claim List'), path: paths.dashboard.claim.root },
              ],
            },
            {
              title: t('Invoice Management'),
              path: paths.dashboard.invoice.root,
              icon: ICONS.expense,
              children: [
                { title: t('Add Invoice'), path: paths.dashboard.invoice.new },
                { title: t('Invoice List'), path: paths.dashboard.invoice.root },
              ],
            },
            {
              title: t('Transport Management'),
              path: paths.dashboard.vehicle.root,
              icon: ICONS.vehicle,
              children: [
                {
                  title: t('Driver Management'),
                  path: paths.dashboard.driver.root,
                  icon: ICONS.driver,
                  children: [
                    { title: t('Add Driver'), path: paths.dashboard.driver.new },
                    { title: t('Driver List'), path: paths.dashboard.driver.root },
                  ],
                },
                {
                  title: t('Vehicle Management'),
                  path: paths.dashboard.vehicle.root,
                  icon: ICONS.vehicle,
                  children: [
                    { title: t('Add Vehicle'), path: paths.dashboard.vehicle.new },
                    { title: t('Vehicle List'), path: paths.dashboard.vehicle.root },
                  ],
                },

                {
                  title: t('Create Trip'),
                  path: paths.dashboard.createtrip.root,
                  icon: ICONS.trip,
                  children: [{ title: t('Add Trip '), path: paths.dashboard.createtrip.new }],
                },
                {
                  title: t('Trip Management'),
                  path: paths.dashboard.trip.root,
                  icon: ICONS.services,
                  children: [
                    // { title: t('Add Trip'), path: paths.dashboard.trip.new },
                    { title: t('Requested Trip List'), path: paths.dashboard.trip.requestedList },
                    { title: t('Managed Trip List'), path: paths.dashboard.trip.managedList },
                  ],
                },
                {
                  title: t('Ambulance Book'),
                  path: paths.dashboard.ambulancetrip.root,
                  icon: ICONS.ambulance,
                  children: [{ title: t('Add Trip '), path: paths.dashboard.ambulancetrip.new }],
                },
                {
                  title: t('Ambulance  Management'),
                  path: paths.dashboard.callAmbulance.root,
                  icon: ICONS.ambulance,
                  children: [
                    // { title: t('Add Trip'), path: paths.dashboard.trip.new },
                    { title: t('Requested Trip List'), path: paths.dashboard.callAmbulance.requestedList },
                    { title: t('Managed Trip List'), path: paths.dashboard.callAmbulance.managedList },
                    // { title: t('Ambulance Trip List'), path: paths.dashboard.trip.ambulanceList },
                  ],
                },
                {
                  title: t('Feedback Form'),
                  path: paths.dashboard.FeedbackPage.root,
                  icon: ICONS.complaintForm,
                  items: [
                    {
                      title: t('Feedback Form'),
                      path: paths.dashboard.FeedbackPage.new,
                      icon: ICONS.complaintForm,
                    },
                  ],
                },
              ],
            },
          ],
        });
        break;
      case 'Ward Leader':
        sections.push(
          {
            subheader: t('Transport Managment'),
            items: [
              {
                title: t('Driver Management'),
                path: paths.dashboard.driver.root,
                icon: ICONS.driver,
                children: [
                  { title: t('Add Driver'), path: paths.dashboard.driver.new },
                  { title: t('Driver List'), path: paths.dashboard.driver.root },
                ],
              },
              {
                title: t('Vehicle Management'),
                path: paths.dashboard.vehicle.root,
                icon: ICONS.vehicle,
                children: [
                  { title: t('Add Vehicle'), path: paths.dashboard.vehicle.new },
                  { title: t('Vehicle List'), path: paths.dashboard.vehicle.root },
                ],
              },
              {
                title: t('Trip Management'),
                path: paths.dashboard.wardleader.root,
                icon: ICONS.trip,
                children: [
                  { title: t('Add Trip'), path: paths.dashboard.wardleader.new },
                  { title: t('Trip List'), path: paths.dashboard.wardleader.root },
                ],
              },
              {
                title: t('Trip Management'),
                path: paths.dashboard.trip.root,
                icon: ICONS.trip,
                children: [
                  // { title: t('Add Trip'), path: paths.dashboard.trip.new },
                  { title: t('Requested Trip List'), path: paths.dashboard.trip.root },
                  { title: t('Managed Trip List'), path: paths.dashboard.trip.root },
                ],
              },
                  {
                    title: t('Ambulance Book'),
                    path: paths.dashboard.ambulancetrip.root,
                    icon: ICONS.ambulance,
                    children: [
                      { title: t('Add Trip '), path: paths.dashboard.ambulancetrip.new },
                      {
                        title: t('Requested Trip List'),
                        path: paths.dashboard.callAmbulance.requestedList,
                      },
                    ],
                  },
                ],
              },
          {
            subheader: t('Expenses Management'),
            items: [
              {
                title: t('Category Management'),
                path: paths.dashboard.category.root,
                icon: ICONS.expense,
                children: [
                  { title: t('Add Category'), path: paths.dashboard.category.new },
                  { title: t('Category List'), path: paths.dashboard.category.root },
                ],
              },
              {
                title: t('Claim Management'),
                path: paths.dashboard.claim.root,
                icon: ICONS.candidate,
                children: [
                  { title: t('Add Claim'), path: paths.dashboard.claim.new },
                  { title: t('Claim List'), path: paths.dashboard.claim.root },
                ],
              },
              {
                title: t('Invoice Management'),
                path: paths.dashboard.invoice.root,
                icon: ICONS.expense,
                children: [
                  { title: t('Add Invoice'), path: paths.dashboard.invoice.new },
                  { title: t('Invoice List'), path: paths.dashboard.invoice.root },
                  // {
                  //   title: t('details'),
                  //   path: paths.dashboard.expenses.demo.details,
                  // },
                  // { title: t('edit'), path: paths.dashboard.expenses.demo.edit },
                ],
              },
            ],
          },
          {
            items: [
              {
                title: t('User Management'),
                path: paths.dashboard.userProfileManagement.root,
                icon: ICONS.user,
                children: [
                  { title: t('Add User'), path: paths.dashboard.userProfileManagement.new },
                  {
                    title: t('User List'),
                    path: paths.dashboard.userProfileManagement.list,
                  },
                ],
              },
            ],
          },
          {
            subheader: t('Election'),
            path: paths.dashboard.electionmanagement,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('Details'),
                path: paths.dashboard.electionmanagement.mockdetails,
                icon: ICONS.adminchat,
              },
            ],
          },
          {
            subheader: t('Ward'),
            path: paths.dashboard.wardmanagement,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('Details'),
                path: paths.dashboard.wardmanagement.mockdetails,
                icon: ICONS.adminchat,
              },
            ],
          },
          {
            subheader: t('Candidate'),
            path: paths.dashboard.candidate,
            icon: ICONS.adminchat,
            items: [
              { title: t('List'), path: paths.dashboard.candidate.list, icon: ICONS.adminchat },
            ],
          },
          {
            subheader: t('Booth'),
            path: paths.dashboard.boothmanagement,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('List'),
                path: paths.dashboard.boothmanagement.list,
                icon: ICONS.adminchat,
              },
            ],
          },
          {
            subheader: t('Trip'),
            items: [
              {
                title: t('Trip List'),
                path: paths.dashboard.tripdriver.root,
                icon: ICONS.trip,
              },
            ],
          },
          {
            subheader: t('Add'),
            path: paths.voter,
            icon: ICONS.adminchat,
            items: [{ title: t('Voter'), path: paths.dashboard.voter.new, icon: ICONS.adminchat }],
          },

          {
            subheader: t('feedbackform'),
            path: paths.dashboard.FeedbackPage.root,
            icon: ICONS.complaintForm,
            items: [
              {
                title: t('Feedback Form'),
                path: paths.dashboard.FeedbackPage.new,
                icon: ICONS.complaintForm,
              },
            ],
          }
        );
        break;
      case 'Booth Leader':
        sections.push(
          {
            subheader: t('Election'),
            path: paths.dashboard.electionManagment,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('Details'),
                path: paths.dashboard.electionmanagement.mockdetails,
                icon: ICONS.election,
              },
            ],
          },
          {
            subheader: t('Ward'),
            path: paths.dashboard.wardmanagement,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('Details'),
                path: paths.dashboard.wardmanagement.mockdetails,
                icon: ICONS.ward,
              },
            ],
          },
          {
            subheader: t('Candidate'),
            path: paths.dashboard.candidate,
            icon: ICONS.adminchat,
            items: [
              { title: t('List'), path: paths.dashboard.candidate.root, icon: ICONS.candidate },
            ],
          },
          {
            subheader: t('Trip Request'),
            path: paths.dashboard.wardvol,
            icon: ICONS.trip,
            items: [{ title: t('trip'), path: paths.dashboard.wardvol.new, icon: ICONS.trip }],
          },
          {
            subheader: t('ward volunteer'),
            path: paths.dashboard.voter,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('Add ward volunteer'),
                path: paths.dashboard.voter.new,
                icon: ICONS.voter,
              },
            ],
          },
          {
            title: t('Trip Management'),
            path: paths.dashboard.trip.root,
            icon: ICONS.trip,
            children: [
              // { title: t('Add Trip'), path: paths.dashboard.trip.new },
              { title: t('Requested Trip List'), path: paths.dashboard.trip.root },
              { title: t('Managed Trip List'), path: paths.dashboard.trip.root },
            ],
          },
          {
            subheader: t('ambulance'),
            path: paths.dashboard.ambulancetrip.root,
            icon: ICONS.ambulance,
            items: [
              {
                title: t('Ambulance Book'),
                path: paths.dashboard.ambulancetrip.root,
                icon: ICONS.ambulance,
                children: [
                  { title: t('Add Trip '), path: paths.dashboard.ambulancetrip.new },
                  {
                    title: t('Requested Trip List'),
                    path: paths.dashboard.callAmbulance.requestedList,
                  },
                ],
              },
            ],
          },
          {
            subheader: t('feedbackform'),
            path: paths.dashboard.FeedbackPage.root,
            icon: ICONS.complaintForm,
            items: [
              {
                title: t('Feedback Form'),
                path: paths.dashboard.FeedbackPage.new,
                icon: ICONS.complaintForm,
              },
            ],
          }
        );
        break;
      case 'Polling Station Leader':
        sections.push(
          {
            title: t('User Management'),
            path: paths.dashboard.userProfileManagement.root,
            icon: ICONS.user,
            items: [
              { title: t('Add User'), path: paths.dashboard.userProfileManagement.new },
              {
                title: t('User List'),
                path: paths.dashboard.userProfileManagement.list,
              },
            ],
          },
          {
            title: t('Polling Management'),
            path: paths.dashboard.poolmanagement.root,
            icon: ICONS.user,
            items: [
              { title: t('Add Poll'), path: paths.dashboard.poolmanagement.new },
              {
                title: t('Poll List'),
                path: paths.dashboard.poolmanagement.list,
              },
            ],
          },
          {
            title: t('Category Management'),
            path: paths.dashboard.category.root,
            icon: ICONS.expense,
            items: [
              { title: t('Add Category'), path: paths.dashboard.category.new },
              { title: t('Category List'), path: paths.dashboard.category.root },
            ],
          },
          {
            title: t('Voter Management'),
            path: paths.dashboard.voter.root,
            icon: ICONS.voter,
            items: [
              { title: t('Add Voter'), path: paths.dashboard.voter.new },
              {
                title: t('Voters List'),
                path: paths.dashboard.voter.list,
              },
            ],
          },
          {
            title: t('Transport Management'),
            path: paths.dashboard.vehicle.root,
            icon: ICONS.vehicle,
            items: [
              {
                title: t('Driver Management'),
                path: paths.dashboard.driver.root,
                icon: ICONS.driver,
                children: [
                  { title: t('Add Driver'), path: paths.dashboard.driver.new },
                  { title: t('Driver List'), path: paths.dashboard.driver.root },
                ],
              },
              {
                title: t('Vehicle Management'),
                path: paths.dashboard.vehicle.root,
                icon: ICONS.vehicle,
                children: [
                  { title: t('Add Vehicle'), path: paths.dashboard.vehicle.new },
                  { title: t('Vehicle List'), path: paths.dashboard.vehicle.root },
                ],
              },
              // {
              //   title: t('Trip Driver'),
              //   path: paths.dashboard.tripdriver.root,
              //   children: [
              //     { title: t('Add Trip Driver'), path: paths.dashboard.tripdriver.new },
              //     { title: t('Trip Driver List'), path: paths.dashboard.tripdriver.list },
              //   ],
              // },
              {
                title: t('Create Trip'),
                path: paths.dashboard.createtrip.root,
                icon: ICONS.trip,
                children: [{ title: t('Add Trip '), path: paths.dashboard.createtrip.new }],
              },
              {
                title: t('Trip Management'),
                path: paths.dashboard.trip.root,
                icon: ICONS.services,
                children: [
                  // { title: t('Add Trip'), path: paths.dashboard.trip.new },
                  { title: t('Requested Trip List'), path: paths.dashboard.trip.requestedList },
                  { title: t('Managed Trip List'), path: paths.dashboard.trip.managedList },
                ],
              },
                  {
                    title: t('Ambulance Book'),
                    path: paths.dashboard.ambulancetrip.root,
                    icon: ICONS.ambulance,
                    children: [
                      { title: t('Add Trip '), path: paths.dashboard.ambulancetrip.new },
                      {
                        title: t('Requested Trip List'),
                        path: paths.dashboard.callAmbulance.requestedList,
                      },
                    ],
                  },
              {
                title: t('Feedback Form'),
                path: paths.dashboard.FeedbackPage.root,
                icon: ICONS.complaintForm,
                items: [
                  {
                    title: t('Feedback Form'),
                    path: paths.dashboard.FeedbackPage.new,
                    icon: ICONS.complaintForm,
                  },
                ],
              },
            ],
          }
          
        );
        break;
      case 'Polling Station Volunteer':
        sections.push(
          {
            subheader: t('Election'),
            path: paths.dashboard.voterview,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('My Details'),
                path: paths.dashboard.voterview.details,
                icon: ICONS.adminchat,
              },
            ],
          },
          {
            subheader: t('Vote Prediction Management'),
            path: paths.dashboard.vote_prediction,
            items: [
              {
                title: t('Vote Prediction Management'),
                path: paths.dashboard.vote_prediction.list,
                icon: ICONS.voter,
              },
            ],
          },
          // {
          //   subheader: t('Create Trip'),
          //   items: [
          //     {
          //       title: t('Create Trip'),
          //       path: paths.dashboard.createtrip.root,
          //       icon: ICONS.trip,
          //       children: [
          //         {
          //           title: t('Add Trip'),
          //           path: paths.dashboard.createtrip.new,
          //         },
          //       ],
          //     },
          //   ],
          // },
          {
            title: t('Transport Management'),
            path: paths.dashboard.vehicle.root,
            icon: ICONS.vehicle,
            items: [
              {
                title: t('Driver Management'),
                path: paths.dashboard.driver.root,
                icon: ICONS.driver,
                children: [
                  { title: t('Add Driver'), path: paths.dashboard.driver.new },
                  { title: t('Driver List'), path: paths.dashboard.driver.root },
                ],
              },
              {
                title: t('Vehicle Management'),
                path: paths.dashboard.vehicle.root,
                icon: ICONS.vehicle,
                children: [
                  { title: t('Add Vehicle'), path: paths.dashboard.vehicle.new },
                  { title: t('Vehicle List'), path: paths.dashboard.vehicle.root },
                ],
              },
              // {
              //   title: t('Trip Driver'),
              //   path: paths.dashboard.tripdriver.root,
              //   children: [
              //     { title: t('Add Trip Driver'), path: paths.dashboard.tripdriver.new },
              //     { title: t('Trip Driver List'), path: paths.dashboard.tripdriver.list },
              //   ],
              // },
              {
                title: t('Create Trip'),
                path: paths.dashboard.createtrip.root,
                icon: ICONS.trip,
                children: [{ title: t('Add Trip '), path: paths.dashboard.createtrip.new }],
              },
              {
                title: t('Trip Management'),
                path: paths.dashboard.trip.root,
                icon: ICONS.services,
                children: [
                  // { title: t('Add Trip'), path: paths.dashboard.trip.new },
                  { title: t('Requested Trip List'), path: paths.dashboard.trip.requestedList },
                  { title: t('Managed Trip List'), path: paths.dashboard.trip.managedList },
                ],
              },
                  {
                    title: t('Ambulance Book'),
                    path: paths.dashboard.ambulancetrip.root,
                    icon: ICONS.ambulance,
                    children: [
                      { title: t('Add Trip '), path: paths.dashboard.ambulancetrip.new },
                      {
                        title: t('Requested Trip List'),
                        path: paths.dashboard.callAmbulance.requestedList,
                      },
                    ],
                  },
              {
                title: t('Feedback Form'),
                path: paths.dashboard.FeedbackPage.root,
                icon: ICONS.complaintForm,
                items: [
                  {
                    title: t('Feedback Form'),
                    path: paths.dashboard.FeedbackPage.new,
                    icon: ICONS.complaintForm,
                  },
                ],
              },
            ],
          }
        );
        break;
      case 'Driver':
        sections.push(
          {
            subheader: t('My Trip'),
            items: [
              {
                title: t('Trip List'),
                path: paths.dashboard.tripdriver.root,
                icon: ICONS.trip,
              },
            ],
          },
          {
            subheader: t('Election'),
            path: paths.dashboard.voterview,
            icon: ICONS.election,
            items: [
              {
                title: t('My Election Details'),
                path: paths.dashboard.voterview.details,
                icon: ICONS.election,
              },
            ],
          },

          {
            subheader: t('candidateLibrary'),
            path: paths.dashboard.candidateLibrary,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('Candidate Library'),
                path: paths.dashboard.candidateLibrary.list,
                icon: ICONS.adminchat,
              },
            ],
          },

          {
            subheader: t('voterReferral'),
            path: paths.dashboard.voterReferal,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('Voter referral'),
                path: paths.dashboard.voterReferal.new,
                icon: ICONS.adminchat,
              },
            ],
          },
          {
            subheader: t('votingSlip'),
            path: paths.dashboard.votingSlip,
            icon: ICONS.votingSlip,
            items: [
              {
                title: t('voting Slip'),
                path: paths.dashboard.votingSlip.new,
                icon: ICONS.voterSlip,
              },
            ],
          },
          {
            subheader: t('ambulance'),
            path: paths.dashboard.ambulancetrip.root,
            icon: ICONS.ambulance,
            items: [
              {
                title: t('Ambulance Book'),
                path: paths.dashboard.ambulancetrip.root,
                icon: ICONS.ambulance,
                children: [
                  { title: t('Add Trip '), path: paths.dashboard.ambulancetrip.new },
                  {
                    title: t('Requested Trip List'),
                    path: paths.dashboard.callAmbulance.requestedList,
                  },
                ],
              },
            ],
          },
          {
            subheader: t('complaintSection'),
            path: paths.dashboard.ComplaintForm,
            icon: ICONS.complaintForm,
            items: [
              {
                title: t('complaint Section'),
                path: paths.dashboard.ComplaintForm.new,
                icon: ICONS.complaintForm,
              },
            ],
          }
        );
        break;
      case 'Voter':
        sections.push(
          {
            subheader: t('Election'),
            path: paths.dashboard.voterview,
            icon: ICONS.election,
            items: [
              {
                title: t('My Election Details'),
                path: paths.dashboard.voterview.details,
                icon: ICONS.election,
              },
            ],
          },

          {
            subheader: t('candidateLibrary'),
            path: paths.dashboard.candidateLibrary,
            icon: ICONS.adminchat,
            items: [
              {
                title: t('Candidate Profile Library'),
                path: paths.dashboard.candidateLibrary.list,
                icon: ICONS.adminchat,
              },
            ],
          },

          {
            subheader: t('Voter'),
            path: paths.dashboard.voter,
            icon: ICONS.voter,
            items: [
              { title: t('Add New Voter '), path: paths.dashboard.voter.new, icon: ICONS.voter },
            ],
          },

          // {
          //   // Voter Referal by Ankit Kumar

          //   subheader: t('voterReferal'),
          //   path: paths.dashboard.voterReferal,
          //   icon: ICONS.voter,
          //   items: [
          //     { title: t('Voter referral'), path: paths.dashboard.voterReferal.new, icon: ICONS.booth },
          //   ],
          // },

          // compaintForm by Gurpreet
          {
            subheader: t('votingSlip'),
            path: paths.dashboard.votingSlip,
            icon: ICONS.votingSlip,
            items: [
              {
                title: t('voting Slip'),
                path: paths.dashboard.votingSlip.new,
                icon: ICONS.voterSlip,
              },
            ],
          },
          // compaintForm by Pankaj
          {
            subheader: t('complaintSection'),
            path: paths.dashboard.ComplaintForm,
            icon: ICONS.complaintForm,
            items: [
              {
                title: t('complaint Section'),
                path: paths.dashboard.ComplaintForm.new,
                icon: ICONS.complaintForm,
              },
            ],
          },

          // tourAndTravels by Avanish
          {
            subheader: t('tourAndTravels'),
            path: paths.dashboard.TourAndTravels,
            icon: ICONS.TourAndTravels,
            items: [
              {
                title: t('Tour & Travels'),
                path: paths.dashboard.TourAndTravels.new,
                icon: ICONS.TourAndTravels,
              },
            ],
          },
          {
            subheader: t('Appointment Booking '),
            path: paths.dashboard.Appointment.root,
            icon: ICONS.partyManagement,
            items: [
              {
                title: t('Appointment Booking'),
                path: paths.dashboard.Appointment.card,
                icon: ICONS.partyManagement,
              },
            ],
          },

          {
            subheader: t('AssignedVehicle'),
            path: paths.dashboard.AssignedVehicle,
            icon: ICONS.vehicle,
            items: [
              {
                title: t('Book vehicle for Voting'),
                path: paths.dashboard.AssignedVehicle.new,
                icon: ICONS.vehicle,
              },
            ],
          },

          // work in avinash
          {
            subheader: t('StudentCareer'),
            path: paths.dashboard.StudentCareer,
            icon: ICONS.students,
            items: [
              {
                title: t('Student Career Roadmap'),
                path: paths.dashboard.StudentCareer.new,
                icon: ICONS.students,
              },
            ],
          },

          {
            subheader: t('ambulance'),
            path: paths.dashboard.ambulancetrip.root,
            icon: ICONS.ambulance,
            items: [
              {
                title: t('Ambulance Book'),
                path: paths.dashboard.ambulancetrip.root,
                icon:  ICONS.ambulance,
                children: [
                  { title: t('Add Trip '), path: paths.dashboard.ambulancetrip.new },
                  { title: t('Requested Trip List'), path: paths.dashboard.callAmbulance.requestedList },
                ],
              },
            ],
          },

          // {
          //   subheader: t('LabourService'),
          //   path: paths.dashboard.LabourService,
          //   icon: ICONS.careers,
          //   items: [
          //     {
          //       title: t('Labour Career Roadmap'),
          //       path: paths.dashboard.LabourService.new,
          //       icon: ICONS.careers,
          //     },
          //   ],
          // },

          // {
          //   subheader: t('GovernmentEmployeeRoadmap'),
          //   path: paths.dashboard.LabourService,
          //   icon: ICONS.careers,
          //   items: [
          //     { title: t('Government Employee Roadmap'), path: paths.dashboard.LabourService.new, icon: ICONS.careers },
          //   ],
          // },
          {
            subheader: t('FarmerService'),
            path: paths.dashboard.FarmerService,
            icon: ICONS.farmer,
            items: [
              {
                title: t('Farmer Career Roadmap'),
                path: paths.dashboard.FarmerService.new,
                icon: ICONS.farmer,
              },
            ],
          },

          {
            subheader: t('GovtService'),
            path: paths.dashboard.GovtService,
            icon: ICONS.farmer,
            items: [
              {
                title: t('Govt Services Roadmap'),
                path: paths.dashboard.GovtService.new,
                icon: ICONS.farmer,
              },
            ],
          },
          // {
          //   subheader: t('Government Employee Roadmap'),
          //   items: [
          //     {
          //       title: t('Government Employee Roadmap'),
          //       path: paths.dashboard.GovtService.jobtransfer,
          //       icon: ICONS.driver,
          //       children: [
          //         {
          //           title: t('Job Transfer'),
          //           path: paths.dashboard.GovtService.jobtransfer,
          //         },
          //         {
          //           title: t('Fill a Complaint'),
          //           path: paths.dashboard.GovtService.Complaint,
          //         },
          //         {
          //           title: t('Tell your problem to Neta Ji'),
          //           path: paths.dashboard.GovtService.problem,
          //         },
          //       ],
          //     },
          //   ],
          // },

          {
            subheader: t('WomenEmpowerment'),
            path: paths.dashboard.LabourService,
            icon: ICONS.womanEmpowerment,
            items: [
              {
                title: t('Women Empowerment'),
                path: paths.dashboard.WomanEmpourment.new,
                icon: ICONS.womanEmpowerment,
              },
            ],
          },

          // business road
          {
            subheader: t('Business Career Roadmap'),
            path: paths.dashboard.BussinessRoadmap,
            icon: ICONS.careers,
            items: [
              {
                title: t('Business Career Roadmap'),
                path: paths.dashboard.BussinessRoadmap.new,
                icon: ICONS.careers,
              },
            ],
          },
          {
            subheader: t('Ration Card Ditrubution'),
            path: paths.dashboard.BussinessRoadmap,
            icon: ICONS.complaintForm,
            items: [
              {
                title: t('Ration Card Ditrubution'),
                path: paths.dashboard.BussinessRoadmap.new,
                icon: ICONS.careers,
              },
            ],
          },

          {
            subheader: t('GovernmentScheme'),
            path: paths.dashboard.GovtScheme,
            icon: ICONS.careers,
            items: [
              {
                title: t('Government Scheme'),
                path: paths.dashboard.GovtScheme.new,
                icon: ICONS.adminchat,
              },
            ],
          },

          {
            subheader: t('feedbackform'),
            path: paths.dashboard.FeedbackPage.root,
            icon: ICONS.complaintForm,
            items: [
              {
                title: t('Feedback Form'),
                path: paths.dashboard.FeedbackPage.new,
                icon: ICONS.complaintForm,
              },
            ],
          },
          {
            // Project Management Deepak
            subheader: t('Project Progress'),
            path: paths.dashboard.user_project.list,
            icon: ICONS.kanban,
            items: [
              {
                title: t('Project Progress'),
                path: paths.dashboard.user_project.list,
                icon: ICONS.kanban,
              },
            ],
          }

          // <<<<<<< HEAD
          // // <<<<<<< HEAD
          // =======
          // >>>>>>> 84fadce1ac41bd6bf0027ef2d8779deceb94690f
          // Appointment

          // {
          //   subheader: t('Appointment Management'),
          //   path: paths.dashboard.Appointment.root,
          //   icon: ICONS.complaintForm,
          //   items: [
          //     { title: t('Appointment '),
          //     path: paths.dashboard.Appointment.new,
          //     icon: ICONS.complaintForm,
          //     },
          //     { title: t('Track Appointment List'), path: paths.dashboard.Appointment.detailslist },
          //   ],
          // },

          // {
          //   subheader: t('chatwithfriends'),
          //   path: paths.dashboard.chat,
          //   icon: ICONS.adminchat,
          //   items: [
          //     { title: t('Chat with Friends'), path: paths.dashboard.chat, icon: ICONS.adminchat },
          //   ],
          // },

          // {
          //   subheader: t('Create Trip'),
          //   path: paths.dashboard.createtrip.root,
          //   icon: ICONS.trip,
          //   items: [
          //     { title: t('Trip Request'), path: paths.dashboard.createtrip.new, icon: ICONS.vehicle },
          //   ],
          // },
          // {
          //   subheader: t('Trip Management'),
          //   path: paths.dashboard.trip.root,
          //   icon: ICONS.trip,
          //   items: [
          //     // { title: t('Add Trip'), path: paths.dashboard.trip.new },
          //     { title: t('Requested Trip List'), path: paths.dashboard.trip.requestedList,icon:ICONS.trip },

          //   ],
          // },
        );
        break;
      default:
        sections.push();
        break;
    }
    return sections;
  }, [t, userRoleType]);

  return data;
}
// User Role Managment By Thomas

// User Profile Management By Thomas
// {
//   title: t('User Management'),
//   path: paths.dashboard.userProfileManagement.root,
//   icon: ICONS.user,
//   children: [
//     { title: t('Add User'), path: paths.dashboard.userProfileManagement.new },
//     {
//       title: t('User List'),
//       path: paths.dashboard.userProfileManagement.list,
//     },
//   ],
// },

// {
//   subheader: t('OTP Managment'),
//   items: [
//     // Mobile OTP Managment By Shubhranshu
//     {
//       title: t('Mobile OTP Managment'),
//       path: paths.dashboard.candidate.root,
//       icon: ICONS.candidate,
//       children: [{ title: t('Mobile OTP Report'), path: paths.dashboard.candidate.root }],
//     },

//     // Email OTP Managment By Shubhranshu
//     {
//       title: t('Email OTP Managment'),
//       path: paths.dashboard.voter.root,
//       icon: ICONS.voter,
//       children: [{ title: t('Email OTP Report'), path: paths.dashboard.candidate.root }],
//     },
//   ],
// },
// {
//   subheader: t('SMS Managment'),
//   items: [
//     // SMS Managment By Saurabh
//     {
//       title: t('SMS Managment'),
//       path: paths.dashboard.candidate.root,
//       icon: ICONS.sms,
//       children: [
//         { title: t('Send SMS'), path: paths.dashboard.candidate.new },
//         { title: t('SMS Report'), path: paths.dashboard.candidate.root },
//       ],
//     },
//     // Bulk SMS Managment By Saurabh
//     {
//       title: t('Bulk SMS Managment'),
//       path: paths.dashboard.voter.root,
//       icon: ICONS.bulk,
//       children: [
//         { title: t('Send Bulk SMS'), path: paths.dashboard.candidate.new },
//         { title: t('Bulk SMS Report'), path: paths.dashboard.candidate.root },
//       ],
//     },
//   ],
// },
// {
//   subheader: t('Subscription Managment'),
//   items: [
//     // Subscription Management By Yuraj
//     {
//       title: t('Subscription Management'),
//       path: paths.dashboard.candidate.root,
//       icon: ICONS.subscription,
//       children: [
//         { title: t('Add Subscription'), path: paths.dashboard.candidate.new },
//         { title: t('Subscription List'), path: paths.dashboard.candidate.root },
//       ],
//     },

//     // Service Management By Yuraj
//     {
//       title: t('Service Management'),
//       path: paths.dashboard.voter.root,
//       icon: ICONS.services,
//       children: [
//         { title: t('Add Service'), path: paths.dashboard.voter.new },
//         {
//           title: t('Service List'),
//           path: paths.dashboard.voter.list,
//         },
//       ],
//     },

//     // Sub-Service Management By Yuraj
//     {
//       title: t('Sub-Service Management'),
//       path: paths.dashboard.voter.root,
//       icon: ICONS.subservices,
//       children: [
//         { title: t('Add Sub-Service'), path: paths.dashboard.voter.new },
//         {
//           title: t('Sub-Service List'),
//           path: paths.dashboard.voter.list,
//         },
//       ],
//     },
//   ],
// },
// {
//   subheader: t('Service Version Managment'),
//   path: paths.dashboard.chat,
//   icon: ICONS.adminchat,
//   items: [
//     {
//       title: t('Add Service Version'),
//       path: paths.dashboard.candidate.new,
//       icon: ICONS.adminchat,
//     },
//     {
//       title: t('Service Version List'),
//       path: paths.dashboard.candidate.root,
//       icon: ICONS.adminchat,
//     },
//   ],
// },
// {
//   // Contact Details Managment By Saurabh
//   subheader: t('Contact Details Managment'),
//   path: paths.dashboard.contact,
//   icon: ICONS.adminchat,
//   items: [
//     {
//       title: t('Contact Details List'),
//       path: paths.dashboard.contact.root,
//       icon: ICONS.adminchat,
//     },
//   ],
// }
