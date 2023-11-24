import React, { useState } from 'react'
import { CustomLink, CameraIcon, Button } from 'commons'
import { FormInput } from './FormInput'
import Link from 'next/link'
import { message } from 'antd'

export function RegisterForm() {
	const [userData, setUserData] = useState({
		name: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const handleInput = (key: string, value: string, error: string) => {
		setUserData((prev) => ({
			...prev,
			[key]: value,
			[`${key}Error`]: error,
		}))

		console.log(error)
		console.log(userData)
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
					<Link href={'/login'} className="w-full flex justify-center">
						<Button
							variant="primary"
							className="w-full mb-3"
							// disabled={}
							onClick={() => message.success('Cuenta creada exitosamente')}>
							CREAR
						</Button>
					</Link>
					<CustomLink href={'/login'}> ¿Ya tenés una cuenta? </CustomLink>
				</section>
			</div>
		</>
	)
}
