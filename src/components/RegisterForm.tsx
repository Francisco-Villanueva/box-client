import React, { useState } from 'react'
import { CustomLink, CameraIcon, Button } from 'commons'
import { FormInput } from './FormInput'
import { message } from 'antd'
import { useRouter } from 'next/navigation'
import axiosInstance from '../../axiosConfig'

export function RegisterForm() {
	const [userData, setUserData] = useState({
		name: '',
		lastName: '',
		userName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const router = useRouter()

	const handleInput = (key: string, value: string) => {
		const trimmedValue = value.trim()
		setUserData((prev) => ({
			...prev,
			[key]: trimmedValue,
		}))

		//console.log(userData)
	}

	const handleRegisterForm = async () => {
		const userToRegister = {
			name: userData.name,
			lastName: userData.lastName,
			userName: userData.userName,
			email: userData.email,
			password: userData.password,
		}
		if (Object.values(userData).some((value) => value === '')) {
			return message.error('Completar todos los campos')
		}

		if (userData.password !== userData.confirmPassword) {
			return message.error('Las contraseñas no coinciden')
		}
		console.log('User------', userToRegister)
		try {
			const response = await axiosInstance.post(
				//TODO: Migrar a Services
				'/api/auth/register',
				userToRegister
			)
			console.log('RESPONSE----', response)
			router.push('/login')
			message.success('Usuario creado correctamente')
		} catch (error: any) {
			console.log('ERROR: ', error)
			message.error(`Error al Registrar el usuario: ${error}`)
		}
	}
	return (
		<>
			<div className="bg-white rounded-2xl h-auto">
				<div className="flex justify-center items-center pt-7">
					<div className="bg-lightGrey flex justify-center items-center rounded-3xl w-24 h-24 ">
						<CameraIcon className="h-8" />
					</div>
				</div>
				<section>
					<div className="pl-5 pr-5">
						<FormInput
							type="text"
							placeholder="Nombre"
							reference="name"
							handleInput={handleInput}
							validation="name"
							className="my-5"
						/>
						<FormInput
							type="text"
							placeholder="Apellido"
							reference="lastName"
							handleInput={handleInput}
							validation="name"
							className="my-5"
						/>
						<FormInput
							type="text"
							placeholder="Usuario"
							reference="userName"
							handleInput={handleInput}
							validation="userName"
							className="my-5"
						/>
						<FormInput
							type="text"
							placeholder="Email"
							reference="email"
							handleInput={handleInput}
							validation="email"
							className="my-5"
						/>

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
					</div>
				</section>
				<section className="pt-8 pl-3.5 pr-3.5 flex flex-col items-center pb-6">
					<Button
						variant="primary"
						className="w-full mb-3"
						disabled={Object.values(userData).some((value) => value === '')}
						onClick={handleRegisterForm}>
						CREAR
					</Button>

					<CustomLink href={'/login'}> ¿Ya tenés una cuenta? </CustomLink>
				</section>
			</div>
		</>
	)
}
