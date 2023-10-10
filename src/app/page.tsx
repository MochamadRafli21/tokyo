import NavbarMobile from "../../component/navbar/mobile"
import NavbarDesktop from "../../component/navbar/desktop"
import Image from "next/image"
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="bg-white md:bg-cover md:bg-[url('/banner.jpeg')] md:pt-2 md:w-full md:min-h-[809px]">
        <div className="sticky">
          <NavbarMobile/>
          <NavbarDesktop/>
        </div>

        <div className="hidden md:flex flex-col p-8 text-white text-[128px] font-extrabold">
          <h1>LIVE<br/>REDISCOVERED</h1>
          <div className="max-w-4xl text-sm font-light bg-yellow-600 p-2 rounded ">
            <p>Little Tokyo merupakan maha karya terbaru dari dua developer besar yang berkolaborasi, yaitu PP Properti dan Jababeka. Berada di tengah Kota Jababeka tepat nya di Bundaran Jababeka, Little Tokyo Jababeka membawa berbagai fasilitas dan lingkungan yang didukung fitur teknologi smart living yang akan dapat membantu aktifitas harian kita. Little Tokyo membawa suasana kehidupan Jepang yang Modern yang akan membuat anda terpana.</p>
          </div>
        </div>

        <div className="md:hidden p-4">
          <div className="relative w-screen h-[320px] p-4">
            <Image
            className="absolute mx-auto top-0 left-0 right-20"
            alt='pic1'
            src={'/pic1.png'}
            width={212}
            height={178}
            /> 
          <Image
          className="absolute mx-auto top-20 left-40 right-0"
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
      <div className="bg-[url('/kawasan.jpeg')] mx-auto max-w-7xl w-full h-48 md:h-[873px] bg-cover md:bg-contain bg-no-repeat">
      </div>

    </main>
  )
}
