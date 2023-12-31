import '@/app/styles/globals.css'

export const metadata = {
  title: 'Frontend Mentor | Newsletter sign-up form with success message',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className='h-screen' lang="en">
      <body className='min-h-screen'>
        <div className='flex justify-center min-h-screen items-center bg-charcoal-grey'>
          {children}
        </div>
      </body>
    </html>
  )
}
