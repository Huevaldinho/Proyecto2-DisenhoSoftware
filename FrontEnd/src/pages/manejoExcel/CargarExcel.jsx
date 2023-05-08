function CargarExcel() {
  return (
    <div className="text-center">
        <div>
            <h1 className="pt-6 text-6xl text-center font-semibold   bg-cyan-500 text-white  shadow-sm ">Cargar Excel</h1>
        </div>
        <div className="pt-4 text-center text-3xl text-red-500 py-6" >
            <p>Por Favor elija el archio de excel que desea cargar</p>
        </div>
        <div className="max-w-sm mx-auto bg-white shadow py-8 px-6"> 
        <form className=" flex items-center space-x-6" action="">
        <input type="file"  className="block w-full text-sm text-slate-500 file:text-sm file:font-semibold file:py-2 file:px-4 file:bg-violet-50 file:text-violet-700 file:rounded-full file:border-0 file:mr-4 hover:file:bg-violet-100"/>
        </form>
        </div>
        <div className="pt-8">
        <button className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">Subir</button>
        </div>
</div>
  )
}

export default CargarExcel