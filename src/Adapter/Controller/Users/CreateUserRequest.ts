interface AddressProps {
  street: string;
  district: string;
  city: string;
  state: string;
  cep: string;
}

export interface CreateUserRequest {
  fullName: string;
  cpf: string;
  email: string;
  password: string;
  cellphone: string;
  address: AddressProps;
}
