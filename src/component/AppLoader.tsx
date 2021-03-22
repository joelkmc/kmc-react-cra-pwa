import React from 'react';

export const AppLoader: React.FC = () => {
  return (
    <div className='fixed h-full w-full flex items-center mx-auto inset-0 overflow-hidden bg-white loader'>
      <div className='logo mx-auto text-primary flex flex-col items-center'>
        <div className='h-14 overflow-hidden relative'>
          <img
            src='https://cdn.kmc.solutions/vsm-photos/top.png'
            alt='logo-top'
            className='top h-14'
            loading='lazy'
            decoding='async'
          />
          <img
            src='https://cdn.kmc.solutions/vsm-photos/bottom.png'
            alt='logo-bottom'
            className='animate absolute top-0 '
            loading='lazy'
            decoding='async'
          />
        </div>
        <p className='text-yellow-400'>Loading please wait...</p>
      </div>
    </div>
  );
};
