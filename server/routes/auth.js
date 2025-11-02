import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Ensure both routes are POST methods
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;