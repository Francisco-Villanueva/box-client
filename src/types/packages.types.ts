import { Instance, types } from "mobx-state-tree";

export const PACAKGE_STATUES = [
  "PENDIENTE",
  "EN CURSO",
  "unassigned",
  "ENTREGADO",
] as const;
export type PackageStatus = (typeof PACAKGE_STATUES)[number];

export const PackageModel = types.model({
  _id: types.string,
  address: types.string,
  clientName: types.string,
  weight: types.number,
  deliverDate: types.string,
  status: types.enumeration(PACAKGE_STATUES),
});

export type Package = Instance<typeof PackageModel>;
