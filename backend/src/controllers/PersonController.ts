import connection from '../database/connection';
import { Request, Response } from 'express';

class PersonController {
    async index(request: Request, response: Response) {

        const persons = await connection('person')
            .select('person.*')

        return response.json(persons)
    }



    async show(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const person = await connection('person').where('id_person', id).first()
            return response.json(person)

        } catch (error) {
            console.log(error)
            return response.json({ message: error })
        }
    }






    async createPerson(request: Request, response: Response) {
        const {
            nome_usuario,
            altura,
            lactose,
            peso,
            atleta
        } = request.body;

        try {
            const trx = await connection.transaction();
            const person = {
                nome_usuario,
                altura,
                lactose,
                peso,
                atleta
            }
            const id = await trx('person').insert(person)

            await trx.commit();
            return response.json({ message: "Person created. Id: " + id })
        } catch (error) {
            console.log(error)
            return response.json(error)
        }
    }
}


export default PersonController;