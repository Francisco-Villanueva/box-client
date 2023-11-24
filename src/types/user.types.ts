import { Instance, types } from 'mobx-state-tree'
import { PackageModel } from './packages.types'

export const ROLES_TYPES = ['Admin', 'Carrier'] as const
export type Role = (typeof ROLES_TYPES)[number]

export const USER_STATUSES = ['HABILITADO', 'DESHABILITADO'] as const
export type UserStatus = (typeof USER_STATUSES)[number]

export const UserModel = types.model({
	_id: types.string,
	name: types.string,
	lastName: types.string,
	email: types.string,
	password: types.string,
	image: types.string,
	role: types.enumeration(ROLES_TYPES),
	status: types.enumeration(USER_STATUSES),
	packages: types.array(PackageModel),
})

export type User = Instance<typeof UserModel>
