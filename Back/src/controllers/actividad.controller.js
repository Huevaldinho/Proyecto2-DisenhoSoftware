import {
    getActividadesDB,
    ingresarActividadDB,
    modificarActividadDB,
    eliminarActividadDB
} from "../database/DAOActividad.js"; //database methods

export const getActividades = async (req, res) => {
    const actividades = await getActividadesDB()
    res.json(actividades)
}

export const postActividad = async (req, res) => {
    const actividad = ingresarActividadDB(req.body)
    res.json(actividad)
}

export const putActividad = async (req, res) => {
    const actividad = modificarActividadDB(req.body)
    res.json(actividad)
}

export const deleteActividad = async (req, res) => {
    const actividad = eliminarActividadDB(req.body)
    res.json(actividad)
}
