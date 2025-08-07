import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_NEWS_API_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${process.env.REACT_APP_NEWS_API_KEY}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopHeadlines: builder.query({
            query: (args) => {
                const { country, category, pageSize } = args || {};
                return {
                    url: 'top-headlines',
                    params: {
                        country: country || 'us',
                        category: category || 'general',
                        pageSize: pageSize || 20,
                    }
                };
            },
        }),
        getEverything: builder.query({
            query: (args) => ({
                url: 'everything',
                params: {
                    q: args?.query || '',
                    sortBy: args?.sortBy || 'publishedAt',
                    pageSize: args?.pageSize || 20,
                    language: args?.language || 'en',
                }
            }),
        }),
        getSources: builder.query({
            query: () => 'sources',
        }),
    }),
});

export const {
    useGetTopHeadlinesQuery,
    useGetEverythingQuery,
    useGetSourcesQuery
} = newsApi;