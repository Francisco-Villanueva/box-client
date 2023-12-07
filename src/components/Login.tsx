import React, { FormEvent, useCallback, useState } from 'react'
import { message } from 'antd'
import { CustomLink, IconBoxLogin, Button, Input } from 'commons'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import { useRouter } from 'next/navigation'
import { AuthServices } from 'services'

export const Login = observer(function () {
	const {
		users: { setUserLoggedId, setUserId, findUserByUserName, setUserLogged },
	} = useStore()

	const [userData, setUserData] = useState({
		user: '',
		password: '',
	})

	const handleInput = (key: string, value: string) => {
		setUserData((prev) => ({
			...prev,
			[key]: value,
		}))
	}

	const router = useRouter()

	const handleLogin = useCallback(
		async (event: FormEvent) => {
			event.preventDefault()

			try {
				const userToCheck = await AuthServices.login({
					user: userData.user,
					password: userData.password,
				})

				if (userToCheck) {
					const { user, accessToken } = userToCheck

					if (user.status === 'DESHABILITADO') {
						message.error(
							`Lo sentimos ${user.name}. Tu usuario se encuentra deshabilitado`
						)
					} else {
						const welcomeMessage = `Bienvenido ${user.name}`
						const redirect = () => {
							localStorage.setItem('USER_TOKEN', accessToken)
							setUserLogged(user)
						}

						if (user.role === 'ADMIN') {
							message.success(welcomeMessage)
							router.push('/admin')
							redirect()
						} else {
							message.success(welcomeMessage)
							router.push('/carrier')
							redirect()
						}
					}
				}
			} catch (error) {
				console.error('Error al loguearse', error)
				message.error('Credenciales inválidas')
			}
		},
		[
			userData.user,
			userData.password,
			router,
			setUserLoggedId,
			setUserId,
			findUserByUserName,
		]
	)

	return (
		<form onSubmit={handleLogin}>
			<div className="w-full h-[60%] rounded-3xl bg-lightGreen flex flex-col justify-center gap-10 pt-8 relative">
				<div className=" absolute w-full  top-[-30px]">
					<IconBoxLogin />
				</div>
				<div className="p-4  flex flex-col items-center gap-10 ">
					<section className="flex flex-col gap-5 w-full">
						<Input
							placeholder="Usuario"
							type="text"
							value={userData.user}
							onChange={(e) => handleInput('user', e.target.value)}
						/>
						<Input
							placeholder="Contraseña"
							type="password"
							value={userData.password}
							onChange={(e) => handleInput('password', e.target.value)}
						/>
					</section>
					<section className="flex flex-col items-center w-5/6 pt-3 gap-1">
						<Button
							disabled={Object.values(userData).some((value) => value === '')}
							variant="primary"
							className="w-full mb-2"
							type="submit">
							INGRESAR
						</Button>
						<Link href={'/register'} className="w-full flex justify-center">
							<Button variant="secondary" className="w-full">
								CREAR CUENTA
							</Button>
						</Link>
						<CustomLink href={'/reset-password'} className="mb-4">
							Olvidé mi contraseña
						</CustomLink>
					</section>
				</div>
			</div>
		</form>
	)
})

// import React, { FormEvent, useCallback, useState } from 'react'
// import { message } from 'antd'
// import { CustomLink, IconBoxLogin, Button } from 'commons'
// import Link from 'next/link'
// import { observer } from 'mobx-react-lite'
// import { useStore } from 'models/root.store'
// import { useRouter } from 'next/navigation'
// import { FormInput } from './FormInput'
// import { AuthServices } from 'services'

// export const Login = observer(function () {
// 	const {
// 		users: { findUserByEmail, validatePassword, setUserLoggedId, setUserId },
// 	} = useStore()

// 	const [userData, setUserData] = useState({
// 		mail: '',
// 		password: '',
// 	})
// 	const handleInput = (key: string, value: string) => {
// 		setUserData((prev) => ({
// 			...prev,
// 			[key]: value,
// 		}))
// 	}
// 	const router = useRouter()

// 	const handleLogin =  useCallback(
// 		async (event: FormEvent) => {
// 			event.preventDefault()

// 			//////////Logica Login
// 			try{
// 				await AuthServices.login({
// 					email: userData.mail,
// 					password: userData.password,

// 				})
// 			}
// 			catch(error){
// 				console.error("Error al loguearse", error)
// 			}
// 			/////////

// 			const userToCheck = findUserByEmail(userData.mail)

// 			if (!userToCheck) {
// 				return message.error('Credenciales inválidas')
// 			}

// 			const isCorrectPassword = validatePassword(userToCheck, userData.password)

// 			if (!isCorrectPassword) {
// 				return message.error('Credenciales inválidas')
// 			}

// 			if (userToCheck.status === 'DESHABILITADO') {
// 				message.error(
// 					`Lo sentimos ${userToCheck.name}. Tu usuario se encuentra deshabilitado`
// 				)
// 			} else if (userToCheck.role === 'ADMIN') {
// 				message.success(`Bienvenido ${userToCheck.name}`)
// 				router.push('/admin')
// 				localStorage.setItem('USER_LOGGED_ID', userToCheck._id)
// 				setUserLoggedId(userToCheck._id)
// 				setUserId(userToCheck._id)
// 			} else {
// 				message.success(`Bienvenido ${userToCheck.name}`)
// 				router.push('/carrier')
// 				localStorage.setItem('USER_LOGGED_ID', userToCheck._id)
// 				setUserLoggedId(userToCheck._id)
// 				setUserId(userToCheck._id)
// 			}
// 		},
// 		[
// 			userData.mail,
// 			userData.password,
// 			router,
// 			setUserLoggedId,
// 			setUserId,
// 			validatePassword,
// 			findUserByEmail,
// 		]
// 	)

// 	return (
// 		<form onSubmit={handleLogin}>
// 			<div className="w-full h-[60%] rounded-3xl bg-lightGreen flex flex-col justify-center gap-10 pt-8 relative">
// 				<div className=" absolute w-full  top-[-30px]">
// 					<IconBoxLogin />
// 				</div>
// 				<div className="p-4  flex flex-col items-center gap-10 ">
// 					<section className="flex flex-col gap-5 w-full">
// 						<FormInput
// 							type="text"
// 							placeholder="Email@ejemplo.com"
// 							reference="mail"
// 							handleInput={handleInput}
// 							validation="email"
// 						/>
// 						<FormInput
// 							placeholder="Contraseña"
// 							type="password"
// 							reference="password"
// 							handleInput={handleInput}
// 						/>
// 					</section>
// 					<section className="flex flex-col items-center w-5/6 pt-3 gap-1">
// 						<Button
// 							disabled={Object.values(userData).some((value) => value === '')}
// 							variant="primary"
// 							className="w-full mb-2"
// 							type="submit">
// 							INGRESAR
// 						</Button>
// 						<Link href={'/register'} className="w-full flex justify-center">
// 							<Button variant="secondary" className="w-full">
// 								CREAR CUENTA
// 							</Button>
// 						</Link>
// 						<CustomLink href={'asdasd'} className="mb-4">
// 							Olvidé mi contraseña
// 						</CustomLink>
// 					</section>
// 				</div>
// 			</div>
// 		</form>
// 	)
// })
