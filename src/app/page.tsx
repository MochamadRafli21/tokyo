import NavbarMobile from "../../component/navbar/mobile"
import NavbarDesktop from "../../component/navbar/desktop"
import Image from "next/image"
import Link from "next/link"
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="bg-white md:bg-cover md:bg-[url('/banner.jpeg')] md:pt-28 md:w-full md:min-h-[809px]">
        <nav>
          <NavbarMobile/>
          <NavbarDesktop/>
        </nav>

        <div className="hidden md:flex flex-col pt-12 p-8 text-white text-[128px] font-extrabold">
          <h1>LIVE<br/>REDISCOVERED</h1>
          <div className="max-w-4xl text-sm font-light bg-yellow-600 p-2 rounded ">
            <p>Little Tokyo merupakan maha karya terbaru dari dua developer besar yang berkolaborasi, yaitu PP Properti dan Jababeka. Berada di tengah Kota Jababeka tepat nya di Bundaran Jababeka, Little Tokyo Jababeka membawa berbagai fasilitas dan lingkungan yang didukung fitur teknologi smart living yang akan dapat membantu aktifitas harian kita. Little Tokyo membawa suasana kehidupan Jepang yang Modern yang akan membuat anda terpana.</p>
          </div>
        </div>

        <div className="md:hidden px-4 pt-16">
          <div className="relative w-screen h-[320px] p-4">
            <Image
            className="absolute mx-auto top-0 left-0 right-20"
            alt='pic1'
            src={'/pic1.png'}
            width={212}
            height={178}
            /> 
          <Image
          className="absolute mx-auto top-28 left-40 right-0"
          alt='pic2'
          src={'/pic2.png'}
          width={210}
          height={182}
          /> 
        <Image
        className="absolute mx-auto top-40 right-44 left-0"
        alt='pic3'
        src={'/pic3.png'}
        width={143}
        height={124}
        /> 
    </div>
          <div className="text-center">
            <p>
            Little Tokyo merupakan maha karya terbaru dari dua developer besar yang berkolaborasi, yaitu PP Properti dan Jababeka. Berada di tengah Kota Jababeka tepat nya di Bundaran Jababeka, Little Tokyo Jababeka membawa berbagai fasilitas dan lingkungan yang didukung fitur teknologi smart living yang akan dapat membantu aktifitas harian kita. Little Tokyo membawa suasana kehidupan Jepang yang Modern yang akan membuat anda terpana.
            </p>
          </div>
        </div>

      </div>
      <div className="hidden md:block h-[33px] w-full bg-yellow-600"></div>
      <div id="Kawasan" className="w-full flex justify-center pt-4 text-2xl md:text-6xl font-bold">
          <div>
            <h1>Kawasan Sekitar</h1>
            <div className="hidden md:block h-[7px] w-full bg-yellow-600"></div>
          </div>
      </div>
            <Image
              className="w-full"
            alt='kawasan'
            src={'/kawasan.jpeg'}
            width={438}
            height={510}
            /> 

      <div className="w-full justify-center">
        <div className="pt-12 pb-8 px-4 justify-items-center gap-x-8 gap-y-12 grid grid-cols-2 grid-rows-2">
          <Image
          className="w-[156px] md:w-[438px] rounded-xl"
          alt='edu'
          src={'/educationarea.jpeg'}
          width={438}
          height={510}
          /> 
        <Image
        className="w-[156px] md:w-[438px]"
        alt='industri'
        src={'/industrial.jpeg'}
        width={438}
        height={510}
        /> 
      <Image
      className="w-[156px] md:w-[438px]"
      alt='/apartterbaik.jpeg'
      src={'/apartterbaik.jpeg'}
      width={438}
      height={510}
      /> 
    <Image
    className="w-[156px] md:w-[438px]"
    alt='benefit'
    src={'/benefit.jpeg'}
    width={438}
    height={510}
    /> 
