export enum UserRole {
  user = "user",
  customer = "customer",
  admin = "admin",
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
