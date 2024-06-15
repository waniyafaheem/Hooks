"use client";
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

export default function Component1() {
    const [counter, setCounter] = useState(0);
    const increment = ()=> { setCounter(counter +1)}; 
    const decrement = ()=> { 
        if(counter<=0) return;
        setCounter(counter -1)}; 
    useEffect(()=>{
        console.log("useEffect called for component1");    
    },[counter])
  return (
    <div>
         <div className='text-3xl font-bold flex gap-5 items-center justify-center'>
        <Button variant="destructive" onClick={decrement}>-</Button>
        {counter}
        <Button onClick={increment}>+</Button>
    </div>
    </div>
  )
}