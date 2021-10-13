type User = {
  name: string;
  email: string;
};

export type userReducerInitial = {
  user: User | null;
};

export type userActionDto = {
  payload: any;
  type: string;
  id?: number;
};
