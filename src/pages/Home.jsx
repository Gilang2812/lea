
export default function Home() {




  return <main className="h-screen max-h-screen p-20 text-white bg-teal-700">
    <h1 className="text-3xl font-bold text-center text-white uppercase">Register account</h1>
    <p> hitung </p>
    <form className="max-w-4xl mx-auto capitalize">
      <div >
        <label htmlFor="username">username</label>
        <input className="w-full rounded-lg" type="text" name="pengiring" id="username" />
      </div>
      <div>
        <label htmlFor="name">name</label>
        <input className="w-full rounded-lg" type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="instansi">instansi</label>
        <input className="w-full rounded-lg" type="text" name="instansi" id="instansi" />
      </div>
      <div>
        <label htmlFor="fakultas">fakultas</label>
        <input className="w-full rounded-lg" type="text" name="fakultas" id="fakultas" />
      </div>
      <div aria-label="dua-kolom" className="flex gap-2 " >
        <section aria-label="kiri " className="grow">
          <div>
            <label htmlFor="jurusan">jurusan</label>
            <input className="w-full rounded-lg" type="text" name="jurusan" id="jurusan" />
          </div>
          <div>
            <label htmlFor="jenisKelamin">jenis kelamin</label>
            <input className="w-full rounded-lg" type="text" name="jenis_kelamin" id="jenisKelamin" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input className="w-full rounded-lg" type="text" name="password" id="password" />
          </div>
        </section>
        <section aria-label="kanan " className="grow">
          <div>
            <label htmlFor="angkatan">angkatan</label>
            <input className="w-full rounded-lg" type="text" name="angkatan" id="angkatan" />
          </div>
          <div>
            <label htmlFor="noHp">nomor_hp</label>
            <input className="w-full rounded-lg" type="text" name="" id="noHp" />
          </div>
          <div>
            <label htmlFor="fakultas">fakultas</label>
            <input className="w-full rounded-lg" type="text" name="" id="fakultas" />
          </div>
        </section>
      </div>
      <div className="flex items-start justify-center p-4 ">
        <button type="submit" className="px-3 py-1 font-bold bg-orange-500 rounded-full">Register</button>
      </div>
    </form>
  </main>

}