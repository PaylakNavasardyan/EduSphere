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
};

type ReplyMessageType = { status: string };

let lastRegData: RegDataType | null = null;
let replyMessage: ReplyMessageType = { 'status' : '' };

app.get('/', (req: Request, res: Response) => {
  if (lastRegData) {
    res.send(lastRegData);
  } else res.send('There is no data')
});

app.post('/Registration', (req: Request, res: Response) => {
  const { name, email, area, course } = req.body as RegDataType;
   
  if (name && email && course) {
    lastRegData = req.body
    replyMessage = { 'status': '200' };
    console.log('New registration՝', lastRegData);
    res.status(200).send('Registration was succesful');
  } else {
    replyMessage = { 'status': '400'};
    res.status(400).send('Something went wrong, please try again later!');
  }       
});

app.get('/Registration', (req: Request, res: Response) => {
  res.send(replyMessage);
  console.log('Status message is`', replyMessage)
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
