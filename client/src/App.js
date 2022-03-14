import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import Footer from "./components/Navbar/Footer";
import { FeaturedPage } from "./pages/FeaturedPage";
import { Flex, Spacer } from "@chakra-ui/react";
import { Navbar2 } from "./components/Navbar2";
import { Sidebar } from "./components/Sidebar";
import { AccountsPage } from "./pages/AccountsPage";
import LoginPage from "./pages/LoginPage";
import { AboutPage } from "./pages/AboutPage";
const App = () => {
  const userName = "Chris";
  return (
    <>
      <Flex minH={"100vh"} direction={"column"}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<LandingPage />}></Route>
            <Route
              path={"/search"}
              element={
                <>
                  <Navbar2 user={userName} />
                  <Flex grow={1}>
                    <Sidebar />
                    <SearchResultsPage />
                  </Flex>
                  <Footer />
                </>
              }
            ></Route>
            <Route path={"/login"} element={<LoginPage />}></Route>
            <Route
              path={"/featured"}
              element={
                <>
                  <Navbar2 user={userName} />
                  <Flex grow={1}>
                    <Sidebar />
                    <FeaturedPage />
                  </Flex>
                  <Footer />
                </>
              }
            ></Route>
            <Route path={"/signup"} element={<SignupPage />}></Route>
            <Route
              path={"/account"}
              element={
                <>
                  <Navbar2 user={userName} />
                  <Flex grow={1}>
                    <Sidebar />
                    <AccountsPage />
                  </Flex>
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path={"/about"}
              element={
                <>
                  <Navbar2 user={userName} />
                  <Flex grow={1}>
                    <Sidebar />
                    <AboutPage />
                  </Flex>
                  <Footer />
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </Flex>
    </>
  );
};
export default App;
