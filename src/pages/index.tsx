import CommonLayout from '@/common/layouts/CommonLayout'
import HomePage from '@/container/home/HomePage'
import React, { ReactElement } from 'react'

export default function Home() {
  return (
    <>
    <main>
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
