import { BASE_URL } from '../../Data/baseurl';
import { LoginDto } from '../dto/login.dto';
import http from '../Interface/interceptor';

export const getLogin = async (params: LoginDto) => {
  const LoginUrl = BASE_URL + 'user/login';
  const { data } = await http.post(LoginUrl, params);
  if (data) {
    localStorage.setItem('x-token', data.access_token);
    localStorage.setItem('qid', data.refresh_token);
    const { addUser } = await import(
      '../../Redux/Reducers/userReducer.actions'
    );
    const {
      default: { dispatch }
    } = await import('../../Redux/store');
    const user = await addUser(data.access_token);
    dispatch(user);
    return data;
  }
};
