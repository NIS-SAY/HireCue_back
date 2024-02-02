import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import screenshotRoute from './routes/routes.js'

const app = express();
app.use(cors());
app.use(morgan("dev")); // Utiliser morgan
app.use(express.json());
const hostname = "localhost"; //avant lancer docker changer hostname=0.0.0.0
const port = 9090;




// Gestion des erreurs de route
  
  app.use("/screenshot", screenshotRoute);



app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
