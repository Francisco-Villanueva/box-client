'use client'
import { Login } from 'components'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { AuthServices } from 'services'

export default function LoginPage() {
	const router = useRouter()
	useEffect(() => {
		const fetchUser = async (token: string) => {
			const user = await AuthServices.me(token)
			return user
		}

		const redirectUser = async () => {
			const token = localStorage.getItem('USER_TOKEN')
			if (token) {
				const user = await fetchUser(token)
				user.data.role === 'CARRIER'
					? router.push('/carrier')
					: router.push('/admin')
			}
		}

		redirectUser()
	})

	return (
		<div className="pt-[27vh] xl:pt-[10%] bg-darkGreen bg-cover bg-center bg-no-repeat bg-[url(../../public/backgroundBox.svg)] h-screen w-full px-10  ">
			<Login />
		</div>
	)
}
