export interface ContactModel {
  _id: string;
  email: string;
  photo: string;
  name: string;
}

export interface UserModel {
  _id: string;
  tokenExpiration: string;
  photo: string;
  username: string;
  email: string;
  password: string;
  contacts:ContactModel[]
}

export interface UpdatePasswordModel {
  oldPassword: string;
  updatedPassword: string;
}

export interface UserDataAPIResponseModel{
  status: string;
  data: {user: UserModel};
  message: string;
}
