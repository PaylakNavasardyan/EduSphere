import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Request, Response } from 'express';

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

type RegDataType = {
  name: string,
  email: string,
  area?: string | number,
  course: string
}

let lastRegData: RegDataType | null = null;

app.get('/', (req : Request, res : Response) => {
  if (lastRegData) {
    res.send(lastRegData);
  } else res.send('There is no data')
});

app.post('/Registration', (req : Request, res : Response) => {
  const { name, email, area, course } = req.body as RegDataType;

  if (name && email && course) {
    lastRegData = req.body
    console.log('New registration՝', lastRegData);
    res.status(200).send('Registration was succesful');
  } else res.status(400).send('Fill in all fields!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
