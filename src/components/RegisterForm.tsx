import React, { useState } from 'react'
import { CustomLink, CameraIcon, Button } from 'commons'
import { FormInput } from './FormInput'
import { message, Input } from 'antd'
import { useRouter } from 'next/navigation'
import { AxiosError } from 'axios'
import { AuthServices } from 'services'

export function RegisterForm() {
	const [userData, setUserData] = useState({
		name: '',
		lastName: '',
		userName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const [imageInputVisible, setImageInputVisible] = useState(false)
	const [profileImageUrl, setProfileImageUrl] = useState('')

	const router = useRouter()

	const handleInput = (key: string, value: string) => {
		const trimmedValue = value.trim()
		setUserData((prev) => ({
			...prev,
			[key]: trimmedValue,
		}))
	}

	const handleImageInput = async () => {
		const inputElement = document.createElement('input')
		inputElement.type = 'file'

		// Simula el clic en el nuevo input para abrir el selector de archivos. Sin esto salta error en el handleInput
		inputElement.click()

		inputElement.addEventListener('change', async (e) => {
			const file = (e.target as HTMLInputElement)?.files?.[0]

			if (file) {
				try {
					const imageUrl = await AuthServices.uploadImage(file)
					setProfileImageUrl(imageUrl)
					setImageInputVisible(false)
				} catch (error) {
					console.error('Error al cargar la imagen: ', error)
				}
			}
		})
	}

	const handleImageClick = async () => {
		// Cuando se hace clic en la imagen, muestra nuevamente el input de archivo
		setProfileImageUrl('')
	}

	const handleRegisterForm = async () => {
		const userToRegister = {
			name: userData.name,
			lastName: userData.lastName,
			userName: userData.userName,
			email: userData.email,
			password: userData.password,
			image: profileImageUrl,
		}
		if (Object.values(userData).some((value) => value === '')) {
			return message.error('Completar todos los campos')
		}

		if (userData.password !== userData.confirmPassword) {
			return message.error('Las contraseñas no coinciden')
		}

		try {
			await AuthServices.register(userToRegister)
			router.push('/login')
			message.success('Usuario creado correctamente')
		} catch (error: unknown) {
			console.error(
				error instanceof AxiosError ? 'ERROR: ' : 'Error inesperado',
				error
			)
			message.error(
				`Error al registar el usuario: ${
					error instanceof AxiosError ? error : 'Error desconocido'
				}`
			)
		}
	}
	return (
		<>
			<div className="bg-white rounded-2xl h-auto">
				<div
					className="flex justify-center items-center pt-7"
					onClick={handleImageClick}>
					{profileImageUrl ? (
						<img
							src={profileImageUrl}
							alt="Profile"
							className="h-28 cursor-pointer"
						/>
					) : (
						<div className="bg-lightGrey flex justify-center items-center rounded-3xl w-24 h-24">
							<CameraIcon className="h-8" onClick={handleImageInput} />
						</div>
					)}
				</div>
				<div className="pl-5 pr-5">
					{imageInputVisible && (
						<Input
							type="file"
							accept="image/*"
							onChange={handleImageInput}
							className="my-5"
						/>
					)}
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
