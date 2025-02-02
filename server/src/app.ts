import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { RestrictWriteRoutes } from './utils/Functions';

import { CreateBlogsByUserRoute, GetBlogsByUserRoute } from './routes/Blogs';
import { CreateCertificateAreasRoute, GetCertificateAreasRoute } from './routes/CertificateAreas';
import { CreateCertificatesByUserRoute, GetCertificatesByUserRoute } from './routes/Certificates';
import { CreateCertificateTypesRoute, GetCertificateTypesRoute } from './routes/CertificateTypes';
import { CreateExperiencesByUserRoute, GetExperiencesByUserRoute } from './routes/Experiences';
import { GenerateTokenRoute } from './routes/Jwt';
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

app.use(RestrictWriteRoutes);

/* BLOGS */
app.use(CreateBlogsByUserRoute);
app.use(GetBlogsByUserRoute);
/* CERTIFICATE AREAS */
app.use(CreateCertificateAreasRoute);
app.use(GetCertificateAreasRoute);
/* CERTIFICATES */
app.use(CreateCertificatesByUserRoute);
app.use(GetCertificatesByUserRoute);
/* CERTIFICATE TYPES */
app.use(CreateCertificateTypesRoute);
app.use(GetCertificateTypesRoute);
/* EXPERIENCES */
app.use(CreateExperiencesByUserRoute);
app.use(GetExperiencesByUserRoute);
/* JWT */
app.use(GenerateTokenRoute);
/* PROFILE */
app.use(CreateProfileRoute);
app.use(GetProfileByIdRoute);

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