import isEqual from 'lodash/isEqual';
import { useState, useEffect, useCallback } from 'react';
import Link from  '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Divider, useTheme } from '@mui/material';
import {
  DataGrid,
  GridToolbarExport,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
} from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { deleter } from 'src/utils/axios-call';

import {
  useGetAppointments,
  useGetAppointmentsByvoter,
  useGetAppointmentsByCandidate,
} from 'src/api/appointment';
import { useAuthContext } from 'src/auth/hooks';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useSnackbar } from 'src/components/snackbar';
import EmptyContent from 'src/components/empty-content';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import {  useLocation } from 'react-router-dom';
import AppointmentTableFiltersResult from '../Appointment-table-filters-result';
import AppointmentManagementAnalytics from '../Appointment_management-analytics';
import {
  RenderCellFoundationYear,
  RenderCellAppointmentName,
  RenderCellAppointmentLeader,
  RenderCellAppointmentSymbol,
} from '../Appointment-table-row';

// ----------------------------------------------------------------------

const defaultFilters = {
  publish: [],
  stock: [],
};

const HIDE_COLUMNS = {
  category: false,
};

const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

// ----------------------------------------------------------------------

export default function AppointmentListView() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get('status');
 
  const { enqueueSnackbar } = useSnackbar();
  
  const [tableData, setTableData] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const confirmRows = useBoolean();


  const router = useRouter();
  const settings = useSettingsContext();
  // const { appointment, appointmentLoading } = useGetAppointmentsByvoter();

  // const { appointmentc, appointmentcLoading } = useGetAppointmentsByCandidate();
  // console.log(appointment);
  const theme = useTheme();

  const { user } = useAuthContext();
 
  const { appointments, appointmentsLoading } = useGetAppointments();
  console.log(appointments)
  const p = user.userRoleType === 'Candidate';
  

  const [columnVisibilityModel, setColumnVisibilityModel] = useState(HIDE_COLUMNS);
  
  useEffect(() => {
    if (appointments && appointments.data) {
      
      if (user.userRoleType === 'Voter') {
        const filteredAppointments = appointments.data.filter(
          (appointmen) => appointmen.voterId === user.userId
        );
        console.log(filteredAppointments);
        const filter=filteredAppointments.filter(i=>i.appointmentStatus===status)
        setTableData(filter);
         console.log(filter);
      } else if (user.userRoleType === 'Candidate') { 
        const filteredAppointments = appointments.data.filter(
          (appointmen) => appointmen.candidateId === user.userId
        );
        setTableData(filteredAppointments);

        // console.log(filteredAppointments);
      }
    }
  }, [appointments, user.userId, user.userRoleType,status]);
  

   const open=tableData.filter(i=>i.appointmentStatus==="open")
   const inProgress=tableData.filter(i=>i.appointmentStatus==="in-progres")
   const close=tableData.filter(i=>i.appointmentStatus==="closed")
 



  const dataFiltered = applyFilter({
    inputData: tableData,
    filters,
  });



  const canReset = !isEqual(defaultFilters, filters);

  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  // const handleDeleteRow = useCallback(handleDeleteRows();
  //   async (id) => {
  //     try {
  //       // Use the correct API endpoint URL
  //       const url = `/party/delete/${id}`;

  //       // Use the DELETE HTTP method
  //       const httpMethod = 'DELETE';
  //       // Use the DELETE HTTP method
  //       const headers = {
  //         method: httpMethod,
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${user.accessToken}`,
  //         },
  //       };

  //       const response = await deleter(url, headers);

  //       if (response.success === true) {
  //         // Handle success
  //         enqueueSnackbar('Delete success!', { variant: 'success' });
  //         // Update table data after successful deletion
  //         const updatedTableData = tableData.filter((row) => row.id !== id);
  //         setTableData(updatedTableData);
  //       } else {
  //         // Handle error
  //         enqueueSnackbar(response.message, { variant: 'error' });
  //       }

  //       console.info('API Response:', response);
  //     } catch (error) {
  //       console.error('API Error:', error);
  //       enqueueSnackbar('Failed to delete row', { variant: 'error' });
  //     }
  //   },
  //   [enqueueSnackbar, tableData, user.accessToken]
  // );

  // const handleDeleteRows = useCallback(async () => {
  //   try {
  //     // Create an array of ids to be deleted
  //     const idsToDelete = tableData
  //       .filter((row) => selectedRowIds.includes(row.id))
  //       .map((row) => row.id);

  //     const apiUrl = `/party/delete`;

  //     const httpMethod = 'DELETE';

  //     const headers = {
  //       method: httpMethod,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     };

  //     // Make the API request for each id
  //     await Promise.all(
  //       idsToDelete.map(async (id) => {
  //         const url = `${apiUrl}/${id}`;
  //         const response = await deleter(url, headers);

  //         if (response.success !== true) {
  //           throw new Error(response.message);
  //         }

  //         console.info('API Response:', response);
  //       })
  //     );

  //     // Filter out deleted rows from tableData
  //     const updatedTableData = tableData.filter((row) => !idsToDelete.includes(row.id));
  //     setTableData(updatedTableData);

  //     enqueueSnackbar('Delete success!', { variant: 'success' });
  //   } catch (error) {
  //     console.error('API Error:', error);
  //     enqueueSnackbar('Failed to delete row', { variant: 'error' });
  //   }
  // }, [enqueueSnackbar, selectedRowIds, tableData]);

  const handleEditRow = useCallback(
    (id) => {
      router.push(paths.dashboard.Appointment.edit(id));
    },
    [router]
  );

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.dashboard.Appointment.details(id));
    },
    [router]
  );

  const columns = [
    {
      field: 'category',
      headerName: 'Category',
      filterable: false,
    },
    
    {
      // field: 'appointment_time',
      headerName: 'Email',
      flex: 1,
      width: 80,
      hideable: false,
      renderCell: (params) => <RenderCellAppointmentName params={params} />,
    },
    {
      field: 'problemDescription',
      headerName: 'Number',
      flex: 1,
      width: 80,
      // renderCell: (params) => <div>Static Value</div>,

       renderCell: (params) => <RenderCellAppointmentLeader params={params} />,
    },
    {
      field: 'appointment_status',
      headerName: 'problem Status',
      flex: 1,
      width: 80,
      // renderCell: (params) => <div>Static Value</div>,

       renderCell: (params) => <RenderCellFoundationYear params={params} />,
    },
   
    // {
    //   field: 'appointment_status',
    //   headerName: 'problem Status',
    //   flex: 1,
    //   width: 80,
    //   // renderCell: (params) => <div>Static Value</div>,

    //    renderCell: (params) => <RenderCellFoundationYear params={params} />,
    // },
    

    {
      type: 'actions',
      field: 'actions',
      headerName: ' ',
      align: 'right',
      headerAlign: 'right',
      width: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      getActions: (params) => {
        const actions = [
          <GridActionsCellItem
            showInMenu
            icon={<Iconify icon="solar:eye-bold" />}
            label="View"
            onClick={() => handleViewRow(params.row.appointmentId)}
          />,
        ];

        if (p) {
          actions.push(
            <GridActionsCellItem
              showInMenu
              icon={<Iconify icon="solar:pen-bold" />}
              label="Edit"
              onClick={() => handleEditRow(params.row.appointmentId)}
            />
          );
        }

        return actions;
      },
    },
  ];

  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);

  return (
    <>
      <Container
        maxWidth={settings.themeStretch ? false : 'lg'}
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CustomBreadcrumbs
          heading="Appointments List"
          links={[
            {
              name: 'Appointments',
              href: paths.dashboard.Appointment.root,
            },
            { name: 'Booking' },
          ]}
          action={
            !p?<Button   
              component={RouterLink}
              href={paths.dashboard.Appointment.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
            Book Appointment
            </Button>:null
          }
          sx={{
            mb: {
              xs: 3,
              md: 5,
            },
          }}
        >
          
            {/* <Button
              component={RouterLink}
              href={paths.dashboard.Appointment.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
             Book Appointment
            </Button> */}
          
        </CustomBreadcrumbs>
        {!p&& <Button component={RouterLink} to="/dashboard/Appointment/card" variant="outlined" color="primary" style={{ textDecoration: 'none',width:'120px',padding:'3px 5px' }}>
  Back to card
</Button>}
        {/* {!p&&<Link href="/dashboard/Appointment/card" variant="body2" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="primary">Back to card</Button>
          </Link>} */}
        {/* analytic start here */}
        {p&&<Card
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          <Scrollbar>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
              sx={{ py: 2 }}
            >
              <AppointmentManagementAnalytics
                title="Total Request "
                total={tableData?.length}
                icon="solar:bill-list-bold-duotone"
                color={theme.palette.info.main}
              />

              <AppointmentManagementAnalytics
                title="Total Open Request "
                total={open?.length}
                percent={100}
                icon="solar:file-check-bold-duotone"
                color={theme.palette.success.main}
              />

              <AppointmentManagementAnalytics
                title="Total Panding Request "
                total={inProgress?.length}
                percent={100}
                // price={100}
                icon="solar:sort-by-time-bold-duotone"
                color={theme.palette.warning.main}
              />
              <AppointmentManagementAnalytics
                title="Total Close Request "
                total={close?.length}
                percent={100}
                // price={100}
                icon="solar:file-corrupted-bold-duotone"
                color={theme.palette.text.secondary}
              />
            </Stack>
          </Scrollbar>
        </Card>
        }

        {/* analytic ends here */}

        <Card
        // sx={{
        //   height: { xs: 800, md: 2 },
        //   flexGrow: { md: 1 },
        //   display: { md: 'flex' },
        //   flexDirection: { md: 'column' },
        // }}
        >
          <DataGrid
            checkboxSelection
            disableRowSelectionOnClick
            rows={dataFiltered}
            columns={columns}
            getRowId={(row) => row.appointmentId}
            loading={appointmentsLoading}
            getRowHeight={() => 'auto'}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            onRowSelectionModelChange={(newSelectionModel) => {
              setSelectedRowIds(newSelectionModel);
            }}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            slots={{
              toolbar: () => (
                <>
                  <GridToolbarContainer>
                    <GridToolbarQuickFilter />

                    <Stack
                      spacing={1}
                      flexGrow={1}
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      {!!selectedRowIds.length && (
                        <Button
                          size="small"
                          color="error"
                          startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
                          onClick={confirmRows.onTrue}
                        >
                          Delete ({selectedRowIds.length})
                        </Button>
                      )}
                    </Stack>
                  </GridToolbarContainer>

                  {canReset && (
                    <AppointmentTableFiltersResult
                      filters={filters}
                      onFilters={handleFilters}
                      onResetFilters={handleResetFilters}
                      results={dataFiltered.length}
                      sx={{ p: 2.5, pt: 0 }}
                    />
                  )}
                </>
              ),
              noRowsOverlay: () => <EmptyContent title="No Data" />,
              noResultsOverlay: () => <EmptyContent title="No results found" />,
            }}
            slotProps={{
              columnsPanel: {
                getTogglableColumns,
              },
            }}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={confirmRows.value}
        onClose={confirmRows.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {selectedRowIds.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            // onClick={() => {
            //   handleDeleteRows();
            //   confirmRows.onFalse();
            // }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, filters }) {
  const { stock, publish } = filters;

  if (stock.length) {
    inputData = inputData.filter((product) => stock.includes(product.inventoryType));
  }

  if (publish.length) {
    inputData = inputData.filter((product) => publish.includes(product.publish));
  }

  return inputData;
}
