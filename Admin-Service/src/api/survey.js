import useSWR from 'swr';
import { useMemo } from 'react';

import { poster, fetcher, endpoints } from 'src/utils/axios-survey';


export async function CreateSurvey(data) {
  try {
    const URL = endpoints.survey.create;
    const accessToken = sessionStorage.getItem('accessToken');

    const header = { headers: { Authorization: `Bearer ${accessToken}` } };

    const { surveyName, surveyDescription, surveyStatus, surveyTitle, surveyQuestions } = data;

    const dataCreateSurvey = {
      surveyName,
      surveyDescription,
      surveyStatus,
      surveyTitle,
      userId: 1,
    };

    const response = await poster(URL, dataCreateSurvey, header);
    console.log(response);

    if (surveyQuestions.length > 0 && response.data.surveyId) {
      const questionAdd = surveyQuestions.map((item) => {
        const questionUrl = `${endpoints.survey.addQuestion}/${response.data.surveyId}/questions`;
        const dataAddQuestion = { ...item, userId: 1, numberOfQuestionOption: item.options.length };
        console.log(dataAddQuestion);
        // Return the promise returned by the `poster` function
        return poster(questionUrl, dataAddQuestion, header);
      });

      const result = await Promise.all(questionAdd);
      console.log('Results:', result);
      if (result) {
        const allSuccessful = result.every((item) => item.success);
        console.log(allSuccessful);
        if (!allSuccessful) {
          console.error('Some API calls for adding question were not successful');
        } else {
          return allSuccessful;
        }
      }
    }
  } catch (error) {
    console.error('Error creating Survey:', error);
  }
}

// export async function AddSurveyQus(id, data) {
//   try {
//     const URL = endpoints.survey.survey`/:${id}/questions`;
//     const accessToken = sessionStorage.getItem("accessToken");

//     const response = await poster(URL, data,
//       { headers: { Authorization: `Bearer ${accessToken}` } }
//     );
//     if (response) {
//       return response
//     }
//   } catch (error) {
//     console.error('Error creating driver profile:', error);
//   }
// };

export async function AddSurveyResponse(id, data) {
  try {
    const URL = endpoints.survey.survey`/:${id}/responses`;
    const accessToken = sessionStorage.getItem('accessToken');

    const response = await poster(URL, data, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (response) {
      return response;
    }
  } catch (error) {
    console.error('Error creating Survey response:', error);
  }
}

export function useGetSurveyResponse(id) {
  const URL = endpoints.survey.surveys`/:${id}/responses`;
  // const accessToken = sessionStorage.getItem("accessToken");

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
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

  console.log(memoizedValue);
  return memoizedValue;
}
