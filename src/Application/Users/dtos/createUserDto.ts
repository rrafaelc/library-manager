export interface CreateUserDto {
  full_name: string;
  email: string;
  password: string;
  cpf_cnpj: string;
  role?: string;
}
