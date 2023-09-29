import React from 'react';
import './RewardsError.css'


function RewardsError({error}) {
  return (
    <div className= "error-response">
        {error && (
        <div className="errors">
          <div className="error">Error</div>
          <div className= "error-message">{error.response.data.errorMessage}! Please, try again!</div>
        </div>
      )}
    </div>
  
  );
}

export default RewardsError;
