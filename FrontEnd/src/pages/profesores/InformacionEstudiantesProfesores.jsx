import React from 'react'

function InformacionEstudiantesProfesores() {
  return (
    <div>
      <div className='text-center text-3xl'>
        <h1>Información de Estudiantes</h1>
      </div>
      <div>
        <table className=' table-auto relative rounded overflow-auto'>
        <tr className='text-center'>
          <th className='text-center' >Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        <tr className='text-center'>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr className='text-center'>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr className='text-center'>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
        </table>
      </div>
    </div>
  )
}

export default InformacionEstudiantesProfesores
