import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <main>
        <form>
          <div>Stay updated!</div>
          <div>Join 60,000+ product managers receiving monthly updates on:</div>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <label htmlFor='email'>Email address</label>
          <input id='email' placeholder='email@company.com'/>
          <button>Subscribe to monthly newsletter</button>
        </form>
        <Image
          src='/assets/images/illustration-sign-up-desktop.svg'
          alt='Illustration Sign Up'
          width={100}
          height={24}
        />
      </main>
    </div>
  )
}
