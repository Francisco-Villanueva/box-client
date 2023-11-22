import { User } from "types/user.types";
import axios, { AxiosResponse } from "axios";

export class UserServices {
  static getAllUsers(): Promise<User[]> {
    return Promise.resolve(require("../mocks/users.json").user as User[]);
  }
}
