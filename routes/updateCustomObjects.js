import express from 'express';
import {getFormData} from "../controllers/updateCustomObjects.js";

const router = express.Router();

router.get('/update-cobj', getFormData);

export default router;