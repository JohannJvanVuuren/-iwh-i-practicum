import express from 'express';

// Import of controller functions for the two routes
import {getFormData, updateCustomObject} from "../controllers/updateCustomObjects.js";

// Instantiation of the Router object
const router = express.Router();

// The get route to 'get' and display the custom form to add records to the custom object
router.get('/update-cobj', getFormData);

// The post route to make use of the information submitted through the form and add a record to the custom object
// via the appropriate  HubSpot API endpoint
router.post('/update-cobj', updateCustomObject);

export default router;