import express from "express";
var router = express.Router();

import multer from "multer";
import { v2 as cloudinary } from 'cloudinary'
import fs from "fs";

// Configurar Cloudinary
cloudinary.config({ //esto es privado
    cloud_name: 'dge4tyjn4',
    api_key: '918428231237698',
    api_secret: 'VN0HAyWjh0kvBEsKd81ZY8ekE5M'
  });
  
  // Configuración de Multer para manejar la subida de archivos
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Directorio donde se guardarán temporalmente los archivos subidos
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
    }
  });
  
  const upload = multer({ storage });
  

  // Ruta para la subida de imágenes
  router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No se ha proporcionado ninguna imagen' });
    }
    console.log(req.file);
    // Subir la imagen a Cloudinary
    cloudinary.uploader.upload(req.file.path, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al subir la imagen a Cloudinary' });
      }
  
      // Eliminar el archivo temporal después de subirlo a Cloudinary
      fs.unlinkSync(req.file.path);
  
      // Obtener el enlace público de la imagen subida en Cloudinary
      const imageUrl = result.secure_url;
  
      return res.json({ imageUrl });
    });
  });
  

export default router;