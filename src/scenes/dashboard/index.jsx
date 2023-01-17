import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import "./index.css";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Person,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import StatBox from "components/StatBox";
import Layout from "scenes/layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { message } from "antd";

const Dashboard = () => {
  const { token, role } = useSelector((state) => state.user);

  const [prisoners, setPrisoners] = useState([]);
  const [transaction, setTransactions] = useState([]);
  const [user, setUsers] = useState([]);
  const [message, setMessage] = useState([]);

  const fetchp = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/prisoners")
      .then((res) => setPrisoners(res.data))
      .catch((err) => console.log(err));
  };
  const fetchTransaction = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  };
  const fetchUsers = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  const fetchMessages = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/messages")
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (role !== "admin") {
      window.location = "/login";
    }
  }, [token]);

  // const {theme}=useSelector((state) => state);
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  // const { data, isLoading } = useGetDashboardQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
  useEffect(() => {
    fetchp();
    fetchUsers();
    fetchTransaction();
    fetchMessages();
  }, []);

  return (
    <>
      <Box
        m='1.5rem 2.5rem'
        sx={{ backgroundColor: theme.palette.background.alt }}
      >
        <FlexBetween>
          <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />

          {/* <Box>
          
        </Box> */}
        </FlexBetween>

        <Box
          mt='20px'
          display='flex'
          backgroundColor='white'
          paddingTop='20px'
          justifyContent='space-between'

          // gridTemplateColumns="repeat(3, 1fr)"
          // gridAutoRows="160px"
          // gap="20px"
          // sx={{
          //   "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12",   display:"flex" },

          // }}
        >
          {/* ROW 1 */}
          <StatBox
            title='Prisoners'
            // value={data && data.totalCustomers}
            increase={prisoners.length}
            description='Current number of inmates'
            icon={
              <Person
                sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
              />
            }
          />
          <StatBox
            sx={{ marginLeft: "10px" }}
            title='Transactions'
            // value={data && data.todayStats.totalSales}
            increase={transaction.length}
            description='Transactons made'
            icon={
              <PointOfSale
                sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
              />
            }
          />

          <StatBox
            title='Users'
            // value={data && data.thisMonthStats.totalSales}
            increase={user.length}
            description='Since last month'
            icon={
              <PersonAdd
                sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
              />
            }
          />
          <StatBox
            title='Messages'
            // value={data && data.yearlySalesTotal}
            increase={message.length}
            description='Message last month'
            icon={
              <Email
                sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
      <div className='dashConents'>
        <h3>dashboard report and overView</h3>
      </div>
    </>
  );
};

export default Dashboard;
