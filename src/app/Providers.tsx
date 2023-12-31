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
		// TODD: Determinar estas peticiones solo si es admin el user logged

		const users = await UserServices.getAllUsers()
		store.users.setUsers(users)

		const packages = await PackageServices.getAllPackages()
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
			AuthServices.me(USER_TOKEN).then((res) => {
				const user = res.data
				UserServices.getUserById(user._id).then((userRes) => {
					store.users.setUserLogged({ ...userRes.data })
				})
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
