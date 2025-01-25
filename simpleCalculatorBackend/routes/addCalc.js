import express from 'express';
import { addController } from '../controllers/addCalcController.js';

const router = express.Router();

// Getting the list of users from the mock database
router.get('/initialCheck', (req, res) => {
    res.send("Hellooo");
})

router.post('/add', addController)  

export default router
