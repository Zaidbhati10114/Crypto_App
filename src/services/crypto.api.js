import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "f1ab68749fmsh3da47abcd2d24d1p18ea50jsn63ebf4754fdc",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetails:builder.query({
      query:(coinId)=>createRequest(`/coin/${coinId}`)

    }),

    getCryptosHistory:builder.query({
      query:({coinId,timeperiod})=>createRequest(`/coin/${coinId}/history/${timeperiod}`),

    })
  }),
});

export const { useGetCryptosQuery,useGetCryptosDetailsQuery,usegetCryptosHistoryQuery } = cryptoApi;
