import useSWR from 'swr';
import { useMemo } from 'react';

// import axios from 'src/utils/axios' ;

import { fetcher, endpoints } from 'src/utils/axios-analytic';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// Fetch Api Calls For Analytics
// ----------------------------------------------------------------------

// trip starts
export function useGetTrips() {
  const URL = endpoints.trip.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      trips: data || [],
      tripsLoading: isLoading,
      tripsError: error,
      tripsValidating: isValidating,
      tripsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetTrip(tripId) {
  const URL = tripId ? `${endpoints.trip.status}/${tripId}` : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      trip: data,
      tripLoading: isLoading,
      tripError: error,
      tripValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

//   trip ends

// elections starts
export function useGetElections() {
  const URL = endpoints.election.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      elections: data || [],
      electionsLoading: isLoading,
      electionsError: error,
      electionsValidating: isValidating,
      electionsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
// election ends

// ----------------------------------------------------------------------

// booth starts
export function useGetBooths() {
  const URL = endpoints.booth.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      booths: data || [],
      boothsLoading: isLoading,
      boothsError: error,
      boothsValidating: isValidating,
      boothsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
// booth ends

// ----------------------------------------------------------------------

// wards starts
export function useGetWards() {
  const URL = endpoints.ward.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      wards: data || [],
      wardsLoading: isLoading,
      wardsError: error,
      wardsValidating: isValidating,
      wardsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
// booth ends

// ----------------------------------------------------------------------

// polling starts
export function useGetPolling() {
  const URL = endpoints.pollingStation.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      pollingStations: data || [],
      pollingStationsLoading: isLoading,
      pollingStationsError: error,
      pollingStationsValidating: isValidating,
      pollingStationsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
// polling ends

// ----------------------------------------------------------------------

// candidates starts
export function useGetCandidates() {
  const URL = endpoints.candidate.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      candidates: data || [],
      candidatesLoading: isLoading,
      candidatesError: error,
      candidatesValidating: isValidating,
      candidatesEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetCandidateByFilter(filterType) {
  const URL = filterType ? `${endpoints.trip.filter}/${filterType}` : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      candidates: data,
      candidatesLoading: isLoading,
      candidatesError: error,
      candidatesValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// candidate ends

// ----------------------------------------------------------------------

// voters starts
export function useGetVoters() {
  const URL = endpoints.voter.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      voters: data || [],
      votersLoading: isLoading,
      votersError: error,
      votersValidating: isValidating,
      votersEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  
  return memoizedValue;
}
// voters ends

// ----------------------------------------------------------------------

// drivers starts
export function useGetDrivers() {
  const URL = endpoints.driver.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      drivers: data || [],
      driversLoading: isLoading,
      driversError: error,
      driversValidating: isValidating,
      driversEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
// drivers ends

// ----------------------------------------------------------------------

// users starts
export function useGetUsers() {
  // console.log(endpoints.user.all);
  const URL = endpoints.user.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      users: data || [],
      usersLoading: isLoading,
      usersError: error,
      usersValidating: isValidating,
      usersEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );

  // console.log(memoizedValue)
  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetUsersByRole(roleType) {
  const URL = roleType ? `${endpoints.trip.role}/${roleType}` : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      users: data,
      usersLoading: isLoading,
      usersError: error,
      usersValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// users ends

// ----------------------------------------------------------------------

// claims starts
export function useGetClaims() {
  const URL = endpoints.claim.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      claims: data || [],
      claimsLoading: isLoading,
      claimsError: error,
      claimsValidating: isValidating,
      claimsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
// claims ends

export function useGetClaimByStatus(statusType) {
  const URL = statusType ? `${endpoints.claim.status}/${statusType}` : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      claims: data,
      claimsLoading: isLoading,
      claimsError: error,
      claimsValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

// vehicles starts
export function useGetVehicles() {
  const URL = endpoints.vehicle.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      vehicles: data || [],
      vehiclesLoading: isLoading,
      vehiclesError: error,
      vehiclesValidating: isValidating,
      vehiclesEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
// vehicles ends

// ----------------------------------------------------------------------

// otp starts
export function useGetOtps() {
  const URL = endpoints.otp.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      otps: data || [],
      otpsLoading: isLoading,
      otpsError: error,
      otpsValidating: isValidating,
      otpsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
// otp ends

export function useGetOtpsByStatus(statusType) {
  const URL = statusType ? `${endpoints.claim.status}/${statusType}` : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      otps: data,
      otpsLoading: isLoading,
      otpsError: error,
      otpsValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------
// email otp starts
export function useGetEmailOtps() {
  const URL = endpoints.emailOtp.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      emailOtps: data || [],
      otpsLoading: isLoading,
      otpsError: error,
      otpsValidating: isValidating,
      otpsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
// otp ends

export function useGetEmailOtpsByStatus(statusType) {
  const URL = statusType ? `${endpoints.claim.status}/${statusType}` : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      otps: data,
      otpsLoading: isLoading,
      otpsError: error,
      otpsValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

// contact starts
export function useGetContacts() {
  const URL = endpoints.contact.all;
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      contacts: data || [],
      contactsLoading: isLoading,
      contactsError: error,
      contactsValidating: isValidating,
      contactsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}
// otp ends

export function useGetContactsByStatus(statusType) {
  const URL = statusType ? `${endpoints.contact.status}/${statusType}` : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  const memoizedValue = useMemo(
    () => ({
      contacts: data,
      contactsLoading: isLoading,
      contactsError: error,
      contactsValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
