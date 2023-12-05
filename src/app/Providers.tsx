'use client'
import { RootStore, RootStoreContext } from 'models/root.store'
import { ReactNode, useCallback, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'
import { AuthServices, PackageServices, UserServices } from 'services'

type ProvidersProps = {
	children: ReactNode
}
export default observer(function Providers({ children }: ProvidersProps) {
	const store = RootStore.create({
		users: {},
		packages: {},
		date: { date: new Date() },
	})

	const setData = useCallback(async () => {
		// PUNTO DE 'HIDRATACION': aca es donde hidratamos al root store (store) con los services. Se carga con el backend.

		const users = await UserServices.getAllUsers()
		// console.log(users)
		store.users.setUsers(users)

		const packages = await PackageServices.getAllPackages()
		// console.log(packages)
		store.packages.setPackages(packages)
	}, [store])

	const router = useRouter()
	const pathname = usePathname()

	const loginValidations = () => {
		const USER_TOKEN = localStorage.getItem('USER_TOKEN') || ''
		const excludedRoutes = [
			'/register',
			'/reset-password',
			'/reset-password/[resetToken]',
		]

		if (excludedRoutes.some((route) => pathname.startsWith(route))) {
			return
		}

		//TODO REVISAR ESTO:
		if (!USER_TOKEN) {
			router.push('/login')
		} else {
			console.log(typeof USER_TOKEN, USER_TOKEN)

			AuthServices.me(USER_TOKEN).then((res) => {
				const user = res.data
				store.users.setUserLogged({ ...user })
			})
		}
	}
	useEffect(() => {
		if (!store.users.users.length) {
			setData()
		}
		loginValidations()
	}, [store])

	return (
		<RootStoreContext.Provider value={store}>
			{children}
		</RootStoreContext.Provider>
	)
})
