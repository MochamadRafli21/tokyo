"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function NavbarMobile (){
  const [isMenuShow, setisMenuShow] = useState(false)
  return (
        <div className="fixed md:hidden w-full top-0 z-50 bg-white">
        <div className="flex justify-between">
          <Image
          src="/pp.png"
          alt="pp"
          width={80}
          height={68}
          />
          <Image
          src="/logo.png"
          alt="tokyo"
          width={107}
          height={68}
          />
          <button className="px-4" onClick={()=>setisMenuShow(!isMenuShow)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="6" height="6" rx="1" stroke="#33363F" strokeWidth="2" strokeLinejoin="round"/>
              <rect x="4" y="14" width="6" height="6" rx="1" stroke="#33363F" strokeWidth="2" strokeLinejoin="round"/>
              <rect x="14" y="14" width="6" height="6" rx="1" stroke="#33363F" strokeWidth="2" strokeLinejoin="round"/>
              <rect x="14" y="4" width="6" height="6" rx="1" stroke="#33363F" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
          <div className={isMenuShow ?  "flex bg-white flex-col p-4 gap-2 z-50 ease-in-out delay-200 opacity-100": "opacity-0"}>
            <Link onClick={()=>setisMenuShow(false)} href='#Kawasan'>Kawasan Sekitar</Link>
            <Link onClick={()=>setisMenuShow(false)} href='#Fasilitas'>Fasilitas</Link>
            <Link onClick={()=>setisMenuShow(false)}href='#Unit'>Unit</Link>
            <Link onClick={()=>setisMenuShow(false)} href='#Cicilan'>Cicilan</Link>
            <Link onClick={()=>setisMenuShow(false)} href='#Kontak'>Kontak</Link>
          </div>
      </div>
  )
}
