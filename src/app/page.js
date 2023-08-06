import Image from 'next/image'

const SignUp = () => {
  return (
    <div className='flex justify-center min-h-screen items-center bg-charcoal-grey'>
      <main className='flex justify-end bg-white flex-col-reverse md:grid md:grid-cols-2 md:flex-row md:justify-space-between md:rounded-3xl md:min-w-48 md:max-h-[40rem] md:max-w-[60rem]'>
        <form className='flex flex-col text-dark-slate-grey text-base font-normal p-8 md:p-12'>
          <h1 className='font-bold text-4xl md:text-5xl py-2 md:py-8'>Stay updated!</h1>
          <div className='py-4'>Join 60,000+ product managers receiving monthly updates on:</div>
          <ul className='py-4 pr-8 md:pr-4 space-y-1 md:space-y-2'>
            <li className='flex items-start md:items-center'>
              <img src='/assets/images/icon-list.svg' alt='checkmark' className='mt-1 mr-4 md:mt-0'/>
              Product discovery and building what matters
            </li>
            <li className='flex items-start md:items-center'>
              <img src='/assets/images/icon-list.svg' alt='checkmark' className='mt-1 mr-4 md:mt-0'/>
              Measuring to ensure updates are a success
            </li>
            <li className='flex items-start md:items-center'>
              <img src='/assets/images/icon-list.svg' alt='checkmark' className='mt-1 mr-4 md:mt-0'/>
              And much more!
            </li>
          </ul>
          <div className='flex flex-col mt-8 space-y-8'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='email' className='text-xs font-bold'>Email address</label>
              <input id='email' placeholder='email@company.com' className='px-8 py-4 border-solid border border-grey rounded-lg placeholder:text-grey'/>
            </div>
            <button className='p-4 rounded-lg bg-dark-slate-grey text-white font-bold'>Subscribe to monthly newsletter</button>
          </div>
        </form>
        <div className='flex flex-row-reverse md:m-6'>
          <img
            src='/assets/images/illustration-sign-up-desktop.svg'
            alt='Illustration Sign Up'
            className='w-full md:w-auto hidden md:flex'
          />
          <img
            src='/assets/images/illustration-sign-up-mobile.svg'
            alt='Illustration Sign Up'
            className='w-full md:w-auto flex md:hidden'
          />
        </div>
      </main>
    </div>
  )
};

export default SignUp;
