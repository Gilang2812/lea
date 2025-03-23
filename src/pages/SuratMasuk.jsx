
import { useEffect, useState } from 'react';
import { FaCircleInfo, FaTrash } from 'react-icons/fa6';
import { axiosInstance } from '../utils/axiosInstance';
import { Aside } from '../components/Aside';
// export default function SuratMasuk() {
//     // data tabel
//     const data = [
//       { pengirim: "Biro Pemerintahan", tanggal: "26/6/2024", file: "-", keterangan: "diterima",},
//       { pengirim: "Biro Pemerintahan", tanggal: "26/6/2024", file: "-", keterangan: "diterima",},
//       { pengirim: "Biro Pemerintahan", tanggal: "26/6/2024", file: "-", keterangan: "diterima",},
//     ];

//     return (
//       <main>
//         <section className="m-4 ml-12">
//           <h1 className="font-bold text-xl">Surat Masuk</h1>
//           <h2>Menu ini untuk melihat surat masuk.</h2>
//         </section>

//         <div className="overflow-hidden rounded-lg m-12">
//           <table className="table-auto w-full text-sm text-left rounded-full">
//             <thead>
//               <tr className="bg-gray-300 border-b-2 border-black">
//                 <th className="border border-gray-300 px-2 py-2">No</th>
//                 <th className="border border-gray-300 px-8 py-2">Pengirim</th>
//                 <th className="border border-gray-300 px-8 py-2">Tanggal</th>
//                 <th className="border border-gray-300 px-12 py-2">File Surat Balasan</th>
//                 <th className="border border-gray-300 px-8 py-2">Keterangan</th>
//                 <th className="border border-gray-300 px-4 py-2">Detail</th>
//                 <th className="border border-gray-300 px-8 py-2">Tindakan</th>
//               </tr>
//             </thead>

//             <tbody>
//               {data.map((item, index) => (
//                 <tr key={index} className="border-b-2 border-gray-200">
//                   <td className="border-white px-2 py-2">{index +1}</td>
//                   <td className="border-white px-8 py-2">{item.pengirim}</td>
//                   <td className="border-white px-8 py-2">{item.tanggal}</td>
//                   <td className="border-white px-12 py-2">{item.file}</td>
//                   <td className="border-white px-8 py-2">{item.keterangan}</td>
//                   <td className="border-white px-8 py-2">
//                     <button className="bg-gray-200 rounded-full p-1 px-2">
//                       <FontAwesomeIcon icon={faCircleInfo} />
//                     </button>
//                   </td>
//                   <td className="border-white px-8 py-2">
//                     <button className="bg-red-500 text-white font-semibold text-sm rounded-full p-1 px-2 hover:bg-red-700 transition flex items-center">
//                       <FontAwesomeIcon icon={faTrash} className="mr-1" />
//                       Hapus
//                     </button>
//                   </td>
//                 </tr>

//                      )
//                  )
//               }
//             </tbody>
//           </table>
//         </div>
//       </main>
//     );
//   }


