import { TokenDto } from '../../Services/dto/interface.ques.dto';
import { ADD_USER, LOGOUT_USER } from '../ReducersTypes/userReducer.types';

export async function addUser(token: string) {
  const { default: jwtDecode } = await import('jwt-decode');
  const values = jwtDecode<TokenDto>(token);
  return {
    payload: { email: values.email, name: values.name },
    type: ADD_USER
  };
}

export function logout() {
  return {
    payload: null,
    type: LOGOUT_USER
  };
}
