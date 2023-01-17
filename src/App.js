import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";

import Dashboard from "scenes/dashboard";
import Prisoners from "scenes/prisoners";
import LandingPage from "pages/landingPage/LandingPage";
import Register from "components/register";
import { ToastContainer } from "react-toastify";
import Logout from "scenes/logout";

import Layout from "scenes/layout";
import UnProtectedRoute from "components/controllers/un-protected-route";
import ProtectedRoute from "components/controllers/protected-route";
import Transactions from "scenes/transactions";
import Messages from "scenes/messages";
import Users from "scenes/users";
import UserPage from "components/userPage";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading...</div>
  </div>
);

const Login = React.lazy(() => import("../src/components/login"));
function App() {
  const { mode } = useSelector((state) => state.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  console.log(mode);
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route
            path="/login"
            element={
              <UnProtectedRoute>
                <Login />
              </UnProtectedRoute>
            }
          />
          <Route path="/user" element={<UserPage />} />
          <Route
            path="/register"
            element={
              <UnProtectedRoute>
                <Register />
              </UnProtectedRoute>
            }
          />

          <Route
            element={
              <ProtectedRoute>
                <Suspense fallback={loading}>
                  <ThemeProvider theme={theme}>
                    <Layout />
                  </ThemeProvider>
                </Suspense>
              </ProtectedRoute>
            }
          >
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Suspense fallback={loading}>
                    <Dashboard />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            element={
              <ThemeProvider theme={theme}>
                <Layout />
              </ThemeProvider>
            }
          >
            <Route
              path="/Prisoners"
              element={
                <ProtectedRoute>
                  <Suspense fallback={loading}>
                    <Prisoners />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            element={
              <ThemeProvider theme={theme}>
                <Layout />
              </ThemeProvider>
            }
          >
            <Route
              path="/Transactions"
              element={
                <ProtectedRoute>
                  <Suspense fallback={loading}>
                    <Transactions />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            element={
              <ThemeProvider theme={theme}>
                <Layout />
              </ThemeProvider>
            }
          >
            <Route
              path="/Messages"
              element={
                <ProtectedRoute>
                  <Suspense fallback={loading}>
                    <Messages />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            element={
              <ThemeProvider theme={theme}>
                <Layout />
              </ThemeProvider>
            }
          >
            <Route
              path="/Users"
              element={
                <ProtectedRoute>
                  <Suspense fallback={loading}>
                    <Users />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
