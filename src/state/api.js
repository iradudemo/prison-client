// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
//   reducerPath: "adminApi",
//   tagTypes: [
//     "User",
//     "Users",
//     "Prisoners",
//     "Messages",
//     "Customers",
//     "Transactions",
//     "Geography",
//     "Sales",
//     "Admins",
//     "Performance",
//     "Dashboard",
//   ],
//   endpoints: (build) => ({
//     getUser: build.query({
//       query: (id) => `general/user/${id}`,
//       providesTags: ["User"],
//     }),
//     getUsers: build.query({
//       query: () => "auth/users",
//       providesTags: ["Users"],
//     }),
//     getPrisoners: build.query({
//       query: () => "api/prisoners",
//       providesTags: ["Prisoners"],
//     }),
//     getMessages: build.query({
//       query: () => "api/messages",
//       providesTags: ["Messages"],
//     }),
//     getCustomers: build.query({
//       query: () => "client/customers",
//       providesTags: ["Customers"],
//     }),
//     getTransactions: build.query({
//       query: () => "api/transactions",
//       providesTags: ["Transactions"],
//     }),
//     getGeography: build.query({
//       query: () => "client/geography",
//       providesTags: ["Geography"],
//     }),
//     getSales: build.query({
//       query: () => "sales/sales",
//       providesTags: ["Sales"],
//     }),
//     getAdmins: build.query({
//       query: () => "management/admins",
//       providesTags: ["Admins"],
//     }),
//     getUserPerformance: build.query({
//       query: (id) => `management/performance/${id}`,
//       providesTags: ["Performance"],
//     }),
//     getDashboard: build.query({
//       query: () => "general/dashboard",
//       providesTags: ["Dashboard"],
//     }),
//   }),
// });

// export const {
//   useGetUserQuery,
//   useGetUsersQuery,
//   useGetPrisonersQuery,
//   useGetMessagesQuery,
//   useGetCustomersQuery,
//   useGetTransactionsQuery,
//   useGetGeographyQuery,
//   useGetSalesQuery,
//   useGetAdminsQuery,
//   useGetUserPerformanceQuery,
//   useGetDashboardQuery,
// } = api;
