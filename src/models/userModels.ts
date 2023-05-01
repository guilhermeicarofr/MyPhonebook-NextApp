export type User = {
  username: string;
};

export type UserCredentials = User & {
  password: string;
};
