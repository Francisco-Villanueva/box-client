import { types } from 'mobx-state-tree'
import { PackageModel, Package } from '../types'

export const PackageStore = types
	.model({
		packages: types.array(PackageModel),
		packageId: types.maybe(types.string),
	})
	.views((store) => ({
		get deliveredPackages() {
			// RETORNA LOS PACKAGES QUE FUERON ENTREGADOS
			return store.packages.filter((pack) => pack.status === 'ENTREGADO')
		},
		get currentPackage() {
			// RETORNA LOS PACKAGES QUE FUERON ENTREGADOS
			return store.packages.find((pack) => pack._id === store.packageId)
		},
		get unassignedPackages() {
			// RETORNA LOS PACKAGES QUE NO ESTAN ASSIGANADOS (status = "NO ASIGNADO")
			return store.packages.filter((pack) => pack.status === 'NO ASIGNADO')
		},
		get onDeliverPackages() {
			// RETORNA LOS PACKAGES QUE  ESTAN ASSIGANADOS PERO NO ENTREGADOS
			return store.packages.filter(
				(pack) => pack.status === 'EN CURSO' || pack.status === 'PENDIENTE'
			)
		},
		packagesByDate(packages: Package[], date: string) {
			// TODO: Ver si hacer el filtro con un date string y en el formato YYYY-MM-DD
			return packages.filter((pack) => pack.deliverDate === date)
		},
	}))
	.actions((store) => ({
		setPackages(packages: Package[]) {
			store.packages.replace(packages)
		},
		setPackageId(packId: string) {
			store.packageId = packId
		},
	}))
