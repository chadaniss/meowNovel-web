import { Spinner } from 'flowbite-react';
import React from 'react';

function SpinnerComponent() {
  return (
    <div className='h-full w-full text-center flex flex-col absolute justify-center gap-2 bg-black bg-opacity-50 z-[1100]'>
      <Spinner color='pink' />
      <span className='text-white'>Please Wait</span>
    </div>
  );
}

export default SpinnerComponent;
