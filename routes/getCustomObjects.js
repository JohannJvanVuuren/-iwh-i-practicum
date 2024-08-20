import express from 'express';

// Import of the controller function for this route
import {getCustomObjects} from "../controllers/getCustomObjects.js";

// Instantiation of the Router object
const router = express.Router();

// The get route to obtain the custom object data from the HubSpot test account
router.get('/', getCustomObjects);

export default router;