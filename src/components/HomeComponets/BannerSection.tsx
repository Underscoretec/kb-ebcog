import ImageComponent from '@/common/uicomponents/ImageComponent'
import React from 'react'
import Banner from "../../../public/banner.png"

const BannerSection = () => {
  return (
    <div>
      <ImageComponent
        src={Banner}
        alt="Banner"
        className="h-auto w-screen"
        width={3000}
        height={3000}
      />
    </div>
  )
}

export default BannerSection
