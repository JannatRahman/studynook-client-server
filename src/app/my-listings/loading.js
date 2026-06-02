
import React from 'react';

const LoadingPage = () => {
  return (
    <div>
       <div className="flex flex-col items-center gap-2 p-15">
        <h2 className='text-5xl flex items-center justify-center'>Loading...</h2>
        <span className="text-xs text-muted"></span>
      </div>
    </div>
  );
};

export default LoadingPage;