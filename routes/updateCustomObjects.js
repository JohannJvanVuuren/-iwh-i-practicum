import express from 'express';
import {getFormData, updateCustomObject} from "../controllers/updateCustomObjects.js";

const router = express.Router();

router.get('/update-cobj', getFormData);
router.post('/update-cobj', updateCustomObject);

export default router;