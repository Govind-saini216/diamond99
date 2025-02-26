import React, { createContext, useState, useContext } from 'react';

// Create a context
const CricketContext = createContext();

// Create a provider component
export const CricketProvider = ({ children }) => {
  // Initialize matchDetails with sample data
  const [matchDetails, setMatchDetails] = useState(
    [ { matchId: '5984634',
      matchName: "South Africa U-19 v England U-19 ",
      teams: { team1: "BT XI", team2: "GAW XI" },
      matchType: "T5 XI",
      date: "03/02/2025",
      time: "13:30:00",
      venue: "Wankhede Stadium, Mumbai",
      status: "Scheduled",
      score: { team1: { runs: 0, wickets: 0 }, team2: { runs: 0, wickets: 0 } },
  }, 
  { matchId: '5984459',
    matchName: "Australia T10 v South Africa T10 / ",
    teams: { team1: "BT XI", team2: "GAW XI" },
    matchType: "Virtual Cricket League",
    date: "05/02/2025 ",
    time: "17:45:00",
    venue: "Wankhede Stadium, Mumbai",
    status: "Scheduled",
    score: { team1: { runs: 0, wickets: 0 }, team2: { runs: 0, wickets: 0 } },
},
{ matchId: '1234624',
  matchName: "Rajasthan Royals XI v Delhi Capitals XI",
  teams: { team1: "BT XI", team2: "GAW XI" },
  matchType: "T10 XI",
  date: "05/02/2025 ",
  time: "18:15:00",
  venue: "Wankhede Stadium, Mumbai",
  status: "Scheduled",
  score: { team1: { runs: 0, wickets: 0 }, team2: { runs: 0, wickets: 0 } },
},
{ matchId: '1856234',
  matchName: "BT XI v GAW XI",
  teams: { team1: "BT XI", team2: "GAW XI" },
  matchType: "T5 XI",
  date: "2025-02-05",
  time: "15:00 UTC",
  venue: "Wankhede Stadium, Mumbai",
  status: "Scheduled",
  score: { team1: { runs: 0, wickets: 0 }, team2: { runs: 0, wickets: 0 } },
},
{ matchId: '1235894',
  matchName: "BT XI v GAW XI",
  teams: { team1: "BT XI", team2: "GAW XI" },
  matchType: "T5 XI",
  date: "2025-02-05",
  time: "15:00 UTC",
  venue: "Wankhede Stadium, Mumbai",
  status: "Scheduled",
  score: { team1: { runs: 0, wickets: 0 }, team2: { runs: 0, wickets: 0 } },
},
{ matchId: '1225834',
  matchName: "BT XI v GAW XI",
  teams: { team1: "BT XI", team2: "GAW XI" },
  matchType: "T5 XI",
  date: "2025-02-05",
  time: "15:00 UTC",
  venue: "Wankhede Stadium, Mumbai",
  status: "Scheduled",
  score: { team1: { runs: 0, wickets: 0 }, team2: { runs: 0, wickets: 0 } },
},
]
   
  
);

  // Function to store match details
  const storeMatchDetails = (details) => {
    setMatchDetails(details);
  };

  // Function to clear match details
  const clearMatchDetails = () => {
    setMatchDetails(null);
  };

  return (
    <CricketContext.Provider value={{ matchDetails, storeMatchDetails, clearMatchDetails }}>
      {children}
    </CricketContext.Provider>
  );
};

// Custom hook to use the cricket context
export const useCricketContext = () => useContext(CricketContext);
