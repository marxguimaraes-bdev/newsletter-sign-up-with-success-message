'use client'

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Button from '@/app/components/button';

const Success = () => {
  const router = useRouter();
  const params = useSearchParams();
  const goHome = () => router.push('/');

  return (
    <main className='flex flex-col justify-between p-6 h-screen bg-white text-dark-slate-grey md:p-12 md:rounded-3xl md:max-h-[30rem] md:max-w-[30rem]'>
      <div className='flex flex-col mt-24 gap-y-8 md:mt-0'>
        <img src='/assets/images/icon-success.svg' alt='checkmark' className='w-16 h-auto md:w-12'/>
        <h1 className='text-5xl font-bold'>Thanks for subscribing!</h1>
        <div className='text-base font-normal'>A confirmation email has been sent to <span className='font-bold'>{ params.get('email') }</span>. Please open it and click the button inside to confirm your subscription</div>
      </div>
      <Button onClick={goHome} className='p-4 mb-6 md:mb-0'>Dismiss message</Button>
    </main>
  );
};

export default Success;
