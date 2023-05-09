
import {background} from "../data"
import Cart from '@/components/UI/Cart'
import { IResponse } from '@/interface/Movie';
import Link from 'next/link';
async function getMovie(params: string){
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=5c97de57&&s=${params}`
  )

  return res.json();
}

export default async function Home({searchParams} : {searchParams?: any}) {
  let keyword = "spider man"
  if(searchParams?.s) keyword= searchParams.s;
  const respon: IResponse = await getMovie(keyword)
  return (
<div>
  <img src={background} alt="" 
  className='fixed top-0 left-0 w-full h-screen -z-10 object-cover blur-sm'/>
  <main className='lg:w-[60] mx-auto'>
  <div className='w-full max-w-[1040px] mx-auto'> 
   <p>All Movies</p>

    <div className='grid gap-4 grid-cols-2 lg:grid-cols-5 mt-5'>
     {
      respon.Search && respon?.Search?.map((movie,index)=>{
        return (
          <Link href={`detail/${movie.imdbID}`} key={index}>
            <Cart Poster={movie.Poster}
             Title={movie.Title} 
             imdbID={movie.imdbID}
             />
          </Link>
        )
      })
     }
    </div>
  </div>
  </main>
</div>
  )
}
