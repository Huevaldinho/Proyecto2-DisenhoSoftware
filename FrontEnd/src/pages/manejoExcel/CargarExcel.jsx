function CargarExcel() {
  return (
    <div>
        <div>
            <h1 className="pt-4 text-6xl text-center ">Cargar Excel</h1>
        </div>
        <div className="pt-4 text-center text-3xl text-red-500">
            <p>Por Favor elija el archio de excel que desea cargar</p>
        </div>
        <div className="add-media" onClick={this.handleClick.bind(this)}>
                    <i className="plus icon"></i>
                    <input type="file" id="file" style={{display: "none"}}/>
        </div>
        </div>
  )
}

export default CargarExcel