import bodyParser from 'body-parser'
import express from 'express'
import addCalcRoutes from './routes/addCalc.js'

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use('/addCalc', addCalcRoutes);

app.get('/', (req, res) => { 
    res.send('A simple Node App is '
        + 'running on this server') 
    res.end() 
}) 
const PORT = process.env.PORT ||5000;
app.listen(PORT,console.log(
    `Server started on port ${PORT}`));