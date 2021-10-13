import { BASE_URL } from '../../Data/baseurl';
import { RegisterDto } from '../dto/register.dto';
import http from '../Interface/interceptor';

export const getRegister = async (values: RegisterDto) => {
  const RegisterUrl = BASE_URL + 'user/register';
  const { data } = await http.post(RegisterUrl, values);
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
