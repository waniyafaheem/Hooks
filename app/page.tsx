import ComponentA from '@/components/ComponentA'
import UseEffectComponent from '@/components/UseEffectComponent'
import UseStateComponent from '@/components/UseStateComponent'
import React from 'react'

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* <UseStateComponent />
      <UseEffectComponent /> */}
      <ComponentA />
    </div>
  )
}