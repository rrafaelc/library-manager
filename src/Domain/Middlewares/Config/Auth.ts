import 'dotenv/config';

export default {
  jwt: {
    secret: process.env.JWT_KEY,
    expiresIn: process.env.EXPIRES_IN,
    role: '',
  },
};
