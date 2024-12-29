'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, setCounterDefaultValue, substractOne } from '@/store/counter/counterSlice'
import React, { useEffect } from 'react'


interface Props{
    value?: number;
}

const CartCounter = ({value = 0}:Props) => {
    // watch the component value
    const count = useAppSelector(state => state.counter.count)
    // use the slice function to mutate the count
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setCounterDefaultValue(value))
    }, [dispatch, value])
    
    return (
        <>
            <span className="text-9xl">{count}</span>
            <div className="flex gap-4">
                <button 
                onClick={() => dispatch(addOne())} 
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button 
               onClick={() => dispatch(substractOne())} 
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div>
        </>
    )
}

export default CartCounter