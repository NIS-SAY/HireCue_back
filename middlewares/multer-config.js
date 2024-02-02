import multer, { diskStorage } from "multer"; // Importer multer
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Les extensions à accepter

export default function(image, size){
return multer({
  // Configuration de stockage
  storage: diskStorage({
    // Configurer l'emplacement de stockage
    destination: (req, file, callback) => {
      const __dirname = dirname(fileURLToPath(import.meta.url)); // Récupérer le chemain du dossier courant
      callback(null, `./public/images/screenshots`); // Indiquer l'emplacement de stockage
    },
    // Configurer le nom avec lequel le fichier va etre enregistrer
    filename: (req, file, callback) => {
      // Remplacer les espaces par des underscores
      const name = file.originalname.split(" ").join("_");
      // Récupérer l'extension à utiliser pour le fichier
      const extension = "jpg";
      //  Ajouter un timestamp Date.now() au nom de fichier
      callback(null, name + "." + extension);
    },
  }),
  // Taille max des images 10Mo
 // limits: {fileSize: 5 * 1024 * 1024},
 limits: size,
}).single("screenshot"); // Le fichier est envoyé dans le body avec nom/clé 'image'
}