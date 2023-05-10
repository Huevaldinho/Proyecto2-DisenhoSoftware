 const estudiantes = [{
    carnet: 2021035489,
    nombre: "Felipe",
    nombre2: "De Jesus",
    apellido1: "Obando",
    apellido2: "Arrieta",
    correo: "felipeobando@estudiantec.cr",
    celular: "70130686",
    campus: "Central Cartago",
    rol: "Estudiante",
    carrera: "Ingeniería en Computación",
    estado: "Activo"
},{
    carnet: 2021047883,
    nombre: "Damian",
    nombre2: "José",
    apellido1: "Obando",
    apellido2: "Cerdas",
    correo: "damiobando@estudiantec.cr",
    celular: "85805240",
    campus: "Central Cartago",
    rol: "Estudiante",
    carrera: "Ingeniería en Computación",
    estado: "Activo"
},
{
    carnet: 2021047896,
    nombre: "Anthony",
    nombre2: "Steve",
    apellido1: "Jimenez",
    apellido2: "Barrantes",
    correo: "damiobando@estudiantec.cr",
    celular: "85805240",
    campus: "Central Cartago",
    rol: "Estudiante",
    carrera: "Ingeniería en Computación",
    estado: "Activo"
}
];

const actividades =
    [{
        id: 1,
        semana: 1,
        nombreActividad: "Actividad bienvenida",
        tipoActividad: "Recreación",
        descripcion: "Actividad para dar bienvenida a los nuevos ingresos, se realizaran juegos.",
        responsable: [{ nombre: "Laura", apellido1: "Coto", codigo: 100 }],//Pueden ser 1 o mas profes.
        fechaHora: '05-05-2023 12:00:00',
        fechaPublicacion: "01-05-2023 12:00:00",
        recordatorios: ["02-05-2023 12:00:00", "03-05-2023 12:00:00", "04-05-2023 12:00:00"],
        modalidad: true,//Presencial.
        enlace: null,
        afiche: "url de afiche",
        estado: "Planeada",
        evidencia: null
    }, {
        id: 2,
        semana: 1,
        nombreActividad: "Actividad bienvenida",
        tipoActividad: "Recreación",
        descripcion: "Actividad para dar bienvenida a los nuevos ingresos, se realizaran juegos.",
        responsable: [{ nombre: "Laura", apellido1: "Coto", codigo: 100 }],//Pueden ser 1 o mas profes.
        fechaHora: '15-05-2023 12:00:00',
        fechaPublicacion: "01-05-2023 12:00:00",
        recordatorios: ["02-05-2023 12:00:00", "03-05-2023 12:00:00", "04-05-2023 12:00:00"],
        modalidad: true,//Presencial.
        enlace: null,
        afiche: "url de afiche",
        estado: "Planeada",
        evidencia: null
    }, {
        id: 3,
        semana: 3,
        nombreActividad: "Actividad bienvenida",
        tipoActividad: "Recreación",
        descripcion: "Actividad para dar bienvenida a los nuevos ingresos, se realizaran juegos.",
        responsable: [{ nombre: "Laura", apellido1: "Coto", codigo: 100 }],//Pueden ser 1 o mas profes.
        fechaHora: '10-05-2023 12:00:00',
        fechaPublicacion: "01-05-2023 12:00:00",
        recordatorios: ["02-05-2023 12:00:00", "03-05-2023 12:00:00", "04-05-2023 12:00:00"],
        modalidad: true,//Presencial.
        enlace: null,
        afiche: "url de afiche",
        estado: "Planeada",
        evidencia: null
    }, {
        id: 4,
        semana: 2,
        nombreActividad: "Actividad bienvenida",
        tipoActividad: "Recreación",
        descripcion: "Actividad para dar bienvenida a los nuevos ingresos, se realizaran juegos.",
        responsable: [{ nombre: "Laura", apellido1: "Coto", codigo: 100 }],//Pueden ser 1 o mas profes.
        fechaHora: '20-05-2023 12:00:00',
        fechaPublicacion: "01-05-2023 12:00:00",
        recordatorios: ["02-05-2023 12:00:00", "03-05-2023 12:00:00", "04-05-2023 12:00:00"],
        modalidad: true,//Presencial.
        enlace: null,
        afiche: "url de afiche",
        estado: "Planeada",
        evidencia: null
    }
    ];

export const planilla = {
        id: 1,
        nombre: "Estudiantes 2023",
        estudiantes
    }
export const planDeTrabajo = {
    id: 1,
    nombre: "Plan de Trabajo 2023",
    actividades
}

export const profesores = [{
    _id: 1,
    codigo: 0,
    nombre: "Mauricio",
    nombre2: "Rafael",
    apellido1: "Torres",
    apellido2: "Solano",
    correo: "correoRafael@tec.ac.cr",
    telefono: "25502349 [extensión NNNN]",
    celular: "80808080",
    foto: "url foto",
    campus: "Central Cartago",
    role: "Profesor",
    estado: "Activo",
    coordinador: false
},
{
    _id: 2,
    codigo: 1,
    nombre: "Mauricio",
    nombre2: "Rafael",
    apellido1: "Torres",
    apellido2: "Solano",
    correo: "correoRafael@tec.ac.cr",
    telefono: "25502349 [extensión NNNN]",
    celular: "80808080",
    foto: "url foto",
    campus: "Central Cartago",
    role: "Profesor",
    estado: "Activo",
    coordinador: false
}, {
    _id: 3,
    codigo: 2,
    nombre: "Mauricio",
    nombre2: "Rafael",
    apellido1: "Torres",
    apellido2: "Solano",
    correo: "correoRafael@tec.ac.cr",
    telefono: "25502349 [extensión NNNN]",
    celular: "80808080",
    foto: "url foto",
    campus: "Central Cartago",
    role: "Profesor",
    estado: "Activo",
    coordinador: false
}, {
    _id: 4,
    codigo: 3,
    nombre: "Mauricio",
    nombre2: "Rafael",
    apellido1: "Torres",
    apellido2: "Solano",
    correo: "correoRafael@tec.ac.cr",
    telefono: "25502349 [extensión NNNN]",
    celular: "80808080",
    foto: "url foto",
    campus: "Central Cartago",
    role: "Profesor",
    estado: "Activo",
    coordinador: false
}
];