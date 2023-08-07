import NewsletterForm from "@/app/components/newsletter-form";

const SignUp = () => {
  return (
    <main className='flex justify-end h-screen bg-white flex-col-reverse md:grid md:grid-cols-2 md:flex-row-reverse md:justify-space-between md:rounded-3xl md:min-w-48 md:max-h-[40rem] md:max-w-[60rem]'>
      <div className='flex flex-col text-dark-slate-grey text-base font-normal p-8 md:p-12'>
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
        <NewsletterForm />
      </div>
      <div className='flex flex-row-reverse -my-6 md:m-6'>
        <img
          src='/assets/images/illustration-sign-up-desktop.svg'
          alt='Sign Up Illustration'
          className='hidden md:flex'
        />
        <img
          src='/assets/images/illustration-sign-up-mobile.svg'
          alt='Sign Up Illustration'
          className='flex md:hidden'
        />
      </div>
    </main>
  );
};

export default SignUp;
