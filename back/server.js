import  express from "express";
import cors from "cors";
import {logger} from "logger-express";
import router from "./routes/routes.js";

//instancia de express
const app = express();

const port = process.env.port || 3000;

app.use(express.json());
app.use(cors());
app.use(logger());


app.use("/",router)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});