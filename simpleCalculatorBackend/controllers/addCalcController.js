import { addCalcService } from '../services/addCalcService.js';
export const addController = async (req, res) => {
    try {
      const userData = req.body.value;
      const addOutput = await addCalcService(userData);
      res.status(201).send({ result: addOutput });
    } catch (error) {
      res.status(500).send({ message: 'Error creating user', error: error.message });
    }
  };