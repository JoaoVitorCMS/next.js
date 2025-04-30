import Image from "next/image";
import fundo from "./assets/images/dragonballsuperz.png"
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100">
       <Image src={fundo} alt="Dragon Ball" className="w-150 h-100"></Image>
        <h1 className="text-4xl font-bold text-red-600 mb-4">Batata</h1>
        <p className="max-w-xl text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus laudantium eveniet tempore quod. 
          Dolor nobis, facilis exercitationem ex nulla, magni consequuntur facere mollitia, cumque modi libero 
          quia eius soluta saepe.
        </p>
      </div>
    </>
  );
}

