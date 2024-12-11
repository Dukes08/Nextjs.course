'use client'
import React, { useState } from 'react'

const CartCounter = () => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <>
            <span className="text-9xl">{counter}</span>
            <div className="flex gap-4">
                <button onClick={() => setCounter(counter + 1)} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button onClick={() => setCounter(counter > 0 ? counter - 1 : counter)} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div>
        </>
    )
}

export default CartCounter