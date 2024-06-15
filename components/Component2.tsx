import React, { useEffect } from 'react'

export default function Component2() {
    useEffect(()=>{
        console.log("useEffect called for component2");    
    },[])
  return (
    <div>Component2</div>
  )
}