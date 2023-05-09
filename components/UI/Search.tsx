"use client"
import React, { useState,KeyboardEvent } from 'react'
import { useRouter } from 'next/navigation';
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter()
  function onSearch(){
  router.push("/?s=" + keyword)
  setKeyword(" ")
  }
  function onEnter(e:KeyboardEvent<HTMLInputElement>){
    if(!keyword) return;
  if(e.keyCode === 13){
    onSearch();
  }
  }
  return (
    <input onChange={e => setKeyword(e.target.value)}
     value={keyword}
     onKeyDown={onEnter} className='bg-gray-800 rounded-full px-5 py-1 border outline-none' type="text" placeholder='search...'/>
  )
}

export default Search