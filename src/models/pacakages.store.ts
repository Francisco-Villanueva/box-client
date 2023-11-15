import { types } from "mobx-state-tree";
import { PackageModel, Package } from "../types";

export const PackageStore = types
  .model({
    packages: types.array(PackageModel),
  })
  .views((store) => ({
    get entregados() {
      return store.packages.filter((pack) => pack.status === "ENTREGADO");
    },
  }))
  .actions((store) => ({
    //TODO este any tiene que ser Package[]
    setPackages(packages: any) {
      store.packages.push(...packages);
    },
  }));
