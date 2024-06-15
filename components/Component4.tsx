"use client";
import { Console } from 'console'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type Post = {
    id: number;
    title: String;
    body: String;
}

export default function Component4() {
    const [data, setData] = useState<Post[] | null>(null);
    const [postId, setPostId] = useState(1);
    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => {setData(data)} )
        .catch((error)=> {console.log(error)})
    },[postId])
  return (
    <div className='flex flex-col gap-5'>
        <div className='w-[500px] bg-slate-200 rounded-lg p-10 shadow-lg border-black/25'>
        {            
                data?(
                <>
                    <h1 className='font-bold text-xl'>{data?.title}</h1>
                    <h2>{data?.body}</h2>
                </>
                ) : (
                <>
                    Loading...
                </>)
        }
        </div>
        <div className='flex justify-between'>
            <Button className={cn('',{'invisible': postId === 1})} onClick={()=>{ if(postId<=1) return;
                setPostId(prev => prev-1)}}>Previous</Button>
            <Button onClick={()=>{setPostId(prev => prev+1)}}>Next</Button>
        </div>
    </div>
  )
}