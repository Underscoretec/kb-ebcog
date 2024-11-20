import Footer from '@/components/FooterComponents/Footer';
import Header from '@/components/HeaderComponents/Header';
import React from 'react'
 
interface CommonLayoutProps {
  children: React.ReactNode;
}
 
const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen w-[100%]'>
      <div>
        <Header/>
        <div className="body-main ">{children}</div>
      </div>
      <div className='w-full flex items-end '>
        <Footer/>
      </div>
    </div>
  )
}
 
export default CommonLayout