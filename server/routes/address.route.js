import express from 'express';
import { createaddress } from "../controllers/address.controller.js";


const router = express.Router();


router.post('/createaddress', createaddress);

export default router;