export default function SuratMasuk() {

    const [surat, setSurat] = useState(null) // == let surat =null
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    const [pengirim, setPengirim] = useState('')
    const [form, setForm] = useState({
        pengirim: '',
        tanggal: '',
        file_surat_balasan: '',
        keterangan: ''
    })
    // const form = {
    //     pengirim:'',
    //     tanggal:'',
    //     file_surat_balasan:'',
    //     keterangan:''
    // }
    const [hitung, setCount] = useState(0)// argument useSate adalah value variable
    async function fetchData() {
        try {
            const { data } = await axiosInstance.get(`/surat`) //code ini mengambil response API req.body.nama , const {nama} =req.body , data.data = const {data} = data
            // const {data} = await axiosConfig.get('surat') //response axios lalu didalamnya ada atribut data yang berisi response dari backend/controller/server
            // const response = await fetch( `${baseUrl}/surat`) //code ini mengambil response API
            // const data = await response.json() // /mengubah tempalte responsenya menjadi json {}

            setSurat(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [isLoading,isError])


    // 1. deklarasi hooks dengan useState
    const [open, setOpen] = useState(false)

    //  (parameter)=>{logika}
    //onChange={e=>lailapusing(e)} --> onChange={lailapusing} 


    const lailapusing = (e) => {

        setPengirim(e.target.name)
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const submitForm = (e) => {
        e.preventDefault()

        setLoading(true)
        axiosInstance.post('/surat', form).
            then(result => {
                setLoading(false)
                setOpen(false)
            }).catch(err => {
                console.log(err)
                setError(err)
            })
    }

    const handleDelete = (id)=>{
        setLoading(true)
        axiosInstance.delete(`/surat/${id}/delete`).then(result=>setLoading(false)).catch(err => {setError(err)})
       
    }
    return (
        <main className='flex h-screen w-full'>

            <div className={`absolute ${open ? "visible" : "invisible"} transition-all  z-[1] p-8 shadow-[0_0_0_999px_rgba(0,0,1,0.4)] bg-slate-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                <h2 className='text-center font-bold text-xl font-sans '>Modal </h2>
                <button onClick={() => setOpen(false)} className='absolute top-0 right-4'>x</button>
                <form onSubmit={submitForm} >
                    <div>
                        <label htmlFor="pengirim">pengirim</label>
                        <input onChange={lailapusing} type='text' name='pengirim' placeholder='' />
                    </div>
                    <div>
                        <label htmlFor="tanggal">tanggal</label>
                        <input onChange={lailapusing} type='text' name='tanggal' placeholder='' value='123131' />
                    </div>
                    <div>
                        <label htmlFor="keterangan">keterangan</label>
                        <input onChange={lailapusing} type='text' name='keterangan' placeholder='sadas' />
                    </div>
                    <div>
                        <label htmlFor="file">file</label>
                        <input onChange={lailapusing} type='text' name='file_surat_balasan' placeholder='' />
                    </div>
                    <div>
                        <button className={`bg-teal-700 ${isLoading && 'animate-spin'}  p-2 rounded-lg text-white`} type="submit">tambah</button>
                    </div>
                </form>
            </div>

            <Aside />
            <div className='w-full'>
                <section className="m-4 ml-12">
                    <h1 className="font-bold text-xl">Surat Masuk</h1>
                    <h2>Menu ini untuk melihat surat masuk.</h2>
                    <h1>{hitung} </h1>

                    <button onClick={() => setCount(hitung + 1)}>naikan angka</button>

                </section>

                <div className="overflow-hidden rounded-lg  m-12 p-4 space-y-2">
                    <button onClick={() => setOpen(!open)} className='bg-teal-700 text-white p-2 rounded-lg'>tambah surat</button>
                    <table className="table-auto w-full  border-collapse text-sm text-left rounded-full">
                        <thead className="">
                            <tr className="bg-gray-300 border-b-2 border-black">
                                <th className="border border-gray-300 px-2 py-2">No</th>
                                <th className="border border-gray-300 px-8 py-2">Pengirim</th>
                                <th className="border border-gray-300 px-8 py-2">Tanggal</th>
                                <th className="border border-gray-300 px-12 py-2">File Surat Balasan</th>
                                <th className="border border-gray-300 px-8 py-2 ">Keterangan</th>
                                <th className="border border-gray-300 px-4 py-2">Detail</th>
                                <th className="border border-gray-300 px-8 py-2">Tindakan</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className='border-b-2 border-gray-200'>
                                <td className="border-white px-2 py-2">1</td>
                                <td className="border-white px-8 py-2">Biro Pemerintahan</td>
                                <td className="border-white px-8 py-2">26/6/2024</td>
                                <td className="border-white px-12 py-2">-</td>
                                <td className="border-white px-8 py-2">diterima</td>
                                <td className="border-white px-8 py-2 ">
                                    <button className='bg-gray-200 rounded-full p-1 px-2'>
                                        <FaCircleInfo />
                                    </button >
                                </td>
                                <td className="border-white px-8 py-2">
                                    <button className="bg-red-500 text-white font-semibold text-sm rounded-full p-1 px-2 hover:bg-red-700 transition flex items-center">
                                        <FaTrash className="mr-1" />
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                            {
                                surat?.map((item, index) => (
                                    <tr key={index} className='border-b-2 border-gray-200'>
                                        <td className="border-white  px-2 py-2">{index + 1}</td>
                                        <td className="border-white  px-8 py-2">{item.pengirim}</td>
                                        <td className="border-white  px-8 py-2">{item.tanggal}</td>
                                        <td className="border-white  px-12 py-2">-</td>
                                        <td className="border-white  px-8 py-2">{item.keterangan}</td>
                                        <td className="border-white px-8 py-2 ">
                                            <button className='bg-gray-200 rounded-full p-1 px-2'>
                                                <FaCircleInfo />
                                            </button >
                                        </td>
                                        <td onClick ={()=>handleDelete(item.id)} className="border-white px-8 py-2">
                                            <button className="bg-red-500 text-white font-semibold text-sm rounded-full p-1 px-2 hover:bg-red-700 transition flex items-center">
                                                <FaTrash className="mr-1" />
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );

}