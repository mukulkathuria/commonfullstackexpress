import {
  userActionDto,
  userReducerInitial
} from '../Reducerdtos/userreducer.dto';
import { ADD_USER, LOGOUT_USER } from '../ReducersTypes/userReducer.types';

const initialValues: userReducerInitial = {
  user: null
};

export function userReducer(state = initialValues, action: userActionDto) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
}
