'use client'
import { createContext, useContext } from 'react'
import { types, Instance, SnapshotOut } from 'mobx-state-tree'
import { UserStore } from './user.store'
import { PackageStore } from './packages.store'
import { DateStore } from './date.store'

export const RootStore = types.model({
	users: types.late(() => UserStore),
	packages: types.late(() => PackageStore),
	date: types.late(() => DateStore),
})

export const useStore = () => {
	const store = useContext(RootStoreContext)
	if (!store) {
		throw new Error('useRootStore debe usarse dentro de un RootStoreProvider')
	}
	return store
}

export const RootStoreContext = createContext<Instance<
	typeof RootStore
> | null>(null)
export type RootStoreInstance = Instance<typeof RootStore>
export type RootStoreSnapshot = SnapshotOut<typeof RootStore>
