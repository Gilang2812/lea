import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../utils/axiosInstance'

const DetailSuratMasuk = () => {
    const [surat, setSurat] = useState()
    const { id } = useParams()

    async function getSuratMasuk() {
        const { data } = await axiosInstance.get(`surat/${id}`) //mendapatkan data dari api 
        console.log(data)
        setSurat(data) // menyimpan data ke state surat
    }

    useEffect(() => {
        getSuratMasuk()
    }, [])

   


    return (
        // elemen  = tag html
        <main className='shadow max-w-lg leading-loose rounded mx-auto mt-20 p-10'>
            <h1>Nama Surat</h1>
            <form action="" className='space-y-2'>
                <div>
                    <label htmlFor="pengirim">pengirim</label>
                    <input id='pengirim' name='pengirim' type="text" value={surat?.pengirim} />
                </div>
                <div>
                    <label htmlFor="tanggal">tanggal</label>
                    <input id='tanggal' name='tanggal' type="text" value={surat?.tanggal} />
                </div>
                <div>
                    <label htmlFor="keterangan">keterangan</label>
                    <input id='keterangan' name='keterangan' type="text" value={surat?.keterangan} />
                </div>
                <div>
                    <label htmlFor="file_surat_balasan">file surat balasan</label>
                    <input id='file_surat_balasan' name='file_surat_balasan' type="text" value={surat?.file_surat_balasan} />
                </div>
            </form>
        </main>
    )
}

export default DetailSuratMasuk