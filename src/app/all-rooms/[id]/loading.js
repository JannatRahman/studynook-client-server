import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingPage = () => {
  return (
    <div>
       <div className="flex flex-col items-center gap-2 p-15">
        <Spinner size="xl" />
        <span className="text-xs text-muted"></span>
      </div>
    </div>
  );
};

export default LoadingPage;