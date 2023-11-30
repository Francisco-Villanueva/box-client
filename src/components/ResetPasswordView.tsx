import { BoxLayout, Button, Title } from 'commons'
import React, { FormEvent, useCallback, useState } from 'react'
import { FormInput } from './FormInput'
import { message } from 'antd'
import { useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import { AuthServices } from 'services'

export const ResetPasswordView = observer(function () {
	const {
		users: { findUserByEmail },
	} = useStore()

	const [userData, setUserData] = useState({
		email: '',
	})

	const handleInput = (key: string, value: string) => {
		setUserData((prev) => ({
			...prev,
			[key]: value,
		}))
	}

	const router = useRouter()

	const handleSubmit = useCallback(
		async (event: FormEvent) => {
			event.preventDefault()

			try {
				const userToCheck = findUserByEmail(userData.email)
				if (!userToCheck) {
					return message.error('Credenciales inválidas')
				} else {
					message.success('Email enviado')
					router.push('/login')
				}

				await AuthServices.resetPassword({
					email: userData.email,
				})
			} catch (error) {
				console.error('Error al enviar', error)
				message.error('Credenciales inválidas')
			}
		},
		[userData.email, router, findUserByEmail]
	)

	return (
		<form onSubmit={handleSubmit}>
			<BoxLayout className="bg-white h-[50%]">
				<div className="p-10">
					<Title>Ingresa tu email y te enviaremos las instrucciones</Title>
				</div>
				<div className="p-4  flex flex-col items-center gap-10 ">
					<section className="flex flex-col gap-5 w-full">
						<FormInput
							type="text"
							placeholder="Email"
							reference="email"
							handleInput={handleInput}
							validation="email"
						/>
					</section>
					<section className="flex flex-col items-center w-5/6 pt-3 gap-1">
						<Button
							disabled={Object.values(userData).some((value) => value === '')}
							variant="primary"
							className="w-full mb-2"
							type="submit">
							ENVIAR
						</Button>
					</section>
				</div>
			</BoxLayout>
		</form>
	)
})
