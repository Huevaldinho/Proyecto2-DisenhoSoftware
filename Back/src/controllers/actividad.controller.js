import {
  getActividadesDB,
  ingresarActividadDB,
  modificarActividadDB,
  eliminarActividadDB,
} from "../database/DAOActividad.js"; //database methods

export const getActividades = async (req, res) => {
  //devuelve todos las actividades
  const actividades = await getActividadesDB();
  res.json(actividades);
};

export const postActividad = async (req, res) => {
  let nuevaActividad = "";
  if (!req.file || req.file == null)
    nuevaActividad = await ingresarActividadDB(req.body, "");
  else 
    nuevaActividad = await ingresarActividadDB(req.body, req.file.path);

  res.json(nuevaActividad);
};

export const putActividad = async (req, res) => {
  let nuevaActividad = "";
  if (!req.file || req.file == null)
    nuevaActividad = await modificarActividadDB(req.body, "");
  else 
    nuevaActividad = await modificarActividadDB(req.body, req.file.path);

  res.json(nuevaActividad);
};

export const deleteActividad = async (req, res) => {
  const actividad = await eliminarActividadDB(req.body);
  res.json(actividad);
};
