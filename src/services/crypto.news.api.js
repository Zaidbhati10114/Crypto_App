import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoNewsHeaders =  {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'f1ab68749fmsh3da47abcd2d24d1p18ea50jsn63ebf4754fdc'
  };

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
  const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });


  export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptosNews: builder.query({
        query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });

  export const {useGetCryptosNewsQuery} = cryptoNewsApi;




//     url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
