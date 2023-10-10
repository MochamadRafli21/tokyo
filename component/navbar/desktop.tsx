"use client"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NavbarDesktop (){
  const router = useRouter()
  const [path, setpath] = useState(usePathname.toString())
  const navigate = (url:string)=>{
    setpath(url)
    router.push(url)
  }

  return (
        <div className="fixed w-full top-0 z-50">
          <div className="hidden md:flex content-center justify-between">
            <div className="flex w-fit">
              <Image
              src="/pp.png"
              alt="pp"
              width={136}
              height={82}
              />
              <Image
              src="/logo.png"
              alt="tokyo"
              width={200}
              height={40}
              />
            </div>
            <div className="p-4">
              <div className="w-fit font-extrabold gap-1 p-2 bg-yellow-600 rounded-xl">
                <button 
                className={path.includes('Kawasan')?'text-white font-bold px-2':'text-black px-2'}
                onClick={()=>navigate('/#Kawasan')}>
                    Kawasan 
                </button>
                <button 
                className={path.includes('Fasilitas')?'text-white font-bold px-2':'text-black px-2'} 
                onClick={()=>navigate('/#Fasilitas')}>
                    Fasilitas 
                </button>
                <button 
                className={path.includes('Unit')?'text-white font-bold px-2':'text-black px-2'} 
                onClick={()=>navigate('/#Unit')}>
                    Unit 
                </button>
                <button 
                className={path.includes('Cicilan')?'text-white font-bold px-2':'text-black px-2'} 
                onClick={()=>navigate('/#Cicilan')}>
                    Cicilan 
                </button>
                <button 
                className={path.includes('Kontak')?'text-white font-bold px-2':'text-black px-2'} 
                onClick={()=>navigate('/#Kontak')}>
                    Kontak 
                </button>
              </div>
            </div>
        </div>
      </div>
  )
}
