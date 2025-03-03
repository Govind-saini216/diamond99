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
import Login from "./Components/Login";
import AccStatement from "./Components/Acc_Statement";
import CurrentBet from "./Pages/Website/Current_Bet";
import ActivityLogs from "./Pages/Website/Activity_Logs";
import CasinoResults from "./Pages/Website/Casino_Results";
import CasinoLiveBets from "./Pages/Website/Casino_Live_Bets";
import SecurityAuthVerification from "./Pages/Website/Security_Auth_Verification";
import ChangePassword from "./Pages/Website/Change_Password";
import { MainProvider } from "./Context/Main_Context";
import Hom from "./Pages/Website/Hom";

const AppContent = () => {
  return (
    <div className="main-container">
      <Side_Menu />




      <Routes>
        <Route path="/home" element={<Hom />} />
        <Route path="/game-details" element={<MatchDetails />} />
        <Route path="/account-statement" element={<AccStatement />} />
        <Route path="/current-bet" element={<CurrentBet />} />
        <Route path="/activity-log" element={<ActivityLogs />} />
        <Route path="/casino-results" element={<CasinoResults />} />
        <Route path="/live-casino-bets" element={<CasinoLiveBets />} />
        <Route path="/secure-auth" element={<SecurityAuthVerification />} />
        <Route path="/change-password" element={<ChangePassword />} />

      </Routes>
      {/* <Route path="/current-bet" element={<CurrentBet />} />
            <Route path="/activity-log" element={<ActivityLogs />} />
            <Route path="/casino-results" element={<CasinoResults />} />
            <Route path="/live-casino-bets" element={<CasinoLiveBets />} />
            <Route path="/secure-auth" element={<SecurityAuthVerification />} />
            <Route path="/change-password" element={<ChangePassword />} /> */}
      {/* <Route path="*" element={<Navigate to="/home" />} /> */}
    </div>




  );
};

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<RequireAuth><AppLayout /></RequireAuth>} />
        </Routes>
      </Router>
    </div>
  );
};

const RequireAuth = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  const storedSessionId = localStorage.getItem("sessionId");

  // Check if both authentication and session ID exist
  if (!isAuthenticated || !storedSessionId) {
    return <Navigate to="/" replace />;
  }

  return children;
};


// ✅ Layout for main authenticated pages
const AppLayout = () => {
  return (
    <MainProvider>
      <Heade />
      <CricketProvider>
        <AppContent />
      </CricketProvider>
      <Footer />
    </MainProvider>
  );
};

export default App;
