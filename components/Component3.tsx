import { Console } from 'console'
import React, { useEffect, useState } from 'react'

type Post = {
    id: number;
    title: String;
    body: String;
}

export default function Component3() {
    const [data, setData] = useState<Post[] | null>(null);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {setData(data)} )
        .catch((error)=> {console.log(error)})
    },[])
  return (
    <div>
        <ul>
            {
                data?.map((item,index)=>(
                <li key={index}>
                    {
                        item.title
                    }
                </li>))
            }
        </ul>
    </div>
  )
}