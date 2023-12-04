import { BoxLayout, Button, Title } from 'commons'
import React, { FormEvent, useCallback, useState } from 'react'
import { FormInput } from './FormInput'
import { message } from 'antd'
import { AuthServices } from 'services'
import { useRouter } from 'next/navigation'

export default function UpdatePasswordView({ resetToken }: any) {
	const [userData, setUserData] = useState({
		password: '',
		confirmPassword: '',
	})

	const handleInput = (key: string, value: string) => {
		setUserData((prev) => ({
			...prev,
			[key]: value,
		}))
	}

	const router = useRouter()

	const handleUpdate = useCallback(
		async (event: FormEvent) => {
			event.preventDefault()

			try {
				const updateData = {
					password: userData.password,
					resetToken,
				}

				console.log('userData ---> ', updateData)

				if (userData.password !== userData.confirmPassword) {
					return message.error('Las contraseñas no coinciden')
				}

				await AuthServices.updatePassword(updateData)
				message.success('Contraseña actualizada')
				router.push('/login')
			} catch (error) {
				console.error('Error al enviar', error)
				message.error('Error al actualizar contraseña')
			}
		},
		[userData.password, userData.confirmPassword]
	)

	return (
		<form onSubmit={handleUpdate}>
			<BoxLayout className="bg-white h-[50%]">
				<div className="pt-10">
					<Title>Ingresa tu nueva contraseña</Title>
				</div>
				<div className="p-4  flex flex-col items-center gap-5 ">
					<section className="flex flex-col w-full">
						<FormInput
							placeholder="Contraseña"
							type="password"
							reference="password"
							handleInput={handleInput}
							validation="password"
							className="my-5"
						/>
						<FormInput
							placeholder="Confirmar Contraseña"
							type="password"
							reference="confirmPassword"
							handleInput={handleInput}
							validation="password"
							className="my-5"
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
}
