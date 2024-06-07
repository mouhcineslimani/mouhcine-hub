import React, { useState } from "react";
import { GlobalStyle, blue, darkTheme, defaultTheme } from "./utils";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./layouts/master.layout";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Hero from "./pages/Hero"; 
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import Admin from "./layouts/admin.layout";
import Dashboard from "./pages/admin/Dashboard";
import AdminArticles from './pages/admin/AdminArticles';
import AdminComments from "./pages/admin/AdminComments";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminChapiters from "./pages/admin/AdminChapiters";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route index element={<Hero />} />
            <Route element={<PrivateRoute />}>
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="articles" element={<Articles />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
              <Route path="/admin" element={<Admin />} >
                  <Route index element={<Dashboard />}/> 
                  <Route path="dashboard" element={<Dashboard />}/> 
                  <Route path="articles" element={<AdminArticles />}/> 
                  <Route path="chapiters" element={<AdminChapiters />}/> 
                  <Route path="comments" element={<AdminComments />}/> 
                  <Route path="categories" element={<AdminCategories />}/> 
                </Route>
            </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
