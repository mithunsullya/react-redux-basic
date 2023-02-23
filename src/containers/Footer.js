import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full bg-black py-1 text-center text-white'>
        <div>Copyrights @mithun_sullya </div>
        <div className=''> Built in <span className='text-red-500 text-[1.25rem]'>&#9829;</span> with React + Redux and hosted <a className='text-blue-300 hover:text-blue-500' target='_blank' rel="noreferrer" href="https://www.netlify.com/">Netlify</a> </div>
    </footer>
  )
}

export default Footer