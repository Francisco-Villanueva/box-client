import { useRouter } from 'next/navigation'
import { AuthServices } from 'services'

export const useValidateUser = async (role: string) => {
	const router = useRouter()
	try {
		const token = localStorage.getItem('USER_TOKEN')
		let user
		if (token) {
			user = await AuthServices.me(token)
		}

		if (user?.data.role !== role) {
			router.push('/not-found')
		}
	} catch (err) {
		console.error(err)
	}
}
