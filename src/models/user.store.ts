import { types } from 'mobx-state-tree'
import { UserModel, User } from '../types'

export const UserStore = types
	.model({
		users: types.array(UserModel),
		loggedUser: types.maybe(UserModel),
		userId: types.maybe(types.string),
		userLoggedId: types.maybe(types.string),
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

		get selectedCarrierDeliveredPackages() {
			//RETORNA LOS PAQUETES ENTREGADOS DEL CARRIER SELECCIONADO
			const selectedUser = store.users.find((user) => user._id === store.userId)
			return selectedUser?.packages.filter((pack) => pack.status === 'ENTREGADO')
		},

		get selectedCarrierPendingPackages() {
			//RETORNA LOS PAQUETES PENDIENTES Y EN CURSO DEL CARRIER SELECCIONADO
			const selectedUser = store.users.find((user) => user._id === store.userId)
			return selectedUser?.packages.filter((pack) => pack.status !== 'ENTREGADO')
		},

		get selectedCarrierPackages() {
			//RETORNA LOS PACKAGES DE EL CARRIER LOGUEADO
			return store.loggedUser?.packages
		},
		get loggedUserDeliveredPackages() {
			//RETORNA LOS PACKAGES ENTREGADOS DEL CARRIER LOGUEADO

			return store.loggedUser?.packages.filter(
				(pack) => pack.status === 'ENTREGADO'
			)
		},
		get loggedUserPendingPackages() {
			//RETORNA LOS PACKAGES PENDIENTES Y EN CURSO DEL CARRIER LOGUEADO

			return store.loggedUser?.packages.filter(
				(pack) => pack.status !== 'ENTREGADO'
			)
		},

		findUserByEmail(email: string) {
			return store.users.find((user) => user.email === email)
		},

		findUserByUserName(userName: string) {
			return store.users.find((user) => user.userName === userName)
		},
	}))
	.actions((store) => ({
		setUsers(users: User[]) {
			store.users.replace(users)
		},
		setUserLogged(user: User) {
			store.loggedUser = user
		},
		setUserId(userId: string) {
			store.userId = userId
		},
		setUserLoggedId(userId: string) {
			store.userLoggedId = userId
		},
	}))
