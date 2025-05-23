import type { User } from "../../generated/prisma/index.js";
export type GetMeResult = {
  user: User;
};

export enum GetMeError {
  BAD_REQUEST,
}

export type usersResult = {
  users: Array<User>;
  total: number;
};
export enum usersError {
  BAD_REQUEST,
}
