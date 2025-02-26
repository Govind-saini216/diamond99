import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Website/Home";
import Lottery from "./Pages/Website/Game_Components/Lottery";
import Side_Menu from "./Components/Side_Menu";
import Cricket from "./Pages/Website/Game_Components/Cricket";
import Tennis from "./Pages/Website/Game_Components/Tennis";
import Football from "./Pages/Website/Game_Components/Football";
import MatchDetails from "./Pages/Website/Match_Details";
import { CricketProvider } from './Context/Cric_Context';
import Heade from "./Components/Heade";
import Login from "./Components/Login"; // ✅ Importing the separate Login component
import AccStatement from "./Components/Acc_Statement";
import CurrentBet from "./Pages/Website/Current_Bet";
import ActivityLogs from "./Pages/Website/Activity_Logs";
import CasinoResults from "./Pages/Website/Casino_Results";
import CasinoLiveBets from "./Pages/Website/Casino_Live_Bets";
import SecurityAuthVerification from "./Pages/Website/Security_Auth_Verification";
import ChangePassword from "./Pages/Website/Change_Password";
import { MainProvider } from "./Context/Main_Context";
// import SignUp from "./Pages/Website/Sign_up";

const AppContent = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const hasVisited = localStorage.getItem("hasVisited");
  //   const currentPath = window.location.pathname;

  //   // ✅ Temporary redirection to the home page
  //   if (!hasVisited && currentPath !== "/home") {
  //     navigate("/home");
  //     localStorage.setItem("hasVisited", "true");
  //   }
  // }, [navigate]);

  return (
    <div className="main-container">
      <Side_Menu />
      <div className="center-main-container report-page">
        <div className="center-container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sports-book/33" element={<Lottery />} />
            <Route path="/all-sports/4" element={<Cricket />} />
            <Route path="/all-sports/2" element={<Tennis />} />
            <Route path="/all-sports/1" element={<Football />} />
            <Route path="/all-sports/8" element={<Lottery />} />
            <Route path="casino-list/LC/4/22" element={<Lottery />} />
            <Route path="/game-details/4/:matchId" element={<MatchDetails />} />
            <Route path="/account-statement" element={<AccStatement />} />
            <Route path="/current-bet" element={<CurrentBet />} />
            <Route path="/activity-log" element={<ActivityLogs />} />
            <Route path="/casino-results" element={<CasinoResults />} />
            <Route path="/live-casino-bets" element={<CasinoLiveBets />} />
            <Route path="/secure-auth" element={<SecurityAuthVerification />} />
            <Route path="/change-password" element={<ChangePassword />} />
            {/* <Route path="*" element={<Navigate to="/home" />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          {/* ✅ Render Login component at the /login route */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/create-account" element={<SignUp />} /> */}


          {/* ✅ Render the main app content */}
          <Route path="/*" element={<AppLayout />} />
        </Routes>
      </Router>
    </div>
  );
};

// ✅ Layout for main authenticated pages
const AppLayout = () => {
  return (
    <><MainProvider>
      <Heade />
      <CricketProvider>
        <AppContent />
      </CricketProvider>
      <Footer />
    </MainProvider>
    </>
  );
};

export default App;
