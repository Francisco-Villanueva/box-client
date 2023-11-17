import { types } from "mobx-state-tree";
import { UserModel, User } from "../types";

export const UserStore = types
  .model({
    users: types.array(UserModel),
    userId: types.maybe(types.string),
    userLoggedId: types.maybe(types.string),
  })
  .views((store) => ({
    get carriers() {
      return store.users.filter((user) => user.role === "Carrier");
    },
    get admins() {
      return store.users.filter((user) => user.role === "Admin");
    },
    get avaliableCarriers() {
      return store.users.filter(
        (carrier) =>
          carrier.role === "Carrier" && carrier.status === "HABILITADO"
      );
    },
    get selectedCarrier() {
      //RETORNA EL CARRIER SELECCIONADO
      return store.users.find((user) => user._id === store.userId);
    },
    get loggedUser() {
      //RETORNA EL CARRIER SELECCIONADO
      return store.users.find((user) => user._id === store.userLoggedId);
    },
    get selectedCarrierPackages() {
      //RETORNA LOS PACKAGES DE EL CARRIER SELECCIONADO
      const carrier = store.users.find((user) => user._id === store.userId);
      return carrier?.packages;
    },
    get delviredPackagesByCarrier() {
      //RETORNA LOS PACKAGES ENTREGADOS DEL CARRIER SELECCIONADO
      const carrier = store.users.find((user) => user._id === store.userId);

      return carrier?.packages.filter((pack) => pack.status === "ENTREGADO");
    },
    get pendingPackagesByCarrier() {
      //RETORNA LOS PACKAGES PENDIENTES Y EN CURSO DEL CARRIER SELECCIONADO
      const carrier = store.users.find((user) => user._id === store.userId);

      return carrier?.packages.filter((pack) => pack.status !== "ENTREGADO");
    },

    findUserByEmail(email: string) {
      return store.users.find((user) => user.email === email);
    },
    validatePassword(user: User, password: string) {
      return user.password === password;
    },
  }))
  .actions((store) => ({
    //TODO este any tiene que ser User[]
    setUsers(users: any) {
      store.users.push(...users);
    },
    setUserId(userId: string) {
      store.userId = userId;
    },
    setUserLoggedId(userId: string) {
      store.userLoggedId = userId;
    },
  }));
