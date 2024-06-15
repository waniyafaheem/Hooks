import React, { useState } from 'react'
import { Button } from './ui/button'

type ComponentCType = {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export default function ComponentC({counter, setCounter}: ComponentCType) {
  return (
    <div className='border border-black bg-blue-800 h-[75%] w-[75%] rounded-[32px] flex flex-col items-center justify-center'>
        <div className='flex gap-3 items-center justify-center'>
            <Button onClick={() => setCounter(prev => prev-1)}>-</Button>
            {counter}
            <Button onClick={() => setCounter(prev => prev+1)}>+</Button>
        </div>
        ComponentC
    </div>
  )
}
