/* eslint-disable no-useless-escape  */

import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

interface UserProps {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
  address: CreateAddressDTO;
  cellphone: string;
}

interface AddressProps {
  street: string;
  district: string;
  city: string;
  state: string;
  cep: string;
}

export class CreateAddressDTO {
  @IsNotEmpty()
  street: string; // Rua Ali Perto, 123

  @IsNotEmpty()
  district: string; // Centro

  @IsNotEmpty()
  city: string; // Itapira

  @Length(2, 2)
  state: string; // SP

  @Matches(/^\d{5}-\d{3}$/)
  cep: string; // 13970-000

  constructor(address: AddressProps) {
    Object.assign(this, address);
  }
}

class CreateUserDTO {
  @Length(3, 30)
  firstName: string;

  @Length(3, 30)
  lastName: string;

  @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, { message: 'Invalid CPF' })
  cpf: string;

  @IsEmail()
  email: string;

  @Length(8)
  password: string;

  address: CreateAddressDTO;

  @Length(13, 13) // 5519987654321
  cellphone: string;

  constructor(user: UserProps) {
    Object.assign(this, user);
  }
}

export default CreateUserDTO;
