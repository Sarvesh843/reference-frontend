// import useSWR from 'swr';
// import { useMemo } from 'react';
import { poster,endpoints } from 'src/utils/axios-auth';

import { ATTPL_UMS_HOST_API } from 'src/config-global';

const mapper = {
    'register': ATTPL_UMS_HOST_API + endpoints.auth.register,
    'registerfP' : ATTPL_UMS_HOST_API + endpoints.auth.forgotpassword,
}

export function registerPoster(apiType, formData) {
    const URL = mapper[apiType];
    const data = poster(URL, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return data;
}