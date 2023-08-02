import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=''>
      <header className="p-4 navbarr">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex justify-between w-full">
            <Link  href="/" aria-label="Back to homepage" className="flex items-center p-2">
              <p className=' font-semibold text-3xl'>CryptoScope</p>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex justify-between w-full">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">Home</a>
              </li>
              <li className="flex">
                <a href = "https://app.uniswap.org/#/swap" rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold ">Swap</a>
              </li>
              {/* <li className="flex">
                <a rel="noopener noreferrer" className="flex  cursor-pointer items-center px-4 -mb-1 font-semibold dark:border-transparent">Services</a>
              </li> */}
              <li className="flex">
                <a href = "https://trading-widget-ltput6v3y-bansuri-gupta.vercel.app/" rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">Advanced</a>
              </li>
              <li className="flex">
              <a href="https://mongodb-email-handler.vercel.app/" rel="noopener noreferrer" className="flex cursor-pointer items-center px-4 -mb-1 font-semibold dark:border-transparent">Subscribe</a>
              </li>
            </ul>
          </div>
       
          <button className="p-0 relative left-4 lg:hidden">

            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <div className='w-32 sm:w-56'>
              </div>

            </div>


          </button>
        </div>
      </header>

    </div>
  )
}

export default Navbar