</div>
      </div>
    
    <div className="bg-[url('/banner2.jpeg')] bg-cover w-full min-h-[200px] py-8 flex align-center justify-center">
      <div id="Fasilitas" className="w-fit h-fit my-auto p-2 bg-yellow-600 text-6xl text-white font-bold">
        <h1>Fasilitas</h1>
      </div>
    </div>

    <div className="grid justify-center gap-8 p-8">
      <Image
      className="w-[438px]"
      alt='jogging.jpeg'
      src={'/jogging.jpeg'}
      width={438}
      height={510}
      /> 
      <Image
      className="w-[438px]"
      alt='pool.jpeg'
      src={'/pool.jpeg'}
      width={438}
      height={510}
      /> 
      <Image
      className="w-[438px]"
      alt='eco.jpeg'
      src={'/eco.jpeg'}
      width={438}
      height={510}
      /> 
  </div>
    <div className="h-fit py-2">
      <div className="w-full justify-center bg-yellow-600 text-white h-[147px] md:h-[310px] flex">
        <Image
        className="w-[164px] h-[244px] md:w-[534px] md:h-[796px] px-4"
        alt='mrt.jpeg'
        src={'/mrt.jpeg'}
        width={438}
        height={510}
        /> 
      <div className="py-12 px-4 md:text-4xl">
        <h1>
        Jalur MRT yang akan <br/> segera dibangun
      </h1>

      </div>

     </div>
    </div>
    
    <div id="Unit" className="pt-[150px] md:pt-[600px] font-bold flex justify-center text-[20px] md:text-[64px]">
      <div>
        <h1>Unit</h1>
        <div className="bg-yellow-600 h-[4px]"></div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 justify-items-center gap-8 p-8">
      <Image
      className="w-[438px]"
      alt='unit1.jpeg'
      src={'/unit1.jpeg'}
      width={438}
      height={510}
      /> 
      <Image
      className="w-[438px]"
      alt='unit2.jpeg'
      src={'/unit2.jpeg'}
      width={438}
      height={510}
      /> 
      <Image
      className="w-[438px]"
      alt='unit3.jpeg'
      src={'/unit3.jpeg'}
      width={438}
      height={510}
      /> 
      <Image
      className="w-[438px]"
      alt='unit4.jpeg'
      src={'/unit4.jpeg'}
      width={438}
      height={510}
      /> 
  </div>

    <div className="bg-yellow-600 h-[11px] w-full md:hidden"></div>
    <div className="md:bg-yellow-600 w-full p-2 md:p-8 flex justify-center">
      <Image
      className="w-[314px] md:w-[922px]"
      alt='plan.jpeg'
      src={'/plan.jpeg'}
      width={922}
      height={519}
      /> 
    </div>
    
    <div id="Cicilan" className="pt-4 font-bold flex justify-center text-[20px] md:text-[64px]">
      <div>
        <h1>Skema Cicilan</h1>
        <div className="bg-yellow-600 h-[4px]"></div>
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 justify-items-center gap-8 p-8">
      <Image
      className="w-[438px]"
      alt='cicilan1.jpeg'
      src={'/cicilan1.jpeg'}
      width={438}
      height={510}
      /> 
      <Image
      className="w-[438px]"
      alt='cicilan2.jpeg'
      src={'/cicilan2.jpeg'}
      width={438}
      height={510}
      /> 
  </div>
    <footer className="hidden md:block h-fit py-2">
      <div id="Kontak" className="grid grid-cols-2 justify-items-end">
        <Image
        className="row-span-3 item-end w-[551px] h-[837px]"
        alt='profile.jpeg'
        src={'/profile.jpeg'}
        width={438}
        height={510}
        />
        <div className="flex flex-col justify-center min-h-[837px] w-full">
          <div className="w-full row-span-2 row-end-2 text-white md:text-4xl bg-yellow-600 p-4">
            <Link href="https://api.whatsapp.com/send/?phone=6281911931148&type=phone_number&app_absent=0">

              <h1 className="font-bold text-[44px] py-4">
            Tertarik dengan <br/> unit kami? 
          </h1>
          <p>
          Hubungi via
        </p>
        <div className="flex pt-2 gap-2">
          <Image src={"/whatsapp.png"} alt='' width={40} height={40} />
          <p>081911931148</p>
        </div>
            </Link>

      </div>
      </div>

     </div>
    </footer>
    <footer className="md:hidden h-fit py-2">
      <div id="Kontak" className="grid justify-center bottom-0 h-[342px]">
      <h1 className="font-bold text-3xl">Tertarik dengan unit kami?</h1>
      <div className="pt-4 text-white font-bold flex flex-col justify-center items-center">
        <Image
        className="row-span-3 item-end w-[220px] h-[300px]"
        alt='profile.jpeg'
        src={'/profile.jpeg'}
        width={220}
        height={300}
        />
        <Link className="flex flex-col items-center" href="https://api.whatsapp.com/send/?phone=6281911931148&type=phone_number&app_absent=0">
        <h1 className="text-[20px]">Hubungi via</h1>
        <div className="flex pt-2 gap-2">
          <Image src={"/whatsapp.png"} alt='' width={20} height={20} />
          <p>081911931148</p>
        </div>
      </Link>
      </div>
     </div>
   </footer>
   <div className="md:hidden relative w-full ">
     <div className="absolute top-[-220px] z-[-20] bg-yellow-600 w-full min-h-[320px]"></div>
   </div>
    </main>
  )
}
