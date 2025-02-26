import React from 'react';
import { useCricketContext } from '../../../Context/Cric_Context';  // Import the context hook

const Lottery = () => {
    const { matchDetails } = useCricketContext();
    if (!matchDetails) {
        return <p>No match selected!</p>;
      }
    return (
        <div className='bg-[#F2F2F2] h-[90px]'>
             <p><strong>Match ID:</strong> {matchDetails.matchId}</p>
             <p><strong>Teams:</strong> {matchDetails.teams}</p>
        </div>
    );
}

export default Lottery;
