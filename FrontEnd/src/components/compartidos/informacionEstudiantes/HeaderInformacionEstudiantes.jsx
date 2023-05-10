
import React from 'react'

function HeaderInformacionEstudiantes() {
  return (
    <thead className="bg-gray-50 text-center">
      <tr className="text-center">
        <th
          scope="col"
          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Nombre
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Carnet
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Carrera
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Estado
        </th>
      </tr>
    </thead>
  );
}

export default HeaderInformacionEstudiantes

