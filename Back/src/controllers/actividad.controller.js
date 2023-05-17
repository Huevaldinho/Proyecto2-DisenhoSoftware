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
    const actividad = await ingresarActividadDB(req.body)
    res.json(actividad)
}

export const putActividad = async (req, res) => {
    const actividad = await modificarActividadDB(req.body)
    res.json(actividad)
}

export const deleteActividad = async (req, res) => {
    const actividad = await eliminarActividadDB(req.body)
    res.json(actividad)
}