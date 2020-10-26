import { Router } from 'express';

const routes = Router();

routes.get('/person',(request, response)=>{
    return response.json({message:"Teste"})
})


export default routes;