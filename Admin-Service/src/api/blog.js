import useSWR from 'swr';
import axios from 'axios' ;
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios-blog';

import { ATTPL_BMS_HOST_API } from 'src/config-global';

// ----------------------------------------------------------------------

export function useGetPosts() {
  const URL = endpoints.blog.list;
  const accessToken = localStorage.getItem("accessToken");

  const { data, isLoading, error, isValidating } = useSWR([URL,{ headers: { Authorization: `Bearer ${accessToken}` }}], fetcher);
  const memoizedValue = useMemo(
    () => ({
      posts: data?.data || [],
      postsLoading: isLoading,
      postsError: error,
      postsValidating: isValidating,
      postsEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );
  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetPost(blogId) {
  const URL = blogId ? `${endpoints.blog.details}/${blogId}` : null;

  const accessToken = localStorage.getItem("accessToken");

  const { data, isLoading, error, isValidating } = useSWR([URL,{ headers: { Authorization: `Bearer ${accessToken}` }}], fetcher);
  const memoizedValue = useMemo(
    () => ({
        post: data,
        postLoading: isLoading,
        postError: error,
        postValidating: isValidating,
      }),
      [data, error, isLoading, isValidating]
    );
    console.log(memoizedValue)
    return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetLatestPosts(title) {
  const URL = ATTPL_BMS_HOST_API+title ? [endpoints.post.latest, { params: { title } }] : '';

  const accessToken = localStorage.getItem("accessToken");

  const { data, isLoading, error, isValidating } = useSWR([URL,{ headers: { Authorization: `Bearer ${accessToken}` }}], fetcher);

  const memoizedValue = useMemo(
    () => ({
      latestPosts: data?.latestPosts || [],
      latestPostsLoading: isLoading,
      latestPostsError: error,
      latestPostsValidating: isValidating,
      latestPostsEmpty: !isLoading && !data?.latestPosts.length,
    }),
    [data?.latestPosts, error, isLoading, isValidating]
  );
console.log(memoizedValue)
  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useSearchPosts(query) {
  const URL = ATTPL_BMS_HOST_API+query ? [endpoints.post.search, { params: { query } }] : '';
  const accessToken = localStorage.getItem("accessToken");

  const { data, isLoading, error, isValidating } = useSWR([URL,{ headers: { Authorization: `Bearer ${accessToken}` }}], fetcher, {
    keepPreviousData: true,
  });
  
  const memoizedValue = useMemo(
    () => ({
      searchResults: data?.results || [],
      searchLoading: isLoading,
      searchError: error,
      searchValidating: isValidating,
      searchEmpty: !isLoading && !data?.results.length,
    }),
    [data?.results, error, isLoading, isValidating]
  );
  
  return memoizedValue;
}

// ----------------------------------------------------------------------
// made by gurpreet
// Api Call For Profile Creation
export async function createBlog(formData) {
  const URL = ATTPL_BMS_HOST_API + endpoints.blog.create;

  try {

    const response = await axios.post(URL, formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
    });
    return response;
  } catch (error) {
    console.error('Error creating booth:', error);
    throw error;
  }
}

// ----------------------------------------------------------------------
// made by gurpreet
// Api Call For Profile Updation
export async function updateBlog(formData,id) {
  const URL = `${ATTPL_BMS_HOST_API}${endpoints.blog.edit}/${id}`;

  try {

    const response = await axios.put(URL, formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
    });
    return response;
  } catch (error) {
    console.error('Error creating booth:', error);
    throw error;
  }
}


