import Footer from '@/components/FooterComponents/Footer';
import Header from '@/components/HeaderComponents/Header';
import React from 'react'
import ScrollToTopButton from './ScrollToTopButton';

interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <>
      <div className='min-h-screen w-[100%] flex flex-col justify-between'>
        <div>
          <Header />
          <div className="body-main ">{children}</div>
        </div>
        <div className='w-full '>
          <Footer />
        </div>
      </div>

      <ScrollToTopButton/>
    </>
  )
}

export default CommonLayout