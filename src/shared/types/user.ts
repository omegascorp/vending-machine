export enum UserRole {
  seller = "seller",
  buyer = "buyer",
}
export interface User {
  _id?: string;
  username: string;
  password: string;
  deposit: number;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
