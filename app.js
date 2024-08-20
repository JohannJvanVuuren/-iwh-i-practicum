import express from 'express';
import path from 'node:path'
import { fileURLToPath } from 'node:url'

//Import of routes
import getCustomObjectsRoute  from "./routes/getCustomObjects.js";
import updatesRoutes from "./routes/updateCustomObjects.js";

// Instantiation of the express application
const app = express();

// Setup of __dirname because it is not natively available in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serving of static file such as the style.css file
app.use(express.static(path.join(__dirname, 'public')));

// Setup of the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Registration of middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registration of routes
app.use('/', getCustomObjectsRoute);
app.use('/', updatesRoutes);

export default app;
