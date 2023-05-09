import { IMovie } from '@/interface/Movie';
import React from 'react'
async function getSibglemove(id:string){
    const res = await fetch(`http://www.omdbapi.com/?apikey=5c97de57&&i=${id}`)
    return res.json();
}
const page = async ({params}: {params:{id: string}}) => {
    const response : IMovie = await getSibglemove(params.id);
  return (
    <div className=''>
 <img src={response.Poster} className='w-full h-full  transition-all object-cover hover:blur-sm'/>
 <div className='absolute top-[10%] left-[30%] flex flex-col justify-center h-[calc(100vh-4rem)] overflow-auto py-5'>
    <div className=''>
        <img src={response.Poster} alt={response.Title} className='h-72 w-48 rounded-lg object-fill '/>
        <p className='text-lg lg:text-3xl mt-2 tracking-widest font-custom_font'>{response.Title}</p>
        <p>Gentre: {response.Genre}</p>
        <p>Actor: {response.Actors}</p>
        <div className='flex items-center mt-3'>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<p>IMDB Rating: {response.imdbRating}</p>
</div>
<div className='flex items-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
</svg>

<p>Duration: {response.Production}</p>
</div>
<div className='flex items-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>
<p>Year: {response.Year}</p>
</div>
<div className='mt-3'>
    <p className='text-xl font-bold'>{response.Plot}</p>
</div>
<button className='bg-blue-500 px-5 py-2 rounded-lg mt-3'>Watch Trailer</button>
</div>
 </div>
 </div>
  )
}

export default page
