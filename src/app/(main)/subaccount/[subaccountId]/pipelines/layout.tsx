import BlurPage from '@/components/global/blur-page'
import React from 'react'

type Props = {}

const PipelinesLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <BlurPage>{children}</BlurPage>
    )
}

export default PipelinesLayout