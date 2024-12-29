import { SimpleWidget } from '@/components/dashboard/SimpleWidget'
import WidgetsGrid from '@/components/dashboard/WidgetsGrid'
import React from 'react'

const Main = () => {
  return (
    <>
      <div className='text-3xl p-2'>Dashboard</div>
      <span className='p-2'>Información general</span>

      <WidgetsGrid/>
    </>
  )
}

export default Main