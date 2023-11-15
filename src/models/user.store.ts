import { types } from "mobx-state-tree";
import { UserModel, User } from "../types";

export const UserStore = types
  .model({
    users: types.array(UserModel),
  })
  .views((store) => ({
    get carriersON() {
      return store.users.filter(
        (carrier) =>
          carrier.role === "Carrier" && carrier.status === "HABILITADO"
      );
    },
    get carriers() {
      return store.users.filter((user) => user.role === "Carrier");
    },
    get admins() {
      return store.users.filter((user) => user.role === "Admin");
    },
  }))
  .actions((store) => ({
    //TODO este any tiene que ser User[]
    setUsers(users: any) {
      store.users.push(...users);
    },
  }));
