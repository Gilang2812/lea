import { FaEnvelope, FaEnvelopeOpen, FaHouse } from "react-icons/fa6"
import { NavItem } from "./NavItem"
import { useState } from "react"

export const Aside = () => {
    const [open, setOpen] = useState(true)
    return (
        <aside className={`${!open &&'-translate-x-full'} transition    text-white p-5 bg-teal-700 relative`}>
            <button onClick={()=>setOpen(!open)} className={`z-10 absolute top-12 right-0 ${!open?'translate-x-full':'translate-x-[50%]'} bg-slate-600 size-8 rounded-[50%] hover:bg-slate-400 transition`}>
                &gt;
            </button>
            <header className="flex items-center mb-4">
                <div>
                    <img
                        className="size-20"
                        src="/gambar/dashboard1.png"
                        alt="Header Dashboard"
                    />
                </div>
                <div className="pl-2">
                    <h1 className="font-bold text-2xl ">Siletter</h1>
                    <h2>
                        Sistem Surat <br />
                        Menyurat
                    </h2>
                </div>
            </header>
            <nav className="leading-loose">
                <ul>
                    <NavItem label={'Home'} link={'/'} Icon={FaHouse} />
                    <NavItem label={'Surat Masuk'} link={'/masuk'} Icon={FaEnvelope} />
                    <NavItem label={'Surat Keluar'} link={'/keluar'} Icon={FaEnvelopeOpen} />

                </ul>
            </nav>
        </aside>)





}