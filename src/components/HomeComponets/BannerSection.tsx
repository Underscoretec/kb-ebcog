import ImageComponent from '@/common/uicomponents/ImageComponent'
import React from 'react'
import Banner from "../../../public/banner.jpg"
import Link from 'next/link'

const BannerSection = () => {
    return (
        <div>
            <Link href='/registration'>
                <ImageComponent
                    src={Banner}
                    alt="Banner"
                    className="h-auto w-screen"
                    width={3000}
                    height={3000}
                />
            </Link>
        </div>
    )
}

export default BannerSection
