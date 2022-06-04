import express from 'express'
import logRoutes from './routes/logs.js'

const app = express();

app.use(express.json());

app.use(logRoutes);

export default app