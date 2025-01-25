import { addCalcService } from '../services/addCalcService.js';
export const addController = async (req, res) => {
    console.log("Request is ",req.body)
    try {
      const userData = req.body.value;
      const addOutput = await addCalcService(userData);
      console.log("Otput in controller is ",addOutput)
      res.status(201).send({ result: addOutput });
    } catch (error) {
      res.status(500).send({ message: 'Error creating user', error: error.message });
    }
  };