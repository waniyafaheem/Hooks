"use client";
import React, { useState } from 'react'
import ComponentB from './ComponentC'
import { Button } from './ui/button'

export default function ComponentA() {
    const [counter, setCounter] = useState(0);
  return (
    <div className='border border-black bg-yellow-400 h-[75%] w-[75%] rounded-[32px] flex flex-col items-center justify-center'>
        <div className='flex gap-3 items-center justify-center'>
            <Button onClick={() => setCounter(prev => prev-1)}>-</Button>
            {counter}
            <Button onClick={() => setCounter(prev => prev+1)}>+</Button>
        </div>
        ComponentA
        <ComponentB counter={counter} setCounter={setCounter} />
    </div>
  )
}