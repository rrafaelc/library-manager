/* eslint-disable @typescript-eslint/no-explicit-any  */
import { ICreateUserService } from './interfaces/ICreateUserService';
import CreateUserDTO, {
  CreateAddressDTO,
} from '@Adapter/Controller/Users/CreateUserDTO';
import AppError from '@Domain/Middlewares/Errors/AppError';
import { validate } from 'class-validator';

class CreateUserService implements ICreateUserService {
  async execute(data: CreateUserDTO): Promise<any> {
    // validar data e salvar no repositorio
    // O retorno do prisma por exemplo ja tem o seu tipo
    // que usaria no lugar do any
    const _data: CreateUserDTO = {
      firstName: 'Rafael',
      lastName: 'Costa',
      cpf: '123.456.789-10',
      email: 'rafael@email.com',
      password: '12345678',
      cellphone: '5519999999999',
      address: {
        street: 'Rua Ali perto, 123',
        district: 'Centro',
        city: 'Itapira',
        state: 'SP',
        cep: '13970-000',
      },
    };

    const userDTO = new CreateUserDTO(_data);
    const addressDTO = new CreateAddressDTO(_data.address);

    await validate(userDTO).then(errors => {
      if (errors.length > 0) {
        console.log('validation failed. error: ', errors);
      } else {
        console.log('validation succed');
      }
    });

    await validate(addressDTO).then(errors => {
      if (errors.length > 0) {
        console.log('validation failed. error: ', errors);
      } else {
        console.log('validation succed');
      }
    });

    throw new AppError('Method not implemented.');
  }
}

export default CreateUserService;
