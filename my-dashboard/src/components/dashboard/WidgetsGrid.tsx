import React from 'react'
import { SimpleWidget } from './SimpleWidget'

const WidgetsGrid = () => {
  return (
    <div className='flex flex-wrap p-2'>
        <SimpleWidget 
        title='Counter'
        subtitle='Visualiza la monda'
        label='productos en el carrito'
        />
        
      </div>
  )
}

export default WidgetsGrid