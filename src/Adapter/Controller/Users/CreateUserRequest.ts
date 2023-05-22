interface AddressProps {
  street: string;
  district: string;
  city: string;
  state: string;
  cep: string;
}

export interface CreateUserRequest {
  fullName: string;
  email: string;
  password: string;
  cpf: string;
  cellphone: string;
  address: AddressProps;
}
