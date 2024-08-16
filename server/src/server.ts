import express from 'express';

const app = express();

app.get('/profile/:user_id', (request, response) => {
  return response.json([{message: 'Acessou profile'}]);
})
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

app.listen(3333);