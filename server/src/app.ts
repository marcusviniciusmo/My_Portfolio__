import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { CreateProfileRoute, GetProfileByIdRoute } from './routes/Profile';

dotenv.config();

const app = express();
const environment = process.env.NODE_ENV;

app.use(express.json());
app.use(cors({
  origin: environment === 'PRODUCTION'
    ? process.env.BASE_URL_FRONTEND_PRODUCTION
    : process.env.BASE_URL_FRONTEND_DEVELOPMENT
}));

/* PROFILE */
app.use(CreateProfileRoute);
app.use(GetProfileByIdRoute);

app.get('/blogs/:user_id', (request, response) => {
  return response.json([{message: 'Acessou blogs'}]);
})
app.get('/certificates/:user_id', (request, response) => {
  return response.json([{message: 'Acessou certificates'}]);
})
app.get('/experiences/:user_id', (request, response) => {
  return response.json([{message: 'Acessou experiences'}]);
})
app.get('/expertises/:user_id', (request, response) => {
  return response.json([{message: 'Acessou expertises'}]);
})

app.get('/graduations/:user_id', (request, response) => {
  return response.json([{message: 'Acessou graduations'}]);
})

app.get('/knowledges/:id', (request, response) => {
  return response.json([{message: 'Acessou knowledges'}]);
})

app.get('/menuItems/:user_id', (request, response) => {
  return response.json([{message: 'Acessou menuItems'}]);
})

app.get('/profileInfo/:user_id', (request, response) => {
  return response.json([{message: 'Acessou profileInfo'}]);
})

app.get('/skills/:user_id', (request, response) => {
  return response.json([{message: 'Acessou skills'}]);
})

app.get('/socialNetworks/:user_id', (request, response) => {
  return response.json([{message: 'Acessou socialNetworks'}]);
})

export default app;