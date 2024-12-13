import { FaCaretDown, FaUser } from "react-icons/fa6";
import { Aside } from "../components/Aside";
 
export default function Dashboard() { 

  return (
    <main className="flex h-screen">
  
    
      {/* layout bagian kiri */}
        <Aside />

      {/* layput bagian kanan */}
      <section className="flex-1 pb-8">
        
        <header className="bg-white p-4 grow flex justify-end px-24 shadow mb-7 ">

            <button className="flex items-center gap-2 ">
                <FaUser/> 
                <FaCaretDown />
            </button>
   
        </header>

        {/* <!-- bagian halo selamat datang --> */}
        <div className="bg-gray-300 px-7 pb-7 mx-24 flex justify-between items-start mb-16 ">
          <div className="pt-7">
            {/* <!-- judul dan deskripsi selamat datang --> */}
            <h1 className="text-2xl font-bold mb-2">Hello   !</h1>
            <h2>
              Selamat datang di Siletter yang akan membantu proses surat
              <br />
              menyurat anda
            </h2>
          </div>

          <div className="pr-16">
            {/* <!-- Gambar ilustrasi --> */}
            <img
              className="size-72"
              src="/gambar/dashboard2.png"
              alt="Dashboardpict"
            />
          </div>
        </div>

        {/* 2 box surat masuk dan keluar */}
        <div className=" flex justify-evenly   ">
            <div className="px-4 bg-amber-100 rounded-md font-bold p-2  text-md "> 
            Total Surat Masuk
                <div className= "flex flex-row justify-center items-center gap-8 mt-2">
                <p className="text-xl flex items-center">
                
                </p>
                
                <h2 className="text-xl flex items-center">0</h2>
                </div>
            </div>
            
            <div className="px-4 bg-blue-100 rounded-md font-bold p-2 text-md "> 
            Total Surat Keluar
                <div className= "pb-5 flex flex-row justify-center items-center gap-8 mt-2">
                <p className="text-xl flex items-center">
                
                </p>
                
                <h2 className="text-xl flex items-center">0</h2>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}