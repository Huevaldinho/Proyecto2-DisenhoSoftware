export const estudianteEjemplo = {
    carnet: 2021035489,
    nombre: "Felipe",
    nombre2: "De Jesus",
    apellido1: "Obando",
    apellido2: "Arrieta",
    correo: "felipeobando@estudiantec.cr",
    celular: "70130686",
    campus: "Central Cartago",
    rol: "Estudiante"
}

const actividades =
    [{
        id: 1,
        semana: 1,
        nombreActividad: "Actividad bienvenida",
        tipoActividad: "Recreación",
        descripcion: "Actividad para dar bienvenida a los nuevos ingresos, se realizaran juegos.",
        responsable: [{ nombre: "Laura", apellido1: "Coto", codigo: 100 }],//Pueden ser 1 o mas profes.
        fechaHora: '05/05/2023 12:00:00',
        fechaPublicacion: "01/05/2023 12:00:00",
        recordatorios: ["02/05/2023 12:00:00", "03/05/2023 12:00:00", "04/05/2023 12:00:00"],
        modalidad: true,//Presencial.
        enlace: null,
        afiche: "url de afiche",
        estado: "Planeada",
        evidencia: null
    }
    ];


export const planDeTrabajo = {
    id: 1,
    nombre: "Plan de Trabajo 2023",
    actividades
}