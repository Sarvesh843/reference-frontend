import useSWR from 'swr';
import { useMemo } from 'react';

import axios from 'src/utils/axios';
import { fetcher, endpoints } from 'src/utils/axios-call';

import { ATTPL_EMS_HOST_API } from 'src/config-global';



const STORAGE_KEY = 'accessToken';
const accessToken = localStorage.getItem(STORAGE_KEY);
// --------------------------------------------------------
// Fetch Api Calls For Voter
// --------------------------------------------------------


export function useGetVoters() {
  const URL = endpoints.voter.list;
  const { data, isLoading, error, isValidating } = useSWR([URL, { headers: { Authorization: `Bearer ${accessToken}` }}], fetcher);

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

export function useGetVotersDetails() {
  const URL = endpoints.voter.voterDetails;
  const { data, isLoading, error, isValidating } = useSWR([URL, { headers: { Authorization: `Bearer ${accessToken}` }}], fetcher);

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

export function useGetVoter(voterId) {
 
  const URL = voterId ? `${endpoints.voter.details}/${voterId}` : null;

  const { data, isLoading, error, isValidating } = useSWR([URL, { headers: { Authorization: `Bearer ${accessToken}` }}], fetcher);;

  const memoizedValue = useMemo(
    () => ({
      voter: data,
      voterLoading: isLoading,
      voterError: error,
      voterValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}



// ------------------------------------------------------
// Post Api Calls For Voter
// ------------------------------------------------------


export async function createVoterProfile(formData) {
  const URL = ATTPL_EMS_HOST_API + endpoints.voter.createprofile;
  try {
    const response = await axios.post(URL, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating voter profile:', error);
    throw error;
  }
}



// -----------------------------------------------------------
// Api call for Voter Update
// -----------------------------------------------------------

export async function UpdateVoterProfile(voterId, formData) {
  const URL = `${ATTPL_EMS_HOST_API + endpoints.voter.update}/${voterId}`;
 
  try {
    const response = await axios.put(URL, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    
    return response;
  } catch (error) {
    console.error('Error creating voter profile:', error);
    throw error;
  }
}

// ---------------------------------------------------
