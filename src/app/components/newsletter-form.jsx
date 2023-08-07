'use client'

import { useRouter } from 'next/navigation';
import { string, object } from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Button from '@/app/components/button';

const EMAIL_ERROR_MESSAGE = 'Valid email required';

const validationSchema = object({
  email: string().email(EMAIL_ERROR_MESSAGE).required(EMAIL_ERROR_MESSAGE),
});

function NewsletterForm() {
  const router = useRouter();
  const goToSuccess = ({ email }) => router.push(`/success?email=${email}`);

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={goToSuccess}
    >
      {({ errors, touched, isValid }) => (
        <Form className='flex grid grid-cols-2 gap-y-1 mt-8'>
          <label htmlFor='email' className='text-xs font-bold'>Email address</label>
          <ErrorMessage name='email' component='div' className='text-end text-xs font-bold text-tomato' />
          <Field
            id='email'
            type='text'
            name='email'
            placeholder='email@company.com'
            className={`col-span-2 px-8 py-4 border-solid border ${errors.email && touched.email ? 'border-tomato bg-light-tomato' : 'border-grey'} rounded-lg focus:outline-none placeholder:text-grey`}
          />
          <Button type='submit' className='col-span-2 p-4 mt-4'>Subscribe to monthly newsletter</Button>
        </Form>
      )}
    </Formik>
  );
};

export default NewsletterForm;