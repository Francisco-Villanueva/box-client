import { Instance, types } from 'mobx-state-tree'
import { PackageModel } from './packages.types'

export const ROLES_TYPES = ['ADMIN', 'CARRIER'] as const
export type Role = (typeof ROLES_TYPES)[number]

export const USER_STATUSES = [
	'HABILITADO',
	'DESHABILITADO',
	'RECHAZADO',
] as const
export type UserStatus = (typeof USER_STATUSES)[number]

export const UserModel = types.model({
	_id: types.string,
	name: types.string,
	lastName: types.string,
	userName: types.string,
	email: types.string,
	image: types.maybe(types.string),
	role: types.enumeration(ROLES_TYPES),
	status: types.enumeration(USER_STATUSES),
	rejectedDeclarationTime: types.maybe(types.string),
	packages: types.array(PackageModel),
})
export const SingleUserModel = types.model({
	_id: types.string,
	name: types.string,
	lastName: types.string,
	email: types.string,
	image: types.maybe(types.string),
	userName: types.string,
	role: types.enumeration(ROLES_TYPES),
	status: types.enumeration(USER_STATUSES),
	rejectedDeclarationTime: types.maybe(types.string),
	packages: types.array(PackageModel),
})

export type SingleUser = Instance<typeof SingleUserModel>
export type User = Instance<typeof UserModel>
