import { Instance, types } from 'mobx-state-tree'

export const PACAKGE_STATUES = [
	'PENDIENTE',
	'EN CURSO',
	'NO ASIGNADO',
	'ENTREGADO',
] as const
export type PackageStatus = (typeof PACAKGE_STATUES)[number]

export const PackageModel = types.model({
	_id: types.string,
	address: types.string,
	clientName: types.string,
	weight: types.number,
	deliverDate: types.string,
	status: types.enumeration(PACAKGE_STATUES),
	isShownToAdmin: types.boolean,
	isShownToCarrier: types.boolean,
})

export type Package = Instance<typeof PackageModel>

export const CreatePackageModel = types.model({
	address: types.string,
	clientName: types.string,
	weight: types.number,
	deliverDate: types.string,
	status: types.enumeration(PACAKGE_STATUES),
	isShownToAdmin: types.boolean,
	isShownToCarrier: types.boolean,
})
export type CreatePackage = Instance<typeof CreatePackageModel>
