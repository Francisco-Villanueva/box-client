import { types } from 'mobx-state-tree'
import { UserModel, User, Package } from '../types'

export const UserStore = types
	.model({
		users: types.array(UserModel),
		userId: types.maybe(types.string),
		userLoggedId: types.maybe(types.string),
		pendingPack_ID: types.array(types.string),
		historyPack_ID: types.array(types.string),
	})
	.views((store) => ({
		get carriers() {
			return store.users.filter((user) => user.role === 'CARRIER')
		},
		get admins() {
			return store.users.filter((user) => user.role === 'ADMIN')
		},
		get avaliableCarriers() {
			return store.users.filter(
				(carrier) => carrier.role === 'CARRIER' && carrier.status === 'HABILITADO'
			)
		},
		get selectedCarrier() {
			//RETORNA EL CARRIER SELECCIONADO
			return store.users.find((user) => user._id === store.userId)
		},
		get loggedUser() {
			//RETORNA EL CARRIER SELECCIONADO
			return store.users.find((user) => user._id === store.userLoggedId)
		},
		get selectedCarrierPackages() {
			//RETORNA LOS PACKAGES DE EL CARRIER SELECCIONADO
			const carrier = store.users.find((user) => user._id === store.userId)
			return carrier?.packages
		},
		get delviredPackagesByCarrier() {
			//RETORNA LOS PACKAGES ENTREGADOS DEL CARRIER SELECCIONADO
			const carrier = store.users.find((user) => user._id === store.userId)

			return carrier?.packages.filter(
				(pack) =>
					pack.status === 'ENTREGADO' &&
					!store.historyPack_ID.some((id) => id === pack._id)
			)
		},
		get pendingPackagesByCarrier() {
			//RETORNA LOS PACKAGES PENDIENTES Y EN CURSO DEL CARRIER SELECCIONADO
			const carrier = store.users.find((user) => user._id === store.userId)

			return carrier?.packages.filter(
				(pack) =>
					pack.status !== 'ENTREGADO' &&
					!store.pendingPack_ID.some((id) => id === pack._id)
			)
		},

		findUserByEmail(email: string) {
			return store.users.find((user) => user.email === email)
		},

		findUserByUserName(userName: string) {
			return store.users.find((user) => user.userName === userName)
		},

		validatePassword(user: User, password: string) {
			return user.password === password
		},
	}))
	.actions((store) => ({
		setUsers(users: User[]) {
			store.users.push(...users)
		},
		setUserId(userId: string) {
			store.userId = userId
		},
		setUserLoggedId(userId: string) {
			store.userLoggedId = userId
		},
		deletePendingPackage(packId: string) {
			store.pendingPack_ID.push(packId)
		},
		deleteHistoryPackages(packId: string) {
			store.historyPack_ID.push(packId)
		},
		addPackage(pack: Package) {
			const user = store.loggedUser
			user?.packages.push(pack)
		},
	}))
