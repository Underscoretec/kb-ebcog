import CommonLayout from '@/common/layouts/CommonLayout'
import HomePage from '@/container/home/HomePage'
import Head from 'next/head'
import React, { ReactElement } from 'react'

export default function Home() {
  return (
    <>
   <Head><title>KB-EBCOG</title></Head>
    <main
      className={`  `}
    >
      <HomePage/>
    </main> </>
  )
}
 
Home.getLayout = function getLayout(page:ReactElement) {
  return (
    <CommonLayout>
      {page}
    </CommonLayout>
  )
}
