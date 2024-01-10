import React, { FormEvent, useCallback, useState } from 'react'
import { message } from 'antd'
import { CustomLink, IconBoxLogin, Button, Input } from 'commons'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { useStore } from 'models/root.store'
import { useRouter } from 'next/navigation'
import { AuthServices, UserServices } from 'services'
import { timeZoneSetter } from 'utils'

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

					const handleLoginSuccess = () => {
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

					if (user.status === 'DESHABILITADO') {
						message.error(
							`Lo sentimos ${user.name}. Tu usuario se encuentra deshabilitado`
						)
					} else if (user.status === 'RECHAZADO') {
						const loginDate = timeZoneSetter(new Date())
						console.log(
							loginDate.getTime() - new Date(user.rejectedDeclarationTime).getTime()
						)

						if (
							loginDate.getTime() - new Date(user.rejectedDeclarationTime).getTime() >
							86400000
						) {
							UserServices.updateUserStatus(user._id, 'HABILITADO')
							handleLoginSuccess()
						} else {
							message.error(
								`Lo sentimos ${user.name}. Tu usuario se encuentra bloqueado por incumplimiento de normas`
							)
						}
					} else {
						handleLoginSuccess()
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